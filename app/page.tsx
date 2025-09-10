
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
const projects = [
  {
    id:1,
    title: "VaultFlow",
    preview: "/saas-futurist.png",
    desc: "Landing page d'une saas au style futurist et aux animations fluides et modernes",
    demo: "ftc-w1-ines.vercel.app",
    github: "github.com/InesAbike/FTC-W1-Ines",
    figma: "https://www.figma.com/design/3xwYqxhJkfVyqwJ82iYJeZ/Challenge-FtoC?node-id=0-1&p=f&t=gp1YFyO9ofCZRsdr-0",
    type: "web"
  },
  {
    id:2,
    title: "Spend In",
    preview: "/spend-in-website.png",
    desc: "Landing page d'un site web de gestion des dépenses",
    demo: "https://ftc-w2-ines.vercel.app/",
    github: "https://github.com/InesAbike/FTC-W2-Ines",
    figma: "https://www.figma.com/design/HSh6lWKt03DkMpZX5HRpg2/Good-inspiration-Week-2?node-id=2-5&p=f&t=R793Egrh2dOVD64j-0",
    type: "web"
  },
  {
    id:3,
    title: "Ballamas e-commerce",
    preview: "/ballamas.png",
    desc: "Site e-commerce de vente de vêtements et d'accessoires",
    demo: "https://figma-to-code-ed2-week2-swart.vercel.app/",
    github: "https://github.com/InesAbike/figma-to-code-ed2-week2",
    figma: "#",
    type: "web"
  },
  {
    id:4,
    title: "App mobile Pokedex",
    preview: "/pokedex-preview.png",
    desc: "App mobile de recherche de pokemons",
    demo: "https://www.webmobilefirst.com/screencasts/s2-6xqmr-516zf/",
    github: "https://github.com/InesAbike/Pokedex",
    figma: "https://www.figma.com/design/r6GxDzD0J5U8wZU1416GrX/Pok%C3%A9dex--Community-?node-id=1024-1850&t=zkYpR3BE248PQder-0",
    type: "mobile"
  },
];

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "TailwindCSS",
  "React Native",
  "GitHub",
];


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#07060a] to-[#0b0710] text-white font-sans max-w-8xl">
      <header className="relative flex flex-col items-center justify-center min-h-screen bg-black text-center">
        <h1 className="md:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Inès Agbozo
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Front-End Developer
        </p>
        <div className="absolute mx-auto bottom-10 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </header>
      <section className="max-w-7xl mx-auto py-16">
        <h2 className="text-white md:text-4xl text-2xl font-semibold mb-12 text-center">Réalisations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-6">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              desc={p.desc}
              demo={p.demo}
              github={p.github}
              figma={p.figma}
              preview={p.preview}
              type={p.type}
            />
          ))}
        </div>

        <h2 className=" text-center text-white md:text-4xl text-2xl font-semibold">Outils & Technologies</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto lg:p-16 md:p-10 p-6 bg-gradient-to-b from-[#0b0b0f] via-[#0b0810] to-[#28153f]">
          {skills.map((s) => (
            <div key={s} className="text-center py-8 rounded-md bg-transparent hover:bg-slate-50/10 transition-all duration-300 border border-neutral-800 text-neutral-200">
              {s}
            </div>
          ))}
        </div>
      </section>
      <footer className="mt-8 pb-16 text-center p-6">
        <h2 className="text-white text-4xl font-semibold">Contactez moi</h2>
        <p className="text-neutral-300 mt-3">Avez-vous un projet en tête? Laissez-nous créer quelque chose de magnifique ensemble.</p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-sm">Contactez-moi</button>
          <button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-sm">Télécharger le CV</button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-neutral-300">
          {/* social icons placeholders - visible but textual content kept minimal as in interface */}
          <a href="https://www.linkedin.com/in/in%C3%A8s-agbozo-4510472b1/" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
            <FaLinkedin />
          </a>
          <a href="https://github.com/InesAbike/" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/ines.agbozo.9" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
            <FaFacebookF />
          </a>
        </div>
      </footer>
    </div>
  );
}
