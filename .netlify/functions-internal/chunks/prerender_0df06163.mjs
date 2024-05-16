import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
/* empty css                              */import { d as createAstro, e as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, u as unescapeHTML, f as addAttribute } from './astro_fa887e8b.mjs';
/* empty css                          */import { m as markdownify, $ as $$Base } from './pages/404_57705144.mjs';
import { d as getEntryBySlug } from './pages/_category__bae937cd.mjs';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { d as dateDiffToString } from './pages/_single__e99675c3.mjs';
import { E as Experience } from './pages/_project__08d7c445.mjs';
import 'clsx';
import 'html-escaper';
import 'github-slugger';
import 'marked';
import 'react-icons/fa6/index.js';
import 'react-icons/io5/index.js';
import '@material-tailwind/react';
import '@astrojs/internal-helpers/path';
import './astro-assets-services_5113d99a.mjs';
import 'probe-image-size';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'module';
import 'worker_threads';
import 'react-icons/fa/index.js';
/* empty css                              */import 'disqus-react';
import 'date-fns-tz';

const SvgComponent$h = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", ...props, children: [
  /* @__PURE__ */ jsxs("defs", { children: [
    /* @__PURE__ */ jsxs(
      "linearGradient",
      {
        id: "a",
        x1: 882.997,
        x2: 638.955,
        y1: 27.113,
        y2: 866.902,
        gradientTransform: "scale(.1)",
        gradientUnits: "userSpaceOnUse",
        children: [
          /* @__PURE__ */ jsx("stop", { offset: 0, stopColor: "#000014" }),
          /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#150426" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "linearGradient",
      {
        id: "b",
        x1: 1001.68,
        x2: 790.326,
        y1: 652.45,
        y2: 1094.91,
        gradientTransform: "scale(.1)",
        gradientUnits: "userSpaceOnUse",
        children: [
          /* @__PURE__ */ jsx("stop", { offset: 0, stopColor: "#ff1639" }),
          /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#ff1639", stopOpacity: 0 })
        ]
      }
    )
  ] }),
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "url(#a)",
      d: "M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "#ff5d01",
      d: "M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137-10.07 0-18.515-3.137-20.754-7.356-.8 2.418-.98 5.184-.98 6.954 0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938 2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41 15.55 15.55 0 0 0-.734-4.735Zm0 0"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "url(#b)",
      d: "M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137-10.07 0-18.515-3.137-20.754-7.356-.8 2.418-.98 5.184-.98 6.954 0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938 2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41 15.55 15.55 0 0 0-.734-4.735Zm0 0"
    }
  )
] });

const SvgComponent$g = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    fillRule: "evenodd",
    clipRule: "evenodd",
    imageRendering: "optimizeQuality",
    shapeRendering: "geometricPrecision",
    textRendering: "geometricPrecision",
    viewBox: "0 0 296297 333333",
    ...props,
    children: [
      /* @__PURE__ */ jsxs("defs", { children: [
        /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            id: "id4",
            x1: 54128.7,
            x2: 240318,
            y1: 79355.5,
            y2: 79355.5,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx("stop", { offset: 0, stopColor: "#e8e7e5" }),
              /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#fff" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            id: "id5",
            x1: 62019.3,
            x2: 233515,
            y1: 202868,
            y2: 202868,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx("stop", { offset: 0, stopColor: "#e8e7e5" }),
              /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#fff" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            id: "id6",
            x1: 104963,
            x2: 104963,
            y1: 99616.9,
            y2: 171021,
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx("stop", { offset: 0, stopColor: "#d1d3d4" }),
              /* @__PURE__ */ jsx("stop", { offset: 0.388, stopColor: "#d1d3d4" }),
              /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#d1d3d4" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "linearGradient",
          {
            xlinkHref: "#id6",
            id: "id7",
            x1: 194179,
            x2: 194179,
            y1: 61185.8,
            y2: 135407,
            gradientUnits: "userSpaceOnUse"
          }
        ),
        /* @__PURE__ */ jsxs("mask", { id: "id0", children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "id1",
              x1: 104963,
              x2: 104963,
              y1: 99616.9,
              y2: 171021,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: 0, stopColor: "#fff", stopOpacity: 0 }),
                /* @__PURE__ */ jsx("stop", { offset: 0.388, stopColor: "#fff" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.831 })
              ]
            }
          ),
          /* @__PURE__ */ jsx("path", { fill: "url(#id1)", d: "M61737 99467h86453v71704H61737z" })
        ] }),
        /* @__PURE__ */ jsxs("mask", { id: "id2", children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "id3",
              x1: 194179,
              x2: 194179,
              y1: 61185.8,
              y2: 135407,
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: 0, stopColor: "#fff", stopOpacity: 0 }),
                /* @__PURE__ */ jsx("stop", { offset: 0.388, stopColor: "#fff" }),
                /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.831 })
              ]
            }
          ),
          /* @__PURE__ */ jsx("path", { fill: "url(#id3)", d: "M147890 61036h92578v74521h-92578z" })
        ] }),
        /* @__PURE__ */ jsx("style", { children: ".fil6{fill:#000;fill-opacity:.05098}" })
      ] }),
      /* @__PURE__ */ jsx("g", { id: "Layer_x0020_1", children: /* @__PURE__ */ jsxs("g", { id: "_513085304", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#2062af",
            d: "m268517 300922-120369 32411-120371-32411L0 0h296297z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#3c9cd7",
            d: "M148146 24374v283109l273 74 97409-26229 22485-256954z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#fff",
            d: "m148040 99617-86153 35880 2857 35524 83296-35614 88604-37883 3674-36339-92278 38432z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#id6)",
            d: "m61887 135497 2857 35524 83295-35614V99617z",
            mask: "url(#id0)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#id7)",
            d: "m240318 61186-92278 38431v35790l88604-37883z",
            mask: "url(#id2)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#id5)",
            d: "m62019 135497 2858 35524 127806 407-2859 47365-42055 11840-40428-10208-2450-29399H67327l4900 56756 75950 22457 75538-22050 9800-112692z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M148040 135497H61888l2857 35524 83295 266v-35790zm0 95022-408 114-40422-10208-2450-29399H67197l4899 56756 75944 22457v-39720z",
            className: "fil6"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#id4)",
            d: "M54129 61186h186189l-3674 36339H58620l-4491-36339z"
          }
        ),
        /* @__PURE__ */ jsx("path", { d: "M148040 61186H54129l4491 36339h89420z", className: "fil6" })
      ] }) })
    ]
  }
);

const SvgComponent$f = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xmlSpace: "preserve",
    id: "Layer_1",
    x: 0,
    y: 0,
    viewBox: "0 0 124.79 132.69",
    ...props,
    children: [
      /* @__PURE__ */ jsx("style", { children: ".st7{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}" }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { id: "SVGID_1_", d: "M7.18 126.39V3.45h109.19v122.94H7.18" }) }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "path",
        {
          id: "SVGID_2_",
          d: "M111.65 30.67 66.5 4.61c-2.6-1.5-6.86-1.5-9.46 0L11.91 30.67c-2.6 1.5-4.73 5.19-4.73 8.19v52.12c.2 3.5 1.99 6.39 4.73 8.19l45.14 26.06c2.6 1.5 6.86 1.5 9.46 0l45.14-26.06c2.94-1.95 4.61-4.9 4.73-8.19V38.86c-.11-3.16-2-6.35-4.73-8.19z"
        }
      ) }),
      /* @__PURE__ */ jsx("clipPath", { id: "SVGID_3_", children: /* @__PURE__ */ jsx(
        "use",
        {
          xlinkHref: "#SVGID_1_",
          style: {
            overflow: "visible"
          }
        }
      ) }),
      /* @__PURE__ */ jsx(
        "clipPath",
        {
          id: "SVGID_4_",
          style: {
            clipPath: "url(#SVGID_3_)"
          },
          children: /* @__PURE__ */ jsx(
            "use",
            {
              xlinkHref: "#SVGID_2_",
              style: {
                overflow: "visible"
              }
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "g",
        {
          style: {
            clipPath: "url(#SVGID_4_)"
          },
          children: /* @__PURE__ */ jsx(
            "image",
            {
              xlinkHref: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEBkAGQAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAaaAAAGpgAABsr/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIArECYwMBIgACEQEDEQH/ xABfAAEBAQAAAAAAAAAAAAAAAAAAAQcBAQAAAAAAAAAAAAAAAAAAAAAQAQEAAAAAAAAAAAAAAAAA AKDAEQEAAAAAAAAAAAAAAAAAAADAEgEAAAAAAAAAAAAAAAAAAACg/9oADAMBAAIRAxEAAADQAAAA AAAAAAAAAAAACFQAAVBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAFQUAAAAAAAAAAAAAA AAAAAAAAAAAAAAAgAAAAAAAAABUoAAAAAAAAAAAAAAAAAAAAAAAAAIWAAAAAAAAAAAAAsFSgAAAA AAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAsFAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAA AVBQAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAACwVKAAAAAAAAAAACFgAAAAAAAAAAAAAAAA AAAAAAAAAALBUoAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVBQAAAAEAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAFSgACWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACygEAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAABQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQQAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUEA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA FBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAABQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQQAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAFBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAABQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQQAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAFBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUEWAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAoABFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAJRAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAEUQAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAA BFgAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAJRFgAAAAAAAAAAAAAAAAAAAAKSgAAAAAAA AAAAAAAAAAlEAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAARRAAAAAAAAAAAAAAFAAAAAAA AAAAAAAAAAAAAAAAACURYAAAAAAAAAACkoAAAAAAAAAAAAAAAAAAAAAAAAAAAJRFgAAAAAAKSgAA AAAAAAAAAAAAAAAAAAAAAAAAAAAABFEAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAf//aAAgBAgABBQBWn//aAAgBAwABBQBWn//aAAgBAQABBQCor//aAAgBAgIG PwBWn//aAAgBAwIGPwBWn//aAAgBAQEGPwBRX//Z",
              width: 606,
              height: 683,
              style: {
                overflow: "visible"
              },
              transform: "matrix(.1802 0 0 -.18 7.179 126.39)"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { id: "SVGID_5_", d: "M60.6 99h64.19V33.36H60.6V99z" }) }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "path",
        {
          id: "SVGID_6_",
          d: "M111.65 30.67 66.5 4.61c-2.6-1.5-6.86-1.5-9.46 0L11.91 30.67c-2.6 1.5-4.73 5.19-4.73 8.19v52.12c.2 3.5 1.99 6.39 4.73 8.19l45.14 26.06c2.6 1.5 6.86 1.5 9.46 0l45.14-26.06c2.94-1.95 4.61-4.9 4.73-8.19V38.86c-.11-3.16-2-6.35-4.73-8.19z"
        }
      ) }),
      /* @__PURE__ */ jsx("clipPath", { id: "SVGID_7_", children: /* @__PURE__ */ jsx(
        "use",
        {
          xlinkHref: "#SVGID_5_",
          style: {
            overflow: "visible"
          }
        }
      ) }),
      /* @__PURE__ */ jsx(
        "clipPath",
        {
          id: "SVGID_8_",
          style: {
            clipPath: "url(#SVGID_7_)"
          },
          children: /* @__PURE__ */ jsx(
            "use",
            {
              xlinkHref: "#SVGID_6_",
              style: {
                overflow: "visible"
              }
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs(
        "g",
        {
          style: {
            clipPath: "url(#SVGID_8_)"
          },
          children: [
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { id: "SVGID_9_", d: "M60.58 33.24h55.92V99H60.58z" }) }),
            /* @__PURE__ */ jsx("clipPath", { id: "SVGID_10_", children: /* @__PURE__ */ jsx(
              "use",
              {
                xlinkHref: "#SVGID_9_",
                style: {
                  overflow: "visible"
                }
              }
            ) }),
            /* @__PURE__ */ jsx(
              "g",
              {
                style: {
                  clipPath: "url(#SVGID_10_)"
                },
                children: /* @__PURE__ */ jsx(
                  "image",
                  {
                    xlinkHref: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAALrAAADmAAABVb/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAJAAfQMBIgACEQEDEQH/ xACkAAEBAQEBAQAAAAAAAAAAAAAABgcFAQQBAQADAQEAAAAAAAAAAAAAAAABAgMEBRAAAQAHCAMB AQEAAAAAAAAAADABAgMENQYgEjIzFkYHFxMUBRURJREAAAIIBgAEBwAAAAAAAAAAAMIwAhIDc6ME hBET0+M0NQFRoRQhIjJiQyQVEgACAQMDBQEBAAAAAAAAAAAAAQIgMXERA3MhoTKSM0ES/9oADAMB AAIRAxEAAADv8j5ZL0tbdENJt0QLdEIW6IFuhxcIcXFNkOm414ElWyXTYNrBAAB56h4BpuZabz14 ElWyWgNrABAAB56h5puZ6Zz14ElWyWgNrAABAABpmZ6ZzV4ElWyWoNrBAAAIANMzPTOavAkq2S1B tYAIAAANMzPTOavAk6yT0PPW1vAABAABpmZ6ZzV4EnWSegNrPPR498AAAg0zM9M5q8CTvZ2XEdtt PEdscR20OG7g4buDhu4OHpkfc89f/9oACAECAAEFAHEM6adeo4PUcHquD1XB6rk9VyPnDtlcNk2o jFDZNqIxQ2TaiMUNk2ojFDZNqJxQ2TaicUNkWonFDvXanPmdHmdHmdHmdHmdHmdEQ8dra//aAAgB AwABBQBllS1XGS4yXGS4yXGS4yNMqUM4bTQzhtNDOG00M4bTQzhtNDOG00M4bTQytX8vKLyi8ovK Lyi8oaWo/9oACAEBAAEFAKiqv8KK7JOyTsk7JOyTsk7JOyTsk7JOyTsk7JOyT9f/AAuRZom2LyLN E2xeRZom2LyLNE2xeRZom2LyLNE2xeRJom2LyJNE2xeRJom2LyJNE2xeRJom2LyJNE2xeRJom2Ly JNE2xeRJom2LyJNE2xaz+D9b6kfoypTRlSmjKlNGVKaMqU0ZUpoypTRlSmjKlNGVKaMqU0ZUpoyp TRlSn58ZpT//2gAIAQICBj8AjKUdW116s8O7PDuzw7s8O7PDuzw7s21GOn9bii+rsQxXs8sSGK9n liQxXs8sSGK9nliQxXs8sSGK9nliQxXs8sSCc4JpWckfSHsj6Q9kfSHsj6Q9kfSHsj6Q9kbWk4vT dTejsj//2gAIAQMCBj8AT0LFixYsWF0/RVxyKuORVxyKuORVxyKuORVxyLqXRdF0XRdF0Lr+n//a AAgBAQEGPwB1T+19xmu8xrMYw+Pirhgwt5DrZ+0Otn7Q62ftDrZ+0Otn7Q62ftDrZ+0Otn7Q62ft DrZ+0Otn7Q62ftDrZ+0Otn7Q/sZP4PcZLX2tMts+uApoB1k9gQU0A6yewIKaAdZPYkFNAOsnsSCm gHWT2JBTQDrJ7EgpoB1k9iQU0A6yexIKaAdZPYkFNAOsnsSCmgHWT2JBTQDrJ7EgpoB1k9iQU0A6 yexIKaAdZPYkFNAOsnsSBw+oXGc7UdMLLNqK4LNLeOHzrK+Y4c11qDhzXWoOHNdag4c11qDhzXWo OHNdag4c11qDhzXWoOHNdag4c11qDhzXWoOHNdag4c11qDhzXWoP52X+37TKy2lfrZwwaxZ9R//Z",
                    width: 124,
                    height: 141,
                    style: {
                      overflow: "visible"
                    },
                    transform: "matrix(.48 0 0 -.48 59.372 100.107)"
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "path",
        {
          id: "SVGID_11_",
          d: "M124.79 101.36 42.18 53.55H0v79.14h124.79v-31.33z"
        }
      ) }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "path",
        {
          id: "SVGID_12_",
          d: "M111.65 30.67 66.5 4.61c-2.6-1.5-6.86-1.5-9.46 0L11.91 30.67c-2.6 1.5-4.73 5.19-4.73 8.19v52.12c.2 3.5 1.99 6.39 4.73 8.19l45.14 26.06c2.6 1.5 6.86 1.5 9.46 0l45.14-26.06c2.94-1.95 4.61-4.9 4.73-8.19V38.86c-.11-3.16-2-6.35-4.73-8.19z"
        }
      ) }),
      /* @__PURE__ */ jsx("clipPath", { id: "SVGID_13_", children: /* @__PURE__ */ jsx(
        "use",
        {
          xlinkHref: "#SVGID_11_",
          style: {
            overflow: "visible"
          }
        }
      ) }),
      /* @__PURE__ */ jsx(
        "clipPath",
        {
          id: "SVGID_14_",
          style: {
            clipPath: "url(#SVGID_13_)"
          },
          children: /* @__PURE__ */ jsx(
            "use",
            {
              xlinkHref: "#SVGID_12_",
              style: {
                overflow: "visible"
              }
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs(
        "g",
        {
          style: {
            clipPath: "url(#SVGID_14_)"
          },
          children: [
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { id: "SVGID_15_", d: "M7.06 53.4h108v72.96h-108z" }) }),
            /* @__PURE__ */ jsx("clipPath", { id: "SVGID_16_", children: /* @__PURE__ */ jsx(
              "use",
              {
                xlinkHref: "#SVGID_15_",
                style: {
                  overflow: "visible"
                }
              }
            ) }),
            /* @__PURE__ */ jsx(
              "g",
              {
                style: {
                  clipPath: "url(#SVGID_16_)"
                },
                children: /* @__PURE__ */ jsx(
                  "image",
                  {
                    xlinkHref: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAANnAAAEfQAABp//2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAJ4A6QMBIgACEQEDEQH/ xACiAAEBAQEBAQEAAAAAAAAAAAAABgcDAQQFAQEBAQEBAQAAAAAAAAAAAAAAAQMCBAUQAAEBBAkE AwEAAAAAAAAAAAADBBQGFzBAARECEjQ2BzFCM0QTIwUyEQABAgQHAAIBBQEAAAAAAAADAAKRknM0 EEABsbLTBBEiYiExQXESExIAAQMDBAIDAAAAAAAAAAAAADABMYECMhFx4YISgyFhIv/aAAwDAQAC EQMRAAAA/c/DR30NLFHNbYo4WKORYo4WKOFijRZI0WSNFkjUWSNFkjRZI0WKO8jRq3MNPy5z+OsY 70dBr0AAA8IAAACAAB4gRSafmGn4c5/HWMdrQ16AHgEAAABAAB4QIApNPzDT8Oc/jrGO0obdHgCA AAAgAB4SAAAUmn5hp/n5z+OsY7WvDboIAACAAB4gQAAAEUmn5hp+HOfxtlG60NegAAgAAeIEAAAB AFJp+Yafhzn8bZRutDXoAIAAeCBAAAQAAPCk1DL9Qw5z+Nso3Sht0EAAjwgAAAIAAPAEUmoZfqGP OfxtlG6UNegB4gQAAAEAAPACAKTUMv1DDnP422kNLwd2t4O4+d9Hhwd0cHccHccHccHdHB3HDz6B 876B87ujg7j93UM00vHn/9oACAECAAEFAEEE8SbuiO6I7ojuiO6I7pDukO6Q7pDukO6Q7pDukfFg +dn8NL7DP4aX2Gfw0vsM/hpfYZ/FS+wz+Kl9hn8VL7DP4qX2ELfqvLy8vLy8vLy8vLy8vL/v/9oA CAEDAAEFAMOGy2zLhMuEy2GWwy2GWwy2GWwy2GWwy2GWwy2F1mbD/NL3YelL3YelL3YelL3YelL3 YelL3YelL3YelL3YelL3f//aAAgBAQABBQCKIoX/AA15jtpMdtJjtpMdtJjtpMdtJjtpMdtJkNpM htJkNpMhtJkNpMhtJkNpMhtJkNpMhtJkNpMhtJkNpMhtJkNpMhtJkNpMhtJkNpDsZNP7H6RyPra3 AW4TkfW1uAtwnI+trcBbhOR9bW4C3Ccj62twFuE5H1tbgHcJyPra3AO4TkjW1uAdwnJGtrcA7hOS NbW4B3Ccka2twDuE5I1tbgHcJyRra3AO4TkjW1uAdwnJGtrcA7hOSNbW4B3Ccka2twDuE5I1tbgH cJyIlgxtruiO6I7ojuiO6I7ojuiO6I7ojuiO6I7ojuiO6I7ojuiO6I7ojuiO6I7ojuiO6I7ojuiO 6I7okCop4P3z/9oACAECAgY/ALbrrdXcwYwYwYwYwYwYxMTExMTExPHx/PhroWbLess2W9ZZst6y zZb1lmy3QtW6Fq3QtW6FpwcHBwcHCHQ//9oACAEDAgY/AG+CCCCCCCCCCCCCDT6GWoMtQZagy1Bl qDLUGWoMtQZah//aAAgBAQEGPwAAhAYbQzNXa6u110+PjX4/hWYpnKzFM5WYpnKzFM5WYpnKzFM5 WYpnKzFM5WYpnKzFM5WYpnKzFM5WYpnKzFM5WYpnKzFM5WYpnKzFM5WYpnKzFM5WQpnKzFM5WQpn KyFM5WQpnKyFM5WQpnJviL5mCbqxzv8ATXa66/X+8PHSdyzjKRNsPHSdyzjKRNsPHSdyzjKRNsPH SdyzjKRNsPHSdyzjKRNsPHSdyzjKRNsPHSdyzjKRNsPHSdyzjKRNsPHSdyzjKRNsPHSdyzjKRNsP HSdyzjKRNsPHSdyzjKRNsPHSdyzjKRNsPHSdyzjKRNsPHSdyzjKRNsPFSdyzjKRNsPHSdyzjKRNs PFSdyzjKRNsPHq4zBfAnfo7R+vz9vwY5XQoF61dCgXrV0KBetXQoF61dCgXrV0KBetXQoF61dCgX rV0KBetXQoF61dCgXqV0KBetXQoF6ldCgXqV0KBepXQoF6ldCgXqV0KBepXQoF6ldCgXqV0KBepX QoF6ldCgXqV0KBepXQoF6ldCgXqV0KBepM1adhNf+RPq3R/z+35Mbph//9k=",
                    width: 232,
                    height: 156,
                    style: {
                      overflow: "visible"
                    },
                    transform: "matrix(.48 0 0 -.48 5.722 127.342)"
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { id: "SVGID_17_", d: "m0 100.71 124.79-72.22V0H0v100.71z" }) }),
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
        "path",
        {
          id: "SVGID_18_",
          d: "M111.65 30.67 66.5 4.61c-2.6-1.5-6.86-1.5-9.46 0L11.91 30.67c-2.6 1.5-4.73 5.19-4.73 8.19v52.12c.2 3.5 1.99 6.39 4.73 8.19l45.14 26.06c2.6 1.5 6.86 1.5 9.46 0l45.14-26.06c2.94-1.95 4.61-4.9 4.73-8.19V38.86c-.11-3.16-2-6.35-4.73-8.19z"
        }
      ) }),
      /* @__PURE__ */ jsx("clipPath", { id: "SVGID_19_", children: /* @__PURE__ */ jsx(
        "use",
        {
          xlinkHref: "#SVGID_17_",
          style: {
            overflow: "visible"
          }
        }
      ) }),
      /* @__PURE__ */ jsx(
        "clipPath",
        {
          id: "SVGID_20_",
          style: {
            clipPath: "url(#SVGID_19_)"
          },
          children: /* @__PURE__ */ jsx(
            "use",
            {
              xlinkHref: "#SVGID_18_",
              style: {
                overflow: "visible"
              }
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs(
        "g",
        {
          style: {
            clipPath: "url(#SVGID_20_)"
          },
          children: [
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { id: "SVGID_21_", d: "M7.06 3.24h108v92.64h-108z" }) }),
            /* @__PURE__ */ jsx("clipPath", { id: "SVGID_22_", children: /* @__PURE__ */ jsx(
              "use",
              {
                xlinkHref: "#SVGID_21_",
                style: {
                  overflow: "visible"
                }
              }
            ) }),
            /* @__PURE__ */ jsx(
              "g",
              {
                style: {
                  clipPath: "url(#SVGID_22_)"
                },
                children: /* @__PURE__ */ jsx(
                  "image",
                  {
                    xlinkHref: "data:image/jpeg;base64,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 etUAS3WXG0+Ki8lJNJf6ZYf/2Q==",
                    width: 232,
                    height: 197,
                    style: {
                      overflow: "visible"
                    },
                    transform: "matrix(.48 0 0 -.48 5.722 97.256)"
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M25.38 64.92c-.22-35.54 47.39-51.23 67.92-18.21l-15.75 9.12c-9.51-15.73-33.12-10.1-33.97 9.1.25 17.69 23.46 25.91 33.97 9.09l15.75 9.12c-18.09 31.4-67.01 20.1-67.92-18.22z",
          className: "st7"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M85.42 54.6h3l-2.05 19.8h-3.06l2.11-19.8zM91.85 54.6h2.99l-2.05 19.8h-3.05l2.11-19.8z",
          className: "st7"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M82.06 62.2h15v-2.89h-15v2.89zM81.22 69.26h15v-2.9h-15v2.9z",
          className: "st7"
        }
      )
    ]
  }
);

const SvgComponent$e = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", ...props, children: [
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "#3FB6D3",
      d: "M12.3 64.2 76.3 0h39.4L32.1 83.6zm64 63.8h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"
    }
  ),
  /* @__PURE__ */ jsx("path", { fill: "#27AACD", d: "m81.6 93.9-20-20-19.4 19.6 19.4 19.6z" }),
  /* @__PURE__ */ jsx("path", { fill: "#19599A", d: "M115.7 128 81.6 93.9l-20 19.2L76.3 128z" }),
  /* @__PURE__ */ jsxs(
    "linearGradient",
    {
      id: "a",
      x1: 59.365,
      x2: 86.825,
      y1: 116.36,
      y2: 99.399,
      gradientUnits: "userSpaceOnUse",
      children: [
        /* @__PURE__ */ jsx("stop", { offset: 0, stopColor: "#1b4e94" }),
        /* @__PURE__ */ jsx("stop", { offset: 0.63, stopColor: "#1a5497" }),
        /* @__PURE__ */ jsx("stop", { offset: 1, stopColor: "#195a9b" })
      ]
    }
  ),
  /* @__PURE__ */ jsx("path", { fill: "url(#a)", d: "m61.6 113.1 30.8-8.4-10.8-10.8z" })
] });

const SvgComponent$d = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 108.35 122.88",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m108.35 0-9.87 110.58-44.37 12.3L9.86 110.6 0 0h108.35z",
          style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#e44d26"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m54.17 113.48 35.86-9.94 8.43-94.5H54.17v104.44z",
          style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#f16529"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M34.99 36.17h19.19V22.61H20.16l.32 3.64 3.33 37.38h30.35V50.06H36.23l-1.24-13.89zm3.05 34.24H24.43l1.9 21.3 27.79 7.71.06-.02V85.29l-.06.02-15.11-4.08-.97-10.82z",
          style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#ebebeb"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M54.13 63.63h16.7l-1.57 17.59-15.13 4.08v14.11l27.81-7.71.2-2.29 3.19-35.71.33-3.64H54.13v13.57zm0-27.49v.03h32.76l.27-3.05.62-6.88.32-3.64H54.13v13.54z",
          style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#fff"
          }
        }
      )
    ]
  }
);

const SvgComponent$c = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 122.88 122.88",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M0 0h122.88v122.88H0V0z",
          style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#f7df1e"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m32.31 102.69 9.4-5.69c1.81 3.22 3.46 5.94 7.42 5.94 3.79 0 6.19-1.48 6.19-7.26V56.41h11.55v39.43c0 11.96-7.01 17.4-17.24 17.4-9.24 0-14.6-4.78-17.32-10.55zm40.83-1.24 9.4-5.44c2.48 4.04 5.69 7.01 11.38 7.01 4.78 0 7.84-2.39 7.84-5.69 0-3.96-3.13-5.36-8.41-7.67l-2.89-1.24c-8.33-3.55-13.86-8-13.86-17.4 0-8.66 6.6-15.26 16.91-15.26 7.34 0 12.62 2.56 16.41 9.24l-8.99 5.77c-1.98-3.55-4.12-4.95-7.42-4.95-3.38 0-5.53 2.14-5.53 4.95 0 3.46 2.14 4.87 7.09 7.01l2.89 1.24c9.82 4.21 15.34 8.5 15.34 18.15 0 10.39-8.17 16.08-19.14 16.08-10.71 0-17.64-5.12-21.02-11.8zm0 0z",
          style: {
            fillRule: "evenodd",
            clipRule: "evenodd"
          }
        }
      )
    ]
  }
);

const SvgComponent$b = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 122.88 109.43",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M122.88 54.73c0-8.14-10.19-15.85-25.82-20.64 3.61-15.93 2-28.6-5.06-32.66-1.63-.95-3.53-1.4-5.61-1.4v5.59c1.15 0 2.08.23 2.86.65 3.41 1.95 4.88 9.39 3.73 18.96-.28 2.35-.73 4.83-1.28 7.36-4.91-1.2-10.27-2.13-15.9-2.73-3.38-4.63-6.89-8.84-10.42-12.52C73.54 9.74 81.2 5.59 86.41 5.59V0c-6.89 0-15.9 4.91-25.02 13.43C52.27 4.96 43.26.1 36.37.1v5.59c5.18 0 12.87 4.13 21.04 11.67-3.51 3.68-7.01 7.86-10.34 12.5-5.66.6-11.02 1.53-15.93 2.75-.58-2.5-1-4.93-1.3-7.26-1.18-9.57.28-17.01 3.66-18.99.75-.45 1.73-.65 2.88-.65V.13c-2.1 0-4.01.45-5.66 1.4-7.04 4.06-8.62 16.71-4.98 32.59C10.14 38.92 0 46.61 0 54.73c0 8.14 10.19 15.85 25.82 20.64-3.61 15.93-2 28.6 5.06 32.66 1.63.95 3.53 1.4 5.64 1.4 6.89 0 15.9-4.91 25.02-13.43 9.12 8.47 18.13 13.33 25.02 13.33 2.1 0 4.01-.45 5.66-1.4 7.04-4.06 8.62-16.71 4.98-32.59 15.54-4.78 25.68-12.5 25.68-20.61zm-50.02 0c0-6.32-5.12-11.45-11.45-11.45-6.32 0-11.45 5.12-11.45 11.45s5.12 11.45 11.45 11.45c6.33-.01 11.45-5.13 11.45-11.45zM36.34.1zm53.93 37.92c-.93 3.23-2.08 6.56-3.38 9.89-1.03-2-2.1-4.01-3.28-6.01-1.15-2-2.38-3.96-3.61-5.86 3.56.53 6.99 1.18 10.27 1.98zM78.8 64.7c-1.95 3.38-3.96 6.59-6.04 9.57-3.73.33-7.51.5-11.32.5-3.78 0-7.56-.18-11.27-.48-2.08-2.98-4.11-6.16-6.06-9.52-1.9-3.28-3.63-6.61-5.21-9.97 1.55-3.36 3.31-6.71 5.18-9.99 1.95-3.38 3.96-6.59 6.04-9.57 3.73-.33 7.51-.5 11.32-.5 3.78 0 7.56.18 11.27.48 2.08 2.98 4.11 6.16 6.06 9.52 1.9 3.28 3.63 6.61 5.21 9.97-1.58 3.35-3.3 6.7-5.18 9.99zm8.09-3.26c1.35 3.36 2.5 6.71 3.46 9.97-3.28.8-6.74 1.48-10.32 2 1.23-1.93 2.45-3.91 3.61-5.94 1.14-2 2.22-4.03 3.25-6.03zm-25.4 26.72c-2.33-2.4-4.66-5.08-6.96-8.01 2.25.1 4.56.18 6.89.18 2.35 0 4.68-.05 6.96-.18a98.98 98.98 0 0 1-6.89 8.01zM42.86 73.41c-3.56-.53-6.99-1.18-10.27-1.98.93-3.23 2.08-6.56 3.38-9.89 1.03 2 2.1 4.01 3.28 6.01 1.18 2.01 2.38 3.96 3.61 5.86zm18.5-52.12c2.33 2.4 4.66 5.08 6.96 8.01-2.25-.1-4.56-.18-6.89-.18-2.35 0-4.68.05-6.96.18a98.98 98.98 0 0 1 6.89-8.01zM42.83 36.04a144.13 144.13 0 0 0-3.61 5.94c-1.15 2-2.23 4.01-3.26 6.01-1.35-3.36-2.5-6.71-3.46-9.97 3.29-.78 6.75-1.45 10.33-1.98zM20.16 67.4c-8.87-3.78-14.6-8.74-14.6-12.67 0-3.93 5.74-8.92 14.6-12.67 2.15-.93 4.51-1.75 6.94-2.53 1.43 4.91 3.31 10.02 5.64 15.25-2.3 5.21-4.16 10.29-5.56 15.18-2.48-.78-4.84-1.63-7.02-2.56zm13.48 35.79c-3.41-1.95-4.88-9.39-3.73-18.96.28-2.35.73-4.83 1.28-7.36 4.91 1.2 10.27 2.13 15.9 2.73 3.38 4.63 6.89 8.84 10.42 12.52-8.17 7.59-15.83 11.75-21.04 11.75-1.13-.03-2.08-.25-2.83-.68zm59.41-19.08c1.18 9.57-.28 17.01-3.66 18.99-.75.45-1.73.65-2.88.65-5.18 0-12.87-4.13-21.04-11.67 3.51-3.68 7.01-7.86 10.34-12.5 5.66-.6 11.02-1.53 15.93-2.76.58 2.53 1.03 4.96 1.31 7.29zm9.64-16.71c-2.15.93-4.51 1.75-6.94 2.53-1.43-4.91-3.31-10.02-5.64-15.25 2.3-5.21 4.16-10.29 5.56-15.18 2.48.78 4.83 1.63 7.04 2.55 8.87 3.78 14.6 8.74 14.6 12.67-.02 3.94-5.75 8.92-14.62 12.68z",
        style: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "#00d8ff"
        }
      }
    )
  }
);

const SvgComponent$a = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 122.88 122.88",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M0 61.44V0h122.88v122.88H0V61.44zm0 0z",
          style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#007acc"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M26.94 61.65v5.01h15.97v45.47h11.34V66.66h15.97v-4.92c0-2.76 0-5.01-.12-5.07 0-.09-9.74-.12-21.57-.12l-21.5.09v5.04l-.09-.03zm71.79-5.13c3.13.74 5.53 2.15 7.68 4.39 1.14 1.23 2.83 3.38 2.95 3.93 0 .18-5.31 3.78-8.54 5.78-.12.09-.61-.43-1.11-1.23-1.6-2.27-3.23-3.26-5.78-3.44-3.69-.25-6.14 1.69-6.14 4.91 0 .98.18 1.54.55 2.33.83 1.69 2.37 2.7 7.13 4.79 8.79 3.78 12.6 6.27 14.9 9.83 2.61 3.99 3.19 10.26 1.44 14.96-1.97 5.13-6.76 8.6-13.61 9.74-2.15.37-7.07.31-9.37-.09-4.91-.92-9.62-3.38-12.5-6.54-1.14-1.23-3.32-4.52-3.19-4.73l1.17-.74 4.61-2.67 3.47-2.03.8 1.08c1.01 1.6 3.29 3.75 4.61 4.49 3.99 2.06 9.34 1.78 11.98-.61 1.14-1.04 1.63-2.15 1.63-3.69 0-1.41-.22-2.06-.92-3.13-.98-1.35-2.95-2.46-8.48-4.91-6.36-2.7-9.06-4.42-11.58-7.07-1.44-1.6-2.76-4.09-3.38-6.14-.46-1.78-.61-6.14-.18-7.9 1.32-6.14 5.96-10.44 12.6-11.67 2.15-.43 7.22-.25 9.34.31l-.08.05z",
          style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: "#fff"
          }
        }
      )
    ]
  }
);

const SvgComponent$9 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "data-name": "Layer 1",
    viewBox: "0 0 511.85 511.85",
    ...props,
    children: [
      /* @__PURE__ */ jsx("title", { children: "unity-game-engine" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M456 .15 246.9 54.64 216 107.73l-62.8-.46L.15 256.1l153 148.82 62.76-.48 31 53.07L456 512l56-203.26-31.83-52.64L512 203.45ZM221 116.27 381 76.3 289.14 231H105.51Zm0 279.62L105.51 281.22h183.63l91.8 154.64Zm204.7 14.83L333.85 256.1l91.85-154.69L470 256.1Z",
          style: {
            fillRule: "evenodd"
          },
          transform: "translate(-.15 -.15)"
        }
      )
    ]
  }
);

const SvgComponent$8 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 122.88 106.42",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M75.63 0 61.44 24.58 47.25 0H0l61.44 106.42L122.88 0H75.63z",
          style: {
            fill: "#4dba87"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M75.63 0 61.44 24.58 47.25 0H24.58l36.86 63.85L98.3 0H75.63z",
          style: {
            fill: "#425466"
          }
        }
      )
    ]
  }
);

const SvgComponent$7 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 109 122.88",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M68.43 87.08c-19.7 0-23.83-9.04-23.83-16.63 0-.72.58-1.3 1.3-1.3h5.82c.64 0 1.18.47 1.28 1.1.88 5.93 3.49 8.92 15.41 8.92 9.49 0 13.52-2.14 13.52-7.18 0-2.9-1.15-5.05-15.89-6.49-12.33-1.22-19.95-3.93-19.95-13.8 0-9.08 7.66-14.49 20.5-14.49 14.42 0 21.56 5 22.46 15.76.03.37-.1.73-.35 1-.25.26-.6.42-.96.42H81.9c-.61 0-1.14-.43-1.26-1.01-1.41-6.23-4.81-8.23-14.07-8.23-10.36 0-11.56 3.61-11.56 6.31 0 3.28 1.42 4.24 15.4 6.09 13.84 1.84 20.41 4.43 20.41 14.16 0 9.81-8.18 15.43-22.45 15.43l.06-.06zm-13.91 35.8c-1.65 0-3.28-.43-4.72-1.26l-15.03-8.9c-2.25-1.26-1.15-1.7-.41-1.96 2.99-1.05 3.6-1.28 6.8-3.1.34-.19.78-.12 1.12.08l11.55 6.85c.42.23 1.01.23 1.4 0l45.03-25.99c.42-.24.69-.72.69-1.22V35.43c0-.52-.27-.98-.7-1.24L55.23 8.22c-.42-.25-.97-.25-1.39 0l-45 25.97c-.44.25-.71.73-.71 1.23v51.96c0 .5.27.97.7 1.21l12.33 7.12c6.69 3.35 10.79-.6 10.79-4.56V39.86c0-.73.57-1.3 1.31-1.3h5.7c.71 0 1.3.56 1.3 1.3v51.31c0 8.93-4.87 14.05-13.33 14.05-2.6 0-4.66 0-10.38-2.82L4.72 95.59A9.505 9.505 0 0 1 0 87.38V35.42c0-3.38 1.8-6.54 4.72-8.21l45.07-26c2.85-1.61 6.64-1.61 9.47 0l45.02 26.01c2.91 1.68 4.72 4.82 4.72 8.21v51.96c0 3.37-1.81 6.51-4.72 8.21l-45.02 26a9.5 9.5 0 0 1-4.74 1.26v.02zm0 0z",
        style: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "#689f63"
        }
      }
    )
  }
);

const SvgComponent$6 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    id: "Layer_1",
    x: 0,
    y: 0,
    viewBox: "0 0 90.63 122.88",
    ...props,
    children: [
      /* @__PURE__ */ jsx("style", { children: ".st0,.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#5382a1}.st1{fill:#e76f00}" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M29.19 95.03s-4.7 2.73 3.34 3.65c9.74 1.11 14.71.95 25.44-1.08 0 0 2.82 1.77 6.76 3.3-24.05 10.32-54.44-.59-35.54-5.87zM26.25 81.58s-5.27 3.9 2.78 4.73c10.4 1.07 18.62 1.16 32.83-1.58 0 0 1.97 1.99 5.06 3.08-29.09 8.51-61.49.67-40.67-6.23z",
          className: "st0"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M51.03 58.76c5.93 6.82-1.56 12.96-1.56 12.96s15.05-7.77 8.14-17.5C51.15 45.15 46.2 40.64 73 25.1c0 0-42.06 10.5-21.97 33.66z",
          className: "st1"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M82.84 104.98s3.47 2.86-3.83 5.08c-13.88 4.21-57.79 5.48-69.99.17-4.38-1.91 3.84-4.55 6.42-5.11 2.7-.59 4.24-.48 4.24-.48-4.88-3.43-31.52 6.74-13.53 9.66 49.05 7.95 89.41-3.58 76.69-9.32zM31.45 67.64s-22.33 5.3-7.91 7.23c6.09.82 18.23.63 29.54-.32 9.24-.78 18.52-2.44 18.52-2.44s-3.26 1.4-5.62 3.01C43.3 81.08-.51 78.31 12.1 72.21c10.67-5.16 19.35-4.57 19.35-4.57zM71.51 90.03c23.05-11.98 12.39-23.49 4.95-21.94-1.82.38-2.64.71-2.64.71s.68-1.06 1.97-1.52c14.72-5.17 26.04 15.26-4.75 23.36.01 0 .36-.32.47-.61z",
          className: "st0"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M57.61 0S70.38 12.77 45.5 32.41c-19.95 15.75-4.55 24.74-.01 35-11.64-10.5-20.19-19.75-14.46-28.36C39.45 26.41 62.76 20.29 57.61 0z",
          className: "st1"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M33.71 122.49c22.13 1.42 56.11-.79 56.92-11.26 0 0-1.55 3.97-18.29 7.12-18.89 3.55-42.18 3.14-56 .86 0 .01 2.83 2.35 17.37 3.28z",
          className: "st0"
        }
      )
    ]
  }
);

const SvgComponent$5 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 122.88 122.87",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M120.56 55.96 66.91 2.32a7.913 7.913 0 0 0-11.19 0L44.58 13.46l14.13 14.13c3.29-1.11 7.05-.37 9.67 2.25 2.63 2.63 3.37 6.43 2.23 9.73l13.62 13.62c3.3-1.14 7.1-.4 9.73 2.23 3.68 3.68 3.68 9.64 0 13.31a9.415 9.415 0 0 1-13.32 0 9.415 9.415 0 0 1-2.05-10.24l-12.7-12.7v33.43c.9.44 1.74 1.04 2.49 1.78a9.415 9.415 0 0 1 0 13.32c-3.68 3.68-9.64 3.68-13.31 0a9.415 9.415 0 0 1 3.08-15.37V45.21a9.384 9.384 0 0 1-3.08-2.05c-2.79-2.78-3.46-6.87-2.03-10.29L39.1 18.93 2.32 55.72a7.913 7.913 0 0 0 0 11.19l53.65 53.65a7.913 7.913 0 0 0 11.19 0l53.4-53.39a7.937 7.937 0 0 0 0-11.21zm0 0z",
        style: {
          fill: "#f05133"
        }
      }
    )
  }
);

const SvgComponent$4 = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 110.8 122.88", ...props, children: [
  /* @__PURE__ */ jsx("title", { children: "webpack" }),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "m107.39 94.71-49.8 28.17v-21.94l31-17.07 18.8 10.83Zm3.41-3.09V32.71L92.58 43.24v37.87l18.22 10.51ZM3.41 94.71l49.8 28.17v-21.94l-31-17.07-18.8 10.84ZM0 91.62V32.71l18.22 10.53v37.87L0 91.62Zm2.14-62.73L53.21 0v21.2l-32.73 18-.26.14L2.14 28.89Zm106.52 0L57.59 0v21.2l32.73 18 .26.15 18.08-10.45Z",
      style: {
        fill: "#8ed6fb"
      }
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M53.21 96 22.59 79.1V45.75l30.62 17.68V96Zm4.38 0 30.62-16.88V45.75L57.59 63.43V96ZM24.66 42 55.4 25l30.74 16.9L55.4 59.64 24.66 41.9Z",
      style: {
        fill: "#1c78c0"
      }
    }
  )
] });

const SvgComponent$3 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 398.25 439.89",
    ...props,
    children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("style", { children: ".a,.c{fill:#c21325}.a,.b{stroke:#fff;stroke-width:20px}.b{fill:none}" }) }),
      /* @__PURE__ */ jsx("title", { children: "jest-js-icon" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M334.92 218.1c-.54.33-18.35-2.66-40.67-4.17a447.59 447.59 0 0 0-56.74 0c-14 1-32.44-6.09-34.64 2.28-8.24 31.35-26 58.66-48.51 79.93A163.89 163.89 0 0 1 97 331.73c-25-12.84-36.81-41.4-26.16-66.44 8.45-19.87 18.28-41.74.13-46.75-13.21-3.64-20.46 9-25.54 22.55-9.74 25.91-28.23 52.74-33.5 84.52-5.56 33.54 0 69.15 29 89.25 67.56 46.83 140.9-29 218.23-48.09 28-6.92 58.78-5.8 83.47-20.1a69.92 69.92 0 0 0 34.23-48.52c5.57-32.15-11.15-64.06-41.94-80.05Z",
          className: "a"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M202.87 216.19c-8.24 31.35-26 58.66-48.51 79.93A163.84 163.84 0 0 1 97 331.73c-25-12.84-36.8-41.4-26.15-66.44 8.45-19.87 18.28-41.74.13-46.75-13.21-3.64-20.47 9-25.54 22.55-9.75 25.91-28.24 52.75-33.51 84.52-5.56 33.54 0 69.15 29 89.25 67.56 46.83 140.9-29 218.23-48.09 28-6.92 58.78-5.8 83.47-20.1a69.92 69.92 0 0 0 34.23-48.52c5.58-32.13-11.14-64.06-41.93-80",
          className: "b"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m264.89 91.17 54.32 110.81L384.31 10H145.32l64.94 191.64 54.63-110.47z",
          className: "c"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m264.89 91.17 54.32 110.81L384.31 10H145.32l64.94 191.64 54.63-110.47z",
          className: "b"
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: 198.99, cy: 216.58, r: 40.95, className: "c" }),
      /* @__PURE__ */ jsx("circle", { cx: 198.99, cy: 216.58, r: 40.95, className: "b" }),
      /* @__PURE__ */ jsx("circle", { cx: 332.37, cy: 216.58, r: 40.95, className: "a" }),
      /* @__PURE__ */ jsx("circle", { cx: 332.37, cy: 216.58, r: 40.95, className: "b" }),
      /* @__PURE__ */ jsx("circle", { cx: 65.1, cy: 216.88, r: 40.94, className: "c" }),
      /* @__PURE__ */ jsx("circle", { cx: 65.1, cy: 216.88, r: 40.94, className: "b" })
    ]
  }
);

const SvgComponent$2 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0.15 0.13 799.7 479.69",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "#06b6d4",
        d: "M400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09C544.48 46.17 499.1.13 400 .13zM200.07 239.97c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"
      }
    )
  }
);

const SvgComponent$1 = (props) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 384", ...props, children: /* @__PURE__ */ jsx(
  "path",
  {
    fill: "#CF649A",
    d: "M440.6 220.6c-17.9.101-33.4 4.4-46.4 10.801-4.8-9.5-9.6-17.801-10.399-24-.9-7.2-2-11.601-.9-20.2C384 178.6 389 166.4 389 165.4c-.101-.9-1.101-5.3-11.4-5.4s-19.2 2-20.2 4.7-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.101-17.601-.899-7.199-2-11.6-.899-20.199 1.1-8.601 6.1-20.8 6.1-21.8-.1-.9-1.1-5.3-11.399-5.4-10.301-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3C281.9 201.4 256.9 257 250.4 271.5c-3.3 7.4-6.199 13.3-8.3 17.3-2.1 4-.1.3-.3.7-1.8 3.4-2.8 5.3-2.8 5.3v.101c-1.4 2.5-2.9 4.899-3.601 4.899-.5 0-1.5-6.7.2-15.899 3.7-19.301 12.7-49.4 12.601-50.5 0-.5 1.699-5.801-5.801-8.5-7.3-2.7-9.899 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.899-15.5-33.899c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.899-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1L117.9 251.9c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.601-101.8 78.3-39 141-28.3 151.899-4.5 15.5 34-33.5 97.2-114.899 106.3-31 3.5-47.301-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.899 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8C121.4 27.4 75.8 50.8 43 81.5 4 117.9-2.2 149.7.4 162.9c9.101 47.1 74 77.8 100 100.5-1.3.699-2.5 1.399-3.6 2-13 6.399-62.5 32.3-74.9 59.699-14 31 2.2 53.301 13 56.301 33.4 9.3 67.6-7.4 86.1-34.9 18.399-27.5 16.2-63.2 7.7-79.5l-.301-.6 10.2-6c6.601-3.9 13.101-7.5 18.8-10.601-3.199 8.7-5.5 19-6.699 34-1.4 17.601 5.8 40.4 15.3 49.4 4.2 3.899 9.2 4 12.3 4 11 0 16-9.101 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1a36.13 36.13 0 0 0 1.2-1.899v-.2c3-5.2 9.7-17.1 19.7-36.8 12.899-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.199 7.601 6.999 15.9 10.699 24-3 4.2-4.8 6.601-4.8 6.601l.1.1c-2.399 3.2-5.1 6.601-7.899 10-10.2 12.2-22.4 26.101-24 30.101-1.9 4.699-1.5 8.199 2.2 11 2.7 2 7.5 2.399 12.6 2 9.2-.601 15.6-2.9 18.8-4.301 5-1.8 10.7-4.5 16.2-8.5 10-7.399 16.1-17.899 15.5-31.899-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.801-2.601 2.7-4 15.8-23.101 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.899 6.5 5.7 13.601 9.1 20.601-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.899.8 9.5-1 13.699-2.8 5.2-1.7 11.5-4.601 17.301-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.899-8.2 49.6-5.7 44.5 5.2 53.3 33 51.601 44.6-1.7 11.601-11 18-14.101 20-3.1 1.9-4.1 2.601-3.8 4 .4 2.101 1.8 2 4.5 1.601 3.7-.601 23.4-9.5 24.2-30.899 1.2-27.504-24.9-57.504-71.2-57.205zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.801-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.199 9.1-5.5.6-.399 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.601-1.5-9-25.8-1.101-49.8 4-12.101 12.5-26.5 17.5-32.101 8.101-9 16.9-12 19.101-8.3 2.6 4.801-9.9 39.601-13.1 47.401zm88.7 42.4c-2.2 1.101-4.2 1.9-5.1 1.301-.7-.4.899-1.9.899-1.9s11.1-11.9 15.5-17.4c2.5-3.199 5.5-6.899 8.7-11.1v1.2C313.6 292.1 299.8 301.7 293.6 305.6zm68.399-15.6c-1.6-1.2-1.399-4.9 4-16.5 2.101-4.6 6.9-12.3 15.2-19.6 1 3 1.601 5.899 1.5 8.6-.099 18-12.899 24.7-20.7 27.5z"
  }
) });

const SvgComponent = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    width: 32,
    height: 32,
    viewBox: "0 0 250 300",
    ...props,
    children: [
      /* @__PURE__ */ jsx("title", { children: "Qwik" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#18B6F6",
          d: "m224.803 271.548-48.76-48.483-.744.107v-.532L71.606 120.252l25.55-24.667-15.01-86.12-71.222 88.247c-12.136 12.226-14.372 32.109-5.642 46.781l44.5 73.788c6.813 11.376 19.163 18.18 32.47 18.074l22.038-.213 120.513 35.406Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#AC7EF4",
          d: "m251.414 96.01-9.795-18.075-5.11-9.25-2.023-3.615-.212.213-26.829-46.463C200.738 7.125 188.176-.105 174.55 0l-23.527.639-70.158.213c-13.307.106-25.444 7.123-32.151 18.5l-42.69 84.632L82.353 9.25l100.073 109.937-17.779 17.968 10.646 86.015.107-.213v.213h-.213l.213.212 8.304 8.081 40.348 39.445c1.704 1.595 4.472-.318 3.3-2.339l-24.911-49.014 43.436-80.273 1.383-1.595c.533-.638 1.065-1.276 1.491-1.914 8.517-11.589 9.688-27.112 2.662-39.764Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#FFF",
          d: "M182.746 118.763 82.353 9.358 96.62 95.053l-25.55 24.773 104.011 103.24-9.368-85.697z"
        }
      )
    ]
  }
);

const IconList = [
  {
    key: "AstroJS",
    label: "Astro JS",
    icon: /* @__PURE__ */ jsx(SvgComponent$h, {})
  },
  {
    key: "CSS",
    label: "CSS",
    icon: /* @__PURE__ */ jsx(SvgComponent$g, {})
  },
  {
    key: "CSharp",
    label: "C#",
    icon: /* @__PURE__ */ jsx(SvgComponent$f, {})
  },
  {
    key: "Flutter",
    label: "Flutter",
    icon: /* @__PURE__ */ jsx(SvgComponent$e, {})
  },
  {
    key: "HTML",
    label: "HTML",
    icon: /* @__PURE__ */ jsx(SvgComponent$d, {})
  },
  {
    key: "Javascript",
    label: "Javascript",
    icon: /* @__PURE__ */ jsx(SvgComponent$c, {})
  },
  {
    key: "Typescript",
    label: "Typescript",
    icon: /* @__PURE__ */ jsx(SvgComponent$a, {})
  },
  {
    key: "Unity",
    label: "Unity",
    icon: /* @__PURE__ */ jsx(SvgComponent$9, {})
  },
  {
    key: "Vue",
    label: "Vue",
    icon: /* @__PURE__ */ jsx(SvgComponent$8, {})
  },
  {
    key: "NodeJS",
    label: "Node JS",
    icon: /* @__PURE__ */ jsx(SvgComponent$7, {})
  },
  {
    key: "Java",
    label: "Java",
    icon: /* @__PURE__ */ jsx(SvgComponent$6, {})
  },
  {
    key: "Git",
    label: "Git",
    icon: /* @__PURE__ */ jsx(SvgComponent$5, {})
  },
  {
    key: "Webpack",
    label: "Webpack",
    icon: /* @__PURE__ */ jsx(SvgComponent$4, {})
  },
  {
    key: "Jest",
    label: "Jest",
    icon: /* @__PURE__ */ jsx(SvgComponent$3, {})
  },
  {
    key: "React",
    label: "React",
    icon: /* @__PURE__ */ jsx(SvgComponent$b, {})
  },
  {
    key: "Tailwind",
    label: "Tailwind",
    icon: /* @__PURE__ */ jsx(SvgComponent$2, {})
  },
  {
    key: "Qwik",
    label: "Qwik",
    icon: /* @__PURE__ */ jsx(SvgComponent, {})
  },
  {
    key: "SCSS",
    label: "SCSS",
    icon: /* @__PURE__ */ jsx(SvgComponent$1, {})
  }
];

function InfiniteScrollComponent() {
  const scrollerRef = useRef(null);
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);
  function addAnimation() {
    if (!scrollerRef.current)
      return;
    scrollerRef.current.setAttribute("data-animated", "true");
    const scrollerInner = scrollerRef.current.querySelector(".scroller__inner");
    if (!scrollerInner)
      return;
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (!duplicatedItem)
        return;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  }
  return /* @__PURE__ */ jsx("div", { className: "flex col-6 content-center items-center justify-center", children: /* @__PURE__ */ jsx("div", { ref: scrollerRef, className: "scroller", "data-speed": "fast", children: /* @__PURE__ */ jsx("ul", { className: "tag-list scroller__inner", children: /* @__PURE__ */ jsx("div", { children: IconList.map((i) => /* @__PURE__ */ jsx(
    "li",
    {
      className: "rounded-lg bg-theme-light dark:bg-darkmode-theme-light",
      children: i.icon
    },
    `icon-${i.key}`
  )) }) }) }) });
}

const diff = atom(["--------"]);
function setDif(p_diff) {
  diff.set(p_diff);
}

function CartButton() {
  useStore(diff);
  useRef(null);
  useRef(null);
  useEffect(() => {
    const date1 = new Date(2018, 1, 1, 14, 30, 0);
    const intervalID = setInterval(() => {
      setDif(dateDiffToString(/* @__PURE__ */ new Date(), date1));
    }, 1e3);
    return () => clearInterval(intervalID);
  }, []);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "mb-8 items-center justify-center lg:justify-start", children: [
    "I'm a digital experience creator with a focus on crafting beautiful, user-friendly interfaces ",
    /* @__PURE__ */ jsx("strong", { children: "(UI/UX)" }),
    " My expertise extends to ",
    /* @__PURE__ */ jsx("strong", { children: "design patterns" }),
    " and writing",
    " ",
    /* @__PURE__ */ jsx("strong", { children: "clean code" }),
    " for robust, ",
    /* @__PURE__ */ jsx("strong", { children: "SEO-friendly" }),
    " ",
    "architectures. Let's take your vision to the next level and create something truly exceptional."
  ] }) });
}

const PDF = "/_astro/Christian Avila EN.53debf8b.pdf";

const $$Astro = createAstro("https://astroplate.netlify.app");
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const homepage = await getEntryBySlug("homepage", "-index");
  const { banner, features } = homepage.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="mt-4"><div class="container"><div class="row justify-center content-center"><div class="justify-center mb-16 lg:text-left text-center lg:col-6 flex flex-col content-center items-start"><span class=" dark:text-neutral-200 font-medium px-2.5 py-0.5 rounded text-neutral-800 color-neutral-400 border border-neutral-500 text-lg">Software Engineer</span><h1 class="my-4">${unescapeHTML(markdownify(banner.title))}</h1>${renderComponent($$result2, "ExperienceComponent", CartButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Github/portafolio_cv/src/layouts/components/Experience", "client:component-export": "default" })}<a${addAttribute(PDF, "href")} download="Christian Avila CV"><button type="button" class="flex items-center btn btn-primary"><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path></svg><span>${banner.button.label}</span></button></a></div>${renderComponent($$result2, "InfiniteScroll", InfiniteScrollComponent, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/InfiniteScroll", "client:component-export": "default" })}</div></div></section><div class="section-sm bg-gradient "><section${addAttribute(`overflow-hidden`, "class")}><div class="container"><div class="flex flex-wrap justify-center content-center gap-8 items-center grid--large">${Experience && renderTemplate`${renderComponent($$result2, "Timeline", null, { "data": Experience, "client:only": true, "client:component-hydration": "only", "client:component-path": "D:/Github/portafolio_cv/src/layouts/components/Timeline.component", "client:component-export": "default" })}`}<div class="gap-7 justify-center w-full">${renderComponent($$result2, "TabComponent", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/Tab.component", "client:component-export": "default" })}</div></div></div></section></div>` })}`;
}, "D:/Github/portafolio_cv/src/pages/index.astro", void 0);

const $$file = "D:/Github/portafolio_cv/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
