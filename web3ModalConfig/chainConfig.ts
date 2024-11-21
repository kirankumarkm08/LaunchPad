import { NETWORK_NAMES, CHAIN_ID, SUPPORTED_CHAIN_IDS } from "@/constants/web3";
import {
  mainnet,
  optimism,
  polygon,
  bsc,
  arbitrum,
  fantom,
  polygonZkEvm,
  avalanche,
  base,
  zkSync,
  mantle,
} from "wagmi/chains";

const manta = {
  id: 169,
  name: "Manta",
  network: "Manta",
  nativeCurrency: {
    name: NETWORK_NAMES[CHAIN_ID.MAINNET],
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://pacific-rpc.manta.network/http"],
    },
    public: {
      http: ["https://pacific-rpc.manta.network/http"],
    },
  },
  blockExplorers: {
    blockscout: {
      name: CHAIN_ID.MANTA,
      url: "https://pacific-explorer.manta.network/",
    },
    default: {
      name: CHAIN_ID.MANTA,
      url: "https://pacific-explorer.manta.network/",
    },
  },
};
const mode = {
  id: CHAIN_ID.MODE,
  name: "Mode Mainnet",
  network: "Mode Mainnet",
  nativeCurrency: {
    name: NETWORK_NAMES[CHAIN_ID.MAINNET],
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.mode.network/"],
    },
    public: {
      http: ["https://mainnet.mode.network/"],
    },
  },
  blockExplorers: {
    blockscout: {
      name: CHAIN_ID.MODE,
      url: "https://explorer.mode.network/",
    },
    default: {
      name: CHAIN_ID.MODE,
      url: "https://explorer.mode.network/",
    },
  },
};

const rpcNetworks = [
  mainnet,
  optimism,
  polygon,
  bsc,
  arbitrum,
  fantom,
  polygonZkEvm,
  avalanche,
  base,
  zkSync,
  manta,
  mantle,
  mode,
];

const CHAIN_CONFIG = rpcNetworks.filter((item) =>
  SUPPORTED_CHAIN_IDS.includes(item.id)
);
export { rpcNetworks, CHAIN_CONFIG };
