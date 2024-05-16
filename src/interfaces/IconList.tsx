
export type TIconKey =
  | "AstroJS"
  | "NextJS"
  | "CSS"
  | "CSharp"
  | "Flutter"
  | "HTML"
  | "Javascript"
  | "Typescript"
  | "Unity"
  | "Vue"
  | "NodeJS"
  | "Java"
  | "Git"
  | "Webpack"
  | "Jest"
  | "React"
  | "Tailwind"
  | "Qwik"
  | "Postgres"
  | "Mysql"
  | "SCSS";

export interface IIcon {
  key: TIconKey;
  label: string;
  icon: JSX.Element;
}
export type TIcons = IIcon[];
