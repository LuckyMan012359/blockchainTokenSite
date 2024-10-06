import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "viem";
import { mainnet, sepolia } from "wagmi/chains";

const projectId = "803575691fa797c5e26919e9412950f4";

import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
  ledgerWallet,
  magicEdenWallet,
  trustWallet,
  omniWallet,
  imTokenWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig } from "wagmi";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [rainbowWallet, walletConnectWallet, coinbaseWallet],
    },
    {
      groupName: "More",
      wallets: [
        ledgerWallet,
        magicEdenWallet,
        trustWallet,
        omniWallet,
        imTokenWallet,
      ],
    },
  ],
  {
    appName: "My RainbowKit App",
    projectId,
  }
);

export const config = createConfig({
  connectors,
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
