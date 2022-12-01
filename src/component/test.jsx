import React from "react";
import BalanceTarget from "./target/balanceTarget";
import CircleProgressBar from "./circleProgressBar/circleProgressBar";
import ProgressBarCom from "./progressBar/progressBar";
import Status from "./progressBar/status";

const courses = [
  {
    id: 1,
    price: 335150.5,
  },
];

const Test = () => {
  return (
    <>
      {courses.map((course) => {
        return (
          <BalanceTarget
            key={course.id}
            // background="var(--gray-600)"
            width="70%"
            textAlign="center"
            textColor="surface-0"
            targetLabel={course.price}
            radius="5px"
          />
        );
      })}

      <br />
      <CircleProgressBar
        progressVal="40"
        fontSize="40px"
        fontWeight="600"
        progressColor="var(--red-600)"
      />
      <br />
   
        <Status value="50.00" color="var(--red-600)" status="Running" />
        <ProgressBarCom
          value="50.00"
          color="var(--red-600)"
          showValue={false}
          backgroundColor="var(--surface-100)"
          borderRadius="0px"
          status="Running"
          height="8px"
        />
      
    </>
  );
};

export default Test;
