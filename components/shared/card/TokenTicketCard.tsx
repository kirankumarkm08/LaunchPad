import React, { FC } from "react";
import PriceTag from "@/public/assets/icons/price-tag.svg";
import clsx from "clsx";

interface TicketAllocation extends React.HTMLAttributes<HTMLDivElement> {
  tokenSymbol: string;
  numberOfTickets: number;
  tokensPerTicket: number;
}

const TokenTicketCard: FC<TicketAllocation> = ({
  tokenSymbol,
  numberOfTickets,
  tokensPerTicket,
  className,
}) => {
  return (
    <div className={clsx(`flex-between w-full ${className}`)}>
      <div className="small-medium text-dark-text-400">Allocation size</div>
      <div className="small-medium text-dark-text-500 flex gap-1.5">
        <PriceTag className="w-5 h-5 text-light-black-40 dark:text-dark-black-40 " />
        {numberOfTickets} = {tokensPerTicket} {tokenSymbol}
      </div>
    </div>
  );
};

export default TokenTicketCard;
