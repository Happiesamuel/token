import SplitTex from "./SplitText";

function About() {
  return (
    <div>
      <div
        className="pt-14 flex justify-center items-center flex-col"
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
          <p className="text-[#2A2A2A] text-sm">Token Utility</p>
        </div>
        <SplitTex
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-delay="300"
          className="text-[#003DEF] font-semibold text-2xl pt-4"
        >
          HOW IT WORKS
        </SplitTex>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:justify-between justify-center items-center pt-6 space-x-2">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-delay="300"
            src="/layout/1.png"
            alt="1"
            width={350}
            height={100}
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-delay="300"
            src="/layout/2.png"
            alt="2"
            width={350}
            height={100}
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-delay="300"
            src="/layout/3.png"
            alt="3"
            width={350}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
