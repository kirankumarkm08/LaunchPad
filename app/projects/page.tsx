"use client";

import React, { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import TabsComponent from "@/components/shared/TabsComponent";
import Socials from "@/components/shared/Socials";
import { socialLinks } from "@/constants";
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
export default function ProjectsHeader() {
  return (
    <>
      <div className="bg-dark-900 dark py-12 sm:py-12 relative isolate">
        <div className="container">
          <div className="justify-between flex flex-col sm:rounded-3xl lg:mx-0 lg:max-w-none lg:flex-row lg:items-center">
            <div className="w-full flex-auto">
              <p className="text-light-text-500 small-bold uppercase mb-10">
                featured
              </p>
              <Badge variant="destructive" className="!px-4 !py-2 mb-2.5">
                Hurry! Sale closes in 2h
              </Badge>
              <div className="w-[80px]">
                <AspectRatio ratio={1} className="bg-muted">
                  <Image
                    src="/assets/images/projects/demo/demo.svg"
                    alt="project_image"
                    className="rounded-md object-cover"
                    width={80}
                    height={80}
                  />
                </AspectRatio>
              </div>
              <div className="flex mt-2 text-dark-text-950">
                <h1 className="h1-bold">StarHeroes (STAR)</h1>
                <Image
                  src="/assets/icons/nav-arrow-right.svg"
                  alt="right-arrow"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-lg leading-8 text-light-text-500">
                Dive into intense multiplayer battles in the most competitive
                space shooter ever! Developed by industry veterans from the
                Cyberpunk 2077, the witcher...
              </p>

              <div className="flex flex-col gap-4 md:flex-row justify-between items-center mt-8">
                <Socials socialLinks={socialLinks} />

                <div className="flex space-x-6 text-dark-text-950">
                  <Badge className="dark !px-4 !py-2">Gaming</Badge>
                  <Badge className="dark !px-4 !py-2">GameFi</Badge>
                </div>
              </div>
            </div>

            <div className="w-full rounded-3xl flex justify-end">
              {/* <AspectRatio ratio={5/4} className="bg-muted"> */}
              <Image
                src="/assets/images/projects/demo/robot.gif"
                alt="project_image"
                className="rounded-xl object-cover"
                width={400}
                height={300}
              />
              {/* </AspectRatio> */}
            </div>
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
