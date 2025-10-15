import { Button } from "@/components/ui/button";
import SplitTex from "./SplitText";

function Why2() {
  return (
    <div className="py-14 px-5 md:px-8 lg:px-16" id="whitepaper">
      <div className=" flex flex-col md:flex-row items-center justify-center lg:gap-12">
        <div
          className="w-auto mx-auto md:mx-0 md:max-w-full "
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img
            src="white.png"
            alt="book"
            className="object-contain object-center scale-[0.9] max-w-full md:translate-x-[-40px]"
          />
        </div>

        <div
          className="max-w-sm md:max-w-xs  mt-10 md:mt-0 space-y-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-delay="300"
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-delay="300"
            className="flex items-center gap-1 border w-fit px-5 py-2 border-[#ECECEC] rounded-full"
          >
            <img
              src="logs.png"
              className=" object-contain object-center size-5"
              alt="bouncing"
            />
            <p className=" text-sm">Whitepaper</p>
          </div>
          <SplitTex className="font-semibold text-2xl text-[#003DEF] md:text-3xl mx-auto md:mx-0 max-w-[25rem]">
            Discover the Blueprint Behind Capita
          </SplitTex>
          <SplitTex className="text-[#393939] leading-relaxed max-w-[22rem] mx-auto md:mx-0">
            Dive into the full details of how Capita Token powers a new era of
            decentralized philanthropy.
          </SplitTex>
          <a
            href="https://chainfundme-1.gitbook.io/chainfundme/"
            className="flex justify-center md:justify-start"
          >
            <Button
              style={{
                background: "linear-gradient(180deg, #1F57FB 0%, #003DEF 100%)",
              }}
              className="!px-6 !py-5 cursor-pointer text-[14px]"
            >
              Read the Whitepaper
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Why2;
