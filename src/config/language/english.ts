import { NEXTIA, CENTRO_SALUD, M6CONNECT, MATTE, UJED, VENN, Projects as ProjectsBase } from "@/constants/experience";
import type { ILanguage } from '../../interfaces/languages.interface';
import type { IProjectCard } from "@/interfaces/project.interface";
import { projectPersonalBase } from '@/constants/projects';
import { createGradientElement } from "@/lib/utils/createElement";

export const Projects : { [Key: string]: IProjectCard } = {
  currie: {
    ...ProjectsBase.currie,
    description: "This is a massive project for a major company that is a leading global provider of cost management, project management and advisory services, spanning the full range of the public and private sectors",
    technicalDescription: `The main challenge was to create an application with the ability to create the planning of an entire project, a project can be from a hospital, a road or a soccer stadium, basically any type of construction, also the creation of the planning must be managed for a whole year, so the main challenge was the high level of abstraction to design, then the optimization, the application has the ability to support thousands of data per project and finally the interoperability between modules of the system and its different combinations to create a planning.`,          
  },
  accesos: {
    ...ProjectsBase.accesos,
    description: "It is a project to replace the old access control system that has the Senate, before they manually recorded visitors in excel sheets and sending images of the IDs between staff, now the guard can quickly capture data from visitors, classify them by role, add the time of visit, parking and more, and send notifications in real time when a visitor's time is about to run out.",
    technicalDescription: `This was a project created with React and Typescript, consuming API Rest and Websockets services, using Cypress and Jest for unit and integration testing.`,
  },
  venn: {
    ...ProjectsBase.venn,
    description: `Is an online learning platform, defined as a 'Swiss army knife' of e-learning, as it allows the user to take live sessions, pre-recorded courses and 1-on-1 mentoring.`,
    technicalDescription: `This course platform was created with React and modules, the base was created in Wordpress, so webpack was used to create component modules separately and upload them to the server, my role was to develop additional modules following mockups and correcting UI designs for better use of the user experience (UX), I gave maintenance to existing modules and corrected bugs in legacy code, I deployed to production using Webstorm on a PHP server.`,
  },
  nissan: {
    ...ProjectsBase.nissan,
    description: `This project for the client Nissan consists of an Augmented Reality (AR) application to visualize all the new features of the latest model of Nissan Frontier, the application supports Spanish and Portuguese language.`,
    technicalDescription: `The main challenge was to design the architecture and the use of libraries to control the animations by code, as well as the integration of new serialization libraries.`,
  },
  cele: {
    ...ProjectsBase.cele,
    description: `The language school of the University of Durango (CELE) needed a modern website that would allow students to register for courses as well as allow payments through the bank or institutions such as OXXO, it also has a dashboard to have a better control per student on their grades.`,
  },
  farmacia: {
    ...ProjectsBase.farmacia,
    description: `This project consisted of a medication management system for a pharmacy and inventory management helping to have a better control of the pharmacy's inventory.`,
  },
  dental: {
    ...ProjectsBase.dental,
    description: `This project consisted of an inventory management system for a densita department, helping to have a better control over inventory and product costs by managing suppliers.`
  }
}

export const projectCompanyCards: IProjectCard[] = [
  Projects.currie,
  Projects.accesos,
  Projects.venn,
  Projects.nissan,
  Projects.cele,
  Projects.farmacia,
  Projects.dental,
];

export const projectPersonal: IProjectCard[] = [
  {
    ...projectPersonalBase.dotchain,
    description: `When it was the time and fever of cryptocurrencies I made a system of calculation by nodes, it worked by connecting your Binance account and with that to have access to the cryptocurrencies available in your account, to import them as a node and thus to create different mathematical nodes and conversions that allow you to automatically add, subtract, multiply and more the current values of the price of Bitcoin or different properties.`,
    technicalDescription: `The main challenge in this type of project is to think about optimisation, to make as few renderings as possible, for that we used different techniques such as memorising results to avoid re-calculating them or the use of debounces, also the use of the Binance API for those times was somewhat complex as there were many doubts even among developers' forums.`,  
  },
  {
    ...projectPersonalBase.petfinder,
    description: `This project was an Android development internship with the aim of allowing the user to post about their pets and help other people to find their lost pets more easily.`,
    technicalDescription: `Flutter and Dart were used for the development, and different themes were created to customize the application.`,
  },
  {
    ...projectPersonalBase.amongspikes,
    description: `A simple but entertaining game, I came up with the idea of creating an abstract video game where cubes appear on a sphere, these cubes collide with the thorns and bounce, the objective is to eliminate the cubes using the touch of the mobile, also the gyroscope is used.`,
    technicalDescription: `The challenge at that time was to create algorithms to calculate the time of the enemies on the screen, also to calculate the value of a color shifted to red depending on the number of enemies.`,
  },
  {
    ...projectPersonalBase.lixenium,
    description: `A multiplayer video game that allows players to use their own music and play in a large real-time equalizer, dodging different objects while growing and feeding on other players, inspired by popular video games such as Geometry Dash, Agar.io and Osu!`,
    technicalDescription: `This was my first videogame and what brought me closer to the world of programming, one of the big challenges besides learning on the fly was to synchronize states to be able to convert the base of the project into a multiplayer videogame with Unity Unet, some time later Unity announces the end of support for Unet so an alternative called Mirror is born and the code migration begins.`,
  },
];

export const English: ILanguage = {
    pronoum: "I'm",
    field: "Software Engineer",
    catTag: "Quantum computing student!",
    meta: {
      title: 'Christian Antonio Avila CV 🇺🇸',
      description: `I'm a digital experience creator with a focus on crafting beautiful, user-friendly interfaces (UI/UX) My expertise extends to design patterns and writing clean code for robust, SEO-friendly architectures. Let's take your vision to the next level and create something truly exceptional.`,
      image: 'enico.webp',
    },
    description: `A <strong>programming wizard </strong>with <strong>4+ years</strong> of experience focused on crafting beautiful, user-friendly interfaces <strong>(UI/UX)</strong> My expertise extends to <strong>design patterns</strong> and writing <strong>clean code</strong> for robust, <strong>SEO-friendly</strong> architectures. <br>${createGradientElement({text: "Let's take your vision to the next level and create something truly exceptional"})}`,
    mainButtons: {
        cv: "Download CV",
        about: "About me",
    },
    experience: {
        title: "Experience",
        achievementsText: 'Achievements',
        knowledgeText: "What I've learned?",
        data: [
            {
                ...M6CONNECT,
                description: `I played an essential role in the creation of products for a software company in Omaha, USA improving the
                efficiency of organizations with innovation processes and pinpointed solutions in IT, Facilities, Supply Chain, also contribute to the creation of widgets for a (SaaS) application and process automation with regular expressions (REGEX)`,
                achievements: [
                    {
                      title: `Product Development`,
                      description: `I Led and contributed to the development of various products for the company in
              Omaha, focusing on utilizing React to meet project objectives.`,
                    },
                    {
                      title: `Task Automation`,
                      description: `Developed commands with regex to automate tasks within the app management
              system, streamlining daily operations and improving overall efficiency.
              `,
                    },
                    {
                      title: `UI Enhancement`,
                      description: `Corrected UI designs to adhere to best practices in UX using Sass and UI libraries, enhancing
              user interaction and satisfaction`,
                    },
                    {
                      title: `Widget development`,
                      description: `Widgets were developed for the software as a service platform (SaaS)`,
                    },
                  ],
            },
            {
                ...NEXTIA,
                description: `I worked in this digital transformation consultancy with its own software development factory using cuttingedge technologies under the SCRUM methodology (Agile methodology).`,
                achievements: [
                    {
                      title: "Successful global expansion",
                      description: `I led the successful Currie & Brown project, which resulted in the
              company's international expansion. By leading this key project, the foundation was laid to successfully
              venture into international projects, consolidating the company's presence in new markets and elevating
              its competitive position.`,
                    },
                    {
                      title: "Impact on government",
                      description: `We developed a robust and modern access control system for the senate of
              Mexico which allows guards to control the visits and entries of their employees, technical details: React,
              typescript and NodeJS notifications with websockets, authentication system, tables with records and
              more.`,
                    },
                    {
                      title: "Technology expansion",
                      description: `We opened a new development team in the company with a technology called
              MQ-IBM with Java for API development`,
                    },
                    {
                      title: "Quality assurance",
                      description: `I implemented rigorous testing procedures to maintain application stability and
              reduce post-release defects using Jest & Cypress with 85% coverage. <chart data={[80,20]} type="donut" width="auto" text="none" substring="coverage"/>`,
                      isDefaultOpen: true
                    },
                    {
                      title: "Optimization",
                      description: `System efficiency and performance was continuously improved, streamlining processes
              to achieve impactful results; component load times were optimized by up to 70%. <chart data={[70,30]} type="donut" width="auto" text="none" substring="optimization"/>`,
                    },
                  ],
                  projects: [Projects.currie, Projects.accesos]
            },
            {
                ...VENN,
                description: `I redesigned multiple modules for this e-learning provider startup platform, using advanced technologies such
                as React, Redux, Context and Axios and Modern UI libraries such as MaterialUI.`,
                achievements: [
                    {
                      title: "Module Redesign",
                      description: `I Led the redesign and redevelopment of multiple modules on the online course
              platform, enhancing the overall user experience using React, Redux and Javascript.`,
                    },
                    {
                      title: "New Clients",
                      description: `An alliance was established with “Brigada de Rescate Topos de Tlaltelolco A.C.” to provide
              courses on the platform.<chart data={[70,30]} type="line" width="100%" text="none" substring="New Clients"/>`,
                      isDefaultOpen: true,
                    },
                    {
                      title: "UX/UI enhance",
                      description: `I focused on improving the user experience by meticulously enhancing the design of
              various interfaces, I implemented unique, responsive and creative designs with Sass, animations with
              GSAP and gradient graphics using Chart.JS.`,
                    },
                    {
                      title: "Bug Detection",
                      description: `I conducted unit testing to maintain the quality and reliability of the codebase, detection
              and correction of errors in legacy code`,
                    },
                    {
                      title: "TypeScript Integration",
                      description: `Successfully transitioned components to TypeScript, ensuring code robustness
              and maintainability`,
                    },
                  ],
                  projects: [Projects.venn]
            },
            {
                ...MATTE,
                description: `I led an effort to refactor a section of NISSAN's Augmented Reality (AR) application for their latest car model,
                the NISSAN Frontier 2020 using Unity and C#.`,
                achievements: [
                    {
                      title: `Feature Development`,
                      description: `Programmed new features, such as multi-language support and advanced kinematics,
              enriching the AR application's capabilities.`,
                    },
                    {
                      title: `Object-Oriented Programming`,
                      description: `I applied a high level of OOP principles to design and develop clean,
              maintainable, and efficient code, ensuring the longevity of the software.`,
                    },
                  ],
                  projects: [Projects.nissan]
            },
            {
                ...UJED,
                description: `I developed the website for the Durango State Language School University (CELE) using React, Tailwind, and Sass.
                The project involved implementing a complete user management system, allowing users to enroll in a wide
                variety of courses. I followed the SCRUM methodology (Agile methodology) and leveraged Webpack to optimize
                the development process`,
                achievements: [
                    {
                      title: `Website Development`,
                      description: `I led the development of the CELE website creating a visually appealing and responsive
              platform, counting on the correct enrollment of 1000 students in the first 2 weeks.`,
                    },
                    {
                      title: `User Management System`,
                      description: `Designed and implemented a robust user management system, allowing users to
              enroll in a wide variety of courses effortlessly.`,
                    },
                    {
                      title: `API Integration`,
                      description: `Seamlessly integrated APIs to facilitate user payments for course registrations, enhancing
              the user experience`,
                    },
                  ],
                  projects: [Projects.cele]
            },
            {
                ...CENTRO_SALUD,
                description: `I spearheaded the development of a comprehensive suite of healthcare software solutions, including an
                inventory control and patient registration system, a medication registry, and an inventory system designed for
                a hospital environment`,
                achievements: [
                    {
                      title: `Software Development`,
                      description: `Led the development of a suite of healthcare software solutions using MySQL, C#
              and WPF, focusing on delivering precise and reliable systems for patient registration, inventory control, and
              medication management.`,
                    },
                    {
                      title: `MySQL Integration`,
                      description: `Effectively integrated MySQL databases to store and manage critical data, ensuring data
              accuracy and accessibility.
              `,
                    },
                    {
                      title: `Quality Assurance`,
                      description: `Implemented thorough testing procedures to verify the functionality and reliability of the
              software, maintaining a high standard of quality`,
                    },
                ],
                projects: [Projects.farmacia, Projects.dental]
            }
        ]

    },
    projects: {
        title: "Projects",
        tabs: [
            "Clients", "Personal"
        ]
    }
}
