import Image from "next/image";
export default function MobileProblesS() {
  return (
    <div className="px-3 md:hidden block">
      <div
        className="rounded-3xl p-6 md:p-10 text-white w-full max-w-sm mx-auto"
        style={{
          background:
            "linear-gradient(103.52deg, #2FD8FB 0.63%, #33B1FD 23.51%, #396DFF 49%, #6A54FF 79.99%, #E686E5 101.9%)",
        }}
      >
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-[#0028AC]">
            Problems
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Image
                src="/layout/item1.png"
                alt="Lack of Trust"
                width={80}
                height={50}
                className="rounded-md"
              />
              <div>
                <h3 className="font-medium">Lack of Trust</h3>
                <p className="text-sm opacity-90 max-w-[12rem]">
                  Donors often don’t know where their money really goes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Image
                src="/layout/item4.png"
                alt="Lack of Trust"
                width={80}
                height={50}
                className="rounded-md"
              />
              <div>
                <h3 className="font-medium">Centralized & Slow</h3>
                <p className="text-sm opacity-90 max-w-[12rem]">
                  Traditional philanthropy is controlled by gatekeepers and
                  bogged down by red tape.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Image
                src="/layout/item6.png"
                alt="Lack of Trust"
                width={80}
                height={50}
                className="rounded-md"
              />
              <div>
                <h3 className="font-medium">Barriers to Growth</h3>
                <p className="text-sm opacity-90 max-w-[12rem]">
                  Communities lack access to funding tools that let them thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#0028AC] mb-4">
            Capita’s Solution
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Image
                src="/layout/item3.png"
                alt="Lack of Trust"
                width={80}
                height={50}
                className="rounded-md"
              />
              <div>
                <h3 className="font-medium">Transparency First</h3>
                <p className="text-sm opacity-90 max-w-[12rem]">
                  Every transaction is traceable on the blockchain.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Image
                src="/layout/item5.png"
                alt="Lack of Trust"
                width={80}
                height={50}
                className="rounded-md"
              />
              <div>
                <h3 className="font-medium">Borderless & Fast</h3>
                <p className="text-sm opacity-90 max-w-[12rem]">
                  Fund causes instantly across Africa and beyond.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Image
                src="/layout/item2.png"
                alt="Lack of Trust"
                width={80}
                height={50}
                className="rounded-md"
              />
              <div>
                <h3 className="font-medium">DeFi-Powered Growth</h3>
                <p className="text-sm opacity-90 max-w-[12rem]">
                  Stake, borrow, and invest while supporting change.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
