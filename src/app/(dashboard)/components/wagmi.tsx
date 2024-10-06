import { http, createConfig } from "wagmi";
import { base, optimism, sepolia } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

const projectId = "803575691fa797c5e26919e9412950f4";

export const config = createConfig({
  chains: [sepolia, optimism, base],
  connectors: [walletConnect({ projectId }), injected()],
  transports: {
    [sepolia.id]: http(),
    [optimism.id]: http(),
    [base.id]: http(),
  },
});
