"use client";
import React from "react";
import Lottie from "react-lottie";
// import bannerAnimationData from "@/public/animations/hero-banner/hero_lottie.json";
const BannerAnimation = ({ data, loop = false }: any) => {
  const defaultOptions = {
    loop: loop,
    autoplay: true,
    animationData: data,
    renderer: "svg",
    className: "!cursor-default",
  };
  return <Lottie options={defaultOptions} ariaRole="label" />;
};

export default BannerAnimation;
