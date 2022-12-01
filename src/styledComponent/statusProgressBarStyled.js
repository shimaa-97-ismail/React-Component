import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  & > * {
    margin-bottom: 0;
    font-size: 1vw;
  }
  & :nth-child(2) {
    color:${({color})=>color};
  }
`;

const StatusProgressBarStyled = (props) => {
  return (
    <>
      <Container {...props}>{props.children}</Container>
    </>
  );
};

export default StatusProgressBarStyled;
