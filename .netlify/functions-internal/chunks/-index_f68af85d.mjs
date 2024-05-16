import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_4ddf9a2a.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"banner":{"title":"Christian Avila","content":"Programmer with more than [2]+ years of experience creating quality software and high attention to [UI/UX].","image":"/images/banner.png","button":{"enable":true,"label":"Download CV","link":"https://github.com/zeon-studio/astroplate"}},"features":[{"title":"What's Included in Astroplate","image":"/images/service-1.png","content":"Astroplate is a comprehensive starter template that includes everything you need to get started with your Astro project. What's Included in Astroplate","bulletpoints":["10+ Pre-build pages","95+ Google Pagespeed Score","Build with Astro and TailwindCSS for easy and customizable styling","Fully responsive on all devices","SEO-optimized for better search engine rankings","**Open-source and free** for personal and commercial use"],"button":{"enable":false,"label":"Get Started Now","link":"#"}},{"title":"Discover the Key Features Of Astro","image":"/images/service-2.png","content":"Astro is an all-in-one web framework for building fast, content-focused websites. It offers a range of exciting features for developers and website creators. Some of the key features are:","bulletpoints":["Zero JS, by default: No JavaScript runtime overhead to slow you down.","Customizable: Tailwind, MDX, and 100+ other integrations to choose from.","UI-agnostic: Supports React, Preact, Svelte, Vue, Solid, Lit and more."],"button":{"enable":true,"label":"Get Started Now","link":"https://github.com/zeon-studio/astroplate"}},{"title":"The Top Reasons to Choose Astro for Your Next Project","image":"/images/service-3.png","content":"With Astro, you can build modern and content-focused websites without sacrificing performance or ease of use.","bulletpoints":["Instantly load static sites for better user experience and SEO.","Intuitive syntax and support for popular frameworks make learning and using Astro a breeze.","Use any front-end library or framework, or build custom components, for any project size.","Built on cutting-edge technology to keep your projects up-to-date with the latest web standards."],"button":{"enable":false,"label":"","link":""}}]};
				const file = "D:/Github/portafoliocv/src/content/homepage/-index.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
