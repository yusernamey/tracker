import { useEffect, useState } from "react";
export const UniquesTimeTrackerTracker = ({ styleByTime, uniqueTimes }) => {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Warsaw",
  };
  const timeDate = new Date().toLocaleString("en-US", options);
  const timeStamp = new Date(timeDate);
  useEffect(() => {
    let intID = setInterval(() => tick(), 1000);
    setHour(timeStamp.getHours());
    setMinute(timeStamp.getMinutes());
    setSecond(timeStamp.getSeconds());
    return () => {
      clearInterval(intID);
    };
  }, []);

  let tick = () => {
    const timeDate = new Date().toLocaleString("en-US", options);
    const timeStamp = new Date(timeDate);
    setHour(timeStamp.getHours());
    setMinute(timeStamp.getMinutes());
    setSecond(timeStamp.getSeconds());
  };
  //styling
  let closestTime = uniqueTimes.reduce((prev, curr, i) => {
    return hour > prev ? curr : prev;
  });
  closestTime === hour
    ? styleByTime("green")
    : closestTime === hour + 1
    ? styleByTime("orange")
    : closestTime === 20 && (hour === 20 || hour === 21)
    ? styleByTime("green")
    : styleByTime("grey");
  //counter
  let remainingHour = CountDown(closestTime, hour + 1);
  let remainingMinute = CountDown(59, minute);
  let remainingSecond = CountDown(60, second);

  return (
    <div style={{ fontSize: "1.4rem" }}>
      <div style={{ fontSize: "0.7rem", margin: "-10px" }}>
        <h1>
          {closestTime === hour
            ? "NOW"
            : closestTime === hour + 1
            ? "SOON"
            : closestTime === 20 && (hour === 20 || hour === 21)
            ? "NOW"
            : null}
        </h1>
      </div>
      {closestTime === 20 && (hour === 20 || hour === 21) ? null : closestTime -
          hour !==
        Math.abs(closestTime - hour) ? (
        <div>At 0{uniqueTimes[0]}:00:00 AM</div>
      ) : closestTime === hour ? null : (
        <div>
          {remainingHour}:
          {remainingMinute < 10 ? "0" + remainingMinute : remainingMinute}:
          {remainingSecond < 10 ? "0" + remainingSecond : remainingSecond}
        </div>
      )}
    </div>
  );
};

const CountDown = (a, b) => {
  return a - b;
};
