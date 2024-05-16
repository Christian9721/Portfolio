/* empty css                           */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../astro_4ddf9a2a.mjs';
import 'clsx';
import { m as markdownify, $ as $$Base } from './404_1dee3211.mjs';
import { g as getEntryBySlug, $ as $$Image } from './_category__cb88621b.mjs';

const $$Astro = createAstro("https://astroplate.netlify.app");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const about = await getEntryBySlug("about", "-index");
  const { Content } = await about.render();
  const { title, description, meta_title, image } = about.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-sm"> <div class="container"> <div class="row justify-center"> <div class="text-center md:col-10 lg:col-7"> ${image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto mb-6 rounded-lg", "src": image, "width": 200, "height": 200, "alt": title, "format": "webp" })}`} <h2 class="h3 mb-6">${unescapeHTML(markdownify(title))}</h2> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </div> </section> ` })}`;
}, "D:/Github/portafolio_cv/src/pages/about.astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/about.astro";
const $$url = "/about.html";

export { $$About as default, $$file as file, $$url as url };
