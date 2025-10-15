"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar({
  section2Ref,
}: {
  section2Ref: React.RefObject<HTMLDivElement | null>;
}) {
  const navRef = useRef<HTMLDivElement>(null);

  const [rounded, setRounded] = useState(false);

  const links = [
    {
      name: "About",
      route: "#about",
    },
    {
      name: "Roadmap",
      route: "#roadmap",
    },
    {
      name: "Tokenomics",
      route: "#tokenomics",
    },
    {
      name: "Whitepaper",
      route: "#whitepaper",
    },
  ];

  useEffect(() => {
    if (!navRef.current || !section2Ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: section2Ref.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => setRounded(true),
      onLeaveBack: () => setRounded(false),
    });

    ScrollTrigger.refresh();

    return () => {
      trigger.kill();
    };
  }, []);
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80, // offset for navbar
        behavior: "smooth",
      });

      // Recalculate GSAP trigger positions after smooth scroll
      setTimeout(() => ScrollTrigger.refresh(), 1000);
    }
  };

  return (
    <div className="lg:block fixed hidden top-0 left-1/2 -translate-x-1/2 w-full z-50 backdrop-blur-xl pointer-events-none">
      <nav
        ref={navRef}
        className={`pointer-events-auto transition-all duration-700 ease-in-out mx-auto my-4 px-8 py-3 grid grid-cols-[0.7fr_1fr_0.2fr] border border-[#003DEF]/20 shadow-md
            ${
              rounded
                ? "bg-white/80 text-black rounded-full w-[70%]"
                : "bg-transparent  border-white/30 rounded-lg w-[90%]"
            }
          `}
      >
        <a href="#">
          <img src="nav.png" />
        </a>
        <ul className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <li>
              <a
                onClick={(e) => handleNavClick(e, link.route)}
                href={link.route}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Button className="px-6 py-3 bg-[#003DEF] hover:bg-[#003DEF]/90 text-white font-semibold rounded- w-fit">
          Purchase $CPT
        </Button>
      </nav>
    </div>
  );
}
