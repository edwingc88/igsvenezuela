import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
    api_key: import.meta.env.CLOUDINARY_API_KEY,
    api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

// Mapa de categorías a carpetas de Cloudinary
const CATEGORIAS = {
    'Servicio General':       { color: 'text-slate-600 bg-slate-50',   folder: 'iglesia/servicio-general' },
    'Domingo de Celebración': { color: 'text-red-600 bg-red-50',       folder: 'iglesia/domingo-celebracion' },
    'Martes de Intercesión':  { color: 'text-purple-600 bg-purple-50', folder: 'iglesia/martes-intercesion' },
    'Jueves de Fe y Poder':   { color: 'text-blue-600 bg-blue-50',     folder: 'iglesia/jueves-fe-poder' },
    'Servicio de Jóvenes':    { color: 'text-green-600 bg-green-50',   folder: 'iglesia/jovenes' }
};

// Usuarios ficticios — reemplazar por Supabase en el futuro
const USUARIOS = [
    {
        id: 1,
        autor: 'Familia Rodriguez',
        titulo: 'Jornada de Alimentos en Petare',
        fecha: 'Hace 2 días',
        categoria: 'Servicio General'
    },
    {
        id: 2,
        autor: 'Hno. Gabriel M.',
        titulo: 'Domingo de Resurrección',
        fecha: 'Hace 1 semana',
        categoria: 'Domingo de Celebración'
    }
];

async function obtenerFotos(folderPath) {
    try {
        const { resources } = await cloudinary.api.resources({
            type: 'upload',
            prefix: folderPath,
            max_results: 12
        });
        return resources.map(file => file.secure_url);
    } catch (e) {
        return [];
    }
}

export const galerias = await Promise.all(
    USUARIOS.map(async (usuario) => {
        const cat = CATEGORIAS[usuario.categoria];
        return {
            id: usuario.id,
            autor: usuario.autor,
            titulo: usuario.titulo,
            fecha: usuario.fecha,
            categoria: usuario.categoria,
            categoriaColor: cat.color,
            imagenes: await obtenerFotos(cat.folder)
        };
    })
);
