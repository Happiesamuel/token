import React from "react";
import MobileProblemsS from "./MobilePS";

export default function FinanceHub() {
  const problemSolutionData = [
    {
      problem: {
        img: "/layout/item1.png",
        alt: "item1",
        title: "Lack of Trust",
        description: "Donors often don’t know where their money really goes.",
      },
      solution: {
        img: "/layout/item3.png",
        alt: "item3",
        title: "Transparency First",
        description: "Every transaction is traceable on the blockchain.",
      },
    },
    {
      problem: {
        img: "/layout/item4.png",
        alt: "item4",
        title: "Centralized & Slow",
        description:
          "Traditional philanthropy is controlled by gatekeepers and bogged down by red tape.",
      },
      solution: {
        img: "/layout/item5.png",
        alt: "item5",
        title: "Borderless & Fast",
        description: "Fund causes instantly, across Africa and beyond.",
      },
    },
    {
      problem: {
        img: "/layout/item6.png",
        alt: "item6",
        title: "Barriers to Growth",
        description:
          "Communities lack access to funding tools that let them thrive.",
      },
      solution: {
        img: "/layout/item2.png",
        alt: "item2",
        title: "DeFi-Powered Growth",
        description: "Stake, borrow, and invest while supporting change.",
      },
    },
  ];
  return (
    <>
      <div
        className="md:flex items-center justify-center flex-col hidden space-y-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="linear"
        data-aos-delay="300"
      >
        <span className="flex space-x-3 items-center pb-15">
          <img
            src="/layout/section.png"
            alt="sectionIcon"
            width={32}
            height={32}
          />
          <h1 className="text-[#003DEF] font-semibold md:text-2xl text-xl">
            Problem & Solution
          </h1>
        </span>

        <div className="w-full flex justify-center">
          <div
            style={{
              background:
                "linear-gradient(103.52deg, #2FD8FB 0.63%, #33B1FD 23.51%, #396DFF 49%, #6A54FF 79.99%, #E686E5 101.9%)",
            }}
            className="border-1 border-white rounded-3xl w-full max-w-[65rem] min-h-[500px] px-10 py-16 relative"
          >
            <div className="absolute left-1/2 top-0 h-full w-[70px] bg-[#002DFF] rounded-b-3xl transform -translate-x-1/2"></div>

            <div className="flex flex-col space-y-6">
              {problemSolutionData.map((pair, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-row items-center justify-between">
                    <span className="flex flex-row items-center justify-center space-x-4">
                      <img
                        src={pair.problem.img}
                        alt={pair.problem.alt}
                        width={80}
                        height={60}
                      />
                      <span className="flex flex-col items-start justify-start text-white space-y-3">
                        <h1>{pair.problem.title}</h1>
                        <p className="text-xs max-w-[12rem] font-light">
                          {pair.problem.description}
                        </p>
                      </span>
                    </span>

                    <span className="flex flex-row items-center justify-center space-x-4">
                      <img
                        src={pair.solution.img}
                        alt={pair.solution.alt}
                        width={80}
                        height={60}
                      />
                      <span className="flex flex-col items-start justify-start text-white space-y-2">
                        <h1>{pair.solution.title}</h1>
                        <p className="text-xs max-w-[12rem] font-light">
                          {pair.solution.description}
                        </p>
                      </span>
                    </span>
                  </div>

                  {index !== problemSolutionData.length - 1 && (
                    <hr className="my-3 border-white/30" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <MobileProblemsS />
    </>
  );
}
