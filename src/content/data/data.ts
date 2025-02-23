import Aws from "../../icons/tech/Aws.astro";
import Csharp from "../../icons/tech/Csharp.astro";
import Git from "../../icons/tech/Git.astro";
import Java from "../../icons/tech/Java.astro";
import JavaScript from "../../icons/tech/JavaScript.astro";
import MySql from "../../icons/tech/MySql.astro";
import Nestjs from "../../icons/tech/Nestjs.astro";
import Nextjs from "../../icons/tech/Nextjs.astro";
import Nodejs from "../../icons/tech/Nodejs.astro";
import Postgre from "../../icons/tech/Postgre.astro";
import Prisma from "../../icons/tech/Prisma.astro";
import React from "../../icons/tech/React.astro";
import SpringBoot from "../../icons/tech/SpringBoot.astro";
import TypeScript from "../../icons/tech/TypeScript.astro";

export const STACK = [
    { title: "Backend", items: [
        { Icon: Nodejs, percentage: 80 },
        { Icon: SpringBoot, percentage: 85 },
        { Icon: Nestjs, percentage: 85 },
        { Icon: Java, percentage: 80 },
        { Icon: Csharp, percentage: 70 }
    ]},
    { title: "Frontend", items: [
        { Icon: JavaScript, percentage: 80 },
        { Icon: TypeScript, percentage: 85 },
        { Icon: React, percentage: 60 },
        { Icon: Nextjs, percentage: 75 }
    ]},
    { title: "Bases de datos", items: [
        { Icon: MySql, percentage: 80 },
        { Icon: Postgre, percentage: 70 },
        { Icon: Prisma, percentage: 60 }
    ]},
    {
        title: "Herramientas", items: [
            {Icon: Aws, percentage: 50},
            {Icon: Git, percentage: 80}
        ]
    }
];

export const ABOUT = [
    {content: `Entusiasta del <strong class="text-green-400">desarrollo Full Stack</strong> con experiencia en la creación de aplicaciones web utilizando tecnologías como <strong class="text-green-400">Next.js, NestJS y Spring Boot</strong>. Actualmente, estoy en mi último trimestre de Ingeniería en Sistemas, donde he trabajado en proyectos que combinan backend robusto con interfaces modernas y optimizadas. Me apasiona la innovación y la resolución de problemas a través del código, siempre buscando mejorar la eficiencia y escalabilidad de mis desarrollos.`},
    {content: `Además de la tecnología, disfruto jugar voleibol, un deporte que me ha enseñado la importancia del <strong class="text-green-400">trabajo en equipo</strong>, la <strong class="text-green-400">comunicación</strong> y la estrategia, habilidades que también aplico en el desarrollo de software y en la colaboración dentro de proyectos.`}
]

export const NAV_ITEMS = [
    {
      title: "Inicio",
      url: "/"
    },
    {
      title: "Sobre mí",
      url: "/#about"
    },
    {
      title: "Proyectos",
      url: "/projects"
    },
  ]