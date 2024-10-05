"use client";

import { IoLogoVercel } from "react-icons/io5";

interface cardData {
  itemKey: number; // Use a different prop name here
  price: string;
  description: string;
  tag: string | undefined;
}

export const CardComponent = ({
  itemKey,
  price,
  description,
  tag,
}: cardData) => {
  return (
    <div className="w-[188px] h-[103px] rounded-[10px] border-[1px] border-solid border-[#000000] bg-white shadow-custom-inset pt-[29px] pb-[21px] flex flex-col justify-between items-center">
      <div>
        <h1 className="text-[#000000] text-[20px] font-[700] leading-[1]">
          {price}
        </h1>
      </div>
      <div className="flex gap-[7px] items-center">
        {/* Apply conditional font color based on itemKey */}
        <p
          className={`text-[14px] font-[400] ${
            itemKey === 0 || itemKey === 1 ? "text-[#666]" : "text-[#000]"
          }`}
        >
          {description}
        </p>

        {itemKey === 0 && (
          <div className="text-[#000] flex items-center text-[10px] bg-[#45E6D6] rounded-[3px] w-[45px] h-[16px] justify-center text-center">
            <h6 className="leading-[2]">{tag}</h6>
          </div>
        )}
      </div>
    </div>
  );
};
