/* empty css                               */import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, g as renderComponent, h as renderHead, i as renderSlot } from '../astro_fa887e8b.mjs';
import 'clsx';
import { slug } from 'github-slugger';
import { marked } from 'marked';
import { jsx } from 'react/jsx-runtime';
import 'react';
import * as FaIcons from 'react-icons/fa6/index.js';
import { IoSearch } from 'react-icons/io5/index.js';
import { ThemeProvider as ThemeProvider$1 } from '@material-tailwind/react';

const $$Astro$7 = createAstro("https://astroplate.netlify.app");
const $$TwSizeIndicator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TwSizeIndicator;
  return renderTemplate`${process.env.NODE_ENV === "development" && renderTemplate`${maybeRenderHead()}<div class="fixed left-0 top-0 z-50 flex w-[30px] items-center justify-center bg-gray-200 py-[2.5px] text-[12px] uppercase text-black sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200"><span class="block sm:hidden">all</span><span class="hidden sm:block md:hidden">sm</span><span class="hidden md:block lg:hidden">md</span><span class="hidden lg:block xl:hidden">lg</span><span class="hidden xl:block 2xl:hidden">xl</span><span class="hidden 2xl:block">2xl</span></div>`}`;
}, "D:/Github/portafolio_cv/src/layouts/components/TwSizeIndicator.astro", void 0);

const site = {
	title: "Christian Avila",
	base_url: "https://astroplate.netlify.app",
	base_path: "/",
	trailing_slash: false,
	favicon: "/images/favicon.png",
	logo: "/images/logo.png",
	logo_darkmode: "/images/logo-darkmode.png",
	logo_width: "150",
	logo_height: "30",
	logo_text: "Christian Avila"
};
const settings = {
	search: false,
	sticky_header: true,
	theme_switcher: true,
	default_theme: "system",
	pagination: 2,
	summary_length: 200,
	blog_folder: "blog"
};
const params = {
	contact_form_action: "#",
	copyright: ""
};
const navigation_button = {
	enable: true,
	label: "Get Started",
	link: ""
};
const disqus = {
	enable: true,
	shortname: "themefisher-template",
	settings: {
	}
};
const metadata = {
	meta_author: "",
	meta_image: "/images/og-image.png",
	meta_description: ""
};
const config = {
	site: site,
	settings: settings,
	params: params,
	navigation_button: navigation_button,
	disqus: disqus,
	metadata: metadata
};

const colors = {
	"default": {
		theme_color: {
			primary: "#121212",
			body: "#fff",
			border: "#eaeaea",
			theme_light: "#f6f6f6",
			theme_dark: ""
		},
		text_color: {
			"default": "#444444",
			dark: "#040404",
			light: "#717171"
		}
	},
	darkmode: {
		theme_color: {
			primary: "#fff",
			body: "#1c1c1c",
			border: "#3E3E3E",
			theme_light: "#222222",
			theme_dark: ""
		},
		text_color: {
			"default": "#B4AFB6",
			dark: "#fff",
			light: "#B4AFB6"
		}
	}
};
const fonts = {
	font_family: {
		primary: "Heebo:wght@400;600",
		primary_type: "sans-serif",
		secondary: "Signika:wght@500;700",
		secondary_type: "sans-serif"
	},
	font_size: {
		base: "16",
		scale: "1.250"
	}
};
const theme = {
	colors: colors,
	fonts: fonts
};

const slugify = (content) => {
  return slug(content);
};
const markdownify = (content, div) => {
  return div ? marked.parse(content) : marked.parseInline(content);
};
const humanize = (content) => {
  return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(m) {
    return m.toUpperCase();
  });
};
const plainify = (content) => {
  const parseMarkdown = marked.parse(content);
  const filterBrackets = parseMarkdown.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};
const htmlEntityDecoder = (htmlWithEntities) => {
  let entityList = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'"
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};

const iconLibraries = {
  fa: FaIcons
};
const DynamicIcon = ({ icon, ...props }) => {
  const IconLibrary = getIconLibrary(icon);
  const Icon = IconLibrary ? IconLibrary[icon] : void 0;
  if (!Icon) {
    return /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Icon not found" });
  }
  return /* @__PURE__ */ jsx(Icon, { ...props });
};
const getIconLibrary = (icon) => {
  const libraryKey = icon.substring(0, 2).toLowerCase();
  return iconLibraries[libraryKey];
};

const $$Astro$6 = createAstro("https://astroplate.netlify.app");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Social;
  const { source, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(className, "class")}>${source.map((social) => renderTemplate`<li><a${addAttribute(social.name, "aria-label")}${addAttribute(social.link, "href")} target="_blank" rel="noopener noreferrer nofollow"><span class="sr-only">${social.name}</span>${renderComponent($$result, "DynamicIcon", DynamicIcon, { "class": "inline-block", "icon": social.icon })}</a></li>`)}</ul>`;
}, "D:/Github/portafolio_cv/src/layouts/components/Social.astro", void 0);

const main = [
	{
		name: "github",
		icon: "FaGithub",
		link: "https://github.com/Christian9721"
	},
	{
		name: "linkedin",
		icon: "FaLinkedin",
		link: "https://www.linkedin.com/in/christian-avila-9a83691aa/"
	}
];
const social = {
	main: main
};

const $$Astro$5 = createAstro("https://astroplate.netlify.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-theme-light dark:bg-darkmode-theme-light"><div class="container"><div class="row items-center py-10 justify-center"><div class="mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">${renderComponent($$result, "Social", $$Social, { "source": social.main, "className": "social-icons" })}</div></div></div></footer>`;
}, "D:/Github/portafolio_cv/src/layouts/partials/Footer.astro", void 0);

const $$Astro$4 = createAstro("https://astroplate.netlify.app");
const $$ThemeSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ThemeSwitcher;
  const {
    theme_switcher,
    default_theme
  } = config.settings;
  const { className } = Astro2.props;
  return renderTemplate`${theme_switcher && renderTemplate`${maybeRenderHead()}<div${addAttribute(`theme-switcher ${className}`, "class")}><input id="theme-switcher" data-theme-switcher type="checkbox"><label for="theme-switcher"><span><svg class="absolute left-[4px] top-[4px] z-10 opacity-100 dark:opacity-0" viewBox="0 0 56 56" fill="#fff" height="16" width="16"><path d="M30 4.6c0-1-.9-2-2-2a2 2 0 0 0-2 2v5c0 1 .9 2 2 2s2-1 2-2Zm9.6 9a2 2 0 0 0 0 2.8c.8.8 2 .8 2.9 0L46 13a2 2 0 0 0 0-2.9 2 2 0 0 0-3 0Zm-26 2.8c.7.8 2 .8 2.8 0 .8-.7.8-2 0-2.9L13 10c-.7-.7-2-.8-2.9 0-.7.8-.7 2.1 0 3ZM28 16a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12Zm23.3 14c1.1 0 2-.9 2-2s-.9-2-2-2h-4.9a2 2 0 0 0-2 2c0 1.1 1 2 2 2ZM4.7 26a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4.9c1 0 2-.9 2-2s-1-2-2-2Zm37.8 13.6a2 2 0 0 0-3 0 2 2 0 0 0 0 2.9l3.6 3.5a2 2 0 0 0 2.9 0c.8-.8.8-2.1 0-3ZM10 43.1a2 2 0 0 0 0 2.9c.8.7 2.1.8 3 0l3.4-3.5c.8-.8.8-2.1 0-2.9-.8-.8-2-.8-2.9 0Zm20 3.4c0-1.1-.9-2-2-2a2 2 0 0 0-2 2v4.9c0 1 .9 2 2 2s2-1 2-2Z"></path></svg><svg class="absolute left-[4px] top-[4px] z-10 opacity-0 dark:opacity-100" viewBox="0 0 24 24" fill="none" height="16" width="16"><path fill="#000" fill-rule="evenodd" clip-rule="evenodd" d="M8.2 2.2c1-.4 2 .6 1.6 1.5-1 3-.4 6.4 1.8 8.7a8.4 8.4 0 0 0 8.7 1.8c1-.3 2 .5 1.5 1.5v.1a10.3 10.3 0 0 1-9.4 6.2A10.3 10.3 0 0 1 3.2 6.7c1-2 2.9-3.5 4.9-4.4Z"></path></svg></span></label></div>`}`;
}, "D:/Github/portafolio_cv/src/layouts/components/ThemeSwitcher.astro", void 0);

const $$Astro$3 = createAstro("https://astroplate.netlify.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { navigation_button, settings } = config;
  Astro2.url;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`header z-30 ${settings.sticky_header && "sticky top-0"} min-h-[4rem] flex backdrop-blur-md transition-colors duration-200 bg-neutral-100/50 dark:bg-neutral-900/50  py-2`, "class")}><nav class="navbar container"><!-- logo --><div class="order-0">
CV
</div><!-- navbar toggler --><input id="nav-toggle" type="checkbox" class="hidden"><label for="nav-toggle" class="order-3 cursor-pointer flex items-center lg:hidden text-dark dark:text-white lg:order-1"><svg id="show-button" class="h-6 fill-current block" viewBox="0 0 20 20"><title>Menu Open</title><path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path></svg><svg id="hide-button" class="h-6 fill-current hidden" viewBox="0 0 20 20"><title>Menu Close</title><polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)"></polygon></svg></label><!-- /navbar toggler --><div class="order-1 ml-auto flex items-center md:order-2 lg:ml-0">${settings.search && renderTemplate`<a class="mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white" href="/search" aria-label="search">${renderComponent($$result, "IoSearch", IoSearch, {})}</a>`}${renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, { "className": "mr-5" })}</div></nav></header>`;
}, "D:/Github/portafolio_cv/src/layouts/partials/Header.astro", void 0);

const $$Astro$2 = createAstro("https://astroplate.netlify.app");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Github/portafolio_cv/node_modules/astro/components/ViewTransitions.astro", void 0);

function ThemeProvider({ children }) {
  return /* @__PURE__ */ jsx(ThemeProvider$1, { children });
}

const $$Astro$1 = createAstro("https://astroplate.netlify.app");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Base;
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const { title, meta_title, description, image, noindex, canonical } = Astro2.props;
  return renderTemplate`<html lang="en"><head><!-- favicon --><link rel="shortcut icon"${addAttribute(config.site.favicon, "href")}><!-- theme meta --><meta name="theme-name" content="astroplate"><meta name="msapplication-TileColor" content="#000000"><meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!-- google font css --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link${addAttribute(`https://fonts.googleapis.com/css2?family=${pf}${"&family=" + sf }&display=swap`, "href")} rel="stylesheet"><!-- responsive meta --><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"><!-- title --><title>
      ${plainify(meta_title ? meta_title : title ? title : config.site.title)}
    </title><!-- canonical url -->${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")} item-prop="url">`}<!-- noindex robots -->${noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}<!-- meta-description --><meta name="description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<!-- author from config.json --><meta name="author"${addAttribute(config.metadata.meta_author, "content")}><!-- og-title --><meta property="og:title"${addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content")}><!-- og-description --><meta property="og:description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(`${config.site.base_url}/${Astro2.url.pathname.replace("/", "")}`, "content")}><!-- twitter-title --><meta name="twitter:title"${addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content")}><!-- twitter-description --><meta name="twitter:description"${addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content")}><!-- og-image --><meta property="og:image"${addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content")}><!-- twitter-image --><meta name="twitter:image"${addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content")}><meta name="twitter:card" content="summary_large_image">${renderHead()}</head><body>${renderComponent($$result, "ThemeProvider", ThemeProvider, {}, { "default": ($$result2) => renderTemplate`<svg id="morph_filter" style="position: absolute;"><defs><filter id="threshold"><!-- Basically just a threshold effect - pixels with a high enough opacity are set to full opacity, and all other pixels are set to completely transparent. --><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0
                          0 0 0 255 -140"></feColorMatrix></filter></defs></svg>${renderComponent($$result2, "TwSizeIndicator", $$TwSizeIndicator, {})}${renderComponent($$result2, "Header", $$Header, {})}<main id="main-content transition-colors duration-200">${renderSlot($$result2, $$slots["default"])}</main>${renderComponent($$result2, "Footer", $$Footer, {})}` })}</body></html>`;
}, "D:/Github/portafolio_cv/src/layouts/Base.astro", void 0);

const $$Astro = createAstro("https://astroplate.netlify.app");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="section-sm text-center"><div class="container"><div class="row justify-center"><div class="sm:col-10 md:col-8 lg:col-6"><span class="text-[8rem] block font-bold text-dark dark:text-darkmode-dark">
404
</span><h1 class="h2 mb-4">Page not found</h1><div class="content"><p>
The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
</p></div><a href="/" class="btn btn-primary mt-8">Back to home</a></div></div></div></section>` })}`;
}, "D:/Github/portafolio_cv/src/pages/404.astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/404.astro";
const $$url = "/404.html";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Base as $, _404 as _, $$Social as a, config as c, humanize as h, markdownify as m, plainify as p, slugify as s };
