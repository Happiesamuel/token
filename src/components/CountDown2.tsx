import { useTimer } from "../hooks/useTimer";

function CountDown2() {
  const { timer } = useTimer();
  return (
    <div
      style={{
        backgroundImage: "url(/cd-frame.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
      className="text-center  px-5 md:px-8 lg:px-16 py-14"
    >
      <div>
        <p className="text-white text-2xl sm:text-3xl">Presale starts in</p>

        <div className="flex items-center gap-5 w-fit mx-auto mt-3">
          <div>
            <p className="text-yellow-500 font-bold text-2xl sm:text-5xl">
              {timer.days.toString().length > 1
                ? timer.days
                : timer.days.toString().padStart(2, "0")}
            </p>
            <p className="text-white text-[13px]  sm:text-sm">Days</p>
          </div>
          <p className="text-yellow-500 text-2xl sm:text-5xl font-bold ">:</p>
          <div>
            <p className="text-yellow-500 font-bold text-2xl sm:text-5xl">
              {timer.hours.toString().length > 1
                ? timer.hours
                : timer.hours.toString().padStart(2, "0")}
            </p>
            <p className="text-white text-[13px]  sm:text-sm">Hours</p>
          </div>
          <p className="text-yellow-500 text-2xl sm:text-5xl font-bold ">:</p>
          <div>
            <p className="text-yellow-500 font-bold text-2xl sm:text-5xl">
              {timer.minutes.toString().length > 1
                ? timer.minutes
                : timer.minutes.toString().padStart(2, "0")}
            </p>
            <p className="text-white text-[13px] sm:text-sm">Minutes</p>
          </div>
          <p className="text-yellow-500 text-2xl sm:text-5xl font-bold ">:</p>
          <div>
            <p className="text-yellow-500 font-bold text-2xl sm:text-5xl">
              {timer.seconds.toString().length > 1
                ? timer.seconds
                : timer.seconds.toString().padStart(2, "0")}
            </p>
            <p className="text-white text-[13px] sm:text-sm">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountDown2;
