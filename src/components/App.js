import React from "react";
import Div100vh from "react-div-100vh";

import Map from "./Map";

class App extends React.Component {
  render() {
    return (
      <Div100vh className="relative">
        <Map className="absolute debug br4 w-100 h-100 border-box" />
      </Div100vh>
    );
  }
}

export default App;
