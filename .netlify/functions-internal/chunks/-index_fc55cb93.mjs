import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_2ee567cb.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Christian Avila","meta_title":"About","description":"","image":"/images/avatar.png","draft":false};
				const file = "C:/Users/Usuario/Desktop/chris/portafolio.github.io/src/content/about/-index.md";
				const url = undefined;
				function rawContent() {
					return "\r\n";
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