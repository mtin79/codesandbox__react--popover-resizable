import React from "react";
import Div100vh from "react-div-100vh";

import Map from "./container/Map/Map";
import Content from "./container/Content/Content";

class App extends React.Component {
  render() {
    return (
      <Div100vh className="relative w-100 h-100 bg-light-gray br4 overflow-hidden border-box ba b--light-gray">
        <Map className="absolute w-100 top-0 bottom-0" />
        <Content />
      </Div100vh>
    );
  }
}

export default App;
