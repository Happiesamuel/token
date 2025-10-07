import { BsHexagon } from "react-icons/bs";
import { Button } from "@/components/ui/button";

function Why2() {
  return (
    <div className="py-14 px-5 md:px-8 lg:px-16" id="whitepaper">
      <div className="flex items-center gap-2 w-fit mx-auto">
        <BsHexagon className="text-ui-blue text-2xl rotate-90 mt-1" />
        <p className="uppercase text-ui-blue text-4xl font-bold">Whitepaper</p>
      </div>

      <div className=" md:flex items-center justify-center gap-24">
        <div
          className="w-auto mx-auto md:mx-0 md:max-w-full "
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img
            src="/layout/book.png"
            alt="book"
            width={500}
            height={150}
            className="object-contain max-w-full md:translate-x-[-40px]"
          />
        </div>

        <div
          className="max-w-sm md:max-w-xs  mt-10 md:mt-0 space-y-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-delay="300"
        >
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

export default Why2;
