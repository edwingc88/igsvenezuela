import { c as createComponent } from './astro-component_DU_a3G6y.mjs';
import 'piccolore';
import { l as createRenderInstruction, r as maybeRenderHead, w as renderTemplate, j as addAttribute, t as renderComponent, u as renderHead, v as renderSlot } from './entrypoint_DdLTSici.mjs';
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

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Footer Reforzado (Versión Completa) -->${maybeRenderHead()}<footer class="bg-orange-950 text-orange-100/70 py-16 px-6"> <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-orange-900/50 pb-12 mb-12"> <div> <div class="text-white  flex items-center"> <img src="/logo--blanco.png" alt="Logo de la Iglesia" class="w-30 object-cover flex items-center justify-center text-sm -mt-3"> </div> <p class="mb-6 leading-relaxed">"Llevando el mensaje de restauración a cada rincón de Venezuela a través del amor y el servicio."</p> <div class="flex space-x-4"> <a href="https://www.facebook.com/iglesiadejesucristovzla" target="_blank" class="w-10 h-10 rounded-full bg-orange-900 flex items-center justify-center text-white hover:bg-orange-600 transition"><i class="fab fa-facebook-f"></i></a> <a href="https://https://www.instagram.com/iglesiadejesucristovzla/" target="_blank" class="w-10 h-10 rounded-full bg-orange-900 flex items-center justify-center text-white hover:bg-orange-600 transition"><i class="fab fa-instagram"></i> </a><a href="https://wa.me/+584121126733" target="_blank" class="w-10 h-10 rounded-full bg-orange-900 flex items-center justify-center text-white hover:bg-orange-600 transition"> <i class="fab fa-whatsapp"></i></a> </div> </div> <div> <h4 class="text-white font-bold text-xl mb-6">Enlaces Rápidos</h4> <ul class="space-y-3"> <li><a href="/inicio" class="hover:text-white transition cursor-pointer">Inicio</a></li><a href="/inicio" class="hover:text-white transition cursor-pointer"></a><li><a href="/inicio" class="hover:text-white transition cursor-pointer"></a><a href="/nosotros" class="hover:text-white transition cursor-pointer">Quiénes Somos</a></li><a href="/nosotros" class="hover:text-white transition cursor-pointer"></a><li><a href="/nosotros" class="hover:text-white transition cursor-pointer"></a><a href="/servicios" class="hover:text-white transition cursor-pointer">Nuestros Servicios</a></li><a href="/servicios" class="hover:text-white transition cursor-pointer"></a><li><a href="/servicios" class="hover:text-white transition cursor-pointer"></a><a href="/comunidad" class="hover:text-white transition cursor-pointer">Muro de Comunidad</a></li><a href="/comunidad" class="hover:text-white transition cursor-pointer"></a><li><a href="/comunidad" class="hover:text-white transition cursor-pointer"></a><a href="/contacto" class="hover:text-white transition cursor-pointer">Contacto</a></li> </ul> </div> <div> <h4 class="text-white font-bold text-xl mb-6">Contacto Directo</h4> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <i class="fas fa-map-marker-alt mt-1 text-orange-500"></i> <span>Urb Gran Sabana Mz 56 #23. Puerto Ordaz, Venezuela.</span> </li> <li class="flex items-center space-x-3"> <i class="fas fa-envelope text-orange-500"></i> <span>iglesiajesucristovzla7@gmail.com</span> </li> <li class="flex items-center space-x-3"> <i class="fas fa-phone text-orange-500"></i> <span>+58-4121126733</span> </li> </ul> </div> </div> <div class="text-center text-xs tracking-widest uppercase">
&copy; 2026 Iglesia de Jesucristo Venezuela. Diseñado para la gloria de Dios.
</div> </footer>`;
}, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/sections/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100" data-astro-cid-5ql2mvdm> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-5ql2mvdm> <div class="flex justify-between h-20" data-astro-cid-5ql2mvdm> <a href="/" class="flex items-center space-x-3" data-astro-cid-5ql2mvdm> <img src="/logoigs.png" alt="Logo de la Iglesia" class="w-18 md:w-22 object-cover " data-astro-cid-5ql2mvdm> </a> <div class="hidden md:flex items-center space-x-8 font-medium text-orange-900  " data-astro-cid-5ql2mvdm> <a href="/" class="nav-link" data-astro-cid-5ql2mvdm>Inicio</a> <a href="/nosotros" class="nav-link" data-astro-cid-5ql2mvdm>Quiénes Somos</a> <a href="/servicios" class="nav-link" data-astro-cid-5ql2mvdm>Servicios</a> <a href="/comunidad" class="nav-link" data-astro-cid-5ql2mvdm>Comunidad</a> <a href="/contacto" class="btn-church px-6 py-2 rounded-full shadow-lg" data-astro-cid-5ql2mvdm>
Contacto<i class="fas fa-address-book ml-2 text-white" data-astro-cid-5ql2mvdm></i> </a> </div> <div class="md:hidden flex items-center" data-astro-cid-5ql2mvdm> <button id="mobile-menu-button" class="text-orange-900 focus:outline-none hover:text-orange-800 hover:cursor-pointer" data-astro-cid-5ql2mvdm> <!--                 <i class="fas fa-bars text-2xl"></i> --> <div class="menu close" data-astro-cid-5ql2mvdm> <div class="linea-1" data-astro-cid-5ql2mvdm></div> <div class="linea-2" data-astro-cid-5ql2mvdm></div> <div class="linea-3" data-astro-cid-5ql2mvdm></div> </div> </button> </div> </div> </div> <!-- Menú Móvil (Ahora oculto por defecto con 'hidden') --> <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-orange-900 flex-col space-y-4 px-4 py-6 font-medium text-orange-900 transition-all duration-300 text-center" data-astro-cid-5ql2mvdm> <a href="/" class="hover:text-orange-600" data-astro-cid-5ql2mvdm>Inicio</a> <a href="/nosotros" class="hover:text-orange-600" data-astro-cid-5ql2mvdm>Quiénes Somos</a> <a href="/servicios" class="hover:text-orange-600" data-astro-cid-5ql2mvdm>Servicios</a> <a href="/comunidad" class="hover:text-orange-600" data-astro-cid-5ql2mvdm>Comunidad</a> <a href="/contacto" class="text-orange-600 font-bold" data-astro-cid-5ql2mvdm>Contacto <i class="fas fa-address-book ml-1 text-yellow-950" data-astro-cid-5ql2mvdm></i></a> </div> </nav> <!-- <script>
    const btn = document.querySelector('#mobile-menu-button');
    const menu = document.querySelector('#mobile-menu');

    btn?.addEventListener('click', () => {
        // Esto quita 'hidden' y agrega 'flex' (o viceversa)
        menu?.classList.toggle('hidden');
        menu?.classList.toggle('flex'); 
    });
<\/script> -->  `, ""])), maybeRenderHead(), renderScript($$result, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/sections/Header.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/sections/Header.astro", void 0);

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/node_modules/.pnpm/astro@6.3.8_@vercel+functio_9a4077559e48f813f4fb3c7d7fd06ac7/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/node_modules/.pnpm/astro@6.3.8_@vercel+functio_9a4077559e48f813f4fb3c7d7fd06ac7/node_modules/astro/components/ClientRouter.astro", void 0);

const fixedTitle = "Iglesia Cristiana en Venezuela: Un Hogar de Fe para tu Familia";

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = fixedTitle,
    description = "Caminamos juntos en fe y amor. Si buscas una congregación, apoyo en oración o una familia espiritual en Venezuela, nuestras puertas están abiertas para ti. ¡Ven a conocernos!",
    canonical,
    robots
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/logo--blanco.png"><link rel="icon" href="/logo--blanco.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="author" content="Edwin M"><meta name="theme-color" content="#0a1024" media="(prefers-color-scheme: dark)"><meta name="theme-color" content="#f8fafc" media="(prefers-color-scheme: light)"><meta name="description"${addAttribute(description, "content")}><meta name="author" content="RIOTEC"><meta name="theme-color" content="#0a1024">${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`}${robots && renderTemplate`<meta name="robots"${addAttribute(robots, "content")}>`}<meta property="og:url" content="https://igsvenezuela.vercel.app/"><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image" content="https://igsvenezuela.vercel.app/pagina-iglesia-capture.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Iglesia de Jesucristo Venezuela - Gran Sabana"><meta property="og:locale" content="es_ES"><meta property="og:site_name" content="Iglesia de Jesucristo Venezuela"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@igsvenezuela"><meta name="twitter:creator" content="@tu_usuario"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image" content="https://igsvenezuela.vercel.app/pagina-iglesia-capture.png">${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main id="main"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html><!-- <style>
  html,
  body {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
</style>
 -->`;
}, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/layouts/Layout.astro", void 0);

export { $$Layout as $, renderScript as r };
