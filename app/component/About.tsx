import { Button } from "@/components/ui/button";
import Image from "next/image";

function About() {
  return (
    <div className="md:pl-15 pl-5 pr-5 pt-6 md:pt-0">
      <div className="flex md:flex-row md:justify-between flex-col justify-center items-center">
        <div className="space-y-3">
          <span className="flex space-x-3 items-center ">
            <Image
              src="/layout/section.png"
              alt="sectionIcon"
              width={32}
              height={32}
            />{" "}
            <h1 className="text-[#003DEF] font-semibold md:text-2xl text-xl">
              ABOUT $CPT TOKEN
            </h1>
          </span>
          <p className="md:text-[14px] text-xs max-w-[26rem] md:py-10 py-5">
            Capita Token was created to solve the funding gap for impactful
            causes in Africa by blending philanthropy with decentralized finance{" "}
            <br />
            <br />
            With borderless, transparent crowdfunding powered by blockchain,
            we’re raising the first 100,000 philanthropists who can give, grow,
            and generate wealth — while fueling projects that truly matter.
            <br />
            <br />
            Creators who spotlight individuals in dire need across Africa and
            global markets will also be eligible for Capita grants, amplifying
            stories that deserve attention and support
          </p>
          <a
            href="https://t.me/capitatokenHQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white hover:bg-white/30 cursor-pointer shadow-[0_8px_30px_rgba(0,61,239,0.25)] hover:shadow-[0_8px_40px_rgba(0,61,239,0.35)] transition-shadow !px-4 !py-6">
              <span className="bg-gradient-to-b from-[#091024] to-[#D0D0D0] bg-clip-text text-transparent font-medium text-xs md:text-sm">
                Join the Community
              </span>
            </Button>
          </a>
        </div>
        <div>
          <Image
            src="/layout/capita.png"
            alt="capita"
            width={500}
            height={100}
            className="
      rounded-xl
      drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]
      shadow-blue-500/40
      animate-spin-vertical
    "
          />
        </div>
      </div>
    </div>
  );
}
export default About;
