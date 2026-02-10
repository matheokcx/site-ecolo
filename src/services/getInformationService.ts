export type Experience = {
    title: string;
    description: string;
    company: string;
    startDate: Date;
    endDate?: Date | undefined;
};

export type SkillCategory = "library" | "framework" | "language" | "ide" | "other";

export type Skill = {
    name: string;
    image?: string;
    category: SkillCategory;
};

export type Project = {
    name: string;
    description: string;
    techTags: string[];
    image: string;
    year: number;
    link?: string | undefined;
};

export const getExperiences = (): Experience[] => {
    return [
        {
            title: "Caissier restauration événementiel",
            description: "Prise en charge des commandes clients puis encaissements et communication des besoins à l'équipe.",
            company: "Agence intérim",
            startDate: new Date("2025-08-03"),
            endDate: new Date("2025-12-14")
        },
        {
            title: "Alternance développeur fullstack",
            description: "Conception et développement d'application web et mobile.",
            company: "Primever service",
            startDate: new Date("2025-02-03")
        },
    ]
}

export const getSkills = (categoryFilter?: SkillCategory | undefined): Skill[] => {
    const skills: Skill[] = [
        // Languages --------------------------------------
        {
            name: "Typescript",
            category: "language",
            image: "/images/typescript.svg"
        },
        {
            name: "Php",
            category: "language",
            image: "/images/php.svg"
        },
        {
            name: "Python",
            category: "language",
            image: "/images/python.svg"
        },
        {
            name: "SQL",
            category: "language",
            image: "/images/postgresql.svg"
        },
        {
            name: "Java",
            category: "language",
            image: "/images/java.svg"
        },
        {
            name: "Bash",
            category: "language",
            image: "/images/gnubash.svg"
        },
        {
            name: "HTML",
            category: "language",
            image: "/images/html5.svg"
        },
        {
            name: "CSS",
            category: "language",
            image: "/images/css.svg"
        },
        // Libraries --------------------------------------
        {
            name: "React",
            category: "library",
            image: "/images/react.svg"
        },
        {
            name: "Redux",
            category: "library",
            image: "/images/redux.svg"
        },
        {
            name: "Prisma",
            category: "library",
            image: "/images/prisma.svg"
        },
        // Framework --------------------------------------
        {
            name: "NextJS",
            category: "framework",
            image: "/images/nextdotjs.svg"
        },
        {
            name: "Symfony",
            category: "framework",
            image: "/images/symfony.svg"
        },
        {
            name: "Laravel",
            category: "framework",
            image: "/images/laravel.svg"
        },
        {
            name: "GLPI",
            category: "framework",
            image: "/images/glpi.png"
        },
        {
            name: "TailwindCss",
            category: "framework",
            image: "/images/tailwindcss.svg"
        },
        {
            name: "Adonis",
            category: "framework",
            image: "/images/adonisjs.svg"
        },
        {
            name: "Angular",
            category: "framework",
            image: "/images/angular.svg"
        },
        {
            name: "Flask",
            category: "framework",
            image: "/images/flask.svg"
        },
        // IDE --------------------------------------------
        {
            name: "JetBrain's IDE",
            category: "ide",
            image: "/images/jetbrains.svg"
        },
        {
            name: "Eclipse",
            category: "ide",
            image: "/images/eclipseide.svg"
        },
        // Others -----------------------------------------
        {
            name: "GIT",
            category: "other",
            image: "/images/git.svg"
        },
        {
            name: "Figma",
            category: "other",
            image: "/images/figma.svg"
        },
        {
            name: "Docker",
            category: "other",
            image: "/images/docker.svg"
        },
        {
            name: "Nomad",
            category: "other",
            image: "/images/nomad.svg"
        },
        {
            name: "SOLID",
            category: "other"
        },
        {
            name: "DRY",
            category: "other"
        }
    ];

    return skills.filter((skill: Skill) => {
        if(categoryFilter) {
            return skill.category === categoryFilter;
        }
        return true;
    });
};

export const getProjects = (): Project[] => {
    return [
        {
            name: "Kraft",
            description: "Projet complet d'application web de gestion de clients et projets (CRM like).",
            techTags: ["Nextjs", "Typescript", "prisma"],
            image: "/images/kraft.svg",
            year: 2026,
            link: "https://github.com/matheokcx/crm-app.git",
        },
        {
            name: "RentaCarLens",
            description: "Projet de cours concernant une application client, un server API et une app mobile.",
            techTags: ["Angular", "Ionic", "Laravel", "Docker"],
            image: "/images/rentacarlens.png",
            year: 2025,
            link: "https://github.com/matheokcx/renta-car-lens.git"
        },
        {
            name: "Fit-track",
            description: "Application mobile qui permet de faire un suivit de ses séances de sport et de nutrition.",
            techTags: ["Ionic"],
            image: "/images/ionic.png",
            year: 2025,
            link: "https://github.com/matheokcx/fit-track.git"
        }
    ];
};
