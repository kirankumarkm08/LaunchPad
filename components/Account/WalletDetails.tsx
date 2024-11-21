import React from "react";
import { Badge } from "../ui/badge";
import BnbLogo from "@/public/assets/icons/chains/bnb-logo.svg";

function WalletDetails() {
  return (
    <>
      <div className="flex justify-between mb-3 px-5 ">
        <p className="h3-bold text-light700_dark-700">Wallet Details</p>
        <Badge variant="green" className="rounded-lg">
          Connected
        </Badge>
      </div>
      <div className="flex flex-col px-5 py-6 gap-5 bg-dark-transparent-white-05">
        <div className="flex justify-between">
          <p className="text-dark-text-500 small-regular">Network Connected</p>
          <p className="text-dark-text-950 small-medium flex items-center gap-2">
            <BnbLogo className="w-6 h-6" />
            Binance Smart Chain
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-dark-text-500 small-regular">$ZEE Balance</p>
          <p className=" text-dark-text-950 small-medium">281,903</p>
        </div>
        <div className="flex justify-between">
          <p className="text-dark-text-500 small-regular">Staked $ZEE</p>
          <p className=" text-dark-text-950 small-medium">200,723</p>
        </div>
        <div className="flex justify-between md:hidden">
          <p className="text-dark-text-500 small-regular">KYC Status</p>
          <Badge variant="green" className="rounded-lg self-center">
            Verified
          </Badge>
        </div>
      </div>
    </>
  );
}

export default WalletDetails;
