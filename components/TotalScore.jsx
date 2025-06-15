import React from "react";

const TotalScore = ({ score }) => {
  return (
    <div className="max-w-200px">
      <h1 className="w-[62px] h-[112px] font-poppins font-medium text-[100px] leading-[100%] tracking-[0%]">
        {score}
      </h1>
      <p className="w-[135px] h-[36px] font-poppins font-medium text-[24px] leading-[100%] tracking-[0%]">
        Total score
      </p>
    </div>
  );
};

export default TotalScore;

