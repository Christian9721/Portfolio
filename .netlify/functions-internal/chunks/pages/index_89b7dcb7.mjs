/* empty css                           */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_4ddf9a2a.mjs';
import { c as config, h as humanize, $ as $$Base } from './404_1dee3211.mjs';
import { a as getTaxonomy, b as getAllTaxonomy, c as $$PageHeader } from './_category__cb88621b.mjs';

const $$Astro$2 = createAstro("https://astroplate.netlify.app");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { blog_folder } = config.settings;
  const categories = await getTaxonomy(blog_folder, "categories");
  const allCategories = await getAllTaxonomy(blog_folder, "categories");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Categories" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Categories" })} ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <ul> ${categories.map((category) => {
    const count = allCategories.filter((c) => c === category).length;
    return renderTemplate`<li class="m-3 inline-block"> <a${addAttribute(`/categories/${category}`, "href")} class="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark"> ${humanize(category)}${" "} <span class="ml-2 rounded bg-body px-2 dark:bg-darkmode-body"> ${count} </span> </a> </li>`;
  })} </ul> </div> </section> ` })}`;
}, "D:/Github/portafolio_cv/src/pages/categories/index.astro", void 0);

const $$file$2 = "D:/Github/portafolio_cv/src/pages/categories/index.astro";
const $$url$2 = "/categories.html";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://astroplate.netlify.app");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { blog_folder } = config.settings;
  const projects = await getTaxonomy(blog_folder, "projects");
  const allProjects = await getAllTaxonomy(blog_folder, "projects");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Projects" })} ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <ul> ${projects.map((project) => {
    const count = allProjects.filter((c) => c === project).length;
    return renderTemplate`<li class="m-3 inline-block"> <a${addAttribute(`/projects/${project}`, "href")} class="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark"> ${humanize(project)}${" "} <span class="ml-2 rounded bg-body px-2 dark:bg-darkmode-body"> ${count} </span> </a> </li>`;
  })} </ul> </div> </section> ` })}`;
}, "D:/Github/portafolio_cv/src/pages/projects/index.astro", void 0);

const $$file$1 = "D:/Github/portafolio_cv/src/pages/projects/index.astro";
const $$url$1 = "/projects.html";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://astroplate.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { blog_folder } = config.settings;
  const tags = await getTaxonomy(blog_folder, "tags");
  const allTags = await getAllTaxonomy(blog_folder, "tags");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Tags" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Tags" })} ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <ul> ${tags.map((tag) => {
    const count = allTags.filter((c) => c === tag).length;
    return renderTemplate`<li class="m-3 inline-block"> <a${addAttribute(`/tags/${tag}`, "href")} class="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark"> ${humanize(tag)}${" "} <span class="ml-2 rounded bg-body px-2 dark:bg-darkmode-body"> ${count} </span> </a> </li>`;
  })} </ul> </div> </section> ` })}`;
}, "D:/Github/portafolio_cv/src/pages/tags/index.astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/tags/index.astro";
const $$url = "/tags.html";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
