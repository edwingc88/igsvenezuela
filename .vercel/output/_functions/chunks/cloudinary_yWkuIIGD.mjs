import { createRequire } from 'module';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://fxoatifoyteqjigrupxo.supabase.co",
  "sb_publishable_nFsB3kGtWZcxlXBnSs_dpw_YQyGvX1x"
);

const require$1 = createRequire(import.meta.url);
const cloudinaryPkg = require$1("cloudinary");
const cloudinary = cloudinaryPkg.v2;
cloudinary.config({
  cloud_name: "dw8vwxxd7",
  api_key: "164853775231274",
  api_secret: "GkOQNT9nvKy3juPiIEc7ZZc0bhw"
});
async function obtenerFotos(tag) {
  try {
    console.log("Buscando tag:", tag);
    const { resources } = await cloudinary.api.resources_by_tag(tag, {
      max_results: 12
    });
    console.log("Recursos encontrados:", resources.length);
    return resources.map((file) => file.secure_url);
  } catch (e) {
    console.log("Error Cloudinary completo:", JSON.stringify(e));
    return [];
  }
}
async function getGalerias() {
  const { data, error } = await supabase.from("galerias").select("*").order("fecha", { ascending: false });
  if (error || !data) return [];
  return await Promise.all(
    data.map(async (g) => ({
      id: g.id,
      autor: g.autor,
      titulo: g.titulo,
      categoria: g.categoria,
      categoriaColor: g.categoria_color,
      fecha: new Date(g.fecha).toLocaleDateString("es-ES", { dateStyle: "long" }),
      imagenes: await obtenerFotos(g.cloudinary_tag)
    }))
  );
}

export { getGalerias as g };
