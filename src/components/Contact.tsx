import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitTex from "./SplitText";

export default function Contact() {
  const kiteRef = useRef<HTMLImageElement>(null);
  const kiteRef2 = useRef<HTMLImageElement>(null);
  const kiteRef3 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!kiteRef.current || !kiteRef2.current || !kiteRef3.current) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: true });
    tl.to(kiteRef.current, {
      rotation: 360,
      transformOrigin: "center center",
      duration: 3,
      ease: "power2.inOut",
    });
    const t2 = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: true });
    t2.to(kiteRef2.current, {
      rotation: 360,
      transformOrigin: "center center",
      duration: 3,
      ease: "power2.inOut",
    });
    const t3 = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: true });
    t3.to(kiteRef3.current, {
      rotation: 360,
      transformOrigin: "center center",
      duration: 3,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <div className="bg-[#1C243F]">
      <div className=" flex flex-col gap-12 md:gap-6 md:flex-row items-center justify-between px-5 md:px-8 lg:px-16 pt-8 max-w-[1500px] mx-auto">
        <div className="space-y-6">
          <SplitTex className="text-xl md:text-2xl lg:text-4xl font-semibold text-white">
            Donate with purpose,
            <br /> invest in causes that <span className="italic">matter.</span>
          </SplitTex>
          <SplitTex className="text-sm font-normal text-white max-w-sm">
            You can watch the world change — or help make it happen. Capita
            isn't just a token; it's a movement toward financial empowerment and
            social impact.
          </SplitTex>
          <div className="flex flex-col w-full   sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start pt-8">
            <Button className="px-6  py-4 bg-[#003DEF] shadow-lg hover:bg-[#003DEF]/90 sm:w-fi w-[80%] ">
              Purchase $CPT
            </Button>
            <Button
              className="px-6 py-4 bg-transparent border border-white shadow-none hover:bg-transparent w-[80%] sm:wfit text-white
           "
            >
              Join the Community <FiArrowUpRight />
            </Button>
          </div>
        </div>
        <div className="flex gap-6 pb-8 md:pb-0 flex-col">
          <div className="flex items-center gap-3 justify-between">
            <img
              ref={kiteRef}
              src="kite.png"
              className="size-[80px] sm:size-[100px]"
            />{" "}
            <img
              ref={kiteRef2}
              src="kite.png"
              className="size-[80px] sm:size-[100px]"
            />
            <img
              ref={kiteRef3}
              src="kite.png"
              className="size-[80px] sm:size-[100px]"
            />
          </div>
          <img
            src="man.png"
            className="hidden md:block size-[250px] lg:size-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
