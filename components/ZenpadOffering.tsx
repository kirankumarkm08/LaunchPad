"use client";
import React from "react";
// import MarketMakingIcon from "@/public/animations/features/marketing.json";
// import RocketLaunch from "@/public/animations/features/token_launch.json";
// import MagicWand from "@/public/animations/features/wizard.json";
// import MegaPhone from "@/public/animations/features/mm_support.json";
import { Button } from "./ui/button";
import LottieAnimation from "./LottieAnimation";
import { FeaturesPropsType } from "@/types";
import RocketIcon from "@/public/assets/icons/rocket-launch.svg";
import MagicWand from "@/public/assets/icons/magic-wand.svg";
import MarketMakingIcon from "@/public/assets/icons/megaphone.svg";
import RocketLaunch from "@/public/assets/icons/rocket-launch.svg";
import MegaPhone from "@/public/assets/icons/megaphone.svg";

import Image from "next/image";

const features: FeaturesPropsType[] = [
  {
    name: "DeFi Wizard",
    description:
      "Tailored tools including token metric design, vesting contract deployment, investors dashboard, liquidity reward dashboard",
    icon: MagicWand,
  },
  {
    name: "Market Making Support",
    description:
      "On chain, CEX, Multi-chain token market making support, pre launch and post launch strategies",
    icon: MarketMakingIcon,
  },
  {
    name: "Fundraising & Marketing",
    description:
      "Top-Tier Network Connections, Community Incentive Strategies, Product Education Assistance, Quest Collaborations",
    icon: MegaPhone,
  },
  {
    name: "Post Token Launch",
    description:
      "Exchange Listings, P2E Competition on ZeroSwap DEX, utility upgrade of token and 0 fees trades  & Gas-less swaps",
    icon: RocketLaunch,
  },
];
const ZenpadOffering = () => {
  return (
    <div className="dark">
      <div className="background-light900_dark900 py-16 sm:py-20">
        <div className=" mx-auto ">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="h1-bold text-light950_dark-950">
              {" "}
              ZenPad's Ultimate Offerings
            </h1>
          </div>
          <div className="mx-auto container mt-14  ">
            <dl className="grid  grid-cols-1 gap-x-8 gap-y-10 lg:gap-y-20 lg:max-w-none  lg:grid-cols-2  lg:gap-x-[180px] justify-between content-between">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative sm:pl-20 md:pl-28 min-h-[130px] flex flex-col justify-center "
                >
                  <dt className="text-2xl font-bold leading-7s text-light950_dark-950">
                    <div className="sm:absolute left-0 max-sm:mb-3 flex h-16 w-16 md:w-24 md:h-24 items-center justify-center rounded-[20px] background-light100_dark100">
                      <div className="w-[50px] h-[50px] text-dark-mustard-500 relative">
                        {/* <Image src={feature.icon} alt={"icon"} fill /> */}
                        <feature.icon />
                        {/* <LottieAnimation
                          animationData={feature.icon as object}
                        /> */}
                      </div>
                    </div>
                    <span className="">{feature.name}</span>
                  </dt>
                  <dd className="mt-2 small-regular text-light500_dark-500 tracking-[0.3px]">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center mt-10 lg:mt-16">
            <Button className="!w-[280px] !h-14 ">
              <RocketIcon
                className={"w-5 h-5 rotate-45 text-primary-50 mr-1"}
              />{" "}
              Launch your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZenpadOffering;
