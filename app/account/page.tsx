"use client";

import React, { ReactNode } from "react";
import AccountAddress from "@/components/Account/AccountAddress";
import WalletDetails from "@/components/Account/WalletDetails";
import KycStatus from "@/components/Account/KycStatus";
import ProjectsCards, {
  TabsComponent,
} from "@/components/shared/TabsComponent";
import BuyStakeZee from "@/components/Account/BuyStakeZee";
import ProjectCard from "@/components/shared/card";
import { ProjectCardTypes } from "@/types";

const ProjectCardData: ProjectCardTypes = {
  projectName: "OrangeDX",
  status: "closed",
  chianId: 56,
  token: {
    symbol: "OrangeDX",
    chainId: 56,
    decimals: 18,
    name: "OrangeDX",
  },
  totalRaise: 900000,
  totalTokens: 700000,
  tokenPrice: 0.05,
  ticketPrice: 100,
  tokensPerTicket: 2000,
  totalTickets: 800,
  ticketFilled: 670,
  socialLinks: [
    { name: "twitter", url: "/twitter" },
    { name: "website", url: "/website" },
    { name: "telegram", url: "/telegram" },
  ],
  totalUser: 200,
  startDate: 1711950917,
  domainTag: "Finance",
  description: `ivendPay offers a seamless crypto payment platform, integrating with
  POS terminals, e-commerce, apps and vending machines, bridging the
  gap between traditional and digital currency transactions.`,
};
const tabNames: string[] = ["upcoming", "completed"];
const tabContents: ReactNode[] = [
  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
    <ProjectCard project={ProjectCardData} />
    <ProjectCard project={ProjectCardData} />
    <ProjectCard project={ProjectCardData} />
    <ProjectCard project={ProjectCardData} />
    <ProjectCard project={ProjectCardData} />
    <ProjectCard project={ProjectCardData} />
  </div>,
  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
    <ProjectCard project={ProjectCardData} />
    <ProjectCard project={ProjectCardData} />
    <ProjectCard project={ProjectCardData} />
    <ProjectCard project={ProjectCardData} />
  </div>,
];

function AccountPage() {
  return (
    <>
      <div className="bg-dark-900 dark py-12 sm:py-12 isolate relative">
        <div className="container">
          <div className="flex flex-col sm:rounded-3xl lg:mx-0 lg:max-w-none">
            {/* <div className="w-full flex-auto"> */}
            <AccountAddress />

            <div className="flex flex-wrap gap-4 md:gap-8 flex-col md:flex-row">
              {/* Wallet Details */}
              <div className="flex flex-col text-white mt-4 rounded-4xl pt-8 bg-dark-100 justify-between overflow-hidden flex-1">
                <WalletDetails />
              </div>

              <div className="flex flex-col gap-4 text-white mt-4 rounded-4xl justify-between flex-1">
                {/* KYC Status */}
                <KycStatus />

                {/* Buy/Stake ZEE */}
                <BuyStakeZee />
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="container mt-20">
        <TabsComponent
          headTitle="All Projects"
          tabNames={tabNames}
          tabContents={tabContents}
        />
      </div>
    </>
  );
}

export default AccountPage;
