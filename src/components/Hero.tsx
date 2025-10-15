import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdContentCopy } from "react-icons/md";
import SplitTex from "./SplitText";
import { FiArrowUpRight } from "react-icons/fi";
import Bounce from "./Bounce";

function Hero() {
  return (
    <div
      style={{
        background: "url(grid.png)",
      }}
    >
      <section className="relative w-full pt-24 flex items-center justify-center overflow-hidden max-w-[1500px] mx-auto">
        <div className="relative z-10 py-24 flex flex-col items-center justify-center  w-full px-6 text-white">
          <Bounce
            id={1}
            src="img_1.svg"
            className="absolute lg:scale-[1] scale-[0.6] object-contain object-center left-[8%] top-0"
          />
          <Bounce
            id={2}
            src="img_2.svg"
            className="absolute object-contain hidden lg:block  object-center right-[15%] top-0"
          />
          <SplitTex className="text-2xl lg:text-5xl max-w-5xl lg:leading-[60px] text-center font-semibold text-[#000E37]">
            Invest in the future of borderless crowdfunding with Capita Token.
          </SplitTex>

          <SplitTex className="py-8 text-sm sm:text-base md:text-lg text-[#000000] text-center  mx-auto md:mx-0">
            Empowering the next 100,000 philanthropists across Africa and
            beyond.
          </SplitTex>

          <div className="space-y-2">
            <p className="text-gray-600 text-sm md:text-base">
              Contract Address
            </p>
            <div className="flex items-center md:w-[480px] lg:w-[600px]  border border-gray-400 rounded-xl overflow-hidden bg-white/10 backdrop-blur-md">
              <Input
                type="text"
                placeholder="CA (TBA)"
                className=" !w-full px-3 py-4 bg-transparent placeholder-gray-300 outline-none border-none text-sm sm:text-base"
              />
              <Button className="bg-[#003DEF] px-3 sm:px-4 py-4 flex items-center gap-2 hover:bg-[#003DEF]/90">
                Copy <MdContentCopy size={18} />
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start pt-8">
            <Button className="px-6 py-4 bg-[#003DEF] shadow-lg hover:bg-[#003DEF]/90 w-[180px] sm:w-auto">
              Purchase $CPT
            </Button>
            <Button className="px-6 py-4 bg-transparent shadow-none hover:bg-transparent w-fit text-[#124CF6] ">
              Learn More <FiArrowUpRight />
            </Button>
          </div>

          <Bounce
            id={3}
            src="img_3.svg"
            className="absolute hidden lg:block object-contain object-center left-[18%] bottom-[18%]"
          />
          <Bounce
            id={4}
            src="img_4.svg"
            className="absolute hidden lg:block  object-contain object-center right-[8%] bottom-[35%]"
          />
          <Bounce
            id={1}
            src="img_4.svg"
            className="absolute object-contain lg:hidden scale-[0.5] object-center right-[-10%] bottom-[5%]"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
