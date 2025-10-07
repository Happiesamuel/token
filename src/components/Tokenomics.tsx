import { useEffect, useState } from "react";
import { BsHexagon } from "react-icons/bs";

function Tokenomics() {
  const tokens = [
    {
      title: "Locked",
      bars: 10,
      progress: 60,
      allocation: "6,000,000,000",
    },

    {
      title: "Team and Advisors",
      bars: 10,
      progress: 23,
      allocation: "2,300,000,000",
    },
    {
      title: "Liquidity Pool",
      bars: 10,
      progress: 7,
      allocation: "700,000,000",
    },
    {
      title: "Marketing",
      bars: 10,
      progress: 10,
      allocation: "1,000,000,000",
    },
  ];
  return (
    <div className="py-14 px-5 md:px-8 lg:px-16" id="tokenomics">
      <div className="flex items-center gap-2 w-fit mx-auto">
        <BsHexagon className="text-ui-blue text-2xl rotate-90 mt-1" />
        <p className="uppercase text-ui-blue text-4xl font-bold">Tokenomics</p>
      </div>

      <div
        className="bg-[#F8FDFF] px-5 sm:px-10 py-10 shadow-2xl rounded-xl mt-8 shadow-[#E8EEFF]"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <p className="bg-[#E8EEFF] w-fit px-3 py-1 text-xs sm:text-base">
          Total Supply: 10,000,000,000 CPT(10 billion CPT)
        </p>

        <div className="grid grid-cols-3 mt-10 text-[13px] gap-8 sm:text-base">
          <h3 className="font-bold text-gray-400 h-10">Category</h3>
          <h3 className="font-bold text-gray-400 h-10">Percentage%</h3>
          <h3 className="font-bold text-gray-400 h-10">Allocation (CPT)</h3>
        </div>

        {tokens.map((token) => (
          <div
            key={token.title}
            className="grid grid-cols-3 mt-3 text-[12px] gap-8 sm:text-base h-10"
          >
            <div className="h-full flex items-center">
              <p>{token.title}</p>
            </div>
            <ProgressBar
              bars={token.bars}
              progressPercentage={token.progress}
            />

            <div className="h-full flex items-center">
              <p>{token.allocation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tokenomics;

type ProgressBarType = {
  progressPercentage: number;
  bars: number;
};

function ProgressBar({ progressPercentage, bars }: ProgressBarType) {
  const numberOfBarsToFill = (progressPercentage / 100) * bars;
  const firstNum = Number(numberOfBarsToFill.toString().split(".")[0]);
  const [lastBar, setLastBar] = useState<number>(0);

  useEffect(() => {
    function calcFinalbar() {
      const finalBar = numberOfBarsToFill.toString().split(".")[1];

      const last = finalBar ? Number(`0.${finalBar}`) : 0;
      setLastBar(last);
    }
    calcFinalbar();
  }, [numberOfBarsToFill]);

  return (
    <div className="flex items-center gap-1">
      <p className="text-[12px] sm:text-sm">{progressPercentage}%</p>
      <div className="flex gap-[3px] sm:gap-[6px]">
        {Array.from({ length: bars }).map((_, index) => (
          <div
            key={index}
            className="bg-[#E8EEFF] w-[2px] h-5 sm:h-7 sm:w-[5px] rounded-xl rotate-[15deg] relative"
          >
            {index < firstNum ? (
              <div className={`bg-[#1038A2] w-full h-[100%] rounded-xl`}></div>
            ) : lastBar > 0 && index + 1 == Math.ceil(numberOfBarsToFill) ? (
              <div
                className={`bg-[#1038A2] w-full absolute bottom-0 rounded-xl`}
                style={{
                  height: `${lastBar * 100}%`,
                }}
              ></div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
