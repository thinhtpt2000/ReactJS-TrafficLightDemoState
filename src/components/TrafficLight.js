import React from "react";
import "./TrafficLight.css";

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

const TrafficLight = () => {
  let currentColor = RED;

  const getNextColor = (color) => {
    switch (color) {
      case RED:
        return YELLOW;
      case YELLOW:
        return GREEN;
      case GREEN:
        return RED;
    }
  };

  return (
    <div className="TrafficLight">
      <div className="bulb red" />
      <div className="bulb yellow" />
      <div className="bulb green" />
    </div>
  );
};

export default TrafficLight;
