import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_4ddf9a2a.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"How to build an Application with modern Technology","meta_title":"","description":"this is meta description","date":"2022-04-04T05:00:00.000Z","image":"/images/image-placeholder.png","categories":["Application","Data"],"author":"Christian Avila","tags":["nextjs","tailwind"],"projects":["venn","cele","currie","accesos","lixenium","dotchain","amongspikes","nissan"],"draft":false};
				const file = "D:/Github/portafoliocv/src/content/blog/post-1.md";
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
