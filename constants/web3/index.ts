import { ChainIdPropsTypes } from "@/types";

export const CHAIN_ID: ChainIdPropsTypes = {
  MAINNET: 1,
  GÖRLI: 5,
  BSC: 56,
  POLYGON: 137,
  AVALANCHE: 43114,
  FANTOM: 250,
  OPTIMISM: 10,
  ARBITRUM: 42161,
  ZKEVM: 1101,
  ZKSYNCERA: 324,
  BASE: 8453,
  MANTA: 169,
  MANTLE: 5000,
  MODE: 34443,
};

export const SUPPORTED_CHAIN_IDS = [
  CHAIN_ID.MAINNET,
  CHAIN_ID.BSC,
  CHAIN_ID.POLYGON,
  CHAIN_ID.AVALANCHE,
  CHAIN_ID.FANTOM,
  CHAIN_ID.OPTIMISM,
  CHAIN_ID.ARBITRUM,
  CHAIN_ID.ZKEVM,
  CHAIN_ID.BASE,
  CHAIN_ID.ZKSYNCERA,
  CHAIN_ID.MANTA,
  CHAIN_ID.MODE,
];
export const NETWORK_NAMES = {
  [CHAIN_ID.MAINNET]: "Ethereum",
  [CHAIN_ID.BSC]: "Binance Smart Chain",
  [CHAIN_ID.POLYGON]: "Polygon",
  [CHAIN_ID.AVALANCHE]: "Avalanche",
  [CHAIN_ID.FANTOM]: "Fantom",
  [CHAIN_ID.OPTIMISM]: "Optimism",
  [CHAIN_ID.ARBITRUM]: "Arbitrum",
  [CHAIN_ID.ZKEVM]: "Polygon zkEVM",
  [CHAIN_ID.ZKSYNCERA]: "ZKSync Era",
  [CHAIN_ID.BASE]: "Base",
  [CHAIN_ID.MANTA]: "Manta Pacific",
  [CHAIN_ID.MANTLE]: "Mantle",
  [CHAIN_ID.MODE]: "Mode",
};
