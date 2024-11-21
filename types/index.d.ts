import { ReactSVGElement } from "react";

export interface NavLinks {
  [x: string]: string | StaticImport;
  route: string;
  label: string;
}

export interface ParamsProps {
  params: { id: string };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface TokenProps {
  name: string;
  chainId: number | string;
  symbol: string;
  decimals: number;
  logoUri?: string;
}
export interface SocialLinkProps {
  url: string;
  name: string;
}
export interface ProjectCardTypes {
  projectName: string;
  status: "upcoming" | "closed";
  chianId: number;
  token: TokenProps;
  totalRaise: number;
  tokenPrice: number;
  totalTokens: number;
  ticketPrice: number;
  tokensPerTicket: number;
  totalTickets: number;
  ticketFilled: number;
  totalUser: number;
  domainTag: string;
  description: string;
  startDate: number;
  socialLinks: SocialLinkProps[];
}

export type SOCIALTYPE =
  | "twitter"
  | "telegram"
  | "website"
  | "github"
  | "discord"
  | "youtube";

export interface IDOSteps {
  name: string;
  description: string;
  href: string;
  status: string;
  linkText: string;
  imageUrl: string;
  darkImageUrl: string;
}

export interface FeaturesPropsType {
  name: string;
  description: string;
  icon: object | ReactSVGElement | string | any;
}

export interface ChainIdPropsTypes {
  MAINNET: number;
  GÖRLI: number;
  BSC: number;
  POLYGON: number;
  AVALANCHE: number;
  FANTOM: number;
  OPTIMISM: number;
  ARBITRUM: number;
  ZKEVM: number;
  ZKSYNCERA: number;
  BASE: number;
  MANTA: number;
  MANTLE: number;
  MODE: number;
}
