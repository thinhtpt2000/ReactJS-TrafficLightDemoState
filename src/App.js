// import React, { Component } from "react";
import React, { useState } from "react";
import "./App.css";
import TrafficLight from "./components/TrafficLight";

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       currentColor: RED,
//     };
//     setInterval(() => {
//       this.setState({
//         currentColor: this.getNextColor(this.state.currentColor),
//       });
//     }, 2500);
//   }
//   getNextColor(color) {
//     switch (color) {
//       case RED:
//         return YELLOW;
//       case YELLOW:
//         return GREEN;
//       case GREEN:
//         return RED;
//       default:
//         return RED;
//     }
//   }
//   render() {
//     const { currentColor } = this.state;
//     return (
//       <div className="App">
//         <TrafficLight currentColor={currentColor}/>
//       </div>
//     );
//   }
// }

const App = () => {
  const [color, setColor] = useState(RED);

  setInterval(() => {
    const nextColor = getNextColor(color);
    setColor(nextColor);
  }, 2500);

  const getNextColor = (color) => {
    switch (color) {
      case RED:
        return YELLOW;
      case YELLOW:
        return GREEN;
      case GREEN:
        return RED;
      default:
        return RED;
    }
  };
  return (
    <div className="App">
      <TrafficLight currentColor={color} />
    </div>
  );
};

export default App;
