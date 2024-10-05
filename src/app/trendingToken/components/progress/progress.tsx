"use client";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressCircle from "./component/progressComponent";
import { SlExclamation } from "react-icons/sl";

export const ChartCard = () => {
  return (
    <div className="w-[322px] h-[363px] rounded-[10px] border-[1px] border-solid border-[#000000] bg-white shadow-custom-inset pt-[15px] pb-[15px] flex flex-col justify-between items-center relative">
      <div className="w-full pl-[16px]">
        <p className="text-[14px] text-[#000] font-[400] flex items-center">
          Fair Bonding Curve progress&nbsp;
          <SlExclamation />
        </p>
      </div>
      <div className="w-[218px] h-[218px] relative">
        <ProgressCircle progress={30} remainingAmount={"791.6M"} />
      </div>
      <p className="text-[#127BE9] text-center text-[14px] font-[400] leading-2 pt-[15px]">
        0.0671 BNB collected
      </p>
      <p className="text-[#666] text-[12px] font-[400] text-center leading-2">
        0 BNB left
      </p>
    </div>
  );
};
