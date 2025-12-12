'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import HomePage from "@/components/HomePage";

export default function RevealAnimationGSAP() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!overlayRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
      }
    });

    document.body.style.overflow = "hidden";

    tl.to(overlayRef.current, {
      backgroundColor: "#ff0000",
      duration: 0.3
    })
    .to(overlayRef.current, {
      backgroundColor: "#000000",
      duration: 0.8,
      ease: "power2.inOut"
    })
    .to(overlayRef.current, {
      scale: 50,
      duration: 1.2,
      ease: "power1.inOut",
      transformOrigin: "center center"
    })
    .to(contentRef.current, {
      opacity: 1,
      duration: 0.5,
      onStart: () => {
        if (contentRef.current) {
          contentRef.current.style.visibility = "visible";
        }
      }
    }, "-=0.2")
    .to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        if (overlayRef.current) {
          overlayRef.current.style.display = "none";
        }
      }
    });
  }, []);

  return (
    <div className="page">
      <div className="overlay" ref={overlayRef}></div>
      <main className="page-content" ref={contentRef}>
        <HomePage />
      </main>
    </div>
  );
}