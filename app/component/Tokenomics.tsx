import Image from "next/image";

export default function Tokenomics() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 md:px-10">
      <span className="flex space-x-3 items-center pb-10">
        <Image
          src="/layout/section.png"
          alt="sectionIcon"
          width={32}
          height={32}
        />
        <h1 className="text-[#003DEF] font-semibold md:text-2xl text-xl">
          Tokenomics
        </h1>
      </span>

      <div className="w-full flex justify-center">
        <div className="bg-[#F8FDFF] border border-[#E2E8F0] rounded-3xl shadow-xl w-full max-w-[65rem] px-6 md:px-16 py-8 overflow-hidden">
          <span className="inline-block bg-[#E8EEFF] text-[#001C54] text-sm font-medium rounded-md px-4 py-2 mb-6 border border-[#BFD2FF] text-center md:text-left">
            Total Supply: 10,000,000,000 CPT (10 billion CPT)
          </span>

          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-3 text-[#7A8BA0] text-sm font-medium mb-4 border-b border-[#E0E6ED] pb-2">
                <p>Category</p>
                <p>Percentage %</p>
                <p>Allocation (CPT)</p>
              </div>

              <div className="space-y-8 text-[#001C54]">
                <div className="grid grid-cols-3 items-center">
                  <p className="font-medium">Locked</p>
                  <div className="flex items-center space-x-3">
                    <p>60%</p>
                    <Image
                      src="/layout/l1.png"
                      alt="l1"
                      width={100}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <p>6,000,000,000</p>
                </div>

                <div className="grid grid-cols-3 items-center">
                  <p className="font-medium">Team and Advisors</p>
                  <div className="flex items-center space-x-3">
                    <p>23%</p>
                    <Image
                      src="/layout/l2.png"
                      alt="l2"
                      width={100}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <p>2,300,000,000</p>
                </div>

                <div className="grid grid-cols-3 items-center">
                  <p className="font-medium">Liquidity Pool</p>
                  <div className="flex items-center space-x-3">
                    <p>7%</p>
                    <Image
                      src="/layout/l3.png"
                      alt="l3"
                      width={100}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <p>700,000,000</p>
                </div>

                <div className="grid grid-cols-3 items-center">
                  <p className="font-medium">Marketing</p>
                  <div className="flex items-center space-x-3">
                    <p>10%</p>
                    <Image
                      src="/layout/l4.png"
                      alt="l4"
                      width={13}         
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <p>1,000,000,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
