import { c as createComponent } from './astro-component_4Ot1I3MR.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CZWiftF3.mjs';
import { $ as $$Layout } from './Layout_DCGj5Ogq.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Tus Acordes Cristianos", "description": "Página no encontrada en Tus Acordes Cristianos. Vuelve al inicio para seguir disfrutando del evento de boxeo de Ibai Llanos.", "canonical": "https://www.tuacordescristianos.com/404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mask-fade-bottom flex min-h-[90vh]
 w-full items-center justify-center text-center"> <div class="w-full max-w-3xl items-center justify-center"> <h1 class="text-theme-midnight text-primary"> <span class="mb-2 w-fit mx-auto block text-[120px] font-bold tracking-[.025em] bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent" aria-hidden="true">
404
</span> <span class="mb-3 block text-4xl font-bold tracking-wider">¡ Página no encontrada !</span> </h1> <p class="text-theme-midnight mb-8 text-xl tracking-wide">
el recurso que buscas no está disponible. Vuelve al inicio y encuentra los acordes perfectos para seguir exaltando Su nombre....
</p> <div class="flex min-h-4 items-center justify-center"> <a href="/" class="bg-linear-to-br from-yellow-300 to-orange-400 text-theme-midnight flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold tracking-widest transition-all duration-300 ease-out hover:-translate-y-1 active:scale-90" aria-label="Botón para volver al inicio"> <span class="relative z-10 flex items-center gap-2 tracking-widest">
Volver al inicio
</span> </a> </div> </div> </section> ` })}`;
}, "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/pages/404.astro", void 0);

const $$file = "C:/Users/edwin/Documents/DesarrolloWeb/Desarrollo_Astro/igsvenezuela/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
