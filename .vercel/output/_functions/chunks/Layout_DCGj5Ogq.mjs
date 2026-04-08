import { c as createComponent } from './astro-component_4Ot1I3MR.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, h as addAttribute, o as renderHead, l as renderComponent, p as renderSlot } from './entrypoint_CZWiftF3.mjs';
import 'clsx';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Footer Reforzado (Versión Completa) -->${maybeRenderHead()}<footer class="bg-orange-950 text-orange-100/70 py-16 px-6"> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-orange-900/50 pb-12 mb-12"> <div> <h4 class="text-white font-bold text-xl mb-6 flex items-center"> <div class="w-8 h-8 bg-orange-700 rounded-full mr-2 flex items-center justify-center text-sm"> <i class="fas fa-church"></i> </div>
Iglesia de Jesucristo
</h4> <p class="mb-6 leading-relaxed">"Llevando el mensaje de restauración a cada rincón de Venezuela a través del amor y el servicio."</p> <div class="flex space-x-4"> <a href="#" class="w-10 h-10 rounded-full bg-orange-900 flex items-center justify-center text-white hover:bg-orange-600 transition"><i class="fab fa-facebook-f"></i></a> <a href="#" class="w-10 h-10 rounded-full bg-orange-900 flex items-center justify-center text-white hover:bg-orange-600 transition"><i class="fab fa-instagram"></i></a> <a href="#" class="w-10 h-10 rounded-full bg-orange-900 flex items-center justify-center text-white hover:bg-orange-600 transition"><i class="fab fa-youtube"></i></a> </div> </div> <div> <h4 class="text-white font-bold text-xl mb-6">Enlaces Rápidos</h4> <ul class="space-y-3"> <li><span onclick="showPage('inicio')" class="hover:text-white transition cursor-pointer">Inicio</span></li> <li><span onclick="showPage('nosotros')" class="hover:text-white transition cursor-pointer">Quiénes Somos</span></li> <li><span onclick="showPage('servicios')" class="hover:text-white transition cursor-pointer">Nuestros Servicios</span></li> <li><span onclick="showPage('comunidad')" class="hover:text-white transition cursor-pointer">Muro de Comunidad</span></li> </ul> </div> <div> <h4 class="text-white font-bold text-xl mb-6">Contacto Directo</h4> <ul class="space-y-4"> <li class="flex items-start space-x-3"> <i class="fas fa-map-marker-alt mt-1 text-orange-500"></i> <span>Sede Principal: Caracas, Venezuela.</span> </li> <li class="flex items-center space-x-3"> <i class="fas fa-envelope text-orange-500"></i> <span>contacto@iglesiadejesucristo.ve</span> </li> <li class="flex items-center space-x-3"> <i class="fas fa-phone text-orange-500"></i> <span>+58 (212) 000-0000</span> </li> </ul> </div> </div> <div class="text-center text-xs tracking-widest uppercase">
&copy; 2026 Iglesia de Jesucristo Venezuela. Diseñado para la gloria de Dios.
</div> </footer>`;
}, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/sections/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-20"> <a href="/" class="flex items-center space-x-3"> <div class="w-12 h-12 bg-orange-800 rounded-full flex items-center justify-center overflow-hidden"> <i class="fas fa-church text-white"></i> </div> <span class="font-bold text-xl tracking-tight text-orange-900 uppercase leading-tight hidden sm:block text-left">Iglesia de<br>Jesucristo</span> </a> <div class="hidden md:flex items-center space-x-8 font-medium text-orange-900"> <a href="/" class="nav-link">Inicio</a> <a href="/nosotros" class="nav-link">Quiénes Somos</a> <a href="/servicios" class="nav-link">Servicios</a> <a href="/comunidad" class="nav-link">Comunidad</a> <a href="/contacto" class="btn-church px-6 py-2 rounded-full shadow-lg">
Contacto<i class="fas fa-camera-retro ml-2 text-orange-600"></i> </a> </div> </div> </div> </nav>`;
}, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/sections/Header.astro", void 0);

const fixedTitle = "Encuentra acordes, letras y diagramas para guitarra y piano de tus canciones cristianas favoritas en un solo lugar.";

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = fixedTitle,
    description = "Evento de boxeo aficionado entre streamers y creadores de contenido, organizado por Ibai Llanos",
    canonical,
    robots
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/onlylogo.png"><link rel="icon" href="/onlylogo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="author" content="Ibai Llanos"><meta name="theme-color" content="#0a1024" media="(prefers-color-scheme: dark)"><meta name="theme-color" content="#f8fafc" media="(prefers-color-scheme: light)"><meta name="description"${addAttribute(description, "content")}><meta name="author" content="RIOTEC"><meta name="theme-color" content="#0a1024">${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`}${robots && renderTemplate`<meta name="robots"${addAttribute(robots, "content")}>`}<meta property="og:url" content="https://www.tus-acordes-cristianos.com"><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image" content="https://www.tus-acordes-cristianos.com/og-image.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Tus Acordes Cristianos — Alabanza y Acción de Gracias"><meta property="og:locale" content="es_ES"><meta property="og:site_name" content="Tus Acordes Cristianos"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@tusacordescristianos"><meta name="twitter:creator" content="@tu_usuario"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image" content="https://www.tus-acordes-cristianos.com/og-image.jpg">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main id="main"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html><!-- <style>
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

export { $$Layout as $ };
