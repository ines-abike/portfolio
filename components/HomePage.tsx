'use client';

import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* =========================
   Types
========================= */

type NavItemProps = {
  label: string;
  href?: string;
};

type LogoProps = {
  isScrolled: boolean;
};

type ActionButtonProps = {
  isScrolled: boolean;
};

type Project = {
  id: number;
  title: string;
  preview: string;
  desc: string;
  demo: string;
  github: string;
  figma: string;
  type: "web" | "mobile";
};

/* =========================
   UI Components
========================= */

const NavItem: React.FC<NavItemProps> = ({ label, href = "#" }) => (
  <Link
    href={href}
    className="group flex items-center px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-all duration-200 whitespace-nowrap"
  >
    {label}
  </Link>
);

const Logo: React.FC<LogoProps> = ({ isScrolled }) => (
  <Link
    href="/"
    className={`flex items-center font-bold transition-all duration-500 ${
      isScrolled ? "text-orange-600 text-xl" : "text-white text-2xl"
    }`}
  >
    Ines
  </Link>
);

const ActionButton: React.FC<ActionButtonProps> = ({ isScrolled }) => (
  <Link
    href="#contact"
    className={`bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 whitespace-nowrap ${
      isScrolled ? "hover:bg-orange-700" : "shadow-lg hover:shadow-xl"
    }`}
  >
    Contactez-moi
  </Link>
);

const CentralNav: React.FC = () => (
  <div className="flex items-center bg-white/5 p-1.5 rounded-full border border-white/20 shadow-lg">
    <NavItem label="Accueil" href="#accueil" />
    <NavItem label="À propos" href="#a-propos" />
    <NavItem label="Projets" href="#realisations" />
    <NavItem label="Compétences" href="#competences" />
  </div>
);

/* =========================
   Data
========================= */

const projects: Project[] = [
  {
    id: 1,
    title: "VaultFlow",
    preview: "/images/saas-futurist.png",
    desc: "Vaultflow est une landing page fictive...",
    demo: "https://ftc-w1-ines.vercel.app",
    github: "https://github.com/InesAbike/FTC-W1-Ines",
    figma: "https://www.figma.com/design/3xwYqxhJkfVyqwJ82iYJeZ/Challenge-FtoC",
    type: "web",
  },
  {
    id: 2,
    title: "Spend In",
    preview: "/images/spend-in-website.png",
    desc: "Spend.In est une application web fictive...",
    demo: "https://ftc-w2-ines.vercel.app/",
    github: "https://github.com/InesAbike/FTC-W2-Ines",
    figma: "https://www.figma.com/design/HSh6lWKt03DkMpZX5HRpg2",
    type: "web",
  },
  {
    id: 3,
    title: "Ballamas e-commerce",
    preview: "/images/ballamas.png",
    desc: "Ballamas est une boutique en ligne fictive...",
    demo: "https://figma-to-code-ed2-week2-swart.vercel.app/",
    github: "https://github.com/InesAbike/figma-to-code-ed2-week2",
    figma: "#",
    type: "web",
  },
  {
    id: 4,
    title: "App mobile Pokedex",
    preview: "/images/pokedex-preview.png",
    desc: "Mini application mobile Pokédex...",
    demo: "https://www.webmobilefirst.com/screencasts/s2-6xqmr-516zf/",
    github: "https://github.com/InesAbike/Pokedex",
    figma: "https://www.figma.com/design/r6GxDzD0J5U8wZU1416GrX",
    type: "mobile",
  },
];

const skills: string[] = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "TailwindCSS",
  "React Native",
  "GitHub",
];

/* =========================
   Page
========================= */

export default function HomePage() {
  const headerRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsSectionRef = useRef<HTMLElement | null>(null);
  const projectsTitleRef = useRef<HTMLHeadingElement | null>(null);

  const skillsRef = useRef<HTMLDivElement | null>(null);
  const skillsTitleRef = useRef<HTMLHeadingElement | null>(null);

  const footerRef = useRef<HTMLDivElement | null>(null);

  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const skillItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });

    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(subtitleRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.4");

    projectCardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    skillItemsRef.current.forEach((skill, i) => {
      if (!skill) return;
      gsap.fromTo(
        skill,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <nav className="fixed top-0 w-full z-50 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-8">
          <Logo isScrolled={isScrolled} />
          <CentralNav />
          <ActionButton isScrolled={isScrolled} />
        </div>
      </nav>

      <header ref={headerRef} className="h-screen flex flex-col items-center justify-center">
        <Image src="/images/inesss-agbozo.jpg" alt="Inès" width={80} height={80} className="rounded-full" />
        <h1 ref={titleRef} className="text-5xl font-bold mt-4">Inès Agbozo</h1>
        <p ref={subtitleRef} className="text-gray-400">Front-End Developer</p>
      </header>

      <section id="realisations" ref={projectsSectionRef} className="max-w-7xl mx-auto px-8">
        <h2 ref={projectsTitleRef} className="text-3xl text-center mb-12">Réalisations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={p.id} ref={(el) => {
  projectCardsRef.current[i] = el;
}}>
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </section>

      <section id="competences" ref={skillsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 p-16">
        {skills.map((s, i) => (
          <div
            key={s}
         ref={(el) => {
  skillItemsRef.current[i] = el;
}}

            className="border border-neutral-700 py-6 text-center rounded-md"
          >
            {s}
          </div>
        ))}
      </section>

      <footer ref={footerRef} id="contact" className="text-center py-16">
        <h2 className="text-3xl">Contactez-moi</h2>
        <div className="flex justify-center gap-4 mt-6">
          <FaLinkedin />
          <FaGithub />
          <FaFacebookF />
        </div>
      </footer>
    </div>
  );
}
