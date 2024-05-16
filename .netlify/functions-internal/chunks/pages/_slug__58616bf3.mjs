/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, g as renderComponent } from '../astro_fa887e8b.mjs';
import 'clsx';
import { a as getSinglePage, d as getEntryBySlug, e as getAllTaxonomy, g as getTaxonomy, $ as $$PageHeader, c as $$BlogCard } from './_category__bae937cd.mjs';
import { h as humanize, c as config, $ as $$Base } from './404_57705144.mjs';

const $$Astro$2 = createAstro("https://astroplate.netlify.app");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { section, currentPage = 1, totalPages = 1 } = Astro2.props;
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;
  let pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="flex items-center justify-center space-x-3" aria-label="Pagination">${hasPrevPage ? renderTemplate`<a${addAttribute(
    indexPageLink ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${currentPage - 1}`,
    "href"
  )} class="rounded px-2 py-1.5 text-dark hover:bg-theme-light dark:text-darkmode-dark dark:hover:bg-darkmode-theme-light"><span class="sr-only">Previous</span><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height="30" width="30"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="rounded px-2 py-1.5 text-light"><span class="sr-only">Previous</span><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height="30" width="30"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span>`}${pageList.map(
    (pagination, i) => pagination === currentPage ? renderTemplate`<span aria-current="page" class="rounded bg-primary px-4 py-2 text-white dark:bg-darkmode-primary dark:text-dark">${pagination}</span>` : renderTemplate`<a${addAttribute(
      i === 0 ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${pagination}`,
      "href"
    )} aria-current="page" class="rounded px-4 py-2 text-dark hover:bg-theme-light dark:text-darkmode-dark dark:hover:bg-darkmode-theme-light">${pagination}</a>`
  )}${hasNextPage ? renderTemplate`<a${addAttribute(`${section ? "/" + section : ""}/page/${currentPage + 1}`, "href")} class="rounded px-2 py-1.5 text-dark hover:bg-theme-light dark:text-darkmode-dark dark:hover:bg-darkmode-theme-light"><span class="sr-only">Next</span><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height="30" width="30"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="rounded px-2 py-1.5 text-light"><span class="sr-only">Next</span><svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height="30" width="30"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>`}</nav>`}`;
}, "D:/Github/portafolio_cv/src/layouts/components/Pagination.astro", void 0);

const sortByDate = (array) => {
  const sortedArray = array.sort(
    (a, b) => new Date(b.data.date && b.data.date).valueOf() - new Date(a.data.date && a.data.date).valueOf()
  );
  return sortedArray;
};

const $$Astro$1 = createAstro("https://astroplate.netlify.app");
const $$PostSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostSidebar;
  const { tags, categories, allCategories } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="lg:col-4"><!-- categories --><div class="mb-8"><h5 class="mb-6">Categories</h5><div class="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light"><ul class="space-y-4">${categories.map((category) => {
    const count = allCategories.filter(
      (c) => c === category
    ).length;
    return renderTemplate`<li><a class="flex justify-between hover:text-primary dark:hover:text-darkmode-primary"${addAttribute(`/categories/${category}`, "href")}>${humanize(category)}<span>(${count})</span></a></li>`;
  })}</ul></div></div><!-- tags --><div class="mb-8"><h5 class="mb-6">Tags</h5><div class="rounded bg-theme-light p-6 dark:bg-darkmode-theme-light"><ul>${tags.map((tag) => {
    return renderTemplate`<li class="inline-block"><a class="m-1 block rounded bg-white px-3 py-1 hover:bg-primary hover:text-white dark:bg-darkmode-body dark:hover:bg-darkmode-primary dark:hover:text-dark"${addAttribute(`/tags/${tag}`, "href")}>${humanize(tag)}</a></li>`;
  })}</ul></div></div></div>`;
}, "D:/Github/portafolio_cv/src/layouts/partials/PostSidebar.astro", void 0);

const $$Astro = createAstro("https://astroplate.netlify.app");
async function getStaticPaths() {
  const posts = await getSinglePage(config.settings.blog_folder);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { blog_folder } = config.settings;
  const { slug } = Astro2.params;
  const postIndex = await getEntryBySlug(blog_folder, "-index");
  const posts = await getSinglePage(blog_folder);
  const allCategories = await getAllTaxonomy(blog_folder, "categories");
  const categories = await getTaxonomy(blog_folder, "categories");
  const tags = await getTaxonomy(blog_folder, "tags");
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": postIndex.data.title, "meta_title": postIndex.data.meta_title, "image": postIndex.data.image, "description": postIndex.data.description }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": postIndex.data.title })}${maybeRenderHead()}<section class="section"><div class="container"><div class="row gx-5"><!-- blog posts --><div class="lg:col-8"><div class="row">${currentPosts.map((post) => renderTemplate`<div class="mb-14 md:col-6">${renderComponent($$result2, "BlogCard", $$BlogCard, { "data": post })}</div>`)}</div>${renderComponent($$result2, "Pagination", $$Pagination, { "section": blog_folder, "currentPage": currentPage, "totalPages": totalPages })}</div><!-- sidebar -->${renderComponent($$result2, "PostSidebar", $$PostSidebar, { "categories": categories, "tags": tags, "allCategories": allCategories })}</div></div></section>` })}`;
}, "D:/Github/portafolio_cv/src/pages/blog/page/[slug].astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/blog/page/[slug].astro";
const $$url = "/blog/page/[slug].html";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Pagination as $, _slug_ as _, $$PostSidebar as a, sortByDate as s };
