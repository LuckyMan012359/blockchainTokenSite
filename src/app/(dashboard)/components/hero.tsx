// components/Hero.tsx
import React from "react";
import Image from "next/image";
import heroBackground from "@/assets/heroBackground.png";

const Hero: React.FC = () => {
  return (
    <div
      className="w-full h-[300px] flex flex-col items-center justify-end bg-yellow-100 pb-[30px] max-[720px]:h-[250px] max-[595px]:h-[200px] max-[470px]:h-[150px] max-[470px]:pb-[10px]"
      style={{
        backgroundImage: `url(${heroBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Button Container */}
      <div className="flex space-x-4 mt-4">
        {/* White Button */}
        <button className="px-5 py-2 border-2 border-black bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition">
          How it works
        </button>

        {/* Blue Button */}
        <a
          className="px-5 py-2 border-2 border-black bg-[#45E6D6] text-black font-semibold rounded-md hover:bg-blue-400 transition"
          href="/tokenForm"
        >
          Launch Token
        </a>
      </div>
    </div>
  );
};

export default Hero;
