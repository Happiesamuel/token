import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Whitepaper() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 md:px-12">
      <span className="flex space-x-3 items-center pb-10">
        <Image
          src="/layout/section.png"
          alt="sectionIcon"
          width={32}
          height={32}
        />
        <h1 className="text-[#003DEF] font-semibold md:text-2xl text-xl">
          WHITEPAPER
        </h1>
      </span>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-[70rem] gap-10 md:gap-0">
         <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <Image
            src="/layout/book.png"
            alt="book"
            width={600}
            height={150}
            className="object-contain max-w-full md:translate-x-[-40px]"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6 md:pl-10 text-center md:text-left">
          <h1 className="font-semibold text-2xl md:text-3xl mx-auto md:mx-0 max-w-[25rem]">
            Read the Capita Token Whitepaper
          </h1>
          <p className="text-[#393939] leading-relaxed max-w-[22rem] mx-auto md:mx-0">
            If you’d like to know about Capita Token and our vision, check out
            our detailed Whitepaper.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              style={{
                background: "linear-gradient(180deg, #1F57FB 0%, #003DEF 100%)",
              }}
              className="!px-6 !py-5 cursor-pointer text-[14px]"
            >
              Read the Whitepaper
            </Button>
          </div>
        </div>

       
      </div>
    </div>
  );
}
