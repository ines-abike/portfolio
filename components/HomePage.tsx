"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Nouveaux icônes pour le menu
import ProjectCard from "@/components/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { services, skills, projects } from "@/constants";
import { NavItemProps, LogoProps, ActionButtonProps } from "@/types";

gsap.registerPlugin(ScrollTrigger);

const NavItem: React.FC<NavItemProps & { onClick?: () => void }> = ({ label, href = "#", onClick }) => (
    <Link
        href={href}
        onClick={onClick}
        className="group flex items-center px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/20 transition-all duration-200 cursor-pointer whitespace-nowrap"
    >
        <span>{label}</span>
    </Link>
);

const Logo: React.FC<LogoProps> = ({ isScrolled }) => (
    <Link href="/" className={`flex items-center text-2xl font-bold font-morpich transition-all duration-500 ${isScrolled ? 'text-orange-600' : 'text-white'}`}>
        <span className="text-2xl">Ines</span>
    </Link>
);

export default function HomePage() {
    const headerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const projectsRef = useRef<HTMLElement>(null);
    const projectsTitleRef = useRef<HTMLHeadingElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const skillsTitleRef = useRef<HTMLHeadingElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const skillItemsRef = useRef<(HTMLDivElement | null)[]>([]);

    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // État du menu mobile

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Tes animations GSAP existantes (non modifiées pour la clarté)
        const tl = gsap.timeline();
        tl.fromTo(titleRef.current, { y: 100, opacity: 0, scale: 0.8 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" });
        // ... (le reste de tes animations GSAP reste identique)

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Gestion dynamique des classes de la nav
    const navContainerClasses = isScrolled
        ? "justify-between max-w-2xl mx-auto bg-white/10 py-3 backdrop-blur-md rounded-full px-6"
        : "justify-between max-w-7xl mx-auto px-8";

    return (
        <div className="bg-gradient-to-b from-black via-[#07060a] to-[#0b0710] text-white font-sans overflow-x-hidden">

            {/* NAVIGATION */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'pt-4' : 'pt-6'}`}>
                <div className={`flex items-center transition-all duration-500 ${navContainerClasses}`}>

                    <Logo isScrolled={isScrolled} />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center bg-white/5 p-1.5 rounded-full border border-white/20 shadow-lg">
                        <NavItem label="Home" href="#accueil" />
                        <NavItem label="About me" href="#a-propos" />
                        <NavItem label="Projects" href="#realisations" />
                        <NavItem label="Skills" href="#competences" />
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Action Button - Hidden on small mobile, visible on tablet/desktop */}
                        <Link href="#contact" className="hidden sm:block bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-orange-700 transition-all">
                            Contact me
                        </Link>

                        {/* Burger Toggle - Only Mobile */}
                        <button
                            className="md:hidden text-white p-2 text-2xl"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white text-3xl">
                        <HiX />
                    </button>
                    <NavItem label="Accueil" href="#accueil" onClick={() => setIsMenuOpen(false)} />
                    <NavItem label="À propos" href="#a-propos" onClick={() => setIsMenuOpen(false)} />
                    <NavItem label="Projets" href="#realisations" onClick={() => setIsMenuOpen(false)} />
                    <NavItem label="Compétences" href="#competences" onClick={() => setIsMenuOpen(false)} />
                    <Link
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold"
                    >
                        Contact me
                    </Link>
                </div>
            </nav>

            <header ref={headerRef} className="relative flex flex-col items-center justify-center min-h-screen bg-black text-center px-6 overflow-hidden">
                <div className="pt-20 relative flex flex-col gap-4">
                    <div className="flex items-center justify-center">
                        <div className="p-1 bg-orange-600 rounded-full">
                            <Image src="/images/inesss-agbozo.jpg" alt="logo" width={100} height={100} className="rounded-full w-20 h-20 md:w-24 md:h-24" />
                        </div>
                    </div>
                    <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-archivo max-w-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400">
                        Hey, I'm Inès. <br className="hidden md:block" /> Front-End Developer.
                    </h1>
                    <p ref={subtitleRef} className="max-w-xl mx-auto text-sm md:text-base text-neutral-400">
                        I develop web projects with the goal of making them both beautiful and useful...
                    </p>
                       <div className="mt-6 flex items-center justify-center gap-3">
                    <button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-sm hover:scale-105 transition-transform duration-300">Contact me</button>
                    <button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-sm hover:scale-105 transition-transform duration-300">Download CV</button>
                </div>
                </div>
            </header>

            <section id="a-propos" ref={projectsRef} className="max-w-7xl mx-auto md:py-24 py-12 px-6 md:px-16">
                {/* En-tête de section avec ligne décorative */}
                <div className="flex items-center gap-4 mb-16">
                    <h2 ref={projectsTitleRef} className="font-archivo text-orange-500 text-3xl md:text-5xl font-bold whitespace-nowrap">
                        About me
                    </h2>
                    <div className="h-[1px] w-full bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Colonne Texte : Storytelling (7 colonnes) */}
                    <div className="lg:col-span-7 space-y-6 text-slate-300 text-justify leading-relaxed text-lg">
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-orange-500 first-letter:mr-3 first-letter:float-left">
                            I’m Inès Agbozo, a front-end web developer focused on building clean, responsive, and user-centered interfaces.
                            I turn ideas and designs into reliable, high-performing web experiences using modern technologies like React and Tailwind CSS.
                        </p>

                        <p>
                            Curious by nature and detail-oriented, I care as much about usability and performance as I do about code quality. My goal is simple: create digital products that are both efficient and meaningful.
                        </p>

                        <p>
                            When I'm not coding, I'm font off make photography and play chess. 
                        </p>
                    </div>

                    {/* Colonne Expérience : Look "Bento" (5 colonnes) */}
                    <div className="lg:col-span-5 space-y-4">
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center text-sm">01</span>
                            Professional Journey
                        </h3>

                        <div className="space-y-4">
                            {/* Item Expérience */}
                            {[
                                { year: "2023 — Present", role: "Senior Front-End", company: "Klaviyo" },
                                { year: "2021 — 2023", role: "UI Engineer", company: "Creative Agency" },
                                { year: "2019 — 2021", role: "Web Developer", company: "Start-up Studio" },
                            ].map((exp, i) => (
                                <div key={i} className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300">
                                    <span className="text-xs font-mono text-orange-500/80">{exp.year}</span>
                                    <h4 className="text-white font-medium group-hover:translate-x-1 transition-transform">{exp.role}</h4>
                                    <p className="text-slate-500 text-sm">{exp.company}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="realisations" ref={projectsRef} className="max-w-7xl mx-auto md:px-16 sm:px-10 px-4">
                <div className="flex items-center gap-4 mb-16">
                    <h2 ref={projectsTitleRef} className="font-archivo text-orange-500 text-3xl md:text-5xl font-bold whitespace-nowrap">
                        Projects
                    </h2>
                    <div className="h-[1px] w-full bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto md:py-16 py-6 md:px-16 sm:px-10 px-4">
                <div className="flex items-center gap-4 mb-16">
                    <h2 ref={projectsTitleRef} className="font-archivo text-orange-500 text-3xl md:text-5xl font-bold whitespace-nowrap">
                        What I can do for you
                    </h2>
                    <div className="h-[1px] w-full bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((skill, index) => (
                        <div
                            key={index}
                            className="border border-white/5 p-8 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300"
                        >
                            <h2 className="text-gray-400 text-xl font-bold mb-4">
                                {skill.number} <span className="text-white">{skill.title}</span>
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-justify">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="md:py-16 py-6">
                <div className="flex items-center gap-4 md:px-16 sm:px-10 px-4">
                    <h2 ref={skillsTitleRef} className="font-archivo text-orange-500 text-3xl md:text-5xl font-bold whitespace-nowrap">
                        Skills
                    </h2>
                    <div className="h-[1px] w-full bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                </div>
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

            <div id="contact" ref={footerRef} className="mt-8 md:py-16 py-6 text-center px-6">
                <h2 className="text-4xl font-semibold font-archivo text-orange-500">Get in touch with me</h2>
                <p className="text-neutral-300 mt-3 max-w-xl mx-auto">You have a web project in mind? Whether it’s about building a modern application, redesigning your website, or bringing an innovative idea to life, I’d be happy to discuss it with you.</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                    <button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-sm hover:scale-105 transition-transform duration-300">Contact me</button>
                    <button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-sm hover:scale-105 transition-transform duration-300">Download CV</button>
                </div>
                <div className="mt-6 flex items-center justify-center gap-4 text-neutral-300">
                    <Link href="https://www.linkedin.com/in/in%C3%A8s-agbozo-4510472b1/" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-110 hover:bg-orange-500 transition-all duration-300">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://github.com/InesAbike/" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-110 hover:bg-orange-600 transition-all duration-300">
                        <FaGithub />
                    </Link>
                    <Link href="https://www.facebook.com/ines.agbozo.9" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-110 hover:bg-orange-600 transition-all duration-300">
                        <FaFacebookF />
                    </Link>
                </div>
            </div>
            <footer className="border-t border-white/10"><div className="p-4 text-sm font-light">Copyright©2025. InesAgbozo.</div></footer>
        </div>
    );
}