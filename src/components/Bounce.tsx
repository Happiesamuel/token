"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Bounce({
  className,
  id,
  src,
}: {
  className: string;
  src: string;
  id: number;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    let anim;

    if (id === 1) {
      anim = gsap.to(imgRef.current, {
        y: "+=10", // up and down
        x: "+=5", // slight sideways drift
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    } else if (id === 2) {
      anim = gsap.to(imgRef.current, {
        scale: 1.15,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    } else if (id === 3) {
      anim = gsap.to(imgRef.current, {
        rotation: 5,
        transformOrigin: "bottom center",
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    } else {
      anim = gsap.to(imgRef.current, {
        opacity: 0.5,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }

    return () => {
      anim?.kill();
    };
  }, [id]);

  return <img ref={imgRef} src={src} className={className} alt="bouncing" />;
}
