import Countdown from "react-countdown";

export default function Runtime({
  section2Ref,
}: {
  section2Ref: React.RefObject<HTMLDivElement | null>;
}) {
  const tenDays = Date.now() + 10 * 24 * 60 * 60 * 1000;

  return (
    <div ref={section2Ref} className="relative py-8 bg-[#1C243F] ">
      <div className="flex justify-center items-center ">
        <Countdown
          date={tenDays}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="flex md:space-x-20 space-x-6">
              <span className="flex flex-col items-center">
                <h1 className="text-white md:text-5xl text-4xl font-semibold">
                  {days}
                </h1>
                <p className="text-xs text-[#E1E1E1]">Days</p>
              </span>
              <span className="flex flex-col items-center">
                <h1 className="text-[#E1E1E1] md:text-5xl text-4xl font-semibold">
                  {hours}
                </h1>
                <p className="text-xs text-[#E1E1E1]">Hours</p>
              </span>
              <span className="flex flex-col items-center">
                <h1 className="text-[#E1E1E1] md:text-5xl text-4xl font-semibold">
                  {minutes}
                </h1>
                <p className="text-xs text-[#E1E1E1]">Mins</p>
              </span>
              <span className="flex flex-col items-center">
                <h1 className="text-[#E1E1E1] md:text-5xl text-4xl font-semibold">
                  {seconds}
                </h1>
                <p className="text-xs text-[#E1E1E1]">Seconds</p>
              </span>
            </div>
          )}
        />
      </div>
    </div>
  );
}
