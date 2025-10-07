import { useTimer } from "../hooks/useTimer";

function CountDown() {
  const { timer } = useTimer();

  return (
    <div className="bg-[#1038A2] py-3 px-5 md:px-8 lg:px-16">
      <div className="text-sm sm:text-base justify-center flex flex-wrap items-center gap-1">
        <p className="text-white">Presale starts in: </p>
        <div className="flex items-center gap-2">
          <p className="text-yellow-500">
            {timer.days.toString().length > 1
              ? timer.days
              : timer.days.toString().padStart(2, "0")}
            days
          </p>
          <p className="text-white">:</p>
          <p className="text-yellow-500">
            {timer.hours.toString().length > 1
              ? timer.hours
              : timer.hours.toString().padStart(2, "0")}
            hrs
          </p>
          <p className="text-white">:</p>
          <p className="text-yellow-500">
            {timer.minutes.toString().length > 1
              ? timer.minutes
              : timer.minutes.toString().padStart(2, "0")}
            mins
          </p>
          <p className="text-white">:</p>
          <p className="text-yellow-500">
            {timer.seconds.toString().length > 1
              ? timer.seconds
              : timer.seconds.toString().padStart(2, "0")}
            secs
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
