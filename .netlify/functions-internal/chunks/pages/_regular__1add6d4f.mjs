/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_fa887e8b.mjs';
import 'clsx';
import { $ as $$Base } from './404_57705144.mjs';
import { a as getSinglePage, $ as $$PageHeader } from './_category__bae937cd.mjs';
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
async function getStaticPaths() {
  const pages = await getSinglePage("pages");
  const paths = pages.map((page) => ({
    params: {
      regular: page.slug
    },
    props: { page }
  }));
  return paths;
}
const $$regular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$regular;
  const { page } = Astro2.props;
  const { title, meta_title, description, image } = page.data;
  const { Content } = await page.render();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": title })}${maybeRenderHead()}<section class="section-sm"><div class="container"><div class="row justify-center"><div class="lg:col-10"><div class="content">${renderComponent($$result2, "Content", Content, {})}</div></div></div></div></section>` })}`;
}, "D:/Github/portafolio_cv/src/pages/[regular].astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/[regular].astro";
const $$url = "/[regular].html";

export { $$regular as default, $$file as file, getStaticPaths, $$url as url };
