"use client";

import PageFooter from "../(dashboard)/components/footer";
import { PageHeader } from "../(dashboard)/components/header";
import TokensComponent from "./components/tokensComponent";

const MyToken = () => {
  return (
    <div className="items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <PageHeader pageName="myToken" />
      <div>
        <TokensComponent />
      </div>
      <PageFooter />
    </div>
  );
};

export default MyToken;
