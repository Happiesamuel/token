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
        <span className="flex space-x-3 items-center">
          <img
            src="/layout/section.png"
            alt="sectionIcon"
            width={32}
            height={32}
          />
          <h1 className="text-[#003DEF] font-semibold md:text-2xl text-xl">
            TOKEN UTILITY
          </h1>
        </span>

        <div className="flex flex-col flex-wrap md:flex-row md:justify-between justify-center items-center pt-6 space-x-2">
          <img src="/layout/1.png" alt="1" width={350} height={100} />
          <img src="/layout/2.png" alt="2" width={350} height={100} />
          <img src="/layout/3.png" alt="3" width={350} height={100} />
        </div>
      </div>
    </div>
  );
}

export default About;
