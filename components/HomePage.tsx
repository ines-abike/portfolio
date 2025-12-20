'use client'

import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

import ProjectCard from "@/components/ProjectCard";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import Link from "next/link";

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Typage des props des composants
interface NavItemProps {
    label: string;
    href?: string;
}

interface LogoProps {
    isScrolled: boolean;
}

interface ActionButtonProps {
    isScrolled: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, href = "#" }) => (
    <Link
        href={href}
        className="group flex items-center px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-all duration-200 cursor-pointer whitespace-nowrap"
    >
        <span>{label}</span>
    </Link>
);

const Logo: React.FC<LogoProps> = ({ isScrolled }) => (
    <Link href="/" className={`flex items-center text-2xl font-bold transition-all duration-500 ${isScrolled ? 'text-orange-600' : 'text-white'}`}>
        <span className={`transition-opacity duration-300 ${isScrolled ? 'opacity-100 text-xl' : 'opacity-100 text-2xl'}`}>
            Ines
        </span>
    </Link>
);

const ActionButton: React.FC<ActionButtonProps> = ({ isScrolled }) => (
    <Link href="#contact"
        className={`bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 whitespace-nowrap
      ${isScrolled ? 'hover:bg-orange-700' : 'shadow-lg hover:shadow-xl'}`}
    >
        Contactez-moi
    </Link>
);

// Conteneur central des liens (La Pilule)
const CentralNav: React.FC = () => (
    <div className="flex items-center bg-white/5 p-1.5 rounded-full border border-white/20 shadow-lg">
        <NavItem label="Accueil" href="#accueil" />
        <NavItem label="À propos" href="#a-propos" />
        <NavItem label="Projets" href="#realisations" />
        <NavItem label="Compétences" href="#competences" />
    </div>
);

interface Project {
    id: number;
    title: string;
    preview: string;
    desc: string;
    demo: string;
    github: string;
    figma: string;
    type: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "VaultFlow",
        preview: "/images/saas-futurist.png",
        desc: "Vaultflow est une landing page fictive créée dans le cadre d'un challenge. Elle présente un design moderne et épuré, mettant en avant une plateforme d'analyse de données avec un tableau de bord et des fonctionnalités interactives, dans le but de démontrer des compétences en UI/UX et développement front-end.",
        demo: "https://ftc-w1-ines.vercel.app",
        github: "https://github.com/InesAbike/FTC-W1-Ines",
        figma: "https://www.figma.com/design/3xwYqxhJkfVyqwJ82iYJeZ/Challenge-FtoC?node-id=0-1&p=f&t=gp1YFyO9ofCZRsdr-0",
        type: "web"
    },
    {
        id: 2,
        title: "Spend In",
        preview: "/images/spend-in-website.png",
        desc: "Spend.In est une application web fictive de gestion des dépenses, offrant une interface moderne et intuitive pour suivre, organiser et analyser les transactions professionnelles. Elle permet de centraliser les dépenses, visualiser l'historique des paiements et explorer les fonctionnalités de suivi financier, le tout dans un design épuré et responsive.",
        demo: "https://ftc-w2-ines.vercel.app/",
        github: "https://github.com/InesAbike/FTC-W2-Ines",
        figma: "https://www.figma.com/design/HSh6lWKt03DkMpZX5HRpg2/Good-inspiration-Week-2?node-id=2-5&p=f&t=R793Egrh2dOVD64j-0",
        type: "web"
    },
    {
        id: 3,
        title: "Ballamas e-commerce",
        preview: "/images/ballamas.png",
        desc: "Ballamas est une boutique en ligne fictive de mode masculine, créée dans le cadre d'un challenge de design et développement. Elle présente une interface élégante et moderne, mettant en avant une sélection de vêtements et accessoires tendance.",
        demo: "https://figma-to-code-ed2-week2-swart.vercel.app/",
        github: "https://github.com/InesAbike/figma-to-code-ed2-week2",
        figma: "#",
        type: "web"
    },
    {
        id: 4,
        title: "App mobile Pokedex",
        preview: "/images/pokedex-preview.png",
        desc: "Pokédex, ce mini projet d'application mobile permet de rechercher et découvrir tous les Pokémon facilement. Elle affiche chaque Pokémon avec son image, son nom et son numéro dans le Pokédex, et propose des outils pratiques pour filtrer les Pokémon par ID ou numéro ainsi que pour les rechercher rapidement par nom.",
        demo: "https://www.webmobilefirst.com/screencasts/s2-6xqmr-516zf/",
        github: "https://github.com/InesAbike/Pokedex",
        figma: "https://www.figma.com/design/r6GxDzD0J5U8wZU1416GrX/Pok%C3%A9dex--Community-?node-id=1024-1850&t=zkYpR3BE248PQder-0",
        type: "mobile"
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

export default function HomePage() {
    const headerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const projectsTitleRef = useRef<HTMLHeadingElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const skillsTitleRef = useRef<HTMLHeadingElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const skillItemsRef = useRef<(HTMLDivElement | null)[]>([]);

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 80;
            setIsScrolled(scrolled);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

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
        
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const containerClasses = isScrolled
        ? "justify-between max-w-2xl mx-auto bg-white/80 py-3 backdrop-blur-md rounded-full"
        : "justify-between max-w-7xl mx-auto";

    return (
        <div className="bg-gradient-to-b from-black via-[#07060a] to-[#0b0710] text-white font-sans max-w-8xl">
            <nav className="fixed py-4 top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out">
                <div className={`flex items-center px-8 transition-all duration-500 ${containerClasses}`}>
                    <Logo isScrolled={isScrolled} />
                    <CentralNav />
                    <ActionButton isScrolled={isScrolled} />
                </div>
            </nav>

            <header ref={headerRef} className="relative flex flex-col items-center justify-center h-screen bg-black text-center overflow-hidden">
                <div className="pt-32 relative flex flex-col gap-4">
                    <div className="flex items-center justify-center">
                        <div className="p-1 bg-orange-600 rounded-full">
                            <Image src="/images/inesss-agbozo.jpg" alt="logo" width={100} height={100} className="rounded-full w-20 h-20" />
                        </div>
                    </div>
                    <h1
                        ref={titleRef}
                        className="md:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"
                    >
                        Inès Agbozo
                    </h1>
                    <p
                        ref={subtitleRef}
                        className="text-lg text-gray-300"
                    >
                        Front-End Developer
                    </p>
                    <div className="max-w-xl">
                        Hi, je suis Inès AGBOZO, développeuse web front-end. Je transforme vos idées en interfaces modernes, belles et intuitives, conçues pour offrir une expérience utilisateur fluide et agréable.
                    </div>
                </div>
            </header>

            <section id="a-propos" ref={projectsRef} className="max-w-7xl mx-auto py-16">
                <h2
                    ref={projectsTitleRef}
                    className="text-white md:text-4xl text-2xl font-semibold mb-12 text-center"
                >
                    À propos
                </h2>
                <div className="grid md:grid-cols-2 grid-cols-1 text-justify gap-10 mb-16 px-16">
                    <div className="flex flex-col gap-6">
                        <div>
                            I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
                            Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
                        </div>
                        <div>
                            In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.
                        </div>
                        <div>
                            In my spare time, I'm usually climbing, playing tennis, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className="md:text-2xl text-xl font-semibold mb-12">Experiences</h2>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="realisations" ref={projectsRef} className="max-w-7xl mx-auto">
                <h2
                    ref={projectsTitleRef}
                    className="text-white md:text-4xl text-2xl font-semibold mb-12 text-center"
                >
                    Réalisations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-16">
                    {projects.map((p, index) => (
                        <div
                            key={p.title}
                            ref={(el) => {
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
                    id="competences"
                    ref={skillsRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto lg:p-16 md:p-10 p-6 bg-gradient-to-b from-black via-[#0b0810] to-orange-600"
                >
                    {skills.map((s, index) => (
                        <div
                            key={s}
                            ref={(el) => { skillItemsRef.current[index] = el; }}
                            className="text-center py-8 rounded-md bg-transparent hover:bg-slate-50/10 transition-all duration-300 border border-neutral-800 text-neutral-200 cursor-pointer"
                        >
                            {s}
                        </div>
                    ))}
                </div>
            </section>

            <div id="contact" ref={footerRef} className="mt-8 pb-16 text-center p-6">
                <h2 className="text-white text-4xl font-semibold">Contactez moi</h2>
                <p className="text-neutral-300 mt-3 max-w-xl mx-auto">Vous avez un projet web en tête ? Que ce soit pour créer une application moderne,
                    refondre votre site ou donner vie à une idée innovante, je serais ravie d'en discuter avec vous.</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                    <button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-sm hover:scale-105 transition-transform duration-300">Contactez-moi</button>
                    <button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-sm hover:scale-105 transition-transform duration-300">Télécharger le CV</button>
                </div>

                <div className="mt-6 flex items-center justify-center gap-4 text-neutral-300">
                    <a href="https://www.linkedin.com/in/in%C3%A8s-agbozo-4510472b1/" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-110 hover:bg-orange transition-all duration-300">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/InesAbike/" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-110 hover:bg-orange-600 transition-all duration-300">
                        <FaGithub />
                    </a>
                    <a href="https://www.facebook.com/ines.agbozo.9" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-110 hover:bg-orange-600 transition-all duration-300">
                        <FaFacebookF />
                    </a>
                </div>
            </div>
            <footer className="border-t border-white/10"><div className="p-4 text-sm font-light">Copyright©2025.InesAgbozo.</div></footer>

        </div>
    );
}