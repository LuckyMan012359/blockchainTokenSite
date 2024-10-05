"use client";

import { GoCopy } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";

export const Profile = () => {
  return (
    <div className="w-[322px] h-[268px] rounded-[10px] border-[1px] border-solid border-[#000000] bg-white shadow-custom-inset pt-[15px] pb-[15px] flex flex-col justify-between items-center">
      <div className="w-full flex flex-col items-center gap-[8px] relative">
        <div className="absolute right-[15px] top-0">
          <TfiWorld className="text-[#000]" />
        </div>
        <div className="w-[98px] h-[102px] bg-[#D9D9D9] rounded-[5px]"></div>
        <div className="flex items-center gap-[2px]">
          <p className="text-[#000000] text-[22px] font-[500]">BabyGra</p>
          <p className="text-[#00000081] text-[22px] font-[500]">(BABYGRA)</p>
          <div className="top-[5px] hover:cursor-pointer">
            <GoCopy className="text-[#00000081] text-[18px]" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-[9px]">
        <p className="text-[#999] font-[500]">We all like the baby gra~</p>
        <div className="w-full flex justify-center gap-[9px]">
          <div className="flex">
            <p className="text-[#999] text-[14px]">Creator:&nbsp;</p>
            <p className="text-[#000] text-[14px]">0xbc81...76e0</p>
          </div>
          <div className="flex">
            <p className="text-[#999] text-[14px]">Created:&nbsp;</p>
            <p className="text-[#000] text-[14px]">11 min ago</p>
          </div>
        </div>
        <p className="text-[10px] text-black/20 px-[15px] text-center">
          Disclaimer: The tokens listed are not associated with this platform.
          Engage with them at your own discretion.
        </p>
      </div>
    </div>
  );
};
