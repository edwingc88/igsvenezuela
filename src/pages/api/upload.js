import { createRequire } from 'module';
import { Buffer } from 'node:buffer';
const require = createRequire(import.meta.url);
const cloudinaryPkg = require('cloudinary');
const cloudinary = cloudinaryPkg.v2;

import { supabaseServer } from '../../lib/supabaseServer.js';
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

function uploadBufferToCloudinary({ buffer, filename, folder, tags, context }) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        tags,
        context,
        filename_override: filename,
        use_filename: true,
        unique_filename: true,
        resource_type: 'image',
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      },
    );
    stream.end(buffer);
  });
}

export async function POST({ request }) {
  try {
    const form = await request.formData();

    const autor = String(form.get('autor') ?? '').trim();
    const titulo = String(form.get('titulo') ?? '').trim();
    const categoria = String(form.get('categoria') ?? '').trim();
    const files = form.getAll('files').filter(Boolean);

    if (!autor || !titulo || !categoria) {
      return new Response(JSON.stringify({ error: 'Faltan campos requeridos.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!files.length) {
      return new Response(JSON.stringify({ error: 'No se recibieron imágenes.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 1) Crear registro en Supabase para obtener ID
    const { data: created, error: insertError } = await supabaseServer
      .from('galerias')
      .insert({
        autor,
        titulo,
        categoria,
        categoria_color: 'text-orange-600 bg-orange-50',
        cloudinary_tag: 'pending',
      })
      .select('*')
      .single();

    if (insertError || !created) {
      console.error('[Upload] Supabase insert error', insertError);
      return new Response(JSON.stringify({ error: 'Error creando galería.', details: insertError }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const tag = `galeria-${created.id}`;

    // 2) Subir imágenes a Cloudinary con tag
    const uploaded = await Promise.all(
      files.map(async (file) => {
        if (!(file instanceof File)) return null;
        const ab = await file.arrayBuffer();
        const buffer = Buffer.from(ab);
        const res = await uploadBufferToCloudinary({
          buffer,
          filename: file.name,
          folder: 'iglesia',
          tags: [tag],
          context: {
            alt: titulo,
            caption: `${autor} - ${categoria}`,
          },
        });
        return res?.secure_url ?? null;
      }),
    );

    const imagenes = uploaded.filter(Boolean);

    // 3) Guardar el tag en Supabase (match para getGalerias)
    const { error: updateError } = await supabaseServer
      .from('galerias')
      .update({ cloudinary_tag: tag })
      .eq('id', created.id);

    if (updateError) {
      console.error('[Upload] Supabase update error', updateError);
      return new Response(JSON.stringify({ error: 'Error actualizando tag.', details: updateError }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({
        ok: true,
        galeria: {
          id: created.id,
          autor,
          titulo,
          categoria,
          categoriaColor: 'text-orange-600 bg-orange-50',
          cloudinary_tag: tag,
          imagenes,
        },
      }),
      { headers: { 'Content-Type': 'application/json' } },
    );
  } catch (e) {
    console.error('[Upload] Unhandled error', e);
    return new Response(JSON.stringify({ error: 'Upload falló.', details: String(e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

