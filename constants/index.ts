import { ServicesProps } from "@/types";
import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: 1,
        title: "VaultFlow",
        preview: "/images/saas-futurist.png",
        desc: "Vaultflow is a landing page created as part of a design challenge. It features a modern and sleek design, highlighting a data analytics platform with an interactive dashboard and features, aimed at demonstrating UI/UX and front-end development expertise.",
        demo: "https://ftc-w1-ines.vercel.app",
        github: "https://github.com/InesAbike/FTC-W1-Ines",
        figma: "https://www.figma.com/design/3xwYqxhJkfVyqwJ82iYJeZ/Challenge-FtoC?node-id=0-1&p=f&t=gp1YFyO9ofCZRsdr-0"
    },
    {
        id: 2,
        title: "Spend In",
        preview: "/images/spend-in-website.png",
        desc: "Spend.In is a web-based expense management application, offering a modern and intuitive interface to track, organize, and analyze business transactions. It centralizes expenses, visualizes payment history, and explores financial tracking features within a clean, responsive design.",
        demo: "https://ftc-w2-ines.vercel.app/",
        github: "https://github.com/InesAbike/FTC-W2-Ines",
        figma: "https://www.figma.com/design/HSh6lWKt03DkMpZX5HRpg2/Good-inspiration-Week-2?node-id=2-5&p=f&t=R793Egrh2dOVD64j-0"
    },
    {
        id: 3,
        title: "Ballamas e-commerce",
        preview: "/images/ballamas.png",
        desc: "Ballamas is an online men's fashion boutique created during a design and development challenge. It features an elegant and contemporary interface, showcasing a curated selection of trendy clothing and accessories.",
        demo: "https://figma-to-code-ed2-week2-swart.vercel.app/",
        github: "https://github.com/InesAbike/figma-to-code-ed2-week2",
        figma: "#"
    },
    {
        id: 4,
        title: "Monito",
        preview: "/images/monito.svg",
        desc: "Monitô is a modern e-commerce site dedicated to the world of pets, designed to provide a smooth and enjoyable shopping experience. The site features clear navigation, polished product showcases, and structured sections for easy browsing of categories and offers.",
        demo: "https://ftc-w3-ines.vercel.app/",
        github: "https://github.com/InesAbike/FTC-W3-Ines",
        figma: "https://www.figma.com/design/lIFEghc8DeFisH2LHL1yPn/-FREE-TEMPLATE--eCommerce-Website---Monito-Pets-for-Best--Community---Community-?node-id=1-4&p=f&t=HirNhCS5534iAICI-0"
    },
];

export const skills: string[] = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Docker",
    "Figma",
    "GitHub",
];

export const services: ServicesProps[] = [
    {
      number: "01.",
      title: "JavaScript & Frameworks",
      description: "Proficient in JavaScript and frameworks like React JS, I build interactive and dynamic web applications. My focus on clean, maintainable code allows me to implement complex functionalities, improve user interactivity, and create scalable solutions, ensuring smooth performance and a better user experience on all modern browsers."
    },
    {
      number: "02.",
      title: "Performance Optimization",
      description: "As a front-end web developer, I focus on performance optimization to create fast, responsive websites. I use techniques like code splitting, lazy loading, and optimizing images to reduce load times. I also leverage caching, minimize JavaScript, and utilize modern frameworks to deliver smooth, efficient user experiences across devices."
    },
    {
      number: "03.",
      title: "Search Engine Optimization (SEO)",
      description: "I implement SEO best practices in web development, including optimizing HTML structure, meta tags, and image attributes to enhance search engine visibility. I use semantic markup, structured data, and performance optimizations like lazy loading to improve website ranking, ensuring that sites are accessible, fast, and user-friendly for both search engines and users."
    },
    {
      number: "04.",
      title: "Version Control & Collaboration",
      description: "Experienced with version control systems like Git, I collaborate effectively within teams, managing codebases and ensuring smooth development workflows. I leverage branching strategies, handle pull requests, and resolve merge conflicts, which ensures a streamlined development process and maintains the integrity of the project throughout its lifecycle."
    }
  ];