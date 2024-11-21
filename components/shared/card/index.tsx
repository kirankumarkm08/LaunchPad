"use client";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import TokenTicketCard from "./TokenTicketCard";
import AllocationCard from "./TicketsStatus";
import { ProjectCardTypes, SOCIALTYPE } from "@/types";
import { utcDateFormat } from "@/lib/utils";
import SocialIconLink from "../SocialIconLink";
import LinkButton from "@/components/ui/nextLink";
import ArrowRight from "@/public/assets/icons/nav-arrow-right.svg";

interface ProjectTypes {
  project: ProjectCardTypes;
}

const ProjectCard: React.FC<ProjectTypes> = ({ project }) => {
  const {
    projectName,
    socialLinks,
    status,
    chianId,
    token,
    domainTag,
    totalRaise,
    totalTokens,
    ticketPrice,
    tokensPerTicket,
    totalTickets,
    ticketFilled,
    totalUser,
    description,
    startDate,
  } = project;
  return (
    <Card className="sm:px-4 py-9 px-5 min-w-80  md:gap-8 flex-1 space-y-6 lg:space-y-9">
      <CardHeader className="p-0 md:h-40ss">
        <div className=" flex-between">
          <div className="flex flex-col gap-2">
            <Label className=" text-[22px] leading-8 md:text-[23px] font-bold md:leading-10 text-light-text-700 dark:text-dark-text-950 ">
              {projectName}
            </Label>
            <div className="flex gap-4 items-center">
              {socialLinks.map((item) => (
                <SocialIconLink key={item.name} url={item.url} name={item.name as SOCIALTYPE} />
              ))}
            </div>
          </div>
          <div className="relative flex ">
            <Image
              alt="icon"
              className="border-4 bg-light-graystone-100 dark:border-white rounded-full"
              src={"/assets/images/cardLogo.png"}
              width={72}
              height={72}
            />
            <Image
              alt="icon"
              className="absolute -right-[2px] -bottom-3 rounded-full "
              src={"/assets/icons/chains/bnb-logo.svg"}
              width={32}
              height={32}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 space-y-6 lg:space-y-9">
        <div className="space-y-3">
          <div className="flex-between">
            <Badge variant={status != "closed" ? "green" : "default"}>{status}</Badge>
            <Badge variant="blue">{domainTag}</Badge>
          </div>
          <p className="text-light700_dark-700 small-regular line-clamp-2">{description}</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex-between  w-full">
            <div className="small-medium text-dark-text-400">Total Raise</div>
            <div className="text-base font-bold leading-6 text-right text-amber-300">${totalRaise}</div>
          </div>
          <div className="flex-between  w-full">
            <div className="small-medium text-dark-text-400">Starts</div>
            <div className="small-medium text-dark-text-500">{utcDateFormat(startDate)}</div>
          </div>
          <div className="flex-between  w-full">
            <div className="small-medium text-dark-text-400">Ticket Price</div>
            <div className="small-medium text-dark-text-500">{ticketPrice}</div>
          </div>
          <TokenTicketCard tokenSymbol={"$ZEE"} numberOfTickets={1} tokensPerTicket={tokensPerTicket} />
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t dark:border-dark-graystone-200 border-light-graystone-200" />
            </div>
          </div>
        </div>
        <AllocationCard totalTickets={totalTickets} ticketFilled={ticketFilled} totalUser={totalUser} />
      </CardContent>

      <CardFooter className=" justify-center p-0 mt-auto">
        <LinkButton variant="secondary" href={"/project"}>
          Details
          <ArrowRight className={"w-5 h-5"} />
        </LinkButton>
      </CardFooter>
    </Card>
  );
};
export default ProjectCard;
