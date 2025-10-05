"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Roadmap() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/layout/roadmap.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full"
    >
      <div className="flex flex-col items-center justify-center py-16 px-6 md:px-12">
        <span className="flex space-x-3 items-center">
          <Image
            src="/layout/section.png"
            alt="sectionIcon"
            width={32}
            height={32}
          />
          <h1 className="font-semibold md:text-2xl text-xl text-white">
            Roadmap
          </h1>
        </span>

        <div className="relative flex flex-col items-center justify-center w-full max-w-[35rem] mx-auto pt-16 md:pt-20">
          <div className="absolute top-23 left-1/2 transform -translate-x-1/2 h-[30rem] md:h-[40rem] border-l-2 border-dashed border-white/40"></div>

          <div
            className="flex flex-col items-center relative mb-20 md:mb-24 md:pl-40 pl-29"
            data-aos="fade-up"
          >
            <Image
              src="/layout/2025.png"
              alt="2025"
              width={220}
              height={50}
              className="max-w-[150px] md:max-w-[220px] object-contain"
            />
          </div>

          <div
            className="flex flex-col items-center relative mb-20 md:mb-24 md:pr-40 pr-29"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src="/layout/2026.png"
              alt="2026"
              width={220}
              height={50}
              className="max-w-[150px] md:max-w-[220px] object-contain"
            />
          </div>

          <div
            className="flex flex-col items-center relative mb-20 md:mb-24 md:pl-40 pl-29"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Image
              src="/layout/2027.png"
              alt="2027"
              width={220}
              height={50}
              className="max-w-[150px] md:max-w-[220px] object-contain"
            />
          </div>

          <div
            className="flex flex-col items-center relative md:pr-32 pr-25"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Image
              src="/layout/2028.png"
              alt="2028"
              width={185}
              height={50}
              className="max-w-[140px] md:max-w-[185px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
