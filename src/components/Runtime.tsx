"use client";

import Countdown from "react-countdown";

export default function Runtime() {
  const tenDays = Date.now() + 10 * 24 * 60 * 60 * 1000;

  return (
    <div className="relative py-8 bg-white rounded-md">
      <div className="absolute top-0 left-0 right-0 h-4 shadow-[0_-10px_20px_-5px_rgba(44,193,247,0.6)] rounded-md pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 h-4 shadow-[0_10px_20px_-5px_rgba(44,193,247,0.6)] rounded-md pointer-events-none" />

      <div className="flex justify-center items-center">
        <Countdown
          date={tenDays}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="flex md:space-x-20 space-x-6">
              <span className="flex flex-col items-center">
                <h1 className="text-[#2CC1F7] md:text-5xl text-4xl font-semibold">
                  {days}
                </h1>
                <p className="text-xs">Days</p>
              </span>
              <span className="flex flex-col items-center">
                <h1 className="text-[#2CC1F7] md:text-5xl text-4xl font-semibold">
                  {hours}
                </h1>
                <p className="text-xs">Hours</p>
              </span>
              <span className="flex flex-col items-center">
                <h1 className="text-[#2CC1F7] md:text-5xl text-4xl font-semibold">
                  {minutes}
                </h1>
                <p className="text-xs">Mins</p>
              </span>
              <span className="flex flex-col items-center">
                <h1 className="text-[#2CC1F7] md:text-5xl text-4xl font-semibold">
                  {seconds}
                </h1>
                <p className="text-xs">Seconds</p>
              </span>
            </div>
          )}
        />
      </div>
    </div>
  );
}
