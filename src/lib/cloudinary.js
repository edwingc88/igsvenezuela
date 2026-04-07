import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cloudinaryPkg = require('cloudinary');
const cloudinary = cloudinaryPkg.v2;

import { supabase } from './supabase.js';

cloudinary.config({
    cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
    api_key: import.meta.env.CLOUDINARY_API_KEY,
    api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

// resto del código igual...

async function obtenerFotos(tag) {
    try {
        console.log('Buscando tag:', tag);
        const { resources } = await cloudinary.api.resources_by_tag(tag, {
            max_results: 12
        });
        console.log('Recursos encontrados:', resources.length);
        return resources.map(file => file.secure_url);
    } catch (e) {
        console.log('Error Cloudinary completo:', JSON.stringify(e));
        return [];
    }
}


export async function getGalerias() {
    const { data, error } = await supabase
        .from('galerias')
        .select('*')
        .order('fecha', { ascending: false });

    if (error || !data) return [];

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
