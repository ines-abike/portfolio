"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsEye } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { ProjectCardProps } from "@/types";
import { FaCode } from "react-icons/fa6";

export default function ProjectCard({
  title,
  desc,
  demo,
  github,
  figma,
  preview,
}: ProjectCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className="relative group overflow-hidden rounded-xl bg-slate-900 p-px"
    >
      {/* L'effet de dégradé qui suit la souris */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />

      {/* Contenu de la carte */}
      <div className="relative flex flex-col h-full bg-slate-950 rounded-[11px] overflow-hidden">
        {/* Preview Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={preview}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {demo && (
              <Link href={demo} target="_blank" className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors text-white">
                <BsEye size={20} />
              </Link>
            )}
          </div>
        </div>

        {/* Détails */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
          <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
            {desc}
          </p>

          {/* Liens Footer */}
          <div className="flex items-center gap-4 border-t border-slate-800 pt-4 mt-auto">
            {github && (
              <Link href={github} target="_blank" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                <FaCode size={18} />
                Code
              </Link>
            )}
            {figma && (
              <Link href={figma} target="_blank" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                <FiFigma size={18} />
                Design
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}