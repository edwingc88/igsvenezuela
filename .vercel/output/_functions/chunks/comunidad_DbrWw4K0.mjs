import { c as createComponent } from './astro-component_4Ot1I3MR.mjs';
import 'piccolore';
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead, u as unescapeHTML } from './entrypoint_CZWiftF3.mjs';
import { r as renderScript, $ as $$FormularioGaleria } from './FormularioGaleria_DbXz8stA.mjs';
import { g as getGalerias } from './cloudinary_yWkuIIGD.mjs';
import { $ as $$Layout } from './Layout_DCGj5Ogq.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ComunidadHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ComunidadHero;
  const galerias = await getGalerias();
  return renderTemplate(_a || (_a = __template(['<!-- Bridge servidor → cliente --><script id="galeria-data" type="application/json">', "<\/script> <!-- Modal Formulario -->", '<div id="uploadModal" class="modal-overlay fixed inset-0 z-60  hidden items-center justify-center p-4"> <div class="bg-white w-full max-w-2xl rounded-4xl shadow-2xl relative"> <button id="btn-cerrar-modal" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-orange-900 transition text-xl font-bold">\n&times;\n</button> <div class="p-8 md:p-10"> <h2 class="text-2xl font-bold text-orange-900 mb-2">Compartir Galería</h2> <p class="text-sm text-gray-500 mb-8">Sube tus fotos para que toda la congregación pueda verlas.</p> ', ' </div> </div> </div> <!-- PÁGINA: COMUNIDAD --> <main id="page-comunidad" class="page-content py-20 px-6"> <div class="max-w-5xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-4xl font-bold text-orange-900 italic">Muro de Comunidad</h2> <p class="text-gray-500 mt-2 pb-4">Momentos capturados por nuestra familia.</p> <a href="#" id="btn-subir-fotos" class="btn-church px-6 py-2 rounded-full shadow-lg hover:bg-orange-600 hover:translate-y-0.5 transition cursor-pointer">\nSubir Fotos\n</a> </div> <!-- Galería renderizada por JS --> <div id="posts-container" class="space-y-16"></div> <!-- Paginación --> <div class="mt-20 flex justify-center items-center space-x-3"> <button class="w-12 h-12 rounded-2xl border border-orange-100 flex items-center justify-center text-orange-900 hover:bg-orange-50 transition">&#8249;</button> <button class="w-12 h-12 rounded-2xl bg-orange-800 text-white font-bold">1</button> <button class="w-12 h-12 rounded-2xl border border-orange-100 flex items-center justify-center text-orange-900 hover:bg-orange-50 transition font-bold">2</button> <button class="w-12 h-12 rounded-2xl border border-orange-100 flex items-center justify-center text-orange-900 hover:bg-orange-50 transition">&#8250;</button> </div> </div> </main>  ', ""])), unescapeHTML(JSON.stringify(galerias)), maybeRenderHead(), renderComponent($$result, "FormularioGaleria", $$FormularioGaleria, {}), renderScript($$result, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/sections/ComunidadHero.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/sections/ComunidadHero.astro", void 0);

const $$Comunidad = createComponent(($$result, $$props, $$slots) => {
  const title = "Tu Acordes Cristianos";
  const description = "Encuentra acordes, letras y diagramas para guitarra y piano de tus canciones cristianas favoritas";
  const canonical = "https://www.infolavelada.com/";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "canonical": canonical }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ComunidadHero", $$ComunidadHero, {})} ` })}`;
}, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/pages/comunidad.astro", void 0);

const $$file = "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/pages/comunidad.astro";
const $$url = "/comunidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Comunidad,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
