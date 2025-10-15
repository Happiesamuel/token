import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "./ui/button";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SplitTex from "./SplitText";
export default function Tokenomics() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const arr = [
    {
      percent: 70,
      text: "Locked for 12 Months",
    },
    {
      percent: 5,
      text: "Reserved for Ecosystem Growth",
    },
    {
      percent: 10,
      text: "Marketing",
    },
    {
      percent: 15,
      text: "Investors (Vested)",
    },
  ];
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('token_bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "40% 40%",
        backgroundSize: "cover",
      }}
    >
      <div
        id="tokenomics"
        className="w-full px-5 md:px-8 lg:px-16 py-8 pt-24 flex flex-col-reverse gap-8 lg:flex-row items-start text-white max-w-[1500px] mx-auto"
      >
        <div ref={ref} className="w-full">
          <div
            className="backdrop-blur-[20px] max-w-xl md:w-[90%] mx-auto rounded-[25px] md:rounded-[40px] p-8 md:p-12"
            style={{
              background:
                "url(.png), radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
            }}
          >
            <div className="space-y-2 pb-10">
              <h3 className="text-2xl md:text-3xl font-semibold">
                {inView && (
                  <CountUp end={10} start={0} duration={2} suffix="B" />
                )}
              </h3>
              <p className="text-sm">Total Supply</p>
            </div>
            <div className="grid gap-4  grid-cols-2">
              {arr.map((ar) => (
                <div className="space-y-2">
                  <h3 className="text-xl md:text-3xl font-semibold">
                    {inView && (
                      <CountUp
                        end={ar.percent}
                        start={0}
                        duration={2}
                        suffix="%"
                      />
                    )}
                  </h3>
                  <p className="text-xs md:text-sm">{ar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full md:items-end   flex-col">
          <div className="w-full md:w-[80%]">
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="linear"
              data-aos-delay="300"
              className="flex items-center gap-1 border w-fit px-5 py-2 border-[#ECECEC] rounded-full"
            >
              <img
                src="logs_2.png"
                className=" object-contain object-center size-5"
                alt="bouncing"
              />
              <p className=" text-sm">Tokenomics</p>
            </div>
            <SplitTex className=" font-semibold text-2xl md:text-4xl pt-4">
              Powering Purpose with
              <br /> Transparency
            </SplitTex>
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start pt-8">
              <a className="w-full text-center md:text-start" href="#">
                <Button className="px-6 py-4 bg-[#003DEF] shadow-lg hover:bg-[#003DEF]/90 w-[80%] sm:w-full">
                  Purchase $CPT
                </Button>
              </a>
              <a className="w-full text-center md:text-start" href="https://t.me/capitatoken1">
                <Button className="px-6 py-4 bg-transparent border border-white w-[80%] shadow-none hover:bg-transparent sm:w-fit ">
                  Join the Community <FiArrowUpRight />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
