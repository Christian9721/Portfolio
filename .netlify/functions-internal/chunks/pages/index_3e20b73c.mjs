/* empty css                           */import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, p as renderTransition, g as renderComponent } from '../astro_4ddf9a2a.mjs';
import { s as slugify, h as humanize, c as config, $ as $$Base } from './404_f8ee78ae.mjs';
import 'clsx';
import { g as getCollection } from './about_35e09852.mjs';
/* empty css                               */
const $$Astro$5 = createAstro("https://christianAvila9721.github.io");
const getSinglePage = async (collection) => {
  const allPage = await getCollection(collection);
  const removeIndex = allPage.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => !data.data.draft);
  return removeDrafts;
};
const $$ContentParser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ContentParser;
  return renderTemplate``;
}, "D:/Github/portafoliocv/src/lib/contentParser.astro", void 0);

const $$Astro$4 = createAstro("https://christianAvila9721.github.io");
const getTaxonomy = async (collection, name) => {
  const singlePages = await getSinglePage(collection);
  const taxonomyPages = singlePages.map((page) => page.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(slugify(categoryArray[j]));
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};
const getAllTaxonomy = async (collection, name) => {
  const singlePages = await getSinglePage(collection);
  const taxonomyPages = singlePages.map((page) => page.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(slugify(categoryArray[j]));
    }
  }
  return taxonomies;
};
const $$TaxonomyParser = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TaxonomyParser;
  return renderTemplate``;
}, "D:/Github/portafoliocv/src/lib/taxonomyParser.astro", void 0);

const $$Astro$3 = createAstro("https://christianAvila9721.github.io");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { className } = Astro2.props;
  const paths = Astro2.url.pathname.split("/").filter((x) => x);
  let parts = [
    {
      label: "Home",
      href: "/",
      "aria-label": Astro2.url.pathname === "/" ? "page" : void 0
    }
  ];
  paths.forEach((label, i) => {
    const href = `/${paths.slice(0, i + 1).join("/")}`;
    label !== "page" && parts.push({
      label: humanize(label.replace(".html", "").replace(/[-_]/g, " ")) || "",
      href,
      "aria-label": Astro2.url.pathname === href ? "page" : void 0
    });
  });
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb"${addAttribute(className, "class")}> <ol class="inline-flex" role="list"> ${parts.map(({ label, ...attrs }, index) => renderTemplate`<li class="mx-1 capitalize" role="listitem"> ${index > 0 && renderTemplate`<span class="inlin-block mr-1">/</span>`} ${index !== parts.length - 1 ? renderTemplate`<a class="text-primary dark:text-darkmode-primary"${spreadAttributes(attrs)}> ${label} </a>` : renderTemplate`<span class="text-light dark:text-darkmode-light">${label}</span>`} </li>`)} </ol> </nav>`;
}, "D:/Github/portafoliocv/src/layouts/components/Breadcrumbs.astro", void 0);

const TRANSITIONS = {
  PROJECT_IMG: "project-"
};

const $$Astro$2 = createAstro("https://christianAvila9721.github.io");
const $$PageHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title = "", id = "", url = "" } = Astro2.props;
  console.log(`id: ${TRANSITIONS.PROJECT_IMG}${id}`);
  return renderTemplate`${maybeRenderHead()}<section> <div class="container text-center"> <div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14 dark:from-darkmode-body dark:to-darkmode-theme-light"> <img class="blur-sm mix-blend-darken opacity-25 h-full rounded-2xl absolute top-0 left-0 object-cover w-full"${addAttribute(url, "src")}${addAttribute(renderTransition($$result, "ghoitxfq", "", `${TRANSITIONS.PROJECT_IMG}${id}`), "data-astro-transition-scope")}> <h1>${humanize(title)}</h1> ${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "className": "mt-6" })} </div> </div> </section>`;
}, "D:/Github/portafoliocv/src/layouts/partials/PageHeader.astro", "self");

const $$Astro$1 = createAstro("https://christianAvila9721.github.io");
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
}, "D:/Github/portafoliocv/src/pages/projects/index.astro", void 0);

const $$file$1 = "D:/Github/portafoliocv/src/pages/projects/index.astro";
const $$url$1 = "/projects.html";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://christianAvila9721.github.io");
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
}, "D:/Github/portafoliocv/src/pages/tags/index.astro", void 0);

const $$file = "D:/Github/portafoliocv/src/pages/tags/index.astro";
const $$url = "/tags.html";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PageHeader as $, getSinglePage as a, index as b, getTaxonomy as g, index$1 as i };
