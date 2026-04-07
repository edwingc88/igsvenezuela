import { v2 as cloudinary } from 'cloudinary';
import type { Galeria } from '../types/galeria';

cloudinary.config({
    cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
    api_key: import.meta.env.CLOUDINARY_API_KEY,
    api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

const CONFIG_CATEGORIAS: Record<string, { color: string; folder: string }> = {
    'Servicio General':       { color: 'text-slate-600 bg-slate-50',   folder: 'iglesia/servicio-general' },
    'Domingo de Celebración': { color: 'text-red-600 bg-red-50',       folder: 'iglesia/domingo-celebracion' },
    'Martes de Intercesión':  { color: 'text-purple-600 bg-purple-50', folder: 'iglesia/martes-intercesion' },
    'Jueves de Fe y Poder':   { color: 'text-blue-600 bg-blue-50',     folder: 'iglesia/jueves-fe-poder' },
    'Servicio de Jóvenes':    { color: 'text-green-600 bg-green-50',   folder: 'iglesia/jovenes' }
};

async function obtenerFotos(folderPath: string): Promise<string[]> {
    try {
        const { resources } = await cloudinary.api.resources({
            type: 'upload',
            prefix: folderPath,
            max_results: 12
        });
        return resources.map((file: { secure_url: string }) => file.secure_url);
    } catch (e) {
        return [];
    }
}

export const galerias: Galeria[] = await Promise.all(
    Object.entries(CONFIG_CATEGORIAS).map(async ([nombre, info], index) => ({
        id: index + 1,
        categoria: nombre,
        categoriaColor: info.color,
        titulo: nombre,
        autor: 'Ministerio de Media',
        fecha: 'Actualizado recientemente',
        imagenes: await obtenerFotos(info.folder)
    }))
);

// Datos locales como fallback mientras no hay imágenes en Cloudinary
/* const GALERIAS_LOCALES = [
    {
        id: 1,
        autor: 'Familia Rodriguez',
        categoria: 'Obra Social',
        categoriaColor: 'text-orange-600 bg-orange-50',
        titulo: 'Jornada de Alimentos en Petare',
        fecha: 'Hace 2 días',
        imagenes: [
            'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800',
        ]
    },
    {
        id: 2,
        autor: 'Hno. Gabriel M.',
        categoria: 'Cultos Dominicales',
        categoriaColor: 'text-blue-600 bg-blue-50',
        titulo: 'Domingo de Resurrección',
        fecha: 'Hace 1 semana',
        imagenes: [
            'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1478147427282-58a87a433b2a?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
        ]
    },
    {
        id: 3,
        autor: 'Ministerio Juvenil IGS',
        categoria: 'Ministerio Juvenil',
        categoriaColor: 'text-green-600 bg-green-50',
        titulo: 'Retiro Juvenil en los Andes',
        fecha: 'Hace 3 días',
        imagenes: [
            'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800',
        ]
    }
]; */

// Si Cloudinary falla, usa los datos locales
/* async function obtenerFotos(folderPath: string): Promise<string[]> {
    try {
        const { resources } = await cloudinary.api.resources({
            type: 'upload',
            prefix: folderPath,
            max_results: 12
        });
        return resources.map((file: { secure_url: string }) => file.secure_url);
    } catch (e) {
        return [];
    }
}
 */
