"use client";
import React, { ReactNode } from "react";
import buyZee from "@/public/animations/ido-steps/buy_zee.json";
import idoTicket from "@/public/animations/ido-steps/ido_ticket.json";
import kyc from "@/public/animations/ido-steps/kyc.json";
import stakeZee from "@/public/animations/ido-steps/stake_zee.json";
import Lottie from "react-lottie";
const IconAnimation = ({ iconIndex }: any) => {
  const animationData: object[] = [buyZee, stakeZee, kyc, idoTicket];
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData[iconIndex],
    renderer: "svg",
    className: "!cursor-default",
  };
  return <Lottie options={defaultOptions} ariaRole="label" />;
};

export default IconAnimation;
