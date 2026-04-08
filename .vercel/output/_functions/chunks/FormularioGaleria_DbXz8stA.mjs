import { c as createComponent } from './astro-component_4Ot1I3MR.mjs';
import 'piccolore';
import { n as createRenderInstruction, m as maybeRenderHead, r as renderTemplate } from './entrypoint_CZWiftF3.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$FormularioGaleria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="churchForm" class="space-y-6"> <div class="grid md:grid-cols-2 gap-4"> <div> <label class="block text-sm font-bold text-orange-900 mb-2" for="nombre">Publicado por:</label> <input type="text" id="nombre" placeholder="Tu nombre o familia" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 outline-none transition" required> </div> <div> <label class="block text-sm font-bold text-orange-900 mb-2" for="categoria">Categoría</label> <select id="categoria" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 outline-none transition bg-white"> <option>General</option> <option>Martes de Intersecion y alabanza</option> <option>Jueves de Fe y Poder</option> <option>Domingo de Celebracion</option> <option>Servicio de Juvenil</option> <option>Servicio Especial</option> </select> </div> </div> <div> <label class="block text-sm font-bold text-orange-900 mb-2" for="titulo">Título de la Galería</label> <input type="text" id="titulo" placeholder="Ej: Fotos del Bautizo" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 outline-none transition" required> </div> <div> <label class="block text-sm font-bold text-orange-900 mb-2">Selecciona tus fotos (pueden ser varias)</label> <div id="drop-area" class="drop-zone relative rounded-2xl flex flex-col items-center justify-center cursor-pointer overflow-hidden bg-gray-50"> <input type="file" id="foto" class="hidden" accept="image/*" multiple> <div id="modal-preview-grid" class="flex flex-wrap gap-2 p-4"> <!-- Aquí se cargarán las miniaturas --> </div> <div id="modal-preview-info" class="text-center py-10"> <i class="fas fa-images text-5xl text-orange-200 mb-4"></i> <p class="text-gray-400 font-medium px-4">Haz clic para elegir una o varias fotos</p> </div> </div> </div> <button type="submit" class="w-full btn-church text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center space-x-2"> <span>Publicar Galería en el Muro</span> <i class="fas fa-th"></i> </button> </form> ${renderScript($$result, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/components/FormularioGaleria.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/components/FormularioGaleria.astro", void 0);

export { $$FormularioGaleria as $, renderScript as r };
