import { useState } from "react";
import "./event.css";
import { TimeTracker } from "./logic";
export const Event = ({ name, time, eventHour, weekDay, renderNewDay }) => {
  const [styleByTime, setStyleByTime] = useState("");
  const [showCard, setShowCard] = useState(true);
  return showCard === true ? (
    <div
      className="container"
      style={{
        backgroundColor: styleByTime,
        fontSize: "1.3rem",
        fontWeight: "bold",
      }}
    >
      <TimeTracker
        eventHour={eventHour}
        styleByTime={setStyleByTime}
        showCard={setShowCard}
        weekDay={weekDay}
      />
      <div>{name}</div>
      <div>{time}</div>
    </div>
  ) : null;
};
