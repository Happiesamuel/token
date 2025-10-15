import  { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // prevent scroll while loading

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => {
        document.body.style.overflow = "auto"; // unlock scroll
      },
    });

    tl.fromTo(
      preloaderRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 }
    )
      // 🔹 Logo fade-in + scale
      .fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8, filter: "blur(8px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2 }
      )
      // 🔹 Shine effect across logo
      .fromTo(
        shineRef.current,
        { left: "-100%" },
        { left: "120%", duration: 1.4, ease: "power1.inOut" },
        "-=0.8"
      )
      // 🔹 Animate each letter
      .fromTo(
        textRef.current!.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.4"
      )
      // 🔹 Blue glow effect on text
      .to(textRef.current, {
        color: "#003DEF",
        textShadow: "0 0 12px rgba(0,61,239,0.4)",
        duration: 1,
        repeat: 1,
        yoyo: true,
      })
      // 🔹 Fade out preloader
      .to(preloaderRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.4,
        pointerEvents: "none",
      });
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white text-[#003DEF] z-[9999]"
    >
      <div className="relative">
        <img
          ref={logoRef}
          src="/logo-3.png"
          alt="Capita logo"
          className="w-fit h-fit object-contain"
        />

        <div
          ref={shineRef}
          className="absolute top-0 h-full w-[80px] bg-gradient-to-r from-transparent via-[#003DEF]/40 to-transparent skew-x-12"
        />
      </div>

      <div
        ref={textRef}
        className="flex gap-1 mt-5 text-3xl font-bold tracking-[0.25em] uppercase text-[#003DEF]"
      >
        {"CAPITA".split("").map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
    </div>
  );
}
