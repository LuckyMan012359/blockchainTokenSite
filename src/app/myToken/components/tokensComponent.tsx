import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";

import { useRouter } from "next/navigation";

import "./tokensComponent.css";
import CryptoCard from "@/app/(dashboard)/components/cryptoCards/components/cryptoCard";

const TokensComponent: React.FC = () => {
  const router = useRouter();

  const [isData, setIsData] = useState(false);

  const handleLaunchTokenClick = () => {
    router.push("/tokenForm");
  };

  // Sample data array
  const dataArray = [1, 2, 3, 4, 5];

  return (
    <div className="bg-white rounded-lg shadow-md w-full mx-auto px-[280px] max-[1720px]:px-[200px] max-[1440px]:px-[105px] max-[870px]:px-[50px] max-[768px]:px-[10px]">
      {/* Header Section */}
      <div className="py-[20px]">
        <h1 className="text-xl font-semibold mr-4 text-[#000000]">My Tokens</h1>
      </div>
      <div className="flex items-center justify-between mb-[30px] myTokenButtons">
        {/* Button Group */}
        <div className="flex justify-start gap-[15px]">
          <button className="px-4 py-2 bg-[#FFE958] text-black rounded-[5px] hover:bg-yellow-500 transition-all duration-300">
            Tokens I hold
          </button>
          <button className="px-4 py-2 border border-gray-400 text-gray-700 rounded-[5px] hover:bg-gray-100 transition-all duration-300">
            Launched by me
          </button>
        </div>
        <div className="flex justify-end">
          {isData === false && (
            <button
              className="px-4 py-2 bg-[#FFE958] text-black rounded-[5px] hover:bg-yellow-500 transition-all duration-300 flex items-center"
              onClick={handleLaunchTokenClick}
            >
              <HiPlus className="text-[16px]" />
              &nbsp;Launch Token
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pb-12">
        {isData === false ? (
          <div className="w-full min-h-fit grid grid-cols-5 gap-y-[15px] max-[1605px]:grid-cols-4 max-[1195px]:grid-cols-3 max-[940px]:grid-cols-2 max-[515px]:grid-cols-1">
            {dataArray.map((item, index) => (
              <CryptoCard key={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center min-h-[402px] justify-center">
            {/* Search Icon */}
            <BsSearch className="text-gray-400 text-4xl mb-4" />
            <p className="text-gray-500 text-lg mb-6">No tokens found!</p>
            {/* Button for "Tokens I hold" */}
            <button className="px-6 py-3 bg-yellow-400 text-black rounded-[5px] hover:bg-yellow-500 transition-all duration-300">
              Tokens I hold
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TokensComponent;
