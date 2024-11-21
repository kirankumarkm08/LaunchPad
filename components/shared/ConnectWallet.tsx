"use client";
import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { Button } from "../ui/button";
import Wallet from "@/public/assets/icons/wallet.svg";

const ConnectWallet = () => {
  const { isConnecting } = useAccount();
  const { open } = useWeb3Modal();
  const label = "Connect Wallet";
  const onClick = () => open();
  return (
    <div>
      <Button onClick={onClick} className=" max-sm:small-bold">
        <Wallet className="mr-2 w-5 h-5 text-dark-mustard-50" />
        {isConnecting ? "Connecting..." : label}
      </Button>
    </div>
  );
};

export default ConnectWallet;
