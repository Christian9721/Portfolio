import type { IExperience } from "@/interfaces/experience.interface";

export type TLanguages = "es" | "en" | "jp";

export type TMeta = {
    title: string;
    description: string;
    image: string;
}

export type TExperienceContent = {
    title: string;
    achievementsText: string;
    knowledgeText?: string;
    data: IExperience[];
}

export type TProjectsContent = {
    title: string;
    tabs: string[];
}

export interface ILanguage {
    meta: TMeta;
    pronoum: string;
    field: string;
    catTag: string;
    description: string;
    mainButtons: {
        cv: string;
        about: string;
    }
    experience: TExperienceContent;
    projects: TProjectsContent;
}