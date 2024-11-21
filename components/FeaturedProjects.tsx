import React from "react";
import LinkButton from "./ui/nextLink";
import ProjectCard from "./shared/card";
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
    { name: "twitter", url: "/twiiter" },
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
const ProjectCardDatas: ProjectCardTypes = {
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
  tokenPrice: 0.05,
  totalTokens: 700000,
  ticketPrice: 200,
  tokensPerTicket: 2000,
  totalTickets: 800,
  ticketFilled: 670,
  totalUser: 200,
  startDate: 1711950917,
  socialLinks: [
    { name: "twitter", url: "/twiiter" },
    { name: "website", url: "/website" },
    { name: "telegram", url: "/telegram" },
  ],
  domainTag: "Finance",
  description: `ivendPay offers a seamless crypto payment platform, integrating with
  POS terminals`,
};

const FeaturedProjects = () => {
  return (
    <div className="dark" id="projects">
      <div className="background-light900_dark900">
        <div className="container py-11 lg:py-16">
          <div className="flex-between my-6 lg:my-9">
            <h2 className="h2-bold text-dark-mustard-950">
              Featured Project Wall
            </h2>
            <LinkButton href={"/prodects"}>See All </LinkButton>
          </div>
          <div className="flex gap-5 flex-wrap">
            <ProjectCard project={ProjectCardData} />
            <ProjectCard project={ProjectCardDatas} />
            <ProjectCard project={ProjectCardData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
