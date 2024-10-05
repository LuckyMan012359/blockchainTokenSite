"use client";

import { Switch } from "antd";
import CryptoCard from "./components/cryptoCard";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const CryptoCards = () => {
  const [isToggled, setIsToggled] = useState(true);

  const toggleHandler = (checked: any) => {
    setIsToggled(checked);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  // Calculate the start and end range for items
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = currentPage * itemsPerPage;

  // Handler for going to the previous page
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Handler for going to the next page
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-[10px] px-[300px] pt-[60px] bg-gray max-[1850px]:px-[260px] max-[1720px]:px-[200px] max-[1440px]:px-[105px] max-[870px]:px-[50px] max-[768px]:px-[10px] flex-wrap">
        {/* Toggle Section */}
        <div className="flex items-center bg-teal-400 rounded-lg p-2">
          <span className="text-black font-bold pr-2">GRA</span>
          <div className="flex items-center bg-[#127BE94D] p-[5px] rounded-[3px]">
            <Switch
              checked={isToggled}
              onChange={toggleHandler}
              className={`custom-switch ${
                isToggled ? "bg-blue-500" : "bg-gray-300"
              }`}
              size="small"
            />
            <span
              className={`text-sm ml-2 ${
                isToggled ? "text-[#333333]" : "text-gray-600"
              }`}
            >
              Animation
            </span>
          </div>
        </div>

        {/* Menu Buttons */}
        <button className="py-2 px-4 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400 transition w-[110px]">
          Trending
        </button>
        <button className="py-2 px-4 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400 transition w-[110px]">
          New
        </button>
        <button className="py-2 px-4 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400 transition w-[110px]">
          Top
        </button>
        <button className="py-2 px-4 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400 transition w-[110px]">
          Finalized
        </button>
      </div>
      {/* <div className="min-h-[300px] py-[40px] flex gap-[20px] flex-wrap px-[300px] justify-center grid-cols-5"> */}
      <div className="w-full min-h-fit px-[300px] py-[40px] grid grid-cols-5 gap-y-[15px] max-[1850px]:px-[260px] max-[1720px]:px-[200px] max-[1605px]:grid-cols-4 max-[1440px]:px-[105px] max-[1195px]:grid-cols-3 max-[940px]:grid-cols-2 max-[870px]:px-[50px] max-[768px]:px-[10px] max-[515px]:grid-cols-1">
        {dataArray.map((item, index) => (
          <CryptoCard key={index} />
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4 py-4 text-[#000000]">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-400 hover:border-gray-600 transition-colors"
          disabled={currentPage === 1}
        >
          <span className="text-xl">
            <IoIosArrowBack />
          </span>
        </button>

        {/* Display Text */}
        <span className="text-lg font-medium">
          Showing tokens {start}-{end}
        </span>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-400 hover:border-gray-600 transition-colors"
        >
          <span className="text-xl">
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
};
