"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ProjectCard from "@/components/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { services, skills, projects } from "@/constants";
import { NavItemProps, LogoProps } from "@/types";

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
    const ctaButtonsRef = useRef<HTMLDivElement>(null);
    const aboutSectionRef = useRef<HTMLElement>(null);
    const aboutTextRef = useRef<HTMLDivElement>(null);
    const experienceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const projectsRef = useRef<HTMLElement>(null);
    const projectsTitleRef = useRef<HTMLHeadingElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const skillsRef = useRef<HTMLDivElement>(null);
    const skillsTitleRef = useRef<HTMLHeadingElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const skillItemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const loaderRef = useRef<HTMLDivElement>(null);
    const countRef = useRef<HTMLSpanElement>(null);
    const heroImageRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
  
        // 1. Gestion du scroll avec smooth navbar
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

       const tl = gsap.timeline();
        
        const counter = { value: 0 };
        tl.to(counter, {
            value: 100,
            duration: 2.5,
            ease: "power3.inOut",
            onUpdate: () => {
                if (countRef.current) {
                    countRef.current.innerText = Math.round(counter.value).toString();
                }
            }
        });

        // B. Le loader disparaît avec un effet de reveal
        tl.to(loaderRef.current, {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1.4,
            ease: "expo.inOut",
        })

        // C. Hero Image - Apparition dramatique
        .fromTo(heroImageRef.current,
            { 
                scale: 1.8, 
                opacity: 0, 
                filter: "blur(20px)",
                rotation: -10
            },
            { 
                scale: 1, 
                opacity: 1, 
                filter: "blur(0px)", 
                rotation: 0,
                duration: 1.6, 
                ease: "expo.out" 
            },
            "-=0.6"
        )
        
        // D. Titre - Split text effect
        .fromTo(titleRef.current,
            { y: 120, opacity: 0, rotationX: 45 },
            { 
                y: 0, 
                opacity: 1, 
                rotationX: 0,
                duration: 1.2, 
                ease: "back.out(1.4)" 
            },
            "-=1"
        )
        
        // E. Subtitle - Fade slide
        .fromTo(subtitleRef.current,
            { y: 40, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.9,
                ease: "power2.out" 
            },
            "-=0.7"
        )
        // 5. Cartes d'expérience - Cascade effect
        experienceCardsRef.current.forEach((card, index) => {
            if (!card) return;
            gsap.fromTo(card,
                { 
                    x: index % 2 === 0 ? -100 : 100, 
                    opacity: 0,
                    rotationY: index % 2 === 0 ? -30 : 30
                },
                {
                    x: 0,
                    opacity: 1,
                    rotationY: 0,
                    duration: 1.2,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // 6. Project Cards - Stagger reveal avec scale
        gsap.fromTo(projectCardsRef.current,
            { 
                y: 80, 
                opacity: 0,
                scale: 0.8,
                rotationX: 45
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                rotationX: 0,
                stagger: {
                    each: 0.2,
                    from: "start",
                    ease: "power2.out"
                },
                duration: 1,
                ease: "back.out(1.4)",
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // 7. Services Cards - Flip effect
        serviceCardsRef.current.forEach((card, index) => {
            if (!card) return;
            gsap.fromTo(card,
                { 
                    opacity: 0,
                    rotationY: 90,
                    x: index % 2 === 0 ? -50 : 50
                },
                {
                    opacity: 1,
                    rotationY: 0,
                    x: 0,
                    duration: 1,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // 8. Skills - Wave reveal
        gsap.fromTo(skillItemsRef.current,
            { 
                y: 50, 
                opacity: 0,
                scale: 0.5
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: {
                    each: 0.08,
                    from: "start",
                    grid: "auto",
                    ease: "power1.inOut"
                },
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // 9. Footer - Fade up
        gsap.fromTo(footerRef.current,
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // 10. Titres de section - Slide from left avec ligne
        [projectsTitleRef, skillsTitleRef].forEach(ref => {
            if (!ref.current) return;
            gsap.fromTo(ref.current,
                { 
                    x: -100, 
                    opacity: 0 
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const navContainerClasses = isScrolled
        ? "justify-between max-w-2xl mx-auto bg-white/10 py-3 backdrop-blur-md rounded-full md: px-6 px-4"
        : "justify-between max-w-7xl mx-auto md:px-8 px-0";

    return (
        <div className="bg-[#03071e] text-white font-sans overflow-hidden selection:bg-orange-600">
            
            {/* LOADER */}
            <div ref={loaderRef}
                className="fixed inset-0 z-[100] bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900 flex flex-col items-center justify-center pointer-events-none"
                style={{ clipPath: "inset(0% 0% 0% 0%)" }}
            >
                <div className="overflow-hidden">
                    <div className="text-white text-[12vw] font-archivo font-black leading-none flex items-baseline drop-shadow-2xl">
                        <span ref={countRef}>0</span>
                        <span className="text-[4vw] ml-2">%</span>
                    </div>
                </div>
                <p className="mt-4 font-mono text-sm tracking-widest uppercase text-white/90">Loading Experience</p>
            </div>

            {/* NAVIGATION */}
            <nav className={`px-4 fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'pt-4' : 'pt-6'}`}>
                <div className={`flex items-center transition-all duration-500 ${navContainerClasses}`}>
                    <Logo isScrolled={isScrolled} />

                    <div className="hidden md:flex items-center bg-white/5 p-1.5 rounded-full border border-white/20 shadow-lg backdrop-blur-sm">
                        <NavItem label="Home" href="#accueil" />
                        <NavItem label="About me" href="#a-propos" />
                        <NavItem label="Projects" href="#realisations" />
                        <NavItem label="Skills" href="#competences" />
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="#contact" className="hidden sm:block bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-orange-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-600/30">
                            Contact me
                        </Link>

                        <button
                            className="md:hidden text-white p-2 text-2xl hover:scale-110 transition-transform"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white text-3xl hover:rotate-90 transition-transform duration-300">
                        <HiX />
                    </button>
                    <NavItem label="Accueil" href="#accueil" onClick={() => setIsMenuOpen(false)} />
                    <NavItem label="À propos" href="#a-propos" onClick={() => setIsMenuOpen(false)} />
                    <NavItem label="Projets" href="#realisations" onClick={() => setIsMenuOpen(false)} />
                    <NavItem label="Compétences" href="#competences" onClick={() => setIsMenuOpen(false)} />
                    <Link
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:scale-110 transition-transform"
                    >
                        Contact me
                    </Link>
                </div>
            </nav>

            {/* HEADER */}
            <header ref={headerRef} className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
                <div className="pt-20 relative flex flex-col gap-4">
                    <div className="flex items-center justify-center">
                        <div 
                            ref={heroImageRef} 
                            className="p-1 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full shadow-2xl shadow-orange-600/50"
                            style={{ perspective: "1000px" }}
                        >
                            <Image 
                                src="/images/ines.jpeg" 
                                alt="Inès Agbozo" 
                                width={100} 
                                height={100} 
                                className="rounded-full w-20 h-20 md:w-24 md:h-24 object-cover" 
                            />
                        </div>
                    </div>
                    <h1 
                        ref={titleRef} 
                        className="text-4xl md:text-6xl lg:text-7xl font-archivo max-w-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"
                        style={{ perspective: "1000px" }}
                    >
                        Hey, I&apos;m Inès. <br className="hidden md:block" /> Front-End Developer.
                    </h1>
                    <p ref={subtitleRef} className="max-w-xl mx-auto text-sm md:text-base text-neutral-400">
                        I develop web projects with the goal of making them both beautiful and useful...
                    </p>
                    <div ref={ctaButtonsRef} className="mt-6 flex items-center justify-center gap-3">
                        <button className="cursor-pointer px-6 py-3 rounded-full bg-[#0e1428] border border-neutral-700 text-sm hover:scale-110 hover:border-orange-600 transition-all duration-300 shadow-lg">
                            Download CV
                        </button>
                        <button className="cursor-pointer px-6 py-3 rounded-full bg-orange-600 border border-orange-500 text-sm hover:scale-110 hover:shadow-2xl hover:shadow-orange-600/50 transition-all duration-300">
                            Contact me
                        </button>
                    </div>
                </div>
            </header>

            {/* ABOUT SECTION */}
            <section id="a-propos" ref={aboutSectionRef} className="max-w-7xl mx-auto md:py-24 py-12 px-6 md:px-16">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="font-archivo text-orange-500 text-3xl md:text-5xl font-bold whitespace-nowrap">
                        About me
                    </h2>
                    <div className="h-[1px] w-full bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div ref={aboutTextRef} className="space-y-6 text-slate-300 text-justify leading-relaxed text-lg">
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-orange-500 first-letter:mr-3 first-letter:float-left">
                            I&apos;m Inès Agbozo, a front-end web developer focused on building clean, responsive, and user-centered interfaces.
                            I turn ideas and designs into reliable, high-performing web experiences using modern technologies like React and Tailwind CSS.
                        </p>
                        <p>
                            Curious by nature and detail-oriented, I care as much about usability and performance as I do about code quality. My goal is simple: create digital products that are both efficient and meaningful.
                        </p>
                        <p>
                            Outside of development, I enjoy photography and chess, two disciplines that sharpen my sense of composition, strategy, and attention to detail.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center text-sm font-mono">01</span>
                                Professional Experience
                            </h3>
                            <div className="space-y-4">
                                {[
                                    {
                                        year: "2025 — Present",
                                        role: "Front-end Developer (Freelance)",
                                        company: "Personal project",
                                        task: "UI/UX optimization and integration of responsive designs."
                                    },
                                    {
                                        year: "2024 — 2025",
                                        role: "Front-end Developer",
                                        company: "Bomuto",
                                        task: "UI/UX optimization and integration of responsive designs."
                                    },
                                ].map((exp, i) => (
                                    <div 
                                        key={i} 
                                        ref={(el) => { experienceCardsRef.current[i] = el; }}
                                        className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300 cursor-pointer"
                                        style={{ perspective: "1000px" }}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-xs font-mono text-orange-500/80">{exp.year}</span>
                                        </div>
                                        <h4 className="text-white font-medium group-hover:translate-x-1 transition-transform">{exp.role}</h4>
                                        <p className="text-slate-400 text-sm">{exp.company}</p>
                                        <p className="text-slate-500 text-xs mt-2 italic">{exp.task}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-orange-600/20 text-orange-500 flex items-center justify-center text-sm font-mono">02</span>
                                Education
                            </h3>
                            <div 
                                ref={(el) => { experienceCardsRef.current[2] = el; }}
                                className="group p-4 rounded-xl border border-orange-500/20 bg-orange-500/[0.02] hover:bg-orange-500/[0.05] transition-all duration-300"
                            >
                                <span className="text-xs font-mono text-orange-500/80">2021 — 2024</span>
                                <h4 className="text-white font-medium group-hover:translate-x-1 transition-transform">
                                    Bachelor&apos;s Degree in Management Information Systems (MIS)
                                </h4>
                                <p className="text-slate-400 text-sm italic">University of Parakou - Benin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section id="realisations" ref={projectsRef} className="max-w-7xl mx-auto md:px-16 sm:px-10 px-4 md:py-16 py-8">
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
                            ref={(el) => { projectCardsRef.current[index] = el; }}
                            style={{ perspective: "1000px" }}
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

            {/* SERVICES */}
            <section ref={servicesRef} className="max-w-7xl mx-auto md:py-16 py-6 md:px-16 sm:px-10 px-4">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="font-archivo text-orange-500 text-3xl md:text-5xl font-bold whitespace-nowrap">
                        What I can do for you
                    </h2>
                    <div className="h-[1px] w-full bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((skill, index) => (
                        <div
                            key={index}
                            ref={(el) => { serviceCardsRef.current[index] = el; }}
                            className="border border-white/5 p-8 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300 cursor-pointer"
                            style={{ perspective: "1000px" }}
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

            {/* SKILLS */}
            <section className="md:py-16 py-6 bg-gradient-to-b from-[#03071e] via-[#03071e] to-orange-600/20">
                <div className="flex max-w-7xl mx-auto items-center gap-4 md:px-16 sm:px-10 px-4">
                    <h2 ref={skillsTitleRef} className="font-archivo text-orange-500 text-3xl md:text-5xl font-bold whitespace-nowrap">
                        Skills
                    </h2>
                    <div className="h-[1px] w-full bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                </div>
                <div
                    id="competences"
                    ref={skillsRef}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-7xl lg:p-16 md:p-10 p-6"
                >
                    {skills.map((s, index) => (
                        <div
                            key={s}
                            ref={(el) => { skillItemsRef.current[index] = el; }}
                            className="text-center py-8 rounded-md bg-transparent hover:bg-slate-50/10 transition-all duration-300 border border-neutral-800 text-neutral-200 cursor-pointer hover:scale-105 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20"
                        >
                            {s}
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT / FOOTER */}
            <div id="contact" ref={footerRef} className="mt-8 md:py-16 py-6 text-center px-6">
                <h2 className="text-4xl font-semibold font-archivo text-orange-500">Get in touch with me</h2>
                <p className="text-neutral-300 mt-3 max-w-xl mx-auto">You have a web project in mind? Whether it&apos;s about building a modern application, redesigning your website, or bringing an innovative idea to life, I&apos;d be happy to discuss it with you.</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                    <button className="cursor-pointer px-6 py-3 rounded-full bg-[#0e1428] border border-neutral-700 text-sm hover:scale-110 hover:border-orange-600 transition-all duration-300 shadow-lg">
                        Download CV
                    </button>
                    <button className="cursor-pointer px-6 py-3 rounded-full bg-orange-600 border border-orange-500 text-sm hover:scale-110 hover:shadow-2xl hover:shadow-orange-600/50 transition-all duration-300">
                        Contact me
                    </button>
                </div>
                <div className="mt-8 flex items-center justify-center gap-4 text-neutral-300">
                    <Link href="https://www.linkedin.com/in/in%C3%A8s-agbozo-4510472b1/" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-125 hover:bg-orange-500 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://github.com/InesAbike/" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-125 hover:bg-orange-600 hover:-rotate-12 transition-all duration-300 shadow-lg hover:shadow-orange-600/50">
                        <FaGithub />
                    </Link>
                    <Link href="https://www.facebook.com/ines.agbozo.9" className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:scale-125 hover:bg-orange-600 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-orange-600/50">
                        <FaFacebookF />
                    </Link>
                </div>
            </div>
            <footer className="border-t border-white/10">
                <div className="p-4 text-sm font-light text-center">
                    Copyright©2025. InesAgbozo.
                </div>
            </footer>
        </div>
    );
}