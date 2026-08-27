import { createRequire } from 'module';
import { createClient } from '@supabase/supabase-js';
import { a as CLOUDINARY_API_SECRET, C as CLOUDINARY_API_KEY, b as CLOUDINARY_CLOUD_NAME } from './server_DVPk31C2.mjs';

const supabaseUrl = "https://fxoatifoyteqjigrupxo.supabase.co";
const supabaseAnonKey = "sb_publishable_nFsB3kGtWZcxlXBnSs_dpw_YQyGvX1x";
console.log("🔍 Supabase URL:", "✅ Presente" );
console.log("🔍 Supabase Anon Key:", "✅ Presente" );
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const require$1 = createRequire(import.meta.url);
const cloudinaryPkg = require$1('cloudinary');
const cloudinary = cloudinaryPkg.v2;

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

async function getGalerias() {
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

export { getGalerias as g };
