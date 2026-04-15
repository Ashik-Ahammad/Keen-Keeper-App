import React, { useState } from "react";
import { TimelineContext } from "../TimelineContext";

const TimelineContextProvider = ({ children }) => {

  const [activities, setActivities] = useState([]);

  const addActivity = (type, name) => {
    const newActivity = {
      id: Date.now(),
      type,
      name,
      date: new Date().toISOString(),
    };

    setActivities(old => [newActivity, ...old]);
  };

  return (
    <TimelineContext.Provider value={{ activities, addActivity }}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineContextProvider;