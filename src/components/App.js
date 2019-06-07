import React from "react";
import Div100vh from "react-div-100vh";

import Map from "./Map";
import Content from "./Content/Content";

class App extends React.Component {
  render() {
    return (
      <Div100vh className="relative">
        <Map className="absolute debug br4 w-100 h-100 border-box" />
        <Content />
      </Div100vh>
    );
  }
}

export default App;
