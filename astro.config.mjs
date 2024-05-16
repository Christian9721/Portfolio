import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig, squooshImageService } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import netlify from '@astrojs/netlify/functions';

const SERVER_PORT = 4321;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://christianavilacv.netlify.app";
const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;

if (isBuild) {
  BASE_URL = LIVE_URL;
}
//console.log(`site: ${BASE_URL}`);

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  prefetch: true,
  server: { port: SERVER_PORT },
  redirects: {
    '/': '/en'
  },
  adapter: netlify({
    edgeMiddleware: true
  }),
  site: BASE_URL,
  image: {
    service: squooshImageService(),
  },
  integrations: [
    react(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  /*i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "jp"],
    routing: {
      prefixDefaultLocale: false
    }
  },*/
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  build: {
    format: config.site.trailing_slash ? 'directory' : 'file',
  },
});
