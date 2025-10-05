import Image from "next/image";
import MobileProblemsS from "./MobileProblemsS";

function ProblemsS() {
  return (
    <>
      <div className="md:flex items-center justify-center flex-col hidden">
        <span className="flex space-x-3 items-center pb-15">
          <Image
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
            className="border-8 border-white rounded-4xl w-full max-w-[65rem] min-h-[500px] px-10 py-16 relative"
          >
            <div className="absolute left-1/2 top-0 h-full w-[70px] bg-[#002DFF] rounded-b-4xl transform -translate-x-1/2"></div>

            <div className="flex flex-col space-y-6">
              <div className="flex flex-row items-center justify-between">
                <span className="flex flex-row items-center justify-center space-x-4">
                  <Image
                    src="/layout/item1.png"
                    alt="item1"
                    width={80}
                    height={60}
                  />
                  <span className="flex flex-col items-start justify-start text-white space-y-3">
                    <h1 className="">Lack of Trust</h1>
                    <p className="text-xs max-w-[12rem] font-light">
                      Donors often don’t know where their money really goes.
                    </p>
                  </span>
                </span>

                <span className="flex flex-row items-center justify-center space-x-4">
                  <Image
                    src="/layout/item3.png"
                    alt="item3"
                    width={80}
                    height={60}
                  />
                  <span className="flex flex-col items-start justify-start text-white space-y-2">
                    <h1 className="">Transparency First</h1>
                    <p className="text-xs max-w-[12rem] font-light">
                      Every transaction is traceable on the blockchain.
                    </p>
                  </span>
                </span>
              </div>

              <hr className="my-3 border-white/30" />

              <div className="flex flex-row items-center justify-between">
                <span className="flex flex-row items-center justify-center space-x-4">
                  <Image
                    src="/layout/item4.png"
                    alt="item4"
                    width={80}
                    height={60}
                  />
                  <span className="flex flex-col items-start justify-start text-white space-y-3">
                    <h1 className="">Centralized & Slow</h1>
                    <p className="text-xs max-w-[12rem] font-light">
                      Traditional philanthropy is controlled by gatekeepers and
                      bogged down by red tape.
                    </p>
                  </span>
                </span>

                <span className="flex flex-row items-center justify-center space-x-4">
                  <Image
                    src="/layout/item5.png"
                    alt="item5"
                    width={80}
                    height={60}
                  />
                  <span className="flex flex-col items-start justify-start text-white space-y-2">
                    <h1 className="">Borderless & Fast</h1>
                    <p className="text-xs max-w-[12rem] font-light">
                      Fund causes instantly, across Africa and beyond.
                    </p>
                  </span>
                </span>
              </div>

              <hr className="my-3 border-white/30" />

              <div className="flex flex-row items-center justify-between">
                <span className="flex flex-row items-center justify-center space-x-4">
                  <Image
                    src="/layout/item6.png"
                    alt="item6"
                    width={80}
                    height={60}
                  />
                  <span className="flex flex-col items-start justify-start text-white space-y-3">
                    <h1 className="">Barriers to Growth</h1>
                    <p className="text-xs max-w-[12rem] font-light">
                      Communities lack access to funding tools that let them
                      thrive.
                    </p>
                  </span>
                </span>

                <span className="flex flex-row items-center justify-center space-x-4">
                  <Image
                    src="/layout/item2.png"
                    alt="item2"
                    width={80}
                    height={60}
                  />
                  <span className="flex flex-col items-start justify-start text-white space-y-2">
                    <h1 className="">DeFi-Powered Growth</h1>
                    <p className="text-xs max-w-[12rem] font-light">
                      Stake, borrow, and invest while supporting change.
                    </p>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileProblemsS />
    </>
  );
}

export default ProblemsS;
