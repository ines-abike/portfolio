'use client'
import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id:1,
    title: "VaultFlow",
    preview: "/saas-futurist.png",
    desc: "Vaultflow est une landing page fictive créée dans le cadre d'un challenge. Elle présente un design moderne et épuré, mettant en avant une plateforme d'analyse de données avec un tableau de bord et des fonctionnalités interactives, dans le but de démontrer des compétences en UI/UX et développement front-end.",
    demo: "https://ftc-w1-ines.vercel.app",
    github: "github.com/InesAbike/FTC-W1-Ines",
    figma: "https://www.figma.com/design/3xwYqxhJkfVyqwJ82iYJeZ/Challenge-FtoC?node-id=0-1&p=f&t=gp1YFyO9ofCZRsdr-0",
    type: "web"
  },
  {
    id:2,
    title: "Spend In",
    preview: "/spend-in-website.png",
    desc: "Spend.In est une application web fictive de gestion des dépenses, offrant une interface moderne et intuitive pour suivre, organiser et analyser les transactions professionnelles. Elle permet de centraliser les dépenses, visualiser l'historique des paiements et explorer les fonctionnalités de suivi financier, le tout dans un design épuré et responsive.",
    demo: "https://ftc-w2-ines.vercel.app/",
    github: "https://github.com/InesAbike/FTC-W2-Ines",
    figma: "https://www.figma.com/design/HSh6lWKt03DkMpZX5HRpg2/Good-inspiration-Week-2?node-id=2-5&p=f&t=R793Egrh2dOVD64j-0",
    type: "web"
  },
  {
    id:3,
    title: "Ballamas e-commerce",
    preview: "/ballamas.png",
    desc: "Ballamas est une boutique en ligne fictive de mode masculine, créée dans le cadre d'un challenge de design et développement. Elle présente une interface élégante et moderne, mettant en avant une sélection de vêtements et accessoires tendance.", 
    demo: "https://figma-to-code-ed2-week2-swart.vercel.app/",
    github: "https://github.com/InesAbike/figma-to-code-ed2-week2",
    figma: "#",
    type: "web"
  },
  {
    id:4,
    title: "App mobile Pokedex",
    preview: "/pokedex-preview.png",
    desc: "Pokédex, ce mini projet d'application mobile permet de rechercher et découvrir tous les Pokémon facilement. Elle affiche chaque Pokémon avec son image, son nom et son numéro dans le Pokédex, et propose des outils pratiques pour filtrer les Pokémon par ID ou numéro ainsi que pour les rechercher rapidement par nom.",
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
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const arrowRef = useRef(null);
  const projectsRef = useRef(null);
  const projectsTitleRef = useRef(null);
  const skillsRef = useRef(null);
  const skillsTitleRef = useRef(null);
  const footerRef = useRef(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const skillItemsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Animation d'entrée du header
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { 
        y: 100, 
        opacity: 0,
        scale: 0.8,
      }, 
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 1.2, 
        ease: "power3.out" 
      }
    )
    .fromTo(subtitleRef.current, 
      { 
        y: 50, 
        opacity: 0 
      }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out" 
      }, 
      "-=0.5"
    )
    .fromTo(arrowRef.current, 
      { 
        opacity: 0, 
        y: -20 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        ease: "bounce.out" 
      }, 
      "-=0.3"
    );

    // Animation continue pour la flèche
    gsap.to(arrowRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Effet de particules flottantes sur le titre
    gsap.to(titleRef.current, {
      textShadow: "0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    // Animation des titres de section avec ScrollTrigger
    gsap.fromTo(projectsTitleRef.current, 
      { 
        y: 80, 
        opacity: 0,
        rotationX: 45
      }, 
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(skillsTitleRef.current, 
      { 
        y: 80, 
        opacity: 0,
        rotationX: 45
      }, 
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animation des cartes projet
    projectCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          { 
            y: 100, 
            opacity: 0,
            scale: 0.8,
            rotationY: index % 2 === 0 ? -15 : 15
          }, 
          { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            rotationY: 0,
            duration: 0.8, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Animation des compétences
    skillItemsRef.current.forEach((skill, index) => {
      if (skill) {
        gsap.fromTo(skill, 
          { 
            y: 60, 
            opacity: 0,
            scale: 0.5,
            rotation: 180
          }, 
          { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            rotation: 0,
            duration: 0.6, 
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Animation du footer
    gsap.fromTo(footerRef.current, 
      { 
        y: 100, 
        opacity: 0 
      }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Nettoyage des événements
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#07060a] to-[#0b0710] text-white font-sans max-w-8xl">
      <header ref={headerRef} className="relative flex flex-col items-center justify-center min-h-screen bg-black text-center overflow-hidden">
       <div className="relative">
       <h1 
          ref={titleRef}
          className="md:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Inès Agbozo
        </h1>
        <Image src="/radial-gradient.png" alt="logo" width={100} height={100} className="absolute left-1/2" />
       </div>
        <p 
          ref={subtitleRef}
          className="mt-4 text-lg text-gray-300"
        >
          Front-End Developer
        </p>
        <div 
          ref={arrowRef}
          className="absolute mx-auto bottom-10"
        >
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
      
      <section ref={projectsRef} className="max-w-7xl mx-auto py-16">
        <h2 
          ref={projectsTitleRef}
          className="text-white md:text-4xl text-2xl font-semibold mb-12 text-center"
        >
          Réalisations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-6">
          {projects.map((p, index) => (
            <div 
              key={p.title}
              ref={el => {
                projectCardsRef.current[index] = el;
              }}
            >
              <ProjectCard
                title={p.title}
                desc={p.desc}
                demo={p.demo}
                github={p.github}
                figma={p.figma}
                preview={p.preview}
                type={p.type}
              />
            </div>
          ))}
        </div>

        <h2 
          ref={skillsTitleRef}
          className="text-center text-white md:text-4xl text-2xl font-semibold"
        >
          Outils & Technologies
        </h2>

        <div 
          ref={skillsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto lg:p-16 md:p-10 p-6 bg-gradient-to-b from-[#0b0b0f] via-[#0b0810] to-[#28153f]"
        >
          {skills.map((s, index) => (
            <div 
              key={s} 
              ref={el => { skillItemsRef.current[index] = el; }}
              className="text-center py-8 rounded-md bg-transparent hover:bg-slate-50/10 transition-all duration-300 border border-neutral-800 text-neutral-200 cursor-pointer"
            >
              {s}
            </div>
          ))}
        </div>
      </section>
      
      <footer ref={footerRef} className="mt-8 pb-16 text-center p-6">
        <h2 className="text-white text-4xl font-semibold">Contactez moi</h2>
        <p className="text-neutral-300 mt-3">Avez-vous un projet en tête? Laissez-nous créer quelque chose de magnifique ensemble.</p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-sm hover:scale-105 transition-transform duration-300">Contactez-moi</button>
          <button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-sm hover:scale-105 transition-transform duration-300">Télécharger le CV</button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-neutral-300">
          <a href="https://www.linkedin.com/in/in%C3%A8s-agbozo-4510472b1/" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-110 hover:bg-purple-200 transition-all duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/InesAbike/" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-110 hover:bg-purple-200 transition-all duration-300">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/ines.agbozo.9" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-110 hover:bg-purple-200 transition-all duration-300">
            <FaFacebookF />
          </a>
        </div>
      </footer>
    </div>
  );
}