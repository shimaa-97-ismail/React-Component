import React from "react";
import Targetstyle from "../../styledComponent/targetStyled";
const balanceTarget = (props) => {
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <Targetstyle
        style={{
          // backgroundColor: `${props.background}`,
          width: `${props.width}`,
          textAlign: `${props.textAlign}`,
          color: `var(--${props.textColor})`,
          borderRadius: `${props.radius}`,
          target:`${props.targetLabel}`
        }}
      >
       {dollarUS.format(`${props.targetLabel}`)} 
      </Targetstyle>
    </>
  );
};

export default balanceTarget;

//color
// var(--red-500)
//textcolor var(--surface-0)