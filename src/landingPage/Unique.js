import { useState } from "react";
import { UniquesTimeTrackerTracker } from "./logic";
import "./unique.css";
import { specialTrade, medusa, haroeris, selket, anubis } from "./data";
export const Unique = ({ name, id }) => {
  const [styleByTime, setStyleByTime] = useState("");
  const customImport = [specialTrade, medusa, haroeris, selket, anubis];
  return (
    <div className="uniquecontainer">
      <div className="uniquelist" style={{ backgroundColor: styleByTime }}>
        <UniquesTimeTrackerTracker
          styleByTime={setStyleByTime}
          uniqueTimes={customImport[id]}
        />
        {name}
      </div>
    </div>
  );
};
