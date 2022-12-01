import React from "react";
import styled, { css } from "styled-components";

const Targetstyle = styled.div`
  background-color: var(--green-600);
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};
  color: ${(textColor) => textColor};
  border-radius: ${(radius) => radius};
  font-size: 1vw;

  ${({ style }) => css`
    ${() => style.target >= 20000 && `background-color:var(--red-600)`}
    ${() => style.target == 0 && `background-color: var(--gray-600)`}
  `}
`;
const TargetStyle = (props) => {
  return <Targetstyle {...props}>{props.children}</Targetstyle>;
};

export default TargetStyle;
