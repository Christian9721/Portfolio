import type { TIcons } from "@/interfaces/IconList";
import {
  Astro,
  CSS,
  CSharp,
  Flutter,
  HTML,
  Javascript,
  React,
  Typescript,
  Unity,
  Vue,
  Node,
  Java,
  Git,
  Webpack,
  Jest,
  Tailwind,
  SCSS,
  Qwik,
  NextJS,
  Mysql,
} from "../assets/icons";

export const IconList: TIcons = [
  {
    key: "AstroJS",
    label: "Astro JS",
    icon: <Astro />,
  },
  {
    key: "CSS",
    label: "CSS",
    icon: <CSS />,
  },
  {
    key: "CSharp",
    label: "C#",
    icon: <CSharp />,
  },
  {
    key: "Flutter",
    label: "Flutter",
    icon: <Flutter />,
  },
  {
    key: "HTML",
    label: "HTML",
    icon: <HTML />,
  },
  {
    key: "Javascript",
    label: "Javascript",
    icon: <Javascript />,
  },
  {
    key: "Typescript",
    label: "Typescript",
    icon: <Typescript />,
  },
  {
    key: "Unity",
    label: "Unity",
    icon: <Unity />,
  },
  {
    key: "Vue",
    label: "Vue",
    icon: <Vue />,
  },
  {
    key: "NodeJS",
    label: "Node JS",
    icon: <Node />,
  },
  {
    key: "Java",
    label: "Java",
    icon: <Java />,
  },
  {
    key: "Git",
    label: "Git",
    icon: <Git />,
  },
  {
    key: "Webpack",
    label: "Webpack",
    icon: <Webpack />,
  },
  {
    key: "Jest",
    label: "Jest",
    icon: <Jest />,
  },
  {
    key: "React",
    label: "React",
    icon: <React />,
  },
  {
    key: "Tailwind",
    label: "Tailwind",
    icon: <Tailwind />,
  },
  {
    key: "NextJS",
    label: "NextJS",
    icon: <NextJS />,
  },
  {
    key: "Qwik",
    label: "Qwik",
    icon: <Qwik />,
  },
  {
    key: "SCSS",
    label: "SCSS",
    icon: <SCSS />,
  },
  {
    key: "Mysql",
    label: "Mysql",
    icon: <Mysql />
  }
];

export type TIconKey = [keyof typeof IconList];
