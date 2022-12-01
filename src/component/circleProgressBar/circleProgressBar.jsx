import React from "react";
import CircleProgressBarStyle from "../../styledComponent/circleProgressBarStyle";

const CircleProgressBar = (props) => {
  return (
    <>
      <CircleProgressBarStyle style={{ background: `${props.progressColor}` }}>
        <span
          style={{
            fontSize: `${props.fontSize}`,
            fontWeight: `${props.fontWeight}`,
          }}
        >
          {props.progressVal}%
        </span>
      </CircleProgressBarStyle>
    </>
  );
};

export default CircleProgressBar;
