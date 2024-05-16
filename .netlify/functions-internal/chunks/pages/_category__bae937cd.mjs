import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                               */import { d as createAstro, e as createComponent, A as AstroError, j as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, k as UnknownContentCollectionError, l as renderUniqueStylesheet, n as renderScriptElement, o as createHeadAndContent, g as renderComponent, u as unescapeHTML, p as renderTransition } from '../astro_fa887e8b.mjs';
import 'clsx';
import { s as slugify, h as humanize, p as plainify, c as config, $ as $$Base } from './404_57705144.mjs';
import { i as isESMImportedImage, g as getImage$1 } from '../astro-assets-services_5113d99a.mjs';
import { FaRegUserCircle, FaRegFolder } from 'react-icons/fa/index.js';
/* empty css                               */
const $$Astro$7 = createAstro("https://astroplate.netlify.app");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "D:/Github/portafolio_cv/node_modules/astro/components/Image.astro", void 0);

const $$Astro$6 = createAstro("https://astroplate.netlify.app");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const additionalAttributes = {};
  if (fallbackImage.srcSet.values.length > 0) {
    additionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "D:/Github/portafolio_cv/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/squoosh","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///D:/Github/portafolio_cv/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntryBySlug({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntryBySlug(collection, slug) {
    const entryImport = await getEntryImport(collection, slug);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    return {
      id: entry.id,
      slug: entry.slug,
      body: entry.body,
      collection: entry.collection,
      data: entry.data,
      async render() {
        return render({
          collection: entry.collection,
          id: entry.id,
          renderEntryImport: await getRenderEntryImport(collection, slug)
        });
      }
    };
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/about/-index.md": () => import('../-index_42c7caf6.mjs'),"/src/content/blog/-index.md": () => import('../-index_6144a62c.mjs'),"/src/content/blog/post-1.md": () => import('../post-1_f6a59359.mjs'),"/src/content/homepage/-index.md": () => import('../-index_df30abe1.mjs'),"/src/content/pages/elements.mdx": () => import('../elements_85da0948.mjs'),"/src/content/pages/privacy-policy.md": () => import('../privacy-policy_c1dc8304.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"-index":"/src/content/blog/-index.md","post-1":"/src/content/blog/post-1.md"}},"about":{"type":"content","entries":{"-index":"/src/content/about/-index.md"}},"pages":{"type":"content","entries":{"elements":"/src/content/pages/elements.mdx","privacy-policy":"/src/content/pages/privacy-policy.md"}},"homepage":{"type":"content","entries":{"-index":"/src/content/homepage/-index.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/about/-index.md": () => import('../-index_f5183fd4.mjs'),"/src/content/blog/-index.md": () => import('../-index_eeab6836.mjs'),"/src/content/blog/post-1.md": () => import('../post-1_c09c4068.mjs'),"/src/content/homepage/-index.md": () => import('../-index_a01b75be.mjs'),"/src/content/pages/elements.mdx": () => import('../elements_5dc5d308.mjs'),"/src/content/pages/privacy-policy.md": () => import('../privacy-policy_69df994a.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$5 = createAstro("https://astroplate.netlify.app");
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
}, "D:/Github/portafolio_cv/src/lib/contentParser.astro", void 0);

const $$Astro$4 = createAstro("https://astroplate.netlify.app");
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
}, "D:/Github/portafolio_cv/src/lib/taxonomyParser.astro", void 0);

const $$Astro$3 = createAstro("https://astroplate.netlify.app");
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
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb"${addAttribute(className, "class")}><ol class="inline-flex" role="list">${parts.map(({ label, ...attrs }, index) => renderTemplate`<li class="mx-1 capitalize" role="listitem">${index > 0 && renderTemplate`<span class="inlin-block mr-1">/</span>`}${index !== parts.length - 1 ? renderTemplate`<a class="text-primary dark:text-darkmode-primary"${spreadAttributes(attrs)}>${label}</a>` : renderTemplate`<span class="text-light dark:text-darkmode-light">${label}</span>`}</li>`)}</ol></nav>`;
}, "D:/Github/portafolio_cv/src/layouts/components/Breadcrumbs.astro", void 0);

const TRANSITIONS = {
  PROJECT_IMG: "project-"
};

const $$Astro$2 = createAstro("https://astroplate.netlify.app");
const $$PageHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title = "", id = "", url = "" } = Astro2.props;
  console.log(`id: ${TRANSITIONS.PROJECT_IMG}${id}`);
  return renderTemplate`${maybeRenderHead()}<section><div class="container text-center"><div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14 dark:from-darkmode-body dark:to-darkmode-theme-light"><img class="blur-sm mix-blend-darken opacity-25 h-full rounded-2xl absolute top-0 left-0 object-cover w-full"${addAttribute(url, "src")}${addAttribute(renderTransition($$result, "ghoitxfq", "", `${TRANSITIONS.PROJECT_IMG}${id}`), "data-astro-transition-scope")}><h1>${humanize(title)}</h1>${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "className": "mt-6" })}</div></div></section>`;
}, "D:/Github/portafolio_cv/src/layouts/partials/PageHeader.astro", "self");

const $$Astro$1 = createAstro("https://astroplate.netlify.app");
const $$BlogCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const {
    summary_length,
    blog_folder
  } = config.settings;
  const { data } = Astro2.props;
  const { title, image, date, author, categories } = data.data;
  return renderTemplate`${maybeRenderHead()}<div class="bg-body dark:bg-darkmode-body">${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mb-6 w-full rounded", "src": image, "alt": title, "width": 445, "height": 230, "format": "webp" })}`}<h4 class="mb-3"><a${addAttribute(`/${blog_folder}/${data.slug}`, "href")}>${title}</a></h4><ul class="mb-4"><li class="mr-4 inline-block"><a${addAttribute(`/authors/${slugify(author)}`, "href")}>${renderComponent($$result, "FaRegUserCircle", FaRegUserCircle, { "className": "mr-2 -mt-1 inline-block" })}${humanize(author)}</a></li><li class="mr-4 inline-block">${renderComponent($$result, "FaRegFolder", FaRegFolder, { "className": "mr-2 -mt-1 inline-block" })}${categories.map((category, index) => renderTemplate`<a${addAttribute(`/categories/${slugify(category)}`, "href")}>${humanize(category)}${index !== categories.length - 1 && ","}</a>`)}</li></ul><p class="mb-6">${plainify(data.body?.slice(0, Number(summary_length)))}</p><a class="btn btn-outline-primary btn-sm"${addAttribute(`/${blog_folder}/${data.slug}`, "href")}>
read more
</a></div>`;
}, "D:/Github/portafolio_cv/src/layouts/components/BlogCard.astro", void 0);

const taxonomyFilter = (posts, name, key) => posts.filter(
  (post) => post.data[name].map((name2) => slugify(name2)).includes(key)
);

const $$Astro = createAstro("https://astroplate.netlify.app");
async function getStaticPaths() {
  const categories = await getTaxonomy(
    config.settings.blog_folder,
    "categories"
  );
  return categories.map((category) => {
    return {
      params: { category }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const posts = await getSinglePage(config.settings.blog_folder);
  const filterByCategories = taxonomyFilter(posts, "categories", category);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": category }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": category })}${maybeRenderHead()}<div class="section-sm pb-0"><div class="container"><div class="row">${filterByCategories.map((post) => renderTemplate`<div class="mb-14 md:col-6 lg:col-4">${renderComponent($$result2, "BlogCard", $$BlogCard, { "data": post })}</div>`)}</div></div></div>` })}`;
}, "D:/Github/portafolio_cv/src/pages/categories/[category].astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/categories/[category].astro";
const $$url = "/categories/[category].html";

const _category_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PageHeader as $, _category_ as _, getSinglePage as a, $$Image as b, $$BlogCard as c, getEntryBySlug as d, getAllTaxonomy as e, getTaxonomy as g, imageConfig as i, taxonomyFilter as t };
