import React, { useState, useEffect } from "react";
import "./TrafficLight.css";   

const durations = {
  red: 10,
  yellow: 5,
  green: 15,
};

function useTrafficLightController() {
  const [light, setLight] = useState("red");
  const [timer, setTimer] = useState(durations["red"]);

  const getNextLight = (current) => {
    switch (current) {
      case "red":
        return "green";
      case "green":
        return "yellow";
      case "yellow":
        return "red";
      default:
        return "red";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          const next = getNextLight(light);
          setLight(next);
          return durations[next];
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [light]);

  const manuallySwitchLight = () => {
    const next = getNextLight(light);
    setLight(next);
    setTimer(durations[next]);
  };

  return { light, timer, manuallySwitchLight };
}

export default function TrafficLight() {
  const { light, timer, manuallySwitchLight } = useTrafficLightController();

  return (
    <div className="traffic-container">
      <h1>Traffic Light Controller</h1>
      <div className="traffic-light">
        <div className={`circle red ${light === "red" ? "active" : ""}`}></div>
        <div className={`circle yellow ${light === "yellow" ? "active" : ""}`}></div>
        <div className={`circle green ${light === "green" ? "active" : ""}`}></div>
      </div>
      <p>Time Remaining: {timer}s</p>
      <button onClick={manuallySwitchLight}>Switch Light Manually</button>
    </div>
  );
}
