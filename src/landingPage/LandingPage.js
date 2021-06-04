import { TimeNow } from "./DateAndTime";
import { EventList } from "./EventList";
import "./landingpage.css";
import { UniqueList } from "./UniqueList";
export const LandingPage = () => {
  return (
    <div className="wrapper">
      <div className="main">
        <TimeNow />
        <EventList />
      </div>
      <div className="side">
        <UniqueList />
      </div>
    </div>
  );
};
