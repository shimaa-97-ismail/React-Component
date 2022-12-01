import React from "react";
import styled from "styled-components";
const StylePrograssBar = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  height: ${({ height }) => height};
`;

const ProgressBarStyle = (props) => {
  return (
    <>
      <StylePrograssBar {...props}>{props.children}</StylePrograssBar>
    </>
  );
};

export default ProgressBarStyle;
