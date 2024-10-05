"use client";

import LineSegmentChart from "./components/chartComponent";

export const Chart = () => {
  return (
    <div className="flex justify-center items-center min-h-[450px] p-[15px] border-[1px] border-[#000000] border-solid rounded-[5px]">
      <LineSegmentChart />
    </div>
  );
};
