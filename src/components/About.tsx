import { Button } from "./ui/button";

function About() {
  return (
    <div className="px-5 md:px-8 lg:px-16 pt-8 pb-14 relative " id="about">
      <div className="flex items-center gap-2 w-fit mx-auto ">
        <img
          src="/layout/section.png"
          alt="sectionIcon"
          width={32}
          height={32}
        />
        <h1 className="text-[#003DEF] font-semibold md:text-2xl text-xl">About us</h1>
      </div>
      <div className="relative text-center max-w-4xl mx-auto flex items-center justify-center flex-col">
        <p className="md:text-[14px] text-[14px] md:text-xl max-w-[40rem] md:py-10 py-5">
          Capita Token was created to solve the funding gap for impactful causes
          in Africa by blending philanthropy with decentralized finance <br />
          <br />
          With borderless, transparent crowdfunding powered by blockchain, we’re
          raising the first 100,000 philanthropists who can give, grow, and
          generate wealth — while fueling projects that truly matter.
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
          <Button className="bg-white hover:bg-white/30 cursor-pointer shadow-[0_8px_30px_rgba(0,61,239,0.25)] hover:shadow-[0_8px_40px_rgba(0,61,239,0.35)] transition-shadow md:!px-4 px-3 md:!py-6 py-4">
            <span className="bg-gradient-to-b from-[#091024] to-[#D0D0D0] bg-clip-text text-transparent font-medium text-xs md:text-sm">
              Join the Community
            </span>
          </Button>
        </a>
      </div>
    </div>
  );
}

export default About;
