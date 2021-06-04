import { useState } from "react";
import { Event } from "./Event";
import {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
  eventTimes,
  timeArray,
} from "./data";
import "./eventlist.css";
export const EventList = () => {
  const [weekDay, setWeekDay] = useState(0);
  const [renderNewDay, setRenderNewDay] = useState(true);
  let renderByDay =
    weekDay === 1
      ? monday
      : weekDay === 2
      ? tuesday
      : weekDay === 3
      ? wednesday
      : weekDay === 4
      ? thursday
      : weekDay === 5
      ? friday
      : weekDay === 6
      ? saturday
      : sunday;

  return (
    <div className="card">
      {renderByDay.map((time, i) => {
        return (
          <div key={i}>
            <Event
              name={renderByDay[i]}
              time={eventTimes[i]}
              eventHour={timeArray[i]}
              weekDay={setWeekDay}
              renderNewDay={setRenderNewDay}
            />
          </div>
        );
      })}
    </div>
  );
};
