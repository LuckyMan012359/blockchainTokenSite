"use client";

import PageFooter from "../(dashboard)/components/footer";
import { PageHeader } from "../(dashboard)/components/header";
import { PageName } from "./components/pageTitle";
import Cards from "./components/tokens/cards";
import { Profile } from "./components/profile/profile";
import { ChartCard } from "./components/progress/progress";
import BuyAndSellCart from "./components/buyAndSell/buyAndSell";
import { HeaderAddress } from "./components/headerAddress/headerAddress";
import { Chart } from "./components/chart/chart";
import TokenDeployTable from "./components/tokenDeployTable/tokenDeployTable";

import "./trendingToken.css";

const TrendingToken = () => {
  return (
    <div className="items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <PageHeader pageName="trendingToken" />
      <div className="pl-[350px] pr-[350px] max-[1880px]:px-[200px] max-[1440px]:px-[105px] max-[870px]:px-[50px] max-[768px]:px-[10px] max-w-full">
        <PageName pageName="🔥Trending Tokens" />
        <div className="w-full flex justify-between pb-[65px] gap-[30px] cards max-2xl:flex-col">
          <div className="w-[65%] flex justify-between flex-col left_cards max-2xl:w-full">
            <Cards />
            <div className="grow w-full pt-[20px] flex flex-col justify-between gap-[51px]">
              <Chart />
              <div className="h-[300px] grow overflow-auto border-[1px] border-[#000000] border-solid rounded-[5px] bg-[#ffffff] p-[15px] max-2xl:w-full">
                <TokenDeployTable />
              </div>
            </div>
          </div>
          <div className="grow flex 2xl:flex-col justify-end items-end gap-[20px] right_cards max-2xl:w-full flex-wrap max-2xl:justify-between max-2xl:items-start">
            <Profile />
            <ChartCard />
            <BuyAndSellCart />
            <HeaderAddress />
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default TrendingToken;
