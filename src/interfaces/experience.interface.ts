import React from "react";
import type { IProjectCard } from "./project.interface";

export interface IDescription {
  project?: JSX.Element | string;
  details?: IProjectCard;
}

interface IAchievement {
  title: string | JSX.Element;
  description: string;
  isDefaultOpen?: boolean;
}

export interface IExperience {
  timePeriod: string;
  location?: string;
  title: JSX.Element | string;
  description: JSX.Element | string;
  company: JSX.Element | string;
  projects: IProjectCard[];
  achievements?: IAchievement[];
  knowledge?: string[];
}
