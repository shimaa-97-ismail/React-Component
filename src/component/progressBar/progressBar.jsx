import React from "react";
import { ProgressBar } from "primereact/progressbar";
import ProgressBarStyle from "../../styledComponent/progressBarStyle";


const ProgressBarCom = (props) => {
  return (
    <>   
      <ProgressBarStyle>
        <ProgressBar
          value={props.value}
          color={props.color}
          showValue={props.showValue}
          style={{
            backgroundColor:`${props.backgroundColor}`,
            borderRadius: `${props.borderRadius}`,
            height:`${props.height}`
          }}
        ></ProgressBar>
      </ProgressBarStyle>
    </>
  );
};

export default ProgressBarCom;
