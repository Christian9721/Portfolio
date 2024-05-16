export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

declare namespace Intl {
  type LocalesArgument =
    | UnicodeBCP47LocaleIdentifier
    | Locale
    | readonly (UnicodeBCP47LocaleIdentifier | Locale)[]
    | undefined;
}
