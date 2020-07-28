import React, { Component } from "react";
import classNames from "classnames";
import "./TrafficLight.css";

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

// const TrafficLight = () => {
//   let state = {
//     currentColor = RED
//   };

//   const getNextColor = (color) => {
//     switch (color) {
//       case RED:
//         return YELLOW;
//       case YELLOW:
//         return GREEN;
//       case GREEN:
//         return RED;
//     }
//   };

//   setInterval(() => {
//     currentColor = getNextColor(currentColor);
//   }, 1000);

//   return (
//     <div className="TrafficLight">
//       <div className={classNames('bulb', 'red', {active: currentColor === RED})} />
//       <div className={classNames('bulb', 'yellow', {active: currentColor === YELLOW})} />
//       <div className={classNames('bulb', 'green', {active: currentColor === GREEN})} />
//     </div>
//   );
// };

class TrafficLight extends Component {
  render() {
    const { currentColor } = this.props;
    return (
      <div className="TrafficLight">
        <div
          className={classNames("bulb", "red", {
            active: currentColor === RED,
          })}
        />
        <div
          className={classNames("bulb", "yellow", {
            active: currentColor === YELLOW,
          })}
        />
        <div
          className={classNames("bulb", "green", {
            active: currentColor === GREEN,
          })}
        />
      </div>
    );
  }
}

export default TrafficLight;
