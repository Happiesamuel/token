import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../utils/countDown";

export function useTimer() {
  const [timer, setTimer] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { timer };
}
