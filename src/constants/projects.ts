import type { IProjectCard } from "../interfaces/project.interface";

import { Projects } from "./experience";

//Dotchain
import Dot1 from "@/assets/images/dotchain/index1.webp";
import Dot2 from "@/assets/images/dotchain/index2.webp";
import Dot3 from "@/assets/images/dotchain/index1.webp";
import Dot4 from "@/assets/images/dotchain/index4.webp";
import Dot5 from "@/assets/images/dotchain/index5.webp";
import Dot6 from "@/assets/images/dotchain/index6.webp";
import Dotvideo from "@/assets/images/dotchain/dotchain.mp4";

//AmongSpikes
import Among1 from "@/assets/images/amongspikes/among1.webp";
import Among2 from "@/assets/images/amongspikes/among2.webp";
import Among3 from "@/assets/images/amongspikes/among3.webp";
import Among4 from '@/assets/images/amongspikes/among4.webp';
import AmongVideo from '@/assets/images/amongspikes/among.mp4';

//Lixenium
import Lix1 from "@/assets/images/lixenium/index1.webp";
import Lix2 from "@/assets/images/lixenium/index2.webp";
import Lix3 from "@/assets/images/lixenium/index3.webp";
import Lix4 from "@/assets/images/lixenium/index4.webp";
import Lix5 from "@/assets/images/lixenium/index5.webp";
import Lix6 from "@/assets/images/lixenium/index6.webp";
import Lix7 from "@/assets/images/lixenium/index7.webp";
//import lixeniumVideo from "@/assets/images/lixenium/lixenium.mp4";

//Petfinder
import Pet1 from "@/assets/images/petfinder/pet1.webp";
import Pet2 from "@/assets/images/petfinder/pet2.webp";
import Pet3 from "@/assets/images/petfinder/pet3.webp";
import Pet4 from "@/assets/images/petfinder/pet4.webp";
import Pet5 from "@/assets/images/petfinder/pet5.webp";
import Pet6 from "@/assets/images/petfinder/pet6.webp";
import Pet7 from "@/assets/images/petfinder/pet7.webp";
import Pet8 from "@/assets/images/petfinder/pet8.webp";
//import PetVideo from "@/assets/images/petfinder/pet.mp4";

export const projectCompanyCards: IProjectCard[] = [
  Projects.currie,
  Projects.accesos,
  Projects.venn,
  Projects.nissan,
  Projects.cele,
];

export const projectPersonalBase: { [Key: string]: IProjectCard } = {
  dotchain: {
    title: "DOTChain",
    keyId: "dotchain",
    description: ``,
    technicalDescription: ``,
    srcImg: Dot1,
    tools: ["React", "Git", "Typescript", "Jest", "SCSS"],
    endDate: new Date("2022-10-20"),
    otherImgs: [Dot1, Dot2, Dot3, Dot4, Dot5, Dot6],
    video: Dotvideo,
  },
  petfinder: {
    title: "PetFinder!",
    keyId: "petfinder",
    description: ``,
    technicalDescription: ``,
    srcImg: Pet1,
    tools: ["Flutter", "Git"],
    otherImgs: [Pet1, Pet2, Pet3, Pet4, Pet5, Pet6, Pet7, Pet8],
    endDate: new Date("2020-10-20"),
    //video: PetVideo,
  },
  amongspikes: {
    title: "Among Spikes",
    keyId: "amongspikes",
    description: ``,
    technicalDescription: ``,
    srcImg: Among1,
    tools: ["Unity", "Git"],
    otherImgs: [Among1, Among2, Among3, Among4],
    endDate: new Date("2019-10-20"),
    video: AmongVideo,
  },
  lixenium: {
    title: "Lixenium",
    keyId: "lixenium",
    description: ``,
    technicalDescription: ``,
    srcImg: Lix1,
    tools: ["Unity", "Git"],
    otherImgs: [Lix1, Lix2, Lix3, Lix4, Lix5, Lix6, Lix7],
    endDate: new Date("2018-10-20"),
    //video: lixeniumVideo,
  },
}

export const projectPersonalCards: IProjectCard[] = [
  {
    title: "DOTChain",
    keyId: "dotchain",
    description: `When it was the time and fever of cryptocurrencies I made a system of calculation by nodes, it worked by connecting your Binance account and with that to have access to the cryptocurrencies available in your account, to import them as a node and thus to create different mathematical nodes and conversions that allow you to automatically add, subtract, multiply and more the current values of the price of Bitcoin or different properties.`,
    technicalDescription: `The main challenge in this type of project is to think about optimisation, to make as few renderings as possible, for that we used different techniques such as memorising results to avoid re-calculating them or the use of debounces, also the use of the Binance API for those times was somewhat complex as there were many doubts even among developers' forums.`,
    srcImg: Dot1,
    tools: ["React", "Git", "Typescript", "Jest", "SCSS"],
    endDate: new Date("2022-10-20"),
    otherImgs: [Dot1, Dot2, Dot3, Dot4, Dot5, Dot6],
  },
  {
    title: "PetFinder!",
    keyId: "petfinder",
    description: `This project was an Android development internship with the aim of allowing the user to post about their pets and help other people to find their lost pets more easily.`,
    technicalDescription: `Flutter and Dart were used for the development, and different themes were created to customize the application.`,
    srcImg: Pet1,
    tools: ["Flutter", "Git"],
    otherImgs: [Pet1, Pet2, Pet3, Pet4, Pet5, Pet6],
    endDate: new Date("2020-10-20"),
  },
  {
    title: "Among Spikes",
    keyId: "amongspikes",
    description: `A simple but entertaining game, I came up with the idea of creating an abstract video game where cubes appear on a sphere, these cubes collide with the thorns and bounce, the objective is to eliminate the cubes using the touch of the mobile, also the gyroscope is used.`,
    technicalDescription: `The challenge at that time was to create algorithms to calculate the time of the enemies on the screen, also to calculate the value of a color shifted to red depending on the number of enemies.`,
    srcImg: Among1,
    tools: ["Unity", "Git"],
    otherImgs: [Among1, Among2, Among3],
    endDate: new Date("2019-10-20"),
  },
  {
    title: "Lixenium",
    keyId: "lixenium",
    description: `A multiplayer video game that allows players to use their own music and play in a large real-time equalizer, dodging different objects while growing and feeding on other players, inspired by popular video games such as Geometry Dash, Agar.io and Osu!`,
    technicalDescription: `This was my first videogame and what brought me closer to the world of programming, one of the big challenges besides learning on the fly was to synchronize states to be able to convert the base of the project into a multiplayer videogame with Unity Unet, some time later Unity announces the end of support for Unet so an alternative called Mirror is born and the code migration begins.`,
    srcImg: Lix1,
    tools: ["Unity", "Git"],
    otherImgs: [Lix1, Lix2, Lix3, Lix4, Lix5, Lix6],
    endDate: new Date("2018-10-20"),
  },
];
