import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cloudinaryPkg = require('cloudinary');
const cloudinary = cloudinaryPkg.v2;

import { supabase } from './supabase.js';

cloudinary.config({
    cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME ?? process.env.CLOUDINARY_CLOUD_NAME,
    api_key: import.meta.env.CLOUDINARY_API_KEY ?? process.env.CLOUDINARY_API_KEY,
    api_secret: import.meta.env.CLOUDINARY_API_SECRET ?? process.env.CLOUDINARY_API_SECRET,
    secure: true
});


// Agregamos este log temporal para depurar (quítalo después de arreglarlo)
console.log('Config de Cloudinary:', {
    name: !!process.env.CLOUDINARY_CLOUD_NAME,
    key: !!process.env.CLOUDINARY_API_KEY,
    secret: !!process.env.CLOUDINARY_API_SECRET
});


async function obtenerFotos(tag) {
    if (!tag) return []; // Evita llamadas innecesarias si el tag está vacío
    try {
        console.log('Buscando tag:', tag);
        const { resources } = await cloudinary.api.resources_by_tag(tag, {
            max_results: 12
        });
        return resources.map(file => file.secure_url);
    } catch (e) {
        // Log detallado para depuración en el panel de Vercel
        console.error('Error Cloudinary:', e.message || e);
        return [];
    }
}

export async function getGalerias() {
    const { data, error } = await supabase
        .from('galerias')
        .select('*')
        .order('fecha', { ascending: false });

    if (error || !data) {
        console.error('Error Supabase:', error);
        return [];
    }

    // Usamos Promise.all para ejecutar las búsquedas de fotos en paralelo
    return await Promise.all(
        data.map(async (g) => ({
            id: g.id,
            autor: g.autor,
            titulo: g.titulo,
            categoria: g.categoria,
            categoriaColor: g.categoria_color,
            fecha: new Date(g.fecha).toLocaleDateString('es-ES', { dateStyle: 'long' }),
            imagenes: await obtenerFotos(g.cloudinary_tag)
        }))
    );
}
