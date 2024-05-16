import type { IIcon, TIconKey } from "./IconList";
export interface IProjectCard {
  srcImg: ImageMetadata;
  keyId: string | null;
  title: string | null;
  description: string | JSX.Element | null;
  technicalDescription?: string | JSX.Element;
  endDate?: Date | null;
  tools: TIconKey[]; //ids
  otherImgs?: Array<ImageMetadata>;
  video?: string;
}
