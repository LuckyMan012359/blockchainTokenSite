// WalletConnect.tsx
import React, { useEffect, useState } from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IoIosLogIn } from "react-icons/io";

import { useDisconnect } from "wagmi";

interface walletSidebar {
  sidebar: boolean;
}

const WalletConnect = () => {
  const { disconnect } = useDisconnect();

  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
  }, []);
  if (!clientRendered) {
    return <div className="h-[30px] w-[134px]">Loading...</div>;
  }

  return (
    <div className="grow flex justify-center items-center text-[14px] font-[500] not-italic text-[#000000] h-full">
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready
                ? {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  }
                : {
                    style: {
                      width: "100%",
                      height: "100%",
                    },
                  })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="flex justify-center items-center w-full h-full"
                    >
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="flex justify-center items-center w-full h-full"
                    >
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div className="flex justify-between items-center w-full h-full">
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="grow flex justify-center items-center"
                    >
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
};

export default WalletConnect;
