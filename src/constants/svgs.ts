import type { TIconKey } from "@/interfaces/IconList";
import {
    Astro,
    CSS,
    CSharp,
    Flutter,
    HTML,
    JS,
    React,
    TS,
    Unity,
    Vue,
    Node,
    Java,
    Git,
    Webpack,
    Jest,
    Tailwind,
    SCSS,
    Next,
    Postgres
  } from "../assets/icons/svgIndex";

  export interface IIcon {
    key: TIconKey;
    label: string;
    icon: string;
  }
  export type TIcons = {[key in TIconKey]: IIcon};

  export const IconMap: TIcons = {
    AstroJS: {
        key: "AstroJS",
        label: "Astro JS",
        icon:  Astro,
    },
    CSS: {
        key: "CSS",
        label: "CSS",
        icon:  CSS,
    },
    Flutter: {
        key: "Flutter",
        label: "Flutter",
        icon:  Flutter,
      },
      CSharp: {
        key: "CSharp",
        label: "C#",
        icon:  CSharp,
      },
      HTML: {
        key: "HTML",
        label: "HTML",
        icon:  HTML,
      },
      Javascript: {
        key: "Javascript",
        label: "Javascript",
        icon:  JS,
      },
      Typescript: {
        key: "Typescript",
        label: "Typescript",
        icon:  TS,
      },
      Unity: {
        key: "Unity",
        label: "Unity",
        icon:  Unity,
      },
      Vue: {
        key: "Vue",
        label: "Vue",
        icon:  Vue,
      },
      NodeJS: {
        key: "NodeJS",
        label: "Node JS",
        icon:  Node,
      },
      Java: {
        key: "Java",
        label: "Java",
        icon:  Java,
      },
      Git: {
        key: "Git",
        label: "Git",
        icon:  Git,
      },
      Webpack: {
        key: "Webpack",
        label: "Webpack",
        icon:  Webpack,
      },
      Jest: {
        key: "Jest",
        label: "Jest",
        icon:  Jest,
      },
      React: {
        key: "React",
        label: "React",
        icon:  React,
      },
      Tailwind: {
        key: "Tailwind",
        label: "Tailwind",
        icon:  Tailwind,
      },
      NextJS: {
        key: "NextJS",
        label: "NextJS",
        icon:  Next,
      },
      SCSS: {
        key: "SCSS",
        label: "SCSS",
        icon:  SCSS,
      },
      Qwik: {
        key: 'Qwik',
        label: 'Qwik',
        icon: '',
      },
      Postgres: {
        key: 'Postgres',
        label: 'Postgres',
        icon: Postgres,
      },
      Mysql: {
        key: 'Mysql',
        label: 'Mysql',
        icon: '',
      }
  };

  export type TExpertice = {
    title: 'frontend' | 'backend' | 'framework' | 'tools-other';
    data: IIcon[];
  }

  export const experticeIconLst: TExpertice[] = [
    {
        title: 'frontend',
        data: [IconMap.React, IconMap.CSS, IconMap.HTML, IconMap.Javascript, IconMap.Tailwind, IconMap.Typescript, IconMap.Vue, IconMap.AstroJS, IconMap.NextJS ],
    },
    {
        title: 'backend',
        data: [IconMap.NodeJS, IconMap.Java, IconMap.Postgres],
    },
    {
        title: 'tools-other',
        data: [IconMap.Git, IconMap.Flutter, IconMap.Jest, IconMap.Unity, IconMap.Webpack],
    }
  ]