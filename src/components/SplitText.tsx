"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function SplitTex({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    document.fonts.ready.then(() => {
      gsap.set(textRef.current, { opacity: 1 });

      const split = new SplitText(textRef.current, {
        type: "lines, words",
        linesClass: "line",
        mask: "lines",
      });

      gsap.from(split.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });
  }, []);

  return (
    <h1 ref={textRef} className={`split opacity-0 ${className || ""}`}>
      {children}
    </h1>
  );
}
