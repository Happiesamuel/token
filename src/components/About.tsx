import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Fields from "./Fields";
import SplitTex from "./SplitText";

gsap.registerPlugin(ScrollTrigger);
function About() {
  const imgRef = useRef<HTMLImageElement>(null);
  const imgRef2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // starts visually squashed vertically
      gsap.fromTo(
        imgRef.current,
        {
          scaleY: 0.5, // 👈 compressed look
          scaleX: 1.2, // slightly wider for realism
          opacity: 0.6,
          transformOrigin: "center center",
        },
        {
          scaleY: 1, // 👈 normal proportions
          scaleX: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 80%", // starts when image enters viewport
            end: "bottom 40%",
            scrub: 1.2,
          },
        }
      );
      gsap.fromTo(
        imgRef2.current,
        {
          scaleY: 0.5, // 👈 compressed look
          scaleX: 1.2, // slightly wider for realism
          opacity: 0.6,
          transformOrigin: "center center",
        },
        {
          scaleY: 1, // 👈 normal proportions
          scaleX: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef2.current,
            start: "top 80%", // starts when image enters viewport
            end: "bottom 40%",
            scrub: 1.2,
          },
        }
      );
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);
  return (
    <div
      className="px- md:px-3 lg:px-16 pt-24 pb-14 relative space-y-[50px] md:space-y-[70px] lg:space-y-[150px] max-w-[1500px] mx-auto"
      id="about"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-5">
        <div className="flex items-center gap-1 border w-fit px-5 py-2 border-[#ECECEC] rounded-full">
          <img
            src="logs.png"
            className=" object-contain object-center size-5"
            alt="bouncing"
          />
          <p className=" text-sm">About us</p>
        </div>
        <SplitTex className="text-[#003DEF] font-semibold text-center text-xl md:text-3xl">
          Empowering the Next Generation of Philanthropists
        </SplitTex>
        <SplitTex className="text-center text-sm md:text-base">
          Highlight urgent causes across Africa and beyond — and earn special
          grants for making impact visible
        </SplitTex>
      </div>
      <div className="flex  gap-2 justify-center">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-delay="300"
          src="new_1.png"
          className="  w-[30%] object-contain object-center"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-delay="300"
          src="new_2.png"
          className=" w-[55%] object-contain object-center"
        />
      </div>
      <Fields imgRef={imgRef} imgRef2={imgRef2} />
    </div>
  );
}

export default About;
