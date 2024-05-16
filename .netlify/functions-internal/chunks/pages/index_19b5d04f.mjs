/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_fa887e8b.mjs';
import { c as config, h as humanize, $ as $$Base, p as plainify, a as $$Social } from './404_57705144.mjs';
import { g as getTaxonomy, e as getAllTaxonomy, $ as $$PageHeader, b as $$Image, d as getEntryBySlug, a as getSinglePage, c as $$BlogCard } from './_category__bae937cd.mjs';
import 'clsx';
import { s as sortByDate, $ as $$Pagination, a as $$PostSidebar } from './_slug__58616bf3.mjs';

const $$Astro$5 = createAstro("https://astroplate.netlify.app");
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$4;
  const { blog_folder } = config.settings;
  const categories = await getTaxonomy(blog_folder, "categories");
  const allCategories = await getAllTaxonomy(blog_folder, "categories");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Categories" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Categories" })}${maybeRenderHead()}<section class="section"><div class="container text-center"><ul>${categories.map((category) => {
    const count = allCategories.filter((c) => c === category).length;
    return renderTemplate`<li class="m-3 inline-block"><a${addAttribute(`/categories/${category}`, "href")} class="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark">${humanize(category)}${" "}<span class="ml-2 rounded bg-body px-2 dark:bg-darkmode-body">${count}</span></a></li>`;
  })}</ul></div></section>` })}`;
}, "D:/Github/portafolio_cv/src/pages/categories/index.astro", void 0);

const $$file$4 = "D:/Github/portafolio_cv/src/pages/categories/index.astro";
const $$url$4 = "/categories.html";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://astroplate.netlify.app");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$3;
  const { blog_folder } = config.settings;
  const projects = await getTaxonomy(blog_folder, "projects");
  const allProjects = await getAllTaxonomy(blog_folder, "projects");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Projects" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Projects" })}${maybeRenderHead()}<section class="section"><div class="container text-center"><ul>${projects.map((project) => {
    const count = allProjects.filter((c) => c === project).length;
    return renderTemplate`<li class="m-3 inline-block"><a${addAttribute(`/projects/${project}`, "href")} class="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark">${humanize(project)}${" "}<span class="ml-2 rounded bg-body px-2 dark:bg-darkmode-body">${count}</span></a></li>`;
  })}</ul></div></section>` })}`;
}, "D:/Github/portafolio_cv/src/pages/projects/index.astro", void 0);

const $$file$3 = "D:/Github/portafolio_cv/src/pages/projects/index.astro";
const $$url$3 = "/projects.html";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://astroplate.netlify.app");
const $$AuthorCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AuthorCard;
  const { data } = Astro2.props;
  const { title, image, social } = data.data;
  return renderTemplate`${maybeRenderHead()}<div class="rounded bg-theme-light p-8 text-center dark:bg-darkmode-theme-light">${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto mb-6 rounded", "src": image, "alt": title, "width": 120, "height": 120, "format": "webp" })}`}<h4 class="mb-3"><a${addAttribute(`/authors/${data.slug}`, "href")}>${title}</a></h4><p class="mb-4">${plainify(data.body?.slice(0, 100))}</p>${renderComponent($$result, "Social", $$Social, { "source": social, "className": "social-icons" })}</div>`;
}, "D:/Github/portafolio_cv/src/layouts/components/AuthorCard.astro", void 0);

const $$Astro$2 = createAstro("https://astroplate.netlify.app");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const authorIndex = await getEntryBySlug("authors", "-index");
  const authors = await getSinglePage("authors");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": authorIndex.data.title }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": authorIndex.data.title })}${maybeRenderHead()}<section class="section-sm pb-0"><div class="container"><div class="row justify-center">${authors.map((author) => renderTemplate`<div class="mb-14 md:col-6 lg:col-4">${renderComponent($$result2, "AuthorCard", $$AuthorCard, { "data": author })}</div>`)}</div></div></section>` })}`;
}, "D:/Github/portafolio_cv/src/pages/authors/index.astro", void 0);

const $$file$2 = "D:/Github/portafolio_cv/src/pages/authors/index.astro";
const $$url$2 = "/authors.html";

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
  const postIndex = await getEntryBySlug(blog_folder, "-index");
  const posts = await getSinglePage(blog_folder);
  const allCategories = await getAllTaxonomy(blog_folder, "categories");
  const categories = await getTaxonomy(blog_folder, "categories");
  const tags = await getTaxonomy(blog_folder, "tags");
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const currentPosts = sortedPosts.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": postIndex.data.title, "meta_title": postIndex.data.meta_title, "image": postIndex.data.image, "description": postIndex.data.description }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": postIndex.data.title })}${maybeRenderHead()}<section class="section"><div class="container"><div class="row gx-5"><!-- blog posts --><div class="lg:col-8"><div class="row">${currentPosts.map((post) => renderTemplate`<div class="mb-14 md:col-6">${renderComponent($$result2, "BlogCard", $$BlogCard, { "data": post })}</div>`)}</div>${renderComponent($$result2, "Pagination", $$Pagination, { "section": blog_folder, "currentPage": 1, "totalPages": totalPages })}</div><!-- sidebar -->${renderComponent($$result2, "PostSidebar", $$PostSidebar, { "categories": categories, "tags": tags, "allCategories": allCategories })}</div></div></section>` })}`;
}, "D:/Github/portafolio_cv/src/pages/blog/index.astro", void 0);

const $$file$1 = "D:/Github/portafolio_cv/src/pages/blog/index.astro";
const $$url$1 = "/blog.html";

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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Tags" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Tags" })}${maybeRenderHead()}<section class="section"><div class="container text-center"><ul>${tags.map((tag) => {
    const count = allTags.filter((c) => c === tag).length;
    return renderTemplate`<li class="m-3 inline-block"><a${addAttribute(`/tags/${tag}`, "href")} class="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark">${humanize(tag)}${" "}<span class="ml-2 rounded bg-body px-2 dark:bg-darkmode-body">${count}</span></a></li>`;
  })}</ul></div></section>` })}`;
}, "D:/Github/portafolio_cv/src/pages/tags/index.astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/tags/index.astro";
const $$url = "/tags.html";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
