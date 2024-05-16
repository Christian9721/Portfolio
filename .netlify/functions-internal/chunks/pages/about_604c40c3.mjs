/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../astro_fa887e8b.mjs';
import 'clsx';
import { m as markdownify, $ as $$Base } from './404_57705144.mjs';
import { d as getEntryBySlug, b as $$Image } from './_category__bae937cd.mjs';
import 'html-escaper';
import 'github-slugger';
import 'marked';
import 'react/jsx-runtime';
import 'react';
import 'react-icons/fa6/index.js';
import 'react-icons/io5/index.js';
import '@material-tailwind/react';
import '@astrojs/internal-helpers/path';
import '../astro-assets-services_5113d99a.mjs';
import 'probe-image-size';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'module';
import 'worker_threads';
import 'react-icons/fa/index.js';
/* empty css                               */
const $$Astro = createAstro("https://astroplate.netlify.app");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const about = await getEntryBySlug("about", "-index");
  const { Content } = await about.render();
  const { title, description, meta_title, image } = about.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="section-sm"><div class="container"><div class="row justify-center"><div class="text-center md:col-10 lg:col-7">${image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto mb-6 rounded-lg", "src": image, "width": 200, "height": 200, "alt": title, "format": "webp" })}`}<h2 class="h3 mb-6">${unescapeHTML(markdownify(title))}</h2><div class="content">${renderComponent($$result2, "Content", Content, {})}</div></div></div></div></section>` })}`;
}, "D:/Github/portafolio_cv/src/pages/about.astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/about.astro";
const $$url = "/about.html";

export { $$About as default, $$file as file, $$url as url };
