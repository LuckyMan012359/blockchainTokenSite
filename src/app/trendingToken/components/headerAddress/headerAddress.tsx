"use client";

export const HeaderAddress = () => {
  return (
    <div className="w-[322px] h-[181px] rounded-[10px] border-[1px] border-solid border-[#000000] bg-white shadow-custom-inset pt-[8px] pb-[15px] px-[8px] flex flex-col justify-between items-center">
      <div className="w-full h-[30px] shrink-0 bg-[#D9D9D9] rounded-[5px] flex justify-between items-center px-[11px]">
        <p className="text-[#000000] text-center text-[14px] font-[400]">
          Holders
        </p>
        <p className="text-[#000000] text-center text-[14px] font-[400]">%</p>
      </div>
      <div className="flex flex-col w-full">
        <div className="px-[11px] py-[13px] w-full flex justify-between items-center">
          <p className="text-[#000] text-[14px] text-center font-[400]">
            0x8341...6451
          </p>
          <p className="text-[#000] text-[14px] text-center font-[400]">
            99.04
          </p>
        </div>
        <div className="px-[11px] py-[13px] w-full flex justify-between items-center">
          <p className="text-[#000] text-[14px] text-center font-[400]">
            0x8341...6451
          </p>
          <p className="text-[#000] text-[14px] text-center font-[400]">
            99.04
          </p>
        </div>
        <div className="px-[11px] py-[13px] w-full flex justify-between items-center">
          <p className="text-[#000] text-[14px] text-center font-[400]">
            0x8341...6451
          </p>
          <p className="text-[#000] text-[14px] text-center font-[400]">
            99.04
          </p>
        </div>
      </div>
    </div>
  );
};
