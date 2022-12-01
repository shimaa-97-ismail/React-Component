import React from "react";
import styled from "styled-components";

const CircularProgressStyled = styled.div`
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: conic-gradient(
  ${({style})=>style.background} ${(props)=>ProgressVal(props)*3.6}deg,#ededed 0deg
  )!important;
  &::before {
    content: "";
    position: absolute;
    height: 130px;
    width: 130px;
    border-radius: 50%;
    background-color: white;
  }

  & > * {
    position: relative;
    font-size: ${({fontSize})=>fontSize};
    font-weight: ${({fontWeight})=>fontWeight};
  }
`;

const ProgressVal = (props) => {
  return props.children.props.children[0];
};
const CircleProgressBarStyle = (props) => {
  return (
    <CircularProgressStyled {...props}>{props.children}</CircularProgressStyled>
  );
};
export default CircleProgressBarStyle;
