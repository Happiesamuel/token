import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdContentCopy } from "react-icons/md";

function Hero() {
  return (
    <section className="relative w-full  flex items-center justify-center overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center  md:justify-between w-full max-w-7xl px-6 md:px- lg:px- text-white text-center md:text-left">
        <div className="max-w-xl  md:translate-y-[-20px]">
          <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-semibold bg-gradient-to-b from-[#003DEF] to-[#2C2C2C] bg-clip-text text-transparent leading-snug">
            Capita Token: Fueling Impact & Financial Freedom
          </h1>

          <p className="py-6 text-sm sm:text-base md:text-lg text-[#111] max-w-md mx-auto md:mx-0">
            Powering 100,000 philanthropists across Africa and beyond
          </p>

          <div className="space-y-2">
            <p className="text-gray-600 text-sm md:text-base">
              Contract Address
            </p>
            <div className="flex items-center w-full max-w-md mx-auto md:mx-0 border border-gray-400 rounded-xl overflow-hidden bg-white/10 backdrop-blur-md">
              <Input
                type="text"
                placeholder="CA (TBA)"
                className="flex-1 px-3 py-4 bg-transparent text-white placeholder-gray-300 outline-none border-none text-sm sm:text-base"
                readOnly
              />
              <Button className="bg-[#003DEF] px-3 sm:px-4 py-4 flex items-center gap-2 hover:bg-[#003DEF]/90">
                Copy <MdContentCopy size={18} />
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start pt-8">
            <Button className="px-6 py-4 bg-[#003DEF] shadow-lg hover:bg-[#003DEF]/90 w-[180px] sm:w-auto">
              Buy Now
            </Button>
            <Button className="px-6 py-4 bg-white text-[#111] shadow-lg hover:bg-white/80 w-[180px] sm:w-auto">
              Learn
            </Button>
          </div>
        </div>
        <img
          src="/layout/world.png"
          alt="world"
          width={600}
          height={300}
          className="object-contain max-w-full md:translate-x-[60px] pt-4 md:pt-0"
        />
      </div>
    </section>
  );
}

export default Hero;
