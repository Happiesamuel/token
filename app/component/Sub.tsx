import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Sub() {
  return (
    <div className="px-6 md:px-30 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="hidden md:block">
          <Image
            src="/layout/mark.png"
            alt="mark"
            width={350}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col space-y-5 text-center md:text-left">
          <p className="text-base md:text-lg max-w-full md:max-w-[30rem] leading-relaxed">
            “Sub-Saharan Africa recorded a 52% increase in on-chain
            cryptocurrency activity in 2024, outpacing adoption rates in many
            developed regions. Alongside Latin America’s 63% growth and APAC’s
            69%, this trend confirms that emerging markets are becoming the
            heartbeat of global crypto innovation.”
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://t.me/capitatokenHQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{
                  background:
                    "linear-gradient(180deg, #1F57FB 0%, #003DEF 100%)",
                }}
                className="!px-6 !py-5 text-[14px] w-[200px]"
              >
                Join our Community
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
