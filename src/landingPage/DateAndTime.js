import { useEffect, useState } from "react";

export const TimeNow = () => {
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Warsaw",
  };
  const [time, setTime] = useState(new Date().toLocaleString("en-US", options));

  useEffect(() => {
    let intID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(intID);
    };
  });
  let tick = () => {
    setTime(new Date().toLocaleString("en-US", options));
  };
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <h1>{time}</h1>
    </div>
  );
};
