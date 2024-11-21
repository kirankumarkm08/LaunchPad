import ChainsWithZenpad from "@/components/ChainsWithZenpad";
import ExploreBlogs from "@/components/ExploreBlogs";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroBanner from "@/components/heroBanner";
import ZenpadOffering from "@/components/ZenpadOffering";
import ZenpadStatus from "@/components/ZenpadStatus";
import React from "react";
import Image from "next/image";
import IdoSteps from "@/components/idosteps";
import BannerAnimation from "@/components/heroBanner/BannerAnimation";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturedProjects />
      <ZenpadStatus />
      <IdoSteps />

      <ZenpadOffering />
      <ChainsWithZenpad />
      <ExploreBlogs />
    </>
  );
}
