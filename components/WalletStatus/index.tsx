"use client";
import React from "react";
import ConnectWallet from "../shared/ConnectWallet";
import { useAccount } from "wagmi";
import ZeeStakeStatus from "./ZeeStakeStatus";
import { Button } from "../ui/button";
import { shortenAddress } from "@/lib/utils";
import Wallet from "@/public/assets/icons/wallet.svg";
import ArrowDown from "@/public/assets/icons/nav-arrow-down.svg";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const WalletStatus = () => {
  const { address, isConnected, isConnecting, isReconnecting, isDisconnected } = useAccount();
  const { open } = useWeb3Modal();
  const onClick = () => open({ view: "Account" });
  console.log("address: ", address, "-isConnected-", isConnected, "isDisconnected", isDisconnected);

  return (
    <div>
      {/* {!isDisconnected && <div>Disconnected</div>} */}

      {address && isConnected ? (
        <button
          className="flex items-center  btn-primary py-2 rounded-xl"
          onClick={() => {
            console.log("clicked -", address, isConnected);

            onClick();
          }}
        >
          <div className="pl-4 pr-2 max-sm:hidden">
            <ZeeStakeStatus />
          </div>
          <div className="flex gap-1.5 items-center px-2 ">
            <span className="w-8 h-8 rounded-full border border-dark-900  items-center justify-center flex">
              <Wallet className="w-5 h-5 text-dark-mustard-50" />
            </span>
            <div className="flex items-center gap-1">
              <span className="small-bold sm:text-bold">{shortenAddress(address)}</span>
              <ArrowDown className="w-5 h-5  text-dark-900" />
            </div>
          </div>
        </button>
      ) : (
        <ConnectWallet />
      )}
    </div>
  );
};

export default WalletStatus;
