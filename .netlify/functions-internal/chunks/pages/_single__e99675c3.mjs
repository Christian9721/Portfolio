/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, f as addAttribute, u as unescapeHTML } from '../astro_fa887e8b.mjs';
import 'clsx';
import { a as getSinglePage, b as $$Image, c as $$BlogCard } from './_category__bae937cd.mjs';
import { s as slugify, c as config, a as $$Social, $ as $$Base, m as markdownify, h as humanize } from './404_57705144.mjs';
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoPinterest } from 'react-icons/io5/index.js';
import { jsx } from 'react/jsx-runtime';
import { DiscussionEmbed } from 'disqus-react';
import 'react';
import { formatInTimeZone } from 'date-fns-tz';
import { FaRegUserCircle, FaRegFolder, FaRegClock } from 'react-icons/fa/index.js';

const dateFormat = (date, format = "dd MMM, yyyy") => {
  return formatInTimeZone(date, "America/New_York", format);
};
const dateDiffToString = (date1, date2) => {
  const millisecondsDiff = Math.abs(date2.getTime() - date1.getTime());
  const seconds = Math.floor(millisecondsDiff / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44);
  const years = Math.floor(months / 12);
  const result = [];
  if (years > 0) {
    result.push(`${years} years`);
  }
  if (months > 0) {
    result.push(`${months % 12} mth`);
  }
  if (weeks > 0) {
    result.push(`${weeks % 4} wk`);
  }
  if (days > 0) {
    result.push(`${days % 7} d`);
  }
  if (hours > 0) {
    result.push(`${hours % 24} hr`);
  }
  if (minutes > 0) {
    result.push(`${minutes % 60} min`);
  }
  if (seconds > 0) {
    result.push(`${seconds % 60} s`);
  }
  return result;
};

const $$Astro$3 = createAstro("https://astroplate.netlify.app");
async function getStaticPaths$1() {
  const authors = await getSinglePage("authors");
  const paths = authors.map((author) => ({
    params: {
      single: author.slug
    },
    props: { author }
  }));
  return paths;
}
const $$single$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$single$1;
  const { blog_folder } = config.settings;
  const { author } = Astro2.props;
  const { title, social, meta_title, description, image } = author.data;
  const { Content } = await author.render();
  const posts = await getSinglePage(blog_folder);
  const postFilterByAuthor = posts.filter(
    (post) => slugify(post.data.author) === slugify(title)
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="section-sm pb-0"><div class="container"><div class="row justify-center border-b border-border pb-14 dark:border-darkmode-border"><div class="text-center lg:col-4">${image && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image, "class": "mx-auto mb-10 rounded", "height": 200, "width": 200, "alt": title, "format": "webp" })}`}<h1 class="h3 mb-6">${title}</h1><div class="content">${renderComponent($$result2, "Content", Content, {})}</div>${renderComponent($$result2, "Social", $$Social, { "source": social, "className": "social-icons" })}</div></div><div class="row justify-center pb-16 pt-14">${postFilterByAuthor.map((post) => renderTemplate`<div class="mb-12 md:col-6 lg:col-4">${renderComponent($$result2, "BlogCard", $$BlogCard, { "data": post })}</div>`)}</div></div></section>` })}`;
}, "D:/Github/portafolio_cv/src/pages/authors/[single].astro", void 0);

const $$file$1 = "D:/Github/portafolio_cv/src/pages/authors/[single].astro";
const $$url$1 = "/authors/[single].html";

const _single_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://astroplate.netlify.app");
const $$Share = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Share;
  const { base_url } = config.site;
  const {
    title,
    description,
    slug,
    className
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(`${className}`, "class")}><li class="inline-block"><a aria-label="facebook share button"${addAttribute(`https://facebook.com/sharer/sharer.php?u=${base_url}/${slug}`, "href")} target="_blank" rel="noreferrer noopener">${renderComponent($$result, "IoLogoFacebook", IoLogoFacebook, {})}</a></li><li class="inline-block"><a aria-label="twitter share button"${addAttribute(`https://twitter.com/intent/tweet/?text=${title}&amp;url=${base_url}/${slug}`, "href")} target="_blank" rel="noreferrer noopener">${renderComponent($$result, "IoLogoTwitter", IoLogoTwitter, {})}</a></li><li class="inline-block"><a aria-label="linkedin share button"${addAttribute(`https://www.linkedin.com/shareArticle?mini=true&url=${base_url}/${slug}&title=${title}&summary=${description}&source=${base_url}`, "href")} target="_blank" rel="noreferrer noopener">${renderComponent($$result, "IoLogoLinkedin", IoLogoLinkedin, {})}</a></li><li class="inline-block"><a aria-label="pinterest share button"${addAttribute(`https://pinterest.com/pin/create/button/?url=${base_url}/${slug}&media=&description=${description}`, "href")} target="_blank" rel="noreferrer noopener">${renderComponent($$result, "IoLogoPinterest", IoLogoPinterest, {})}</a></li></ul>`;
}, "D:/Github/portafolio_cv/src/layouts/components/Share.astro", void 0);

const Disqus = ({ className }) => {
  const { disqus } = config;
  return /* @__PURE__ */ jsx("div", { className, children: disqus.enable && /* @__PURE__ */ jsx(
    DiscussionEmbed,
    {
      shortname: disqus.shortname,
      config: disqus.settings
    }
  ) });
};

const similerItems = (currentItem, allItems, slug) => {
  let categories = [];
  let tags = [];
  if (currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }
  if (currentItem.data.tags.length > 0) {
    tags = currentItem.data.tags;
  }
  if (currentItem.data.projects.length > 0) {
    currentItem.data.projects;
  }
  const filterByCategories = allItems.filter(
    (item) => categories.find((category) => item.data.categories.includes(category))
  );
  const filterByTags = allItems.filter(
    (item) => tags.find((tag) => item.data.tags.includes(tag))
  );
  allItems.filter(
    (item) => tags.find((project) => item.data.projects.includes(project))
  );
  const mergedItems = [.../* @__PURE__ */ new Set([...filterByCategories, ...filterByTags])];
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);
  return filterBySlug;
};

const $$Astro$1 = createAstro("https://astroplate.netlify.app");
const $$PostSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostSingle;
  const { blog_folder } = config.settings;
  const posts = await getSinglePage(blog_folder);
  const { post } = Astro2.props;
  const similarPosts = similerItems(post, posts, post.slug);
  const { Content } = await post.render();
  const { title, description, author, categories, image, date, tags } = post.data;
  return renderTemplate`${maybeRenderHead()}<section class="section pt-7"><div class="container"><div class="row justify-center"><article class="lg:col-10">${image && renderTemplate`<div class="mb-10">${renderComponent($$result, "Image", $$Image, { "src": image, "height": 500, "width": 1200, "alt": title, "class": "w-full rounded", "format": "webp" })}</div>`}<h1 class="h2 mb-4">${unescapeHTML(markdownify(title))}</h1><ul class="mb-4"><li class="mr-4 inline-block"><a${addAttribute(`/authors/${slugify(author)}`, "href")}>${renderComponent($$result, "FaRegUserCircle", FaRegUserCircle, { "className": "mr-2 -mt-1 inline-block" })}${humanize(author)}</a></li><li class="mr-4 inline-block">${renderComponent($$result, "FaRegFolder", FaRegFolder, { "className": "mr-2 -mt-1 inline-block" })}${categories.map((category, index) => renderTemplate`<a${addAttribute(`/categories/${slugify(category)}`, "href")}>${humanize(category)}${index !== categories.length - 1 && ","}</a>`)}</li><li class="mr-4 inline-block">${renderComponent($$result, "FaRegClock", FaRegClock, { "className": "mr-2 -mt-1 inline-block" })}${dateFormat(date)}</li></ul><div class="content mb-10">${renderComponent($$result, "Content", Content, {})}</div><div class="row items-start justify-between"><div class="mb-10 flex items-center lg:col-5 lg:mb-0"><h5 class="mr-3">Tags :</h5><ul>${tags.map((tag) => renderTemplate`<li class="inline-block"><a class="m-1 block rounded bg-theme-light px-3 py-1 hover:bg-primary hover:text-white dark:bg-darkmode-theme-light dark:hover:bg-darkmode-primary dark:hover:text-dark"${addAttribute(`/tags/${slugify(tag)}`, "href")}>${humanize(tag)}</a></li>`)}</ul></div><div class="flex items-center lg:col-4"><h5 class="mr-3">Share :</h5>${renderComponent($$result, "Share", $$Share, { "className": "social-icons", "title": title, "description": description, "slug": post.slug })}</div></div>${renderComponent($$result, "Disqus", Disqus, { "className": "mt-20", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/helpers/Disqus", "client:component-export": "default" })}</article></div><!-- Related posts --><div class="section pb-0"><h2 class="h3 mb-12 text-center">Related Posts</h2><div class="row justify-center">${similarPosts.map((post2) => renderTemplate`<div class="lg:col-4">${renderComponent($$result, "BlogCard", $$BlogCard, { "data": post2 })}</div>`)}</div></div></div></section>`;
}, "D:/Github/portafolio_cv/src/layouts/PostSingle.astro", void 0);

const $$Astro = createAstro("https://astroplate.netlify.app");
async function getStaticPaths() {
  const posts = await getSinglePage(config.settings.blog_folder);
  const paths = posts.map((post) => ({
    params: {
      single: post.slug
    },
    props: { post }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const { post } = Astro2.props;
  const { title, meta_title, description, image } = post.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PostSingle", $$PostSingle, { "post": post })}` })}`;
}, "D:/Github/portafolio_cv/src/pages/blog/[single].astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/blog/[single].astro";
const $$url = "/blog/[single].html";

const _single_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _single_$1 as _, _single_ as a, dateDiffToString as d };
