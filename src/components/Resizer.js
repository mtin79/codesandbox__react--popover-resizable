import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hammer from "hammerjs";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResizerWrapper = styled.div.attrs(props => ({
  className: "resizer flex justify-center relative"
}))`
  margin-top: -8px;
  .resizerIcon {
    height: 40px;
    font-size: 18px;
  }
`;

class Resizer extends React.Component {
  static propTypes = {
    sizes: PropTypes.object.isRequired,
    handleResize: PropTypes.func.isRequired,
    initialSize: PropTypes.string
  };

  state = {
    sizeIndex:
      Object.keys(this.props.sizes).indexOf(this.props.initialSize) || 0
  };

  resizeElement = React.createRef();

  shouldComponentUpdate() {
    return false;
  }

  sizeUp = () => {
    const sizesKeys = Object.keys(this.props.sizes);
    if (this.state.sizeIndex < sizesKeys.length - 1) {
      this.setState(prevState => {
        const sizeIndex = prevState.sizeIndex + 1;
        this.props.handleResize(sizesKeys[sizeIndex]);
        console.log("increaseSizeIndex: ", sizeIndex);
        return {
          sizeIndex
        };
      });
    }
  };

  sizeDown = () => {
    const sizesKeys = Object.keys(this.props.sizes);
    if (this.state.sizeIndex > 0) {
      this.setState(prevState => {
        const sizeIndex = prevState.sizeIndex - 1;
        this.props.handleResize(sizesKeys[sizeIndex]);
        console.log("increaseSizeIndex: ", sizeIndex);
        return {
          sizeIndex
        };
      });
    }
  };

  sizeToggle = () => {
    const sizesKeys = Object.keys(this.props.sizes);
    if (this.state.sizeIndex === sizesKeys.length - 1) {
      this.setState(prevState => {
        const sizeIndex = prevState.sizeIndex - 1;
        this.props.handleResize(sizesKeys[sizeIndex]);
        console.log("increaseSizeIndex: ", sizeIndex);
        return {
          sizeIndex
        };
      });
    } else {
      this.setState(prevState => {
        const sizeIndex = prevState.sizeIndex + 1;
        this.props.handleResize(sizesKeys[sizeIndex]);
        console.log("increaseSizeIndex: ", sizeIndex);
        return {
          sizeIndex
        };
      });
    }
  };

  componentDidMount() {
    // Initialize Hammer on Resizer element:
    const hammer = new Hammer(this.resizeElement.current);

    // Config hammer wrapper to process vertical directions:
    hammer.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL });

    hammer.on("swipeup", event => {
      this.sizeUp();
    });

    hammer.on("swipedown", event => {
      this.sizeDown();
    });

    hammer.on("tap", event => {
      this.sizeToggle();
    });
  }

  render() {
    return (
      <ResizerWrapper ref={this.resizeElement}>
        <FontAwesomeIcon className="moon-gray resizerIcon" icon={faGripLines} />
      </ResizerWrapper>
    );
  }
}

export default Resizer;
