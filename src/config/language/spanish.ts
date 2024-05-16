import { NEXTIA, CENTRO_SALUD, M6CONNECT, MATTE, UJED, VENN, Projects as ProjectsBase } from "@/constants/experience";
import type { ILanguage } from '../../interfaces/languages.interface';
import type { IProjectCard } from "@/interfaces/project.interface";
import { projectPersonalBase } from '@/constants/projects';
import { createGradientElement } from "@/lib/utils/createElement";

export const Projects : { [Key: string]: IProjectCard } = {
  currie: {
    ...ProjectsBase.currie,
    description: "Este es un proyecto masivo para una empresa líder a nivel mundial en la prestación de servicios de gestión de costos, gestión de proyectos y asesoramiento, que abarca todo el espectro de los sectores público y privado.",
    technicalDescription: `El principal desafío fue crear una aplicación con la capacidad de elaborar la planificación de un proyecto completo, que puede ser desde un hospital, una carretera o un estadio de fútbol, básicamente cualquier tipo de construcción. Además, la creación de la planificación debe ser gestionada para todo un año. Por lo tanto, el principal desafío fue el alto nivel de abstracción para el diseño, luego la optimización. La aplicación tiene la capacidad de soportar miles de datos por proyecto y finalmente la interoperabilidad entre los módulos del sistema y sus diferentes combinaciones para crear una planificación.`,
  },
  accesos: {
    ...ProjectsBase.accesos,
    description: "Es un proyecto para reemplazar el antiguo sistema de control de acceso que tiene el Senado. Anteriormente, registraban manualmente a los visitantes en hojas de cálculo de Excel y enviaban imágenes de las identificaciones entre el personal. Ahora, el guardia puede capturar rápidamente los datos de los visitantes, clasificarlos por función, agregar la hora de la visita, el estacionamiento y más, y enviar notificaciones en tiempo real cuando el tiempo de visita de un visitante está a punto de terminar.",
    technicalDescription: `Este proyecto fue creado con React y TypeScript, consumiendo servicios API Rest y Websockets, utilizando Cypress y Jest para pruebas unitarias e integración.`,
  },
  venn: {
    ...ProjectsBase.venn,
    description: `Es una plataforma de aprendizaje en línea, definida como una "navaja suiza" del e-learning, ya que permite al usuario tomar sesiones en vivo, cursos pregrabados y mentoría personalizada uno a uno.`,
    technicalDescription: `Esta plataforma de cursos fue creada con React y módulos. La base fue creada en Wordpress, por lo que se utilizó webpack para crear módulos de componentes por separado y cargarlos en el servidor. Mi función fue desarrollar módulos adicionales siguiendo maquetas y corrigiendo diseños de interfaz de usuario (UI) para mejorar la experiencia del usuario (UX). Di mantenimiento a los módulos existentes y corregí errores en el código heredado. Desplegué en producción usando WebStorm en un servidor PHP.`,
  },
  nissan: {
    ...ProjectsBase.nissan,
    description: `Este proyecto para el cliente Nissan consiste en una aplicación de Realidad Aumentada (AR) para visualizar todas las nuevas características del último modelo de Nissan Frontier. La aplicación es compatible con los idiomas español y portugués.`,
    technicalDescription: `El principal desafío fue diseñar la arquitectura y el uso de bibliotecas para controlar las animaciones mediante código, así como la integración de nuevas bibliotecas de serialización.`,
  },
  cele: {
    ...ProjectsBase.cele,
    description: `La escuela de idiomas de la Universidad de Durango (CELE) necesitaba un sitio web moderno que permitiera a los alumnos inscribirse a los cursos así como permitir pagos a través del banco o instituciones como OXXO, también cuenta con un dashboard para tener un mejor control por alumno sobre sus calificaciones.`,
  },
  farmacia: {
    ...ProjectsBase.farmacia,
    description: `Este proyecto consistía en un sistema de gestion de medicamentos para una farmacia y gestion de inventario ayudando a tener un mejor contról`,
  },
  dental: {
    ...ProjectsBase.dental,
    description: `Este proyecto consistía en un sistema de gestion de inventario para un departamento de densita, ayudando a tener un mejor control sobre el inventario y los costos de los productos manejando los proveedores`
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
    description: `Cuando era el momento y la fiebre de las criptomonedas, hice un sistema de cálculo por nodos, funcionaba conectando tu cuenta de Binance y con eso tener acceso a las criptomonedas disponibles en tu cuenta, importarlas como nodo y así crear diferentes nodos matemáticos y conversiones que te permiten agregar automáticamente, restar, multiplicar y más los valores actuales del precio de Bitcoin o diferentes propiedades.`,
    technicalDescription: `El principal desafío en este tipo de proyecto es pensar en la optimización, hacer la menor cantidad de renderizaciones posibles, para eso utilizamos diferentes técnicas como memorizar resultados para evitar recalcularlos o el uso de debounces, también el uso de la API de Binance en esos momentos fue algo complejo ya que había muchas dudas incluso entre los foros de desarrolladores.`,
  },
  {
    ...projectPersonalBase.petfinder,
    description: `Este proyecto fue una pasantía de desarrollo de Android con el objetivo de permitir al usuario publicar sobre sus mascotas y ayudar a otras personas a encontrar sus mascotas perdidas más fácilmente.`,
    technicalDescription: `Se utilizaron Flutter y Dart para el desarrollo, y se crearon diferentes temas para personalizar la aplicación.`,
  },
  {
    ...projectPersonalBase.amongspikes,
    description: `Un juego simple pero entretenido, se me ocurrió la idea de crear un videojuego abstracto donde aparecen cubos en una esfera, estos cubos chocan con las espinas y rebotan, el objetivo es eliminar los cubos usando el toque del móvil, también se utiliza el giroscopio.`,
    technicalDescription: `El desafío en ese momento era crear algoritmos para calcular el tiempo de los enemigos en la pantalla, también calcular el valor de un color desplazado a rojo dependiendo del número de enemigos.`,
  },
  {
    ...projectPersonalBase.lixenium,
    description: `Un videojuego multijugador que permite a los jugadores usar su propia música y jugar en un ecualizador en tiempo real grande, esquivando diferentes objetos mientras crecen y se alimentan de otros jugadores, inspirado en videojuegos populares como Geometry Dash, Agar.io y Osu!`,
    technicalDescription: `Este fue mi primer videojuego y lo que me acercó al mundo de la programación, uno de los grandes desafíos además de aprender sobre la marcha fue sincronizar estados para poder convertir la base del proyecto en un videojuego multijugador con Unity Unet, algún tiempo después Unity anuncia el fin del soporte para Unet por lo que nace una alternativa llamada Mirror y comienza la migración del código.`,
  },
];

export const Spanish: ILanguage = {
  meta: {
    title: 'Christian Antonio Avila CV 🇲🇽',
    description: `Soy un creador de experiencias digitales con un enfoque en crear interfaces hermosas y amigables para el usuario (UI/UX). Mi experiencia se extiende a los patrones de diseño y escribir código limpio para arquitecturas sólidas y amigables con SEO. ¡Llevemos tu visión al siguiente nivel y creemos algo verdaderamente excepcional!`,
    image: 'esico.webp',
  }, 
  pronoum: "Soy",
  field: "Ingeniero en software",
    description: `Un <strong>mago de la programación</strong> con <strong>más de 4 años</strong> de experiencia enfocada en crear interfaces hermosas y amigables para el usuario <strong>(UI/UX)</strong>. Mi experiencia se extiende a los <strong>patrones de diseño</strong> y escribir <strong>código limpio</strong> para arquitecturas <strong>amigables con SEO</strong> y robustas. <br>${createGradientElement({text: "Llevemos tu visión al siguiente nivel y creemos algo verdaderamente excepcional"})}`,
    mainButtons: {
        cv: "Descargar CV",
        about: "Sobre mi",
    },
    experience: {
        title: "Experiencia",
        achievements: "Logros",
        data: [
            {
                ...M6CONNECT,
                title: "Desarrollador UI/UX",
                description: `Jugué un papel esencial en la creación de productos para una empresa de software en Omaha, EE.USA mejorando la eficiencia de las organizaciones con procesos innovadores y soluciones específicas en TI, Instalaciones, Cadena de Suministro. También contribuí a la creación de widgets para una aplicación (SaaS) y automatización de procesos con expresiones regulares (REGEX).`,
                achievements: [
                    {
                      title: `Desarrollo de productos`,
                      description: `Lideré y contribuí al desarrollo de diversos productos para la empresa en Omaha, centrándome en utilizar React para alcanzar los objetivos del proyecto.`,
                    },
                    {
                      title: `Automatización de tareas`,
                      description: `Desarrollé comandos con regex para automatizar tareas dentro del sistema de gestión de la aplicación, optimizando las operaciones diarias y mejorando la eficiencia general.`,
                    },
                    {
                      title: `Mejora de UI`,
                      description: `Corregí diseños de interfaz de usuario para adherirme a las mejores prácticas en experiencia de usuario utilizando Sass y bibliotecas de interfaz de usuario, mejorando la interacción y satisfacción del usuario.`,
                    },
                    {
                      title: `Desarrollo de Widgets`,
                      description: `Se desarrollaron widgets para la plataforma de software como servicio (SaaS).`,
                    },
                  ],
            },
            {
                ...NEXTIA,
                description: `Trabajé en esta consultoría de transformación digital con su propia fábrica de desarrollo de software utilizando tecnologías de vanguardia bajo la metodología SCRUM (metodología Agil).`,
                achievements: [
                    {
                      title: "Expansión global exitosa",
                      description: `Lideré el exitoso proyecto de Currie & Brown, el cual resultó en la expansión internacional de la empresa. Al liderar este proyecto clave, se sentaron las bases para emprender con éxito proyectos internacionales, consolidando la presencia de la empresa en nuevos mercados y elevando su posición competitiva.`,
                    },
                    {
                      title: "Impacto a nivel Gobierno",
                      description: `Desarrollamos un sistema de control de acceso robusto y moderno para el Senado de México que permite a los guardias controlar las visitas y entradas de sus empleados. Detalles técnicos: React, TypeScript y NodeJS para notificaciones con websockets, sistema de autenticación, tablas con registros y más.`,
                    },
                    {
                      title: "Expansión tecnológica",
                      description: `Abrimos un nuevo equipo de desarrollo en la empresa utilizando una tecnología llamada MQ-IBM con Java para el desarrollo de API.`,
                    },
                    {
                      title: "Aseguramiento de calidad",
                      description: `Implementé procedimientos de prueba rigurosos para mantener la estabilidad de la aplicación y reducir los defectos posteriores al lanzamiento utilizando Jest y Cypress con una cobertura del 85%.`,
                    },
                    {
                      title: "Optimización",
                      description: `La eficiencia y el rendimiento del sistema se mejoraron continuamente, optimizando procesos para lograr resultados impactantes; los tiempos de carga de los componentes se optimizaron hasta en un 70%.`,
                    },
                  ],
                  projects: [Projects.currie,Projects.accesos]
            },
            {
                ...VENN,
                description: `Rediseñé varios módulos para esta plataforma de inicio de proveedor de e-learning, utilizando tecnologías avanzadas como React, Redux, Context y Axios, así como bibliotecas de interfaz de usuario modernas como MaterialUI.`,
                achievements: [
                    {
                      title: "Rediseño de modulos",
                      description: `Lideré el rediseño y desarrollo de múltiples módulos en la plataforma de cursos en línea, mejorando la experiencia general del usuario utilizando React, Redux y JavaScript.`,
                    },
                    {
                      title: "Nuevos Clientes",
                      description: `Se estableció una alianza con la "Brigada de Rescate Topos de Tlaltelolco A.C." para ofrecer cursos en la plataforma.`,
                    },
                    {
                      title: "Mejora del UX/UI",
                      description: `Centrado en mejorar la experiencia del usuario mediante la mejora meticulosa del diseño de varias interfaces, implementé diseños únicos, receptivos y creativos con Sass, animaciones con GSAP y gráficos de degradado utilizando Chart.JS.`,
                    },
                    {
                      title: "Detección de errores",
                      description: `Realicé pruebas unitarias para mantener la calidad y confiabilidad de la base de código, detectando y corrigiendo errores en el código heredado.`,
                    },
                    {
                      title: "Integration con typescript",
                      description: `Realicé con éxito la transición de componentes a TypeScript, garantizando la robustez y mantenibilidad del código.`,
                    },
                  ],
                  projects: [Projects.venn]
            },
            {
                ...MATTE,
                description: `Lideré un esfuerzo para refactorizar una sección de la aplicación de Realidad Aumentada (AR) de NISSAN para su último modelo de automóvil, el NISSAN Frontier 2020, utilizando Unity y C#.`,
                achievements: [
                    {
                      title: `Desarrollo de características`,
                      description: `Programé nuevas características, como soporte multilingüe y cinemática avanzada, enriqueciendo las capacidades de la aplicación de realidad aumentada.`,
                    },
                    {
                      title: `Programación orientada a objetos`,
                      description: `Apliqué un alto nivel de principios de programación orientada a objetos (OOP) para diseñar y desarrollar un código limpio, mantenible y eficiente, asegurando la longevidad del software.`,
                    },
                  ],
                  projects: [Projects.nissan]
            },
            {
                ...UJED,
                description: `Desarrollé el sitio web para la Escuela de Idiomas de la Universidad Estatal de Durango (CELE) utilizando React, Tailwind y Sass. El proyecto implicó implementar un completo sistema de gestión de usuarios, permitiendo a los usuarios inscribirse en una amplia variedad de cursos. Seguí la metodología SCRUM (metodología Agil) y aproveché Webpack para optimizar el proceso de desarrollo.`,
                achievements: [
                    {
                      title: `Desarrollo del sitio web`,
                      description: `Lideré el desarrollo del sitio web de CELE creando una plataforma visualmente atractiva y receptiva, logrando la inscripción correcta de 1000 estudiantes en las primeras 2 semanas.`,
                    },
                    {
                      title: `Systema de gestión de usuarios`,
                      description: `Diseñé e implementé un sólido sistema de gestión de usuarios, que permite a los usuarios inscribirse en una amplia variedad de cursos sin esfuerzo alguno.`,
                    },
                    {
                      title: `Integración con API`,
                      description: `Integré sin problemas APIs para facilitar los pagos de los usuarios para las inscripciones a cursos, mejorando la experiencia del usuario.`,
                    },
                  ],
                  projects: [Projects.cele]
            },
            {
                ...CENTRO_SALUD,
                description: `Lideré el desarrollo de un conjunto completo de soluciones de software para la atención médica, que incluía un sistema de control de inventario y registro de pacientes, un registro de medicamentos y un sistema de inventario diseñado para un entorno hospitalario.`,
                achievements: [
                    {
                      title: `Desarrollo de software`,
                      description: `Lideré el desarrollo de un conjunto de soluciones de software para la atención médica utilizando MySQL, C# y WPF, centrándome en ofrecer sistemas precisos y confiables para el registro de pacientes, control de inventario y gestión de medicamentos.`,
                    },
                    {
                      title: `Integración con MySQL`,
                      description: `Integré eficazmente bases de datos MySQL para almacenar y gestionar datos críticos, garantizando la precisión y accesibilidad de los datos.`,
                    },
                    {
                      title: `Control de calidad`,
                      description: `Implementé procedimientos de prueba exhaustivos para verificar la funcionalidad y confiabilidad del software, manteniendo un alto estándar de calidad.`,
                    },
                ],
                projects: [Projects.farmacia, Projects.dental]
            }
        ]

    },
    projects: {
        title: "Proyectos",
        tabs: [
            "Clientes", "Personal"
        ]
    }
}
