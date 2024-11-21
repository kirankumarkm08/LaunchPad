import React, { FC } from "react";
import { Progress } from "@/components/ui/progress";
import clsx from "clsx";
import CommunitySvg from "@/public/assets/icons/community.svg";

interface AllocationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  totalTickets: number;
  ticketFilled: number;
  totalUser: number;
}
const AllocationCard: FC<AllocationCardProps> = ({
  totalTickets,
  ticketFilled,
  totalUser,
  className,
}) => {
  const allocationFilled = (ticketFilled / totalTickets) * 100;
  return (
    <div className="flex flex-col gap-2.5">
      <div className={clsx(`flex-between w-full ${className}`)}>
        <div className="small-medium text-dark-text-400">
          {ticketFilled}/{totalTickets} Tickets Filled
        </div>
        <div className="small-medium text-dark-text-500 flex gap-1.5">
          {allocationFilled}
        </div>
      </div>
      <Progress value={allocationFilled} />
      <div className={clsx(`flex-between w-full ${className}`)}>
        <div className="small-medium text-dark-text-500 flex gap-1.5  items-center">
          <CommunitySvg className="text-light-graystone-400 dark:text-dark-black-40 " />
          {totalUser}
        </div>
        <div className="small-medium text-dark-text-400">${totalTickets}</div>
      </div>
    </div>
  );
};

export default AllocationCard;
