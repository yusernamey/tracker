import { useEffect, useState } from "react";

export const TimeTracker = ({ eventHour, styleByTime, showCard, weekDay }) => {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();
  const timeDate = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Warsaw",
  });
  const timeStamp = new Date(timeDate);
  useEffect(() => {
    let intID = setInterval(() => tick(), 1000);
    setHour(timeStamp.getHours());
    // setHour(5);
    setMinute(timeStamp.getMinutes());
    setSecond(timeStamp.getSeconds());
    weekDay(timeStamp.getDay());
    return () => {
      clearInterval(intID);
    };
  }, [hour]);
  let tick = () => {
    const timeDate = new Date().toLocaleString("en-US", {
      timeZone: "Europe/Warsaw",
    });
    const timeStamp = new Date(timeDate);
    setHour(timeStamp.getHours());
    setMinute(timeStamp.getMinutes());
    setSecond(timeStamp.getSeconds());
  };

  //styling
  if (eventHour === hour) styleByTime("green");
  if (eventHour > hour) styleByTime("yellow");
  if (eventHour === hour + 1) styleByTime("orange");
  //logic
  if (eventHour < hour) showCard(false);

  if (hour === 0) weekDay(timeStamp.getDay());

  //counter
  let remainingHour = CountDown(eventHour, hour + 1);
  let remainingMinute = CountDown(59, minute);
  let remainingSecond = CountDown(60, second);

  return (
    <div style={{ fontSize: "1.4rem" }}>
      <div style={{ fontSize: "0.7rem", margin: "-10px" }}>
        <h1>
          {eventHour === hour
            ? "NOW"
            : eventHour === hour + 1
            ? "SOON"
            : "UPCOMING"}
        </h1>
      </div>
      {eventHour === hour ? null : (
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
