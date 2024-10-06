"use client";

import Image from "next/image";
import logoUrl from "@/assets/logo2.png";
import { FaTelegramPlane } from "react-icons/fa";

import "./footer.css";

const PageFooter = () => {
  return (
    <div className="w-full flex flex-col items-center bg-black text-white py-10 px-[350px] max-[1720px]:px-[200px] max-[1440px]:px-[105px] max-[870px]:px-[50px] max-[768px]:px-[10px]">
      <div className="w-full flex justify-between px-[50px] py-6 border-b border-gray-700">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 logo">
          <Image src={logoUrl} alt="Logo" width={156} height={156} />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-[100px] footer_links">
          <div className="flex flex-col space-y-8">
            <span className="cursor-pointer">Explore</span>
            <a href="/myToken">
              <span className="cursor-pointer">My tokens</span>
            </a>
            <span className="cursor-pointer">Rewards</span>
          </div>

          <div className="flex flex-col space-y-8">
            <span className="cursor-pointer">Referrals</span>
            <span className="cursor-pointer">Documentation</span>
            <span className="cursor-pointer">How it works</span>
          </div>
          <div className="flex flex-col space-y-8">
            <span className="cursor-pointer">Twitter</span>
            <span className="cursor-pointer">Telegram</span>
            <span className="cursor-pointer">YouTube</span>
          </div>

          {/* Telegram Bot Button */}
          <div className="flex flex-col items-start">
            <span>Subscribe to notifications:</span>
            <button className="mt-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md flex items-center justify-center gap-[10px] w-full">
              <FaTelegramPlane />
              Telegram Bot
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Disclaimer and Terms */}
      <div className="w-full text-center text-gray-400 text-sm py-8">
        <p>
          Copyright Information & disclaimers: “Disclaimer: Digital assets are
          highly speculative and involve significant risk of loss. Anyone
          considering trading them should be fully prepared for the possibility
          of losing their entire investment. GraFun makes no guarantees
          regarding the success or profitability of any meme coin created on the
          platform and is not liable for any losses, damages, or complications
          that may arise from trading. We strongly encourage users to assess
          their financial situation, evaluate their risk tolerance, and conduct
          thorough research (DYOR) before engaging with any meme coins. GraFun
          assumes no responsibility for content added by users of the service,
          including but not limited to token names, descriptions, images,
          animations, and other media. All content is the sole responsibility of
          the user who submitted it.”
        </p>
        <div className="flex justify-end">
          <a href="#" className="text-white underline mt-4 block">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
