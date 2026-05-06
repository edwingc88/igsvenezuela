import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cloudinaryPkg = require('cloudinary');
const cloudinary = cloudinaryPkg.v2;

import { supabaseServer } from '../../../lib/supabaseServer.js';
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from 'astro:env/server';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

export async function DELETE({ params }) {
  const id = params?.id;
  if (!id) {
    return new Response(JSON.stringify({ error: 'Falta el ID de galería.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { data: gallery, error: fetchError } = await supabaseServer
    .from('galerias')
    .select('cloudinary_tag')
    .eq('id', id)
    .single();

  if (fetchError) {
    console.error('[Delete Gallery] Supabase fetch error', fetchError);
    return new Response(JSON.stringify({ error: 'No se pudo obtener la galería.', details: fetchError }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!gallery) {
    return new Response(JSON.stringify({ error: 'Galería no encontrada.' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const tag = gallery.cloudinary_tag;
  if (tag) {
    try {
      await cloudinary.api.delete_resources_by_tag(tag, { resource_type: 'image' });
      console.log('[Delete Gallery] Cloudinary deleted resources for', tag);
    } catch (cloudError) {
      console.error('[Delete Gallery] Cloudinary delete error', cloudError);
      return new Response(JSON.stringify({ error: 'Error eliminando imágenes en Cloudinary.', details: String(cloudError) }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  const { error: deleteError } = await supabaseServer
    .from('galerias')
    .delete()
    .eq('id', id);

  if (deleteError) {
    console.error('[Delete Gallery] Supabase delete error', deleteError);
    return new Response(JSON.stringify({ error: 'Error eliminando galería.', details: deleteError }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
