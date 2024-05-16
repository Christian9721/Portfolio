import { atom } from "nanostores";

export const diff = atom<string[]>(["--------"]);

export function setDif(p_diff: string[]) {
  diff.set(p_diff);
}
