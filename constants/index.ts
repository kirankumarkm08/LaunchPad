import { SocialLinkProps } from "@/types";
import { IDOSteps, NavLinks } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
];

export const navLinks: NavLinks[] = [
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/participate",
    label: "Participate",
  },
  {
    route: "/blog",
    label: "Blog",
  },
  {
    route: "/account",
    label: "Account",
  },
];

export const socialLinks: SocialLinkProps[] = [
  {
    name: "twitter",
    url: "https://webpack.js.org/concepts",
  },
  {
    name: "telegram",
    url: "https://webpack.js.org/concepts",
  },
  {
    name: "website",
    url: "https://webpack.js.org/concepts",
  },
  {
    name: "discord",
    url: "https://webpack.js.org/concepts",
  },
  {
    name: "youtube",
    url: "https://webpack.js.org/concepts",
  },
];
export const IDO_STEPS: IDOSteps[] = [
  {
    name: "Buy $ZEE Tokens",
    description: "To take part in IDOs on ZenPad, you need $ZEE tokens!",
    href: "#",
    status: "upcoming",
    linkText: "buy $ZEE",
    imageUrl: "/assets/icons/zee-token.svg",
    darkImageUrl: "/assets/icons/zee-token-dark.svg",
  },
  {
    name: "State them",
    description: "A minimum of $100 worth of ZEE tokens for 2 hours",
    href: "/stake",
    status: "upcoming",
    linkText: "stake",
    imageUrl: "/assets/icons/stake-zee.svg",
    darkImageUrl: "/assets/icons/stake-zee-dark.svg",
  },
  {
    name: "Complete KYC",
    description:
      "Next, verify your identity with our easy one-time only KYC process",
    href: "#",
    status: "complete",
    linkText: "Pass KYC",
    imageUrl: "/assets/icons/kyc-step-card.svg",
    darkImageUrl: "/assets/icons/kyc-step-card-dark.svg",
  },
  {
    name: "Participate in IDO",
    description:
      "Exchange $ZEE to get tickets on a first come first serve basis",
    href: "#",
    status: "upcoming",
    linkText: "Explore Projects",
    imageUrl: "/assets/icons/participate-ido.svg",
    darkImageUrl: "/assets/icons/participate-ido-dark.svg",
  },
];
