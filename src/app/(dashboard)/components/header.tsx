"use client";

import Image from "next/image";
import { Button, Input, Modal } from "antd";
import { useState, useEffect } from "react";

import logoUrl from "@/assets/logo.png";
import gitbookUrl from "@/assets/gitbookIcon.png";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import { IoClose, IoLogoYoutube } from "react-icons/io5";
import { IoIosLogIn, IoIosSearch } from "react-icons/io";
import { PiList } from "react-icons/pi";

import { useRouter } from "next/navigation";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./wagmi";

import dynamic from "next/dynamic";

// Dynamically import the WalletConnect component to prevent server-side rendering
const WalletConnect = dynamic(() => import("./components/WalletConnect"), {
  ssr: false,
});

interface PageName {
  pageName: string;
}

export const PageHeader = ({ pageName }: PageName) => {
  const queryClient = new QueryClient();

  const [isClient, setIsClient] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setIsClient(false);
  }, []);

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleLaunchTokenClick = () => {
    router.push("/tokenForm");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div
          className={`${
            isClient ? "" : "overflow-hidden"
          } relative bg-[#FFE958] h-[77px] w-full pl-[350px] pr-[350px] flex justify-between items-center max-[1720px]:px-[200px] max-[1440px]:px-[105px] max-[870px]:px-[50px] max-[768px]:px-[10px]`}
        >
          <div
            className="flex items-center gap-[32px] cursor-pointer"
            onClick={handleLogoClick}
          >
            <Image src={logoUrl} alt="logo" className="h-[70px] w-[70px]" />
            <p className="text-[#000000] text-[14px] font-[500] not-italic">
              My Tokens
            </p>
          </div>
          <div className="flex justify-end gap-[13px] items-center max-[678px]:hidden">
            {pageName == "topPage" && (
              <>
                <Input
                  prefix={<IoIosSearch />}
                  className="h-[30px] w-[352px] max-[1195px]:hidden"
                />
                <div
                  className="h-[30px] w-[30px] border-[1px] border-[#000000] rounded-[4px] border-solid justify-center items-center hover:cursor-pointer hidden max-[1195px]:flex"
                  onClick={showModal}
                >
                  <IoIosSearch className="text-[#000000]" />
                </div>
              </>
            )}
            <div className="h-[30px] w-[30px] border-[1px] border-[#000000] rounded-[4px] border-solid flex justify-center items-center hover:cursor-pointer">
              <Image
                src={gitbookUrl}
                alt="gitbookUrl"
                className="h-[12px] w-[16px]"
              />
            </div>
            <div className="h-[30px] w-[30px] border-[1px] border-[#000000] rounded-[4px] border-solid flex justify-center items-center hover:cursor-pointer">
              <RiTwitterXFill className="text-[#000000]" />
            </div>
            <div className="h-[30px] w-[30px] border-[1px] border-[#000000] rounded-[4px] border-solid flex justify-center items-center hover:cursor-pointer">
              <BiLogoTelegram className="text-[#000000]" />
            </div>
            <div className="h-[30px] w-[30px] border-[1px] border-[#000000] rounded-[4px] border-solid flex justify-center items-center hover:cursor-pointer">
              <IoLogoYoutube className="text-[#000000]" />
            </div>
            <div
              className="h-[30px] w-[106px] border-[1px] border-[#000000] rounded-[4px] border-solid flex justify-center items-center text-[14px] font-[500] not-italic text-[#000000] hover:cursor-pointer"
              onClick={handleLaunchTokenClick}
            >
              Launch Token
            </div>
            <WalletConnect sidebar={false} />
          </div>
          {/* Toggle Button */}
          <div
            className="h-[30px] hidden w-[30px] justify-center items-center max-[678px]:flex"
            onClick={() => setIsClient(!isClient)}
          >
            {isClient ? (
              <IoClose className="text-[#000000]" />
            ) : (
              <PiList className="text-[#000000]" />
            )}
          </div>
          <div
            className={`flex flex-col gap-[15px] absolute top-[85px] bg-[#FFE958] w-[250px] px-[20px] py-[15px] transition-all duration-500 ease-in-out ${
              isClient ? "right-0" : "-right-[250px]"
            }`}
          >
            {pageName == "topPage" && (
              <Input prefix={<IoIosSearch />} className="h-[30px] w-full" />
            )}
            <div className="flex justify-between items-center">
              <div className="h-[30px] w-[30px] border-[1px] border-[#000000] rounded-[4px] border-solid flex justify-center items-center hover:cursor-pointer">
                <Image
                  src={gitbookUrl}
                  alt="gitbookUrl"
                  className="h-[12px] w-[16px]"
                />
              </div>
              <div className="h-[30px] w-[30px] border-[1px] border-[#000000] rounded-[4px] border-solid flex justify-center items-center hover:cursor-pointer">
                <RiTwitterXFill className="text-[#000000]" />
              </div>
              <div className="h-[30px] w-[30px] border-[1px] border-[#000000] rounded-[4px] border-solid flex justify-center items-center hover:cursor-pointer">
                <BiLogoTelegram className="text-[#000000]" />
              </div>
              <div className="h-[30px] w-[30px] border-[1px] border-[#000000] rounded-[4px] border-solid flex justify-center items-center hover:cursor-pointer">
                <IoLogoYoutube className="text-[#000000]" />
              </div>
            </div>
            <div className="flex flex-col gap-[15px] mt-[15px]">
              <div
                className="h-[30px] w-full border-[1px] border-[#000000] rounded-[4px] border-solid flex justify-center items-center text-[14px] font-[500] not-italic text-[#000000] hover:cursor-pointer"
                onClick={handleLaunchTokenClick}
              >
                Launch Token
              </div>
              <WalletConnect sidebar={true} />
            </div>
          </div>
          <Modal
            title="Search"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={[
              <Button type="primary" key="search">
                Search
              </Button>,
              <Button key="close" onClick={handleCancel}>
                Close
              </Button>,
            ]}
          >
            <Input prefix={<IoIosSearch />} className="h-[30px] w-full" />
          </Modal>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
};