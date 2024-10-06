import React from "react";
import { GoClock } from "react-icons/go";

const CryptoCard: React.FC = () => {
  return (
    <a href="/trendingToken">
      <div className="group max-w-xs mx-auto w-[235px] rounded-[10px] border-[1px] border-solid border-[#000000] pb-[5px] bg-white shadow-custom-inset overflow-visible flex flex-col justify-between items-center hover:cursor-pointer hover:shadow-custom-inset-new transition-shadow duration-300 ease-in-out">
        {/* Top Image Section */}
        <div className="relative bg-gray-300 h-[225px] w-full rounded-t-[10px] flex items-center justify-center">
          <div className="absolute bottom-1 left-1 bg-yellow-400 text-black text-xs px-2 py-1 rounded-lg font-semibold">
            FAIR BONDING CURVE
          </div>
        </div>

        {/* Content Section with Hover Background Change */}
        <div className="px-[10px] pb-[10px] bg-white group-hover:bg-[#FFE958] transition-all duration-300 ease-in-out rounded-b-[10px]">
          {/* Title and Symbol */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold truncate text-[#000000]">
              We care Cryp.. <span className="text-gray-500">(WcCN)</span>
            </h2>
          </div>
          {/* Description */}
          <p className="text-gray-500 mt-1 text-[10px]">
            $WcCN is the native token released by We care
          </p>
          <p className="text-gray-500 mt-1 text-[10px]">
            Crypto Network, and this token activity is for future...
          </p>

          {/* Progress Bar and Market Cap */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-blue-500 font-semibold">0.03%</span>
            <span className="text-gray-700 font-semibold">MC $4662.51</span>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-300 rounded-full mt-1 relative">
            <div
              className="h-full bg-gradient-to-r from-[#45E6D6] to-[#FFE958] rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>

          {/* Footer Info */}
          <div className="flex items-center justify-between text-gray-500 text-xs mt-4">
            <div className="flex items-center space-x-1">
              <GoClock />
              <span>8min 2 txns</span>/<span>$1.26 24h vol</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CryptoCard;
