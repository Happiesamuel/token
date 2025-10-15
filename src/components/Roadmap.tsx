import { BsHexagon } from "react-icons/bs";

const roapmapData = [
  {
    date: "2025",
    description: "Foundation & Ecosystem setup",
  },
  {
    date: "2026",
    description: "Creator Empowerment & Startup Showcase",
  },
  {
    date: "2027",
    description: "Ecosystem Growth & Adoption",
  },
  {
    date: "2028",
    description:
      "Sustainability & Global Impact",
  },
 
];

function Roadmap() {
  return (
    <div
      style={{
        backgroundImage: "url(/rm-img.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
      className="py-14 px-5 md:px-8 lg:px-16"
      id="roadmap"
    >
      <div className="flex items-center gap-2 w-fit mx-auto">
        <BsHexagon className="text-white text-2xl rotate-90 mt-1" />
        <p className="uppercase text-white text-4xl font-bold">Roadmap</p>
      </div>

      <div className="flex justify-center mt-20">
        <div className="space-y-16 border-r-[3px] border-gray-500 border-dashed h-fit w-0">
          {roapmapData.map((data, index) =>
            (index + 1) % 2 != 0 ? (
              <div
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
                key={data.date}
              >
                <div
                  style={{
                    rotate: "-6deg",
                  }}
                  className="w-24 h-8 bg-[#140F20] border-[1px] border-[#282043] relative -top-2 right-3 flex items-center justify-center gap-2"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-white">{data.date}</p>
                </div>
                <p className="text-[10px] sm:text-xs text-[#AAAAAA] px-5 w-36 sm:w-48">
                  {data.description}
                </p>
              </div>
            ) : (
              <div
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
                key={data.date}
              >
                <div
                  style={{
                    rotate: "6deg",
                    translate: "-70px",
                  }}
                  className="w-24 h-8 bg-[#140F20] border-[1px] border-[#282043] relative -top-2 right-3 flex flex-row-reverse items-center justify-center gap-2"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p className="text-white">{data.date}</p>
                </div>
                <p className="text-[10px] sm:text-xs text-[#AAAAAA] px-5 w-36 sm:w-48 -translate-x-[136px] sm:-translate-x-[186px] text-right">
                  {data.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
