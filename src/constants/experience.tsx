import type { IExperience } from "../interfaces/experience.interface";
import type { IProjectCard } from "@/interfaces/project.interface";

//Cele
import Cele1 from "@/assets/images/cele/cele1.webp";
import Cele2 from "@/assets/images/cele/cele2.webp";
import Cele3 from "@/assets/images/cele/cele3.webp";
import Cele4 from "@/assets/images/cele/cele4.webp";
import Cele5 from "@/assets/images/cele/cele5.webp";


//Currie
import Currie1 from "@/assets/images/currie/currie1.webp";
import Currie3 from "@/assets/images/currie/currie3.webp";
import Currie2 from "@/assets/images/currie/currie2.webp";
import Currie4 from "@/assets/images/currie/currie4.webp";
import Currie5 from "@/assets/images/currie/currie5.webp";
import Currie6 from "@/assets/images/currie/currie6.webp";
import Currie7 from "@/assets/images/currie/currie7.webp";
import Currie8 from "@/assets/images/currie/currie8.webp";

//Venn
import Venn from "@/assets/images/venn/venn1.webp";
import Venn2 from "@/assets/images/venn/venn2.webp";
import Venn3 from "@/assets/images/venn/venn3.webp";
import Venn4 from "@/assets/images/venn/venn4.webp";
import Venn5 from "@/assets/images/venn/venn5.webp";

//Accesos
import Accesos1 from "@/assets/images/controlAccesos/accesos1.webp";
import Accesos2 from "@/assets/images/controlAccesos/accesos2.webp";
import Accesos3 from "@/assets/images/controlAccesos/accesos3.webp";
import Accesos4 from "@/assets/images/controlAccesos/accesos4.webp";
import Accesos5 from "@/assets/images/controlAccesos/accesos1.webp";

//Nissan
import Nissan1 from "@/assets/images/nissan/nissan1.webp";
import Nissan2 from "@/assets/images/nissan/nissan2.webp";
import Nissan3 from "@/assets/images/nissan/nissan3.webp";
import Nissan4 from "@/assets/images/nissan/nissan4.webp";
import Nissan5 from "@/assets/images/nissan/nissan5.webp";
import Nissan6 from "@/assets/images/nissan/nissan6.webp";

//Dental
import Dental1 from "@/assets/images/dental/dental1.webp";
import Dental2 from "@/assets/images/dental/dental2.webp";
import Dental3 from "@/assets/images/dental/dental3.webp";

//Farmacia
import Farmacia1 from "@/assets/images/farmacia/farmacia1.webp";
import Farmacia2 from "@/assets/images/farmacia/farmacia2.webp";
import Farmacia3 from "@/assets/images/farmacia/farmacia3.webp";

export const Projects: { [Key: string]: IProjectCard } = {
  currie: {
    title: "Currie & Brown",
    keyId: "currie",
    description: "",
    technicalDescription: ``,
    srcImg: Currie1,
    tools: ["React","Typescript", "SCSS", "Git", "Jest"],
    endDate: new Date("2023-08-20"),
    otherImgs: [
      Currie1,
      Currie2,
      Currie3,
      Currie4,
      Currie5,
      Currie6,
      Currie7,
      Currie8,
    ],
  },
  venn: {
    title: "Venn Platform",
    keyId: "venn",
    description: ``,
    technicalDescription: ``,
    srcImg: Venn,
    tools: [
      "React",
      "Typescript",
      "Javascript",
      "SCSS",
      "Git",
      "Jest",
      "Webpack",
    ],
    endDate: new Date("2021-10-20"),
    otherImgs: [Venn, Venn2, Venn3, Venn4, Venn5],
  },
  cele: {
    title: "CELE",
    keyId: "cele",
    description: ``,
    srcImg: Cele1,
    tools: ["React", "SCSS", "Tailwind", "Javascript", "Git", "Webpack"],
    endDate: new Date("2020-03-20"),
    otherImgs: [Cele1, Cele2, Cele3, Cele4, Cele5],
  },
  accesos: {
    title: "Control de accesos",
    keyId: "accesos",
    description: '',
    technicalDescription: ``,
    srcImg: Accesos1,
    tools: ["Git", "React", 'NextJS', "Typescript", "Jest"],
    endDate: new Date("2022-12-20"),
    otherImgs: [Accesos1, Accesos2, Accesos3, Accesos4, Accesos5],
  },
  nissan: {
    title: "NISSAN Frontier 2021",
    keyId: "nissan",
    description: ``,
    technicalDescription: ``,
    srcImg: Nissan2,
    tools: ["Unity", "Git"],
    endDate: new Date("2021-06-20"),
    otherImgs: [Nissan1, Nissan2, Nissan3, Nissan4, Nissan5, Nissan6],
  },
  farmacia: {
    title: "Farmacia",
    keyId: "farmacia",
    description: ``,
    technicalDescription: ``,
    srcImg: Farmacia1,
    tools: ["Mysql", "CSharp"],
    endDate: new Date("2018-03-20"),
    otherImgs: [Farmacia1, Farmacia2, Farmacia3],
  },
  dental: {
    title: "Dental",
    keyId: "dental",
    description: ``,
    technicalDescription: ``,
    srcImg: Dental1,
    tools: ["Mysql", "CSharp"],
    endDate: new Date("2018-06-20"),
    otherImgs: [Dental1, Dental2, Dental3],
  }
};

export const M6CONNECT:IExperience = {
  timePeriod: "NOV 2023 – CURRENT",
  title: "UI/UX Developer",
  company: "(Freelancer)",
  location: "Omaha, NE, USA",
  description: ``,
  projects: [],
  achievements: [],
}

export const NEXTIA: IExperience =  {
  timePeriod: "JUN 2022 – AUG 2023",
  title: "Frontend Developer / API Manager",
  location: "CD.MX, Mexico",
  description: ``,
  company: "NEXTIA",
  projects: [],
  achievements: [],
}

export const VENN: IExperience =  {
  timePeriod: "AUG 2020 – MAY 2022",
  title: "Frontend Developer",
  company: "VENN PLATFORM",
  location: "CD.MX, Mexico",
  description: ``,
  projects: [],
  achievements: [],
}

export const MATTE: IExperience = {
  timePeriod: "MAR 2020 – APRIL 2020",
  title: "Videogame Developer",
  company: "MATTE",
  location: "CD.MX, Mexico",
  description: ``,
  projects: [Projects.nissan],
  achievements: [],
}

export const UJED: IExperience = {
  timePeriod: "MAY 2019 – MAR 2020",
  title: "Frontend Developer",
  company: "UJED",
  location: "Durango, Mexico",
  description: ``,
  projects: [Projects.cele],
  achievements: [],
}

export const CENTRO_SALUD: IExperience = {
  timePeriod: "JAN 2018 – NOV 2018",
  title: "Software Developer",
  location: "Durango, Mexico",
  description: ``,
  company: "CLINICA #2",
  projects: [Projects.farmacia, Projects.dental],
  achievements: [],
}
