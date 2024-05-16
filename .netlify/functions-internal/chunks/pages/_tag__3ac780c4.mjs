/* empty css                           */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_4ddf9a2a.mjs';
import 'clsx';
import { g as getTaxonomy, a as getSinglePage, t as taxonomyFilter, $ as $$PageHeader, b as $$BlogCard } from './_category__d497711a.mjs';
import { c as config, $ as $$Base } from './404_1dee3211.mjs';

const $$Astro = createAstro("https://astroplate.netlify.app");
async function getStaticPaths() {
  const tags = await getTaxonomy(config.settings.blog_folder, "tags");
  return tags.map((tag) => {
    return {
      params: { tag }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const posts = await getSinglePage(config.settings.blog_folder);
  const filterByCategories = taxonomyFilter(posts, "tags", tag);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": tag }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": tag })} ${maybeRenderHead()}<div class="section-sm pb-0"> <div class="container"> <div class="row"> ${filterByCategories.map((post) => renderTemplate`<div class="mb-14 md:col-6 lg:col-4"> ${renderComponent($$result2, "BlogCard", $$BlogCard, { "data": post })} </div>`)} </div> </div> </div> ` })}`;
}, "D:/Github/portafolio_cv/src/pages/tags/[tag].astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag].html";

export { $$tag as default, $$file as file, getStaticPaths, $$url as url };
