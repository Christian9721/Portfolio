import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro_4ddf9a2a.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"categories.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/categories","type":"page","pattern":"^\\/categories$","segments":[[{"content":"categories","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categories/index.astro","pathname":"/categories","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.65216643.js"}],"styles":[{"type":"external","src":"/_astro/about.6ccd262c.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/projects","type":"page","pattern":"^\\/projects$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.65216643.js"}],"styles":[{"type":"external","src":"/_astro/about.6ccd262c.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.65216643.js"}],"styles":[{"type":"external","src":"/_astro/about.6ccd262c.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/tags","type":"page","pattern":"^\\/tags$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.65216643.js"}],"styles":[{"type":"external","src":"/_astro/about.6ccd262c.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"site":"https://astroplate.netlify.app","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["D:/Github/portafolio_cv/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/Github/portafolio_cv/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["D:/Github/portafolio_cv/src/pages/categories/[category].astro",{"propagation":"in-tree","containsHead":true}],["D:/Github/portafolio_cv/src/pages/categories/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/Github/portafolio_cv/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Github/portafolio_cv/src/pages/projects/[project].astro",{"propagation":"in-tree","containsHead":true}],["D:/Github/portafolio_cv/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/Github/portafolio_cv/src/pages/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["D:/Github/portafolio_cv/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/Github/portafolio_cv/src/lib/contentParser.astro",{"propagation":"in-tree","containsHead":false}],["D:/Github/portafolio_cv/src/lib/taxonomyParser.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/categories/[category]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/categories/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/[project]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Github/portafolio_cv/src/layouts/partials/PageHeader.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_9d1ca55d.mjs","\u0000@astrojs-manifest":"manifest_2458fe7e.mjs","D:/Github/portafolio_cv/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_e96f1d58.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_060de420.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_79ca3bec.mjs","\u0000@astro-page:src/pages/categories/index@_@astro":"chunks/index_0188aa14.mjs","\u0000@astro-page:src/pages/categories/[category]@_@astro":"chunks/_category__74f6379e.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_b64679fa.mjs","\u0000@astro-page:src/pages/projects/[project]@_@astro":"chunks/_project__03d3b123.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_42baf3d2.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_395c8fcc.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag__67a5faaa.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_b0cc22ef.mjs","D:/Github/portafolio_cv/src/content/about/-index.md?astroContentCollectionEntry=true":"chunks/-index_42c7caf6.mjs","D:/Github/portafolio_cv/src/content/blog/-index.md?astroContentCollectionEntry=true":"chunks/-index_6144a62c.mjs","D:/Github/portafolio_cv/src/content/blog/post-1.md?astroContentCollectionEntry=true":"chunks/post-1_f6a59359.mjs","D:/Github/portafolio_cv/src/content/homepage/-index.md?astroContentCollectionEntry=true":"chunks/-index_df30abe1.mjs","D:/Github/portafolio_cv/src/content/pages/elements.mdx?astroContentCollectionEntry=true":"chunks/elements_85da0948.mjs","D:/Github/portafolio_cv/src/content/pages/privacy-policy.md?astroContentCollectionEntry=true":"chunks/privacy-policy_c1dc8304.mjs","D:/Github/portafolio_cv/src/content/about/-index.md?astroPropagatedAssets":"chunks/-index_58e2e2c7.mjs","D:/Github/portafolio_cv/src/content/blog/-index.md?astroPropagatedAssets":"chunks/-index_e966babf.mjs","D:/Github/portafolio_cv/src/content/blog/post-1.md?astroPropagatedAssets":"chunks/post-1_5f4e4954.mjs","D:/Github/portafolio_cv/src/content/homepage/-index.md?astroPropagatedAssets":"chunks/-index_df67d3c4.mjs","D:/Github/portafolio_cv/src/content/pages/elements.mdx?astroPropagatedAssets":"chunks/elements_c3e5488a.mjs","D:/Github/portafolio_cv/src/content/pages/privacy-policy.md?astroPropagatedAssets":"chunks/privacy-policy_d65fb248.mjs","D:/Github/portafolio_cv/src/content/about/-index.md":"chunks/-index_af62a825.mjs","D:/Github/portafolio_cv/src/content/blog/-index.md":"chunks/-index_38a2b829.mjs","D:/Github/portafolio_cv/src/content/blog/post-1.md":"chunks/post-1_ea21184f.mjs","D:/Github/portafolio_cv/src/content/homepage/-index.md":"chunks/-index_734f3d35.mjs","D:/Github/portafolio_cv/src/content/pages/elements.mdx":"chunks/elements_ec374c51.mjs","D:/Github/portafolio_cv/src/content/pages/privacy-policy.md":"chunks/privacy-policy_e0ac1fa3.mjs","@/components/Tab.component":"_astro/Tab.a1cc726b.js","@/components/InfiniteScroll":"_astro/InfiniteScroll.1cc97b1a.js","D:/Github/portafolio_cv/src/layouts/components/Timeline.component":"_astro/Timeline.695b8455.js","@astrojs/react/client.js":"_astro/client.eaa6d154.js","@/shortcodes/Youtube":"_astro/Youtube.1adf0884.js","@/shortcodes/Accordion":"_astro/Accordion.c8d9e24a.js","@/components/Carousel.component":"_astro/Carousel.bc955da6.js","/astro/hoisted.js?q=0":"_astro/hoisted.65216643.js","@/shortcodes/Tabs":"_astro/Tabs.d0157e78.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/Christian Avila EN.53debf8b.pdf","/_astro/index3.da0f051e.PNG","/_astro/index2.ac796ad6.png","/_astro/index1.6f10fa68.PNG","/_astro/index5.de186301.PNG","/_astro/index4.fc770ec6.PNG","/_astro/index2.17e02015.PNG","/_astro/index4.13ae39e9.png","/_astro/index3.6b77210d.png","/_astro/index6.a79d3dd3.PNG","/_astro/index6.d63c6880.png","/_astro/index3.4eae3538.png","/_astro/index4.ef488372.png","/_astro/index2.b3f602e6.png","/_astro/venn1.7e3737f0.png","/_astro/currie1.ca63c95f.png","/_astro/index.1e63f4a1.png","/_astro/index5.4e75e9f2.png","/_astro/index1.f2a26686.png","/_astro/currie2.7af6c235.png","/_astro/venn2.352ef89f.PNG","/_astro/venn4.53360b1f.PNG","/_astro/venn3.f03850a3.png","/_astro/accesos1.269b33da.png","/_astro/venn5.be87c38b.PNG","/_astro/accesos3.10050375.png","/_astro/accesos2.0ccc35ae.png","/_astro/accesos4.cdbdece0.png","/_astro/accesos5.662f6123.png","/_astro/nissan2.c4cad0dc.png","/_astro/nissan3.8a8a8730.png","/_astro/nissan1.c2c3bc22.png","/_astro/nissan5.4c7feb04.png","/_astro/nissan6.deb936fb.png","/_astro/nissan4.279ef01f.png","/_astro/about.6ccd262c.css","/robots.txt","/documents/Christian Avila EN.pdf","/images/avatar-sm.png","/images/avatar.png","/images/banner.png","/images/call-to-action.png","/images/favicon.png","/images/image-placeholder.png","/images/logo-darkmode.png","/images/logo.png","/images/mobile_mock.png","/images/no-search-found.png","/images/service-1.png","/images/service-2.png","/images/service-3.png","/icons/Astro.icon.tsx","/icons/CSharp.icon.tsx","/icons/CSS.icon.tsx","/icons/Flutter.icon.tsx","/icons/Git.icon.tsx","/icons/HTML.icon.tsx","/icons/index.ts","/icons/Java.icon.tsx","/icons/Javascript.icon.tsx","/icons/Jest.icon.tsx","/icons/Node.icon.tsx","/icons/Qwik.icon.tsx","/icons/React.icon.tsx","/icons/Sass.icon.tsx","/icons/Tailwind.icon.tsx","/icons/Typescript.icon.tsx","/icons/Unity.icon.tsx","/icons/Vue.icon.tsx","/icons/Webpack.icon.tsx","/icons/World.icon.tsx","/_astro/Accordion.c8d9e24a.js","/_astro/CardShowcase.component.a19b7a87.js","/_astro/Carousel.bc955da6.js","/_astro/client.eaa6d154.js","/_astro/hoisted.65216643.js","/_astro/Icons.04a03fa9.js","/_astro/index.54d6e26b.js","/_astro/index.9f996584.js","/_astro/index.e3ea2dda.js","/_astro/index.ed09dd97.css","/_astro/InfiniteScroll.1cc97b1a.js","/_astro/jsx-runtime.965579d7.js","/_astro/LiteYouTubeEmbed.4f7e649e.css","/_astro/Tab.a1cc726b.js","/_astro/Tabs.d0157e78.js","/_astro/Timeline.695b8455.js","/_astro/Youtube.1adf0884.js","/index.html","/categories.html"]});

export { manifest };