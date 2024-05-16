/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent } from '../astro_fa887e8b.mjs';
import 'clsx';
import { s as slugify, h as humanize, p as plainify, c as config, $ as $$Base } from './404_57705144.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import Fuse from 'fuse.js';
import { useRef, useState, useEffect } from 'react';
import { FaSearch, FaRegUserCircle, FaRegFolder } from 'react-icons/fa/index.js';
import { a as getSinglePage } from './_category__bae937cd.mjs';
import 'html-escaper';
import 'github-slugger';
import 'marked';
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
/* empty css                               */
const { summary_length, blog_folder } = config.settings;
const Search = ({ searchList }) => {
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setInputVal(e.currentTarget.value);
  };
  const fuse = new Fuse(searchList, {
    keys: ["data.title", "data.categories", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 3,
    threshold: 0.5
  });
  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr)
      setInputVal(searchStr);
    setTimeout(function() {
      inputRef.current.selectionStart = inputRef.current.selectionEnd = searchStr?.length || 0;
    }, 50);
  }, []);
  useEffect(() => {
    let inputResult = inputVal.length > 2 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);
    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [inputVal]);
  return /* @__PURE__ */ jsx("section", { className: "section-sm", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row mb-10 justify-center", children: /* @__PURE__ */ jsx("div", { className: "lg:col-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-nowrap", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "form-input rounded-r-none",
          placeholder: "Search posts",
          type: "search",
          name: "search",
          value: inputVal,
          onChange: handleChange,
          autoComplete: "off",
          autoFocus: true,
          ref: inputRef
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "btn btn-primary rounded-l-none", type: "submit", children: /* @__PURE__ */ jsx(FaSearch, {}) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "row", children: searchResults?.length < 1 ? /* @__PURE__ */ jsxs("div", { className: "mx-auto pt-5 text-center", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-auto mb-6",
          src: "/images/no-search-found.png",
          alt: "no-search-found"
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "h2 mb-4", children: inputVal.length < 1 ? "Search Post Here" : "No Search Found!" }),
      /* @__PURE__ */ jsx("p", { children: inputVal.length < 1 ? "Search for posts by title, category, or tag." : "We couldn't find what you searched for. Try searching again." })
    ] }) : searchResults?.map(({ item }, index) => /* @__PURE__ */ jsx("div", { className: "mb-12 md:col-6 lg:col-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-body dark:bg-darkmode-body", children: [
      item.data.image && /* @__PURE__ */ jsx(
        "img",
        {
          className: "mb-6 w-full rounded",
          src: item.data.image,
          alt: item.data.title,
          width: 445,
          height: 230
        }
      ),
      /* @__PURE__ */ jsx("h4", { className: "mb-3", children: /* @__PURE__ */ jsx("a", { href: `/${blog_folder}/${item.slug}`, children: item.data.title }) }),
      /* @__PURE__ */ jsxs("ul", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("li", { className: "mr-4 inline-block", children: /* @__PURE__ */ jsxs("a", { href: `/authors/${slugify(item.data.author)}`, children: [
          /* @__PURE__ */ jsx(
            FaRegUserCircle,
            {
              className: "-mt-1 mr-2 inline-block"
            }
          ),
          humanize(item.data.author)
        ] }) }),
        /* @__PURE__ */ jsxs("li", { className: "mr-4 inline-block", children: [
          /* @__PURE__ */ jsx(FaRegFolder, { className: "-mt-1 mr-2 inline-block" }),
          item.data.categories.map(
            (category, index2) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: `/categories/${slugify(category)}`,
                children: [
                  humanize(category),
                  index2 !== item.data.categories.length - 1 && ", "
                ]
              },
              category
            )
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mb-6", children: plainify(item.content?.slice(0, Number(summary_length))) }),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "btn btn-outline-primary btn-sm",
          href: `/${blog_folder}/${item.slug}`,
          children: "read more"
        }
      )
    ] }) }, `search-${index}`)) })
  ] }) });
};

const $$Astro = createAstro("https://astroplate.netlify.app");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const { blog_folder } = config.settings;
  const posts = await getSinglePage(blog_folder);
  const searchList = posts.map((item) => ({
    slug: item.slug,
    data: item.data,
    content: item.body
  }));
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `Search` }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Search", Search, { "client:load": true, "searchList": searchList, "client:component-hydration": "load", "client:component-path": "@/layouts/Search", "client:component-export": "default" })}` })}`;
}, "D:/Github/portafolio_cv/src/pages/search.astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/search.astro";
const $$url = "/search.html";

export { $$Search as default, $$file as file, $$url as url };
