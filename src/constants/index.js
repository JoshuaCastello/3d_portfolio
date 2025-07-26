import { me, microlink} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },    
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "MicroLink Solutions W.L.L.",
        icon: microlink,
        iconBg: "#accbe1",
        date: "July 2025 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Assitant Electronics Technician Intern",
        company_name: "Margao Electronics",
        icon: me,
        iconBg: "#a2d2ff",
        date: "August 2022 - October 2022",
        points: [
            "Assisted in diagnosing and repairing gaming consoles, including hardware replacements and firmware troubleshooting.",
            "Supported installation and maintenance of CCTV systems, ensuring optimal video surveillance setup.",
            "Participated in setting up basic networking configurations for small-scale systems.",
            "Performed routine hardware repairs and component-level diagnostics on electronic devices",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/JoshuaCastello',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/joshua-castello-ba3211261',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Simple Banking Application',
        description: 'Developed an interactive Banking Application that allows the users to create an account, deposit and withdraw money, check their balance and exit the system.',
        link: 'https://github.com/JoshuaCastello',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'College Student Performance System',
        description: 'This project uses fuzzy logic and neural networks to predict student performance. It helps identify at-risk students, enabling time interventions to improve academic success while ensuring fairness and data privacy.',
        link: 'https://github.com/JoshuaCastello',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'College Management System',
        description: 'This project is a comprehensive software solution designed to streamline and automate various administrative functinos in educational institutions.',
        link: 'https://github.com/JoshuaCastello',
    }
];