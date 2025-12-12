import { useEffect, useState } from "react";

export default function Timer({ duration, onFinish }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => {
        if (t <= 1) {
          clearInterval(interval);
          onFinish();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p className="text-gray-700">Time Left: {time}s</p>;
}
