import { useEffect, useState } from "react";
import { HiBars3, HiOutlineArrowLongUp, HiOutlineXMark } from "react-icons/hi2";

function Navbar() {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const [upVisible, setUpVisible] = useState(false);
  useEffect(() => {
    if (isMobileActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileActive]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setUpVisible(true);
      } else {
        setUpVisible(false);
      }
    });
    return () => {};
  });

  function goto(href: string) {
    setIsMobileActive(false);
    window.location.href = href;
  }

  return (
    <>
      <div className="md:py-5 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div
            style={{
              backgroundImage: "url(/hero-bg.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-14 px-5 flex items-center justify-between md:rounded-full md:border-ui-blue md:border-[1px]"
          >
            <div className="flex items-center gap-2">
              <img src="/logo-1.png" className="w-8 md:w-10" />
              <p className="font-bold uppercase text-xl text-ui-blue">Capita</p>
            </div>

            <div className="hidden md:block">
              <ul className="flex md:gap-5 font-medium lg:gap-8 md:text-sm lg:text-base">
                <li className="cursor-pointer" onClick={() => goto("#")}>
                  Home
                </li>
                <li className="cursor-pointer" onClick={() => goto("#about")}>
                  About
                </li>
                <li className="cursor-pointer" onClick={() => goto("#roadmap")}>
                  Roadmap
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => goto("#tokenomics")}
                >
                  Tokenomics
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => goto("#whitepaper")}
                >
                  Whitepaper
                </li>
              </ul>
            </div>

            <button
              onClick={() => goto("#finance-hub")}
              className="btn min-h-10 h-10 rounded-3xl bg-ui-blue text-white md:text-xs lg:text-sm hidden md:block"
            >
              Finance Hub
            </button>

            <HiBars3
              className="text-3xl text-black md:hidden cursor-pointer"
              onClick={() => setIsMobileActive(true)}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(/hero-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`fixed w-56 px-8 h-full z-40 top-0 transition-all duration-300 ease-linear right-0 md:hidden ${
          isMobileActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mt-10">
          <HiOutlineXMark
            className="text-3xl text-black cursor-pointer"
            onClick={() => setIsMobileActive(false)}
          />
        </div>
        <ul className="text-right space-y-7 mt-8 text-lg font-medium">
          <li className="cursor-pointer" onClick={() => goto("#")}>
            Home
          </li>
          <li className="cursor-pointer" onClick={() => goto("#about")}>
            About
          </li>
          <li className="cursor-pointer" onClick={() => goto("#roadmap")}>
            Roadmap
          </li>
          <li className="cursor-pointer" onClick={() => goto("#tokenomics")}>
            Tokenomics
          </li>
          <li className="cursor-pointer" onClick={() => goto("#whitepaper")}>
            Whitepaper
          </li>

          <li>
            <button
              onClick={() => goto("#finance-hub")}
              className="btn min-h-10 h-10 rounded-3xl bg-ui-blue text-white md:text-xs lg:text-sm hover:bg-ui-blue"
            >
              Finance Hub
            </button>
          </li>
        </ul>
      </div>

      {upVisible && (
        <a
          href="#"
          className="fixed bg-ui-blue text-white p-3 rounded-lg bottom-14 z-20 right-2"
        >
          <HiOutlineArrowLongUp />
        </a>
      )}
    </>
  );
}

export default Navbar;
