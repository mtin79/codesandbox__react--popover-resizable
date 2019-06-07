import styled from "styled-components";

const ContentWrapper = styled.div.attrs(props => ({
  className: "bg-white"
}))`
  &.partialHeight {
    height: 40%;
  }
  &.fullHeight {
    height: 84%;
  }
  &.defaultHeight {
    height: 24px;
  }
  transition-property: height;
  transition-duration: 0.16s;
  transition-timing-function: ease-out;
`;

export default ContentWrapper;
