"use client";
import React from "react";
import Lottie from "react-lottie";
interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
}
const LottieAnimation = ({
  animationData,
  loop,
  autoplay,
}: LottieAnimationProps) => {
  const defaultOptions = {
    loop: loop || true,
    autoplay: autoplay || true,
    animationData: animationData,
    renderer: "svg",
    className: "!cursor-default",
  };
  return <Lottie options={defaultOptions} ariaRole="label" />;
};

export default LottieAnimation;
