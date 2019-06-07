import React from "react";

import ContentContainer from "./ContentContainer";
import SearchInput from "./SearchInput";
import Resizer from "./Resizer";

class Content extends React.Component {
  ContentContainer = React.createRef();

  render() {
    return (
      <ContentContainer
        ref={this.ContentContainer}
        className="absolute w-100 bottom-0"
      >
        <Resizer />
        <SearchInput className="br4 db" />
      </ContentContainer>
    );
  }
}

export default Content;
