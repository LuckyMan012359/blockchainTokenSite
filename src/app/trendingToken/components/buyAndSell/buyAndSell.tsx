"use client";

import { FC, useState } from "react";
import { Button } from "antd";
import { AiOutlineSetting } from "react-icons/ai";
import Image from "next/image";
import BNBImageUrl from "@/assets/BNBImageUrl.png";
import styles from "./BuyAndSellCart.module.css"; // Import the CSS module

import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "@/app/(dashboard)/components/wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import WalletConnect from "./components/WalletConnect";

// Define the type for the radio options
interface RadioOption {
  label: string;
  value: string;
}

// Define the props for the custom radio group component
interface CustomRadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}

// Custom RadioGroup component with TypeScript
const CustomRadioGroup: FC<CustomRadioGroupProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div className={styles.radioGroupContainer}>
      {options.map((option) => (
        <div
          key={option.value}
          className={`${styles.radioButton} ${
            value === option.value ? styles.radioButtonActive : ""
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

// Main component
const BuyAndSellCart: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("buy");

  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#64DFAC",
            accentColorForeground: "#070707",
          })}
        >
          <div className="w-[322px] h-[268px] rounded-[10px] border-[1px] border-solid border-[#000000] bg-white shadow-custom-inset pt-[15px] pb-[15px] px-[14px] flex flex-col justify-between items-center gap-[14px]">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "13px",
                width: "100%",
              }}
            >
              {/* Custom Radio Group */}
              <CustomRadioGroup
                options={[
                  { label: "Buy", value: "buy" },
                  { label: "Sell", value: "sell" },
                ]}
                value={selectedOption}
                onChange={setSelectedOption}
              />
              <div className="w-[24px] h-[24px] border-[#000000] border-[1px] border-solid rounded-[5px] flex justify-center items-center">
                <AiOutlineSetting className="text-[#000000]" />
              </div>
            </div>
            <div className="w-full h-[72px] bg-[#F4F4F4] flex items-end justify-between px-[14px]">
              <p className="text-[#000000] text-[24px] font-[400]">0</p>
              <p className="text-[#000000] text-[24px] font-[400] flex items-center gap-[4px]">
                <Image
                  src={BNBImageUrl}
                  alt="BNBImage"
                  className="w-[19px] h-[19px]"
                />
                BNB
              </p>
            </div>
            <div className="w-full flex flex-col gap-[6px]">
              <div className="w-full flex gap-[6px]">
                <div className="w-[144px] h-[24px] shrink-0 border-[#7A7A7A] border-[1px] border-solid rounded-[5px] flex items-center justify-center">
                  <p className="text-[#000000] text-center text-[14px] font-[400]">
                    1 BNB
                  </p>
                </div>
                <div className="w-[144px] h-[24px] shrink-0 border-[#7A7A7A] border-[1px] border-solid rounded-[5px] flex items-center justify-center">
                  <p className="text-[#000000] text-center text-[14px] font-[400]">
                    2 BNB
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-[6px]">
                <div className="w-[144px] h-[24px] shrink-0 border-[#7A7A7A] border-[1px] border-solid rounded-[5px] flex items-center justify-center">
                  <p className="text-[#000000] text-center text-[14px] font-[400]">
                    5 BNB
                  </p>
                </div>
                <div className="w-[144px] h-[24px] shrink-0 border-[#7A7A7A] border-[1px] border-solid rounded-[5px] flex items-center justify-center">
                  <p className="text-[#000000] text-center text-[14px] font-[400]">
                    10 BNB
                  </p>
                </div>
              </div>
            </div>
            <Button className="text-[#000000] w-full h-[38px] bg-[#45E6D6]">
              <WalletConnect />
            </Button>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default BuyAndSellCart;
