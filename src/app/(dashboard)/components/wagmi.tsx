import { http, createConfig } from "wagmi";
import { base, optimism, sepolia } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

const projectId: string | undefined = process.env.NEXT_PUBLIC_PROJECT_ID;

export const config = createConfig({
  chains: [sepolia, optimism, base],
  connectors: [
    walletConnect(projectId ? { projectId } : { projectId: "" }),
    injected(),
  ],
  transports: {
    [sepolia.id]: http(),
    [optimism.id]: http(),
    [base.id]: http(),
  },
});
