import React from "react";
import Container from "../../styledComponent/statusProgressBarStyled"

const Status = (props) => {
  return (
    <>
      <Container>
        <p>{props.value}%</p>
        <p style={{color:`${props.color}`}} >
          {props.status}
        </p>
      </Container>
    </>
  );
};

export default Status;
