// WalletConnect.tsx

import { injected } from "@wagmi/core";
import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { useAccount, useDisconnect } from "wagmi";
import { Connector, useChainId, useConnect } from "wagmi";
import metamaskUrl from "@/assets/metamask.png";
import walletConnect from "@/assets/Walletconnect.png";
import Image from "next/image";

interface walletSidebar {
  sidebar: boolean;
}

const WalletConnect = ({ sidebar }: walletSidebar) => {
  const { isConnected, address } = useAccount();

  const { disconnect } = useDisconnect();

  const [clientRendered, setClientRendered] = useState(false);

  const chainId = useChainId();
  const { connectors, connect } = useConnect();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setClientRendered(true);
  }, []);

  const connector = connectors[0];

  const metamaskConnector = connectors[1];

  if (!clientRendered) {
    return <div className="h-[30px] w-[134px]">Loading...</div>;
  }

  return (
    <div
      className={`h-[30px]  ${
        sidebar == false ? "w-[134px]" : "w-full"
      } border-[1px] border-[#127BE9] rounded-[4px] border-solid bg-[#45E6D6] flex justify-between items-center hover:cursor-pointer`}
    >
      {isConnected ? (
        <>
          <div className="grow flex justify-center items-center text-[14px] font-[500] not-italic text-[#000000]">
            <p>
              {address ? (
                `${address.slice(0, 5)}...${address.slice(-5)}`
              ) : (
                <div onClick={showModal}>Connect Wallet</div>
              )}
            </p>
          </div>
          <div
            className="h-full w-[30px] border-l-[1px] border-l-[#127BE9] border-l-solid flex justify-center items-center"
            onClick={() => disconnect()}
          >
            <IoIosLogIn className="text-[#000000]" />
          </div>
        </>
      ) : (
        <div className="grow flex justify-center items-center text-[14px] font-[500] not-italic text-[#000000]">
          <div onClick={showModal}>Connect Wallet</div>
          {/* <ConnectorButton
            key={connector.uid}
            connector={connector}
            onClick={() => connect({ connector, chainId })}
          /> */}
        </div>
      )}

      <Modal
        title="Search"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <div className="w-full p-[20px] flex justify-between items-center h-[165px]">
          <ConnectorButton
            key={metamaskConnector.uid}
            imageUrl={metamaskUrl.src}
            connector={metamaskConnector}
            onClick={() => {
              connect({ connector: injected(), chainId });
              setIsModalOpen(false);
            }}
            walletName={metamaskConnector.name}
          />

          <ConnectorButton
            key={connector.uid}
            imageUrl={walletConnect.src}
            connector={connector}
            onClick={() => {
              connect({ connector, chainId });
              setIsModalOpen(false);
            }}
            walletName={connector.name}
          />
        </div>
      </Modal>
    </div>
  );
};

export default WalletConnect;

function ConnectorButton({
  connector,
  onClick,
  imageUrl,
  walletName,
}: {
  connector: Connector;
  onClick: () => void;
  imageUrl: string;
  walletName: string;
}) {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector, setReady]);

  return (
    <button
      className="w-[45%] flex flex-col items-center h-full justify-between"
      disabled={!ready}
      onClick={onClick}
      type="button"
    >
      <Image src={imageUrl} alt="wallet icon" width={100} height={100} />
      {walletName}
    </button>
  );
}
