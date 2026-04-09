import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cloudinaryPkg = require('cloudinary');
const cloudinary = cloudinaryPkg.v2;

import { supabase } from './supabase.js';

// ✅ CORRECCIÓN: Usamos el helper de Astro que configuraste
import { 
    CLOUDINARY_CLOUD_NAME, 
    CLOUDINARY_API_KEY, 
    CLOUDINARY_API_SECRET 
} from 'astro:env/server';

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true
});

// Log de verificación (ahora debería dar true, true, true)
console.log('Config de Cloudinary cargada:', {
    name: !!CLOUDINARY_CLOUD_NAME,
    key: !!CLOUDINARY_API_KEY,
    secret: !!CLOUDINARY_API_SECRET
});

async function obtenerFotos(tag) {
    if (!tag) return [];
    try {
        console.log('Buscando tag en Cloudinary:', tag);
        const { resources } = await cloudinary.api.resources_by_tag(tag, {
            max_results: 12
        });
        return resources.map(file => file.secure_url);
    } catch (e) {
        console.error('Error detallado de Cloudinary:', e);
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
