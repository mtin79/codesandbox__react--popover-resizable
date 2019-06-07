import React from "react";

import ContentWrapper from "./ContentWrapper";
import Resizer from "../../components/Resizer";

const HEIGHTS = {
  DEFAULT: "defaultHeight",
  PARTIAL: "partialHeight",
  FULL: "fullHeight"
};

class Content extends React.Component {
  state = {
    height: this.props.height || HEIGHTS.DEFAULT
  };

  onResize = size => {
    console.log("switch to size: ", HEIGHTS[size]);
    this.setState({ height: HEIGHTS[size] });
  };

  render() {
    console.log("Content - Containers renders.");
    const { height } = this.state;
    return (
      <ContentWrapper className={` ${height} absolute w-100 bottom-0`}>
        <Resizer
          handleResize={this.onResize}
          sizes={HEIGHTS}
          initialSize="DEFAULT"
        />
      </ContentWrapper>
    );
  }
}

export default Content;
