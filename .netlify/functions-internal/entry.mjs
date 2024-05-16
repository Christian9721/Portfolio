import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ede52096.mjs';

const _page0  = () => import('./chunks/generic_125c929b.mjs');
const _page1  = () => import('./chunks/index_3e7b980a.mjs');
const _page2  = () => import('./chunks/index_48b2646c.mjs');
const _page3  = () => import('./chunks/_project__661b37e3.mjs');
const _page4  = () => import('./chunks/about_c6037395.mjs');
const _page5  = () => import('./chunks/index_98d8f264.mjs');
const _page6  = () => import('./chunks/_tag__5d352ba9.mjs');
const _page7  = () => import('./chunks/404_44ccb62c.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/projects/index.astro", _page2],["src/pages/projects/[project].astro", _page3],["src/pages/about.astro", _page4],["src/pages/tags/index.astro", _page5],["src/pages/tags/[tag].astro", _page6],["src/pages/404.astro", _page7]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
