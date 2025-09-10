import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
const projects = [
  {
    title: "E-Commerce Platform",
    preview: "/preview-new.webp",
    desc: "A modern e-commerce platform built with Next.js and Stripe",
    demo: "ftc-w1-ines.vercel.app",
    github: "github.com/InesAbike/FTC-W1-Ines",
    figma: "https://www.figma.com/design/3xwYqxhJkfVyqwJ82iYJeZ/Challenge-FtoC?node-id=0-1&p=f&t=gp1YFyO9ofCZRsdr-0"
  },
  {
    title: "AI Chat Application",
    preview: "/preview-new.webp",
    desc: "Real-time chat application powered by OpenAI",
    demo: "https://github.com/InesAbike/MVP-CodeTeam",
    github: "https://github.com/InesAbike/MVP-CodeTeam",
    figma: "https://github.com/InesAbike/MVP-CodeTeam"
  },
  {
    title: "Task Management",
    preview: "/preview-new.webp",
    desc: "Collaborative task management tool with real-time updates",
    demo: "https://github.com/InesAbike/MVP-CodeTeam",
    github: "https://github.com/InesAbike/MVP-CodeTeam",
    figma: "https://github.com/InesAbike/MVP-CodeTeam"
  },
  {
    title: "Portfolio Generator",
    preview: "/preview-new.webp",
    desc: "Dynamic portfolio generator for developers",
    demo: "https://github.com/InesAbike/MVP-CodeTeam",
    github: "https://github.com/InesAbike/MVP-CodeTeam",
    figma: "https://github.com/InesAbike/MVP-CodeTeam"
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

function ProjectCard({ title, desc, demo, github, figma, preview }: { title: string; desc: string; demo: string; github: string, figma: string, preview: string }) {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg bg-gradient-to-tr from-[#0b0b0f] via-[#0b0810] to-[#0b0710] border border-neutral-800">
      <div className="group inset-0 relative bg-[linear-gradient(135deg,#0f0f13_0%,#0b0710_40%,#111015_100%)]/">
        <Image
          src={preview}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" />
        <div className="bg-black/50 h-full w-full inset-0 absolute flex items-end justify-start">
          <div className="p-4 pb-6">
            <h3 className="font-semibold text-neutral-100">{title}</h3>
            <p className="text-neutral-300 mt-2">{desc}</p>

            <div className="mt-4 flex gap-3">
              <Link href={demo} className="p-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200"><BsEye /></Link>
              <Link href={github} className="p-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200"><RiGitRepositoryCommitsFill /></Link>
              <Link href={figma} className="p-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200"><FiFigma /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#07060a] to-[#0b0710] text-white font-sans max-w-8xl">
      <header className="relative flex flex-col items-center justify-center min-h-screen bg-black text-center">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
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
        <h2 className="text-white text-4xl font-semibold mb-12 text-center">Réalisations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} desc={p.desc} demo={p.demo} github={p.github} figma={p.figma} preview={p.preview} />
          ))}
        </div>

        <h2 className=" text-center text-white text-4xl font-semibold">Outils & Technologies</h2>

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
          <Link href="https://www.facebook.com/ines.agbozo" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
            <FaLinkedin />
          </Link>
          <Link href="https://www.facebook.com/ines.agbozo" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
            <FaGithub />
          </Link>
          <Link href="https://www.facebook.com/ines.agbozo" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
            <FaFacebookF />
          </Link>
        </div>
      </footer>
    </div>
  );
}
