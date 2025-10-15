import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "./ui/button";
import SplitTex from "./SplitText";
export default function Fields({
  imgRef,
  imgRef2,
}: {
  imgRef: React.RefObject<HTMLImageElement | null>;
  imgRef2: React.RefObject<HTMLImageElement | null>;
}) {
  console.log(imgRef, imgRef2);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-12 md:gap-2 items-center">
        <div className="w-full">
          <div className="space-y-8 md:space-y-12 w-full md:w-[85%]">
            <div className="space-y-5">
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
                <p className="text-[#2A2A2A] text-sm">The Problem</p>
              </div>
              <SplitTex className="text-[#003DEF] font-semibold text-2xl md:text-3xl lg:text-4xl">
                The World Before Capita
              </SplitTex>
            </div>
            <div className="space-y-6 text-sm md:text-base">
              <SplitTex>
                Across Africa, countless life-changing projects never see the
                light of day — not because of lack of passion, but because of
                broken systems. Traditional philanthropy is centralized, slow,
                and full of barriers.
              </SplitTex>
              <SplitTex>
                “Millions of impactful causes never get the support they
                deserve.”
              </SplitTex>
            </div>
          </div>
        </div>
        <div className="w-full hidde  h-[300px flex justify-end">
          <img
            src="about_1.png"
            className="w-[80%] h-full object-contain object-center"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse gap-12 md:gap-2 md:flex-row items-center">
        <div className="w-full lg:w-[70%] h-[300px flex justify-start">
          <div className="bg-[#76AEE1] w-[80%] md:w-full rounded-r-2xl flex items-center justify-center">
            <img
              src="about_2.png"
              className="w-[70%] h-full object-contain object-center"
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="space-y-8 md:space-y-12 w-full md:w-[85%]">
            <div className="space-y-5">
              <div className="flex items-center gap-1 border w-fit px-5 py-2 border-[#ECECEC] rounded-full">
                <img
                  src="logs.png"
                  className=" object-contain object-center size-5"
                  alt="bouncing"
                />
                <p className="text-[#2A2A2A] text-sm">The Solution</p>
              </div>
              <SplitTex className="text-[#003DEF] font-semibold text-2xl md:text-3xl lg:text-4xl">
                Capita Token
              </SplitTex>
            </div>
            <div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
                data-aos-delay="300"
                className="space-y-6 text-sm md:text-base"
              >
                <SplitTex>
                  Capita Token is born from a simple idea — to decentralize
                  giving, remove the middlemen, and let generosity flow freely
                  through blockchain.
                </SplitTex>
                <SplitTex>
                  A new way to fund causes — transparent, borderless, and
                  rewarding.”
                </SplitTex>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start pt-8">
                <a href="#">
                  <Button className="px-6 py-4 bg-[#003DEF] shadow-lg hover:bg-[#003DEF]/90 w-[180px] sm:w-auto">
                    Purchase $CPT
                  </Button>
                </a>
                <a href="https://t.me/capitatoken1">
                  <Button className="px-6 py-4 bg-transparent shadow-none hover:bg-transparent w-fit text-[#124CF6] ">
                    Join the Community <FiArrowUpRight />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
