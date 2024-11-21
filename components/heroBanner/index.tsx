import React from "react";
import BannerAnimation from "./BannerAnimation";
import Hero from "./Hero";
import bannerAnimationData from "@/public/animations/hero-banner/hero_lottie.json";
import bgStars from "@/public/animations/hero-banner/bg-stars-loop.json";

const HeroBanner = () => {
  return (
    <div className=" background-light900_dark900 overflow-hidden">
      <div className="relative px-4 xl:px-20 h-[736px] lg:h-[736px]">
        <Hero />
        <div className="absolute w-full max-w-[1280px] h-full  -top-10 z-10 right-0  bg-hero-banner-start-lights dark:bg-hero-banner-start-darks bg-covers bg-no-repeats">
          <BannerAnimation data={bgStars} loop={true} />
        </div>
        <div className="absolute w-full h-full xl:w-[1024px] xl:h-[847px] top-auto bottom-[-100px] xl:top-[-12%] right-[-8%] z-10 flex flex-col ">
          <BannerAnimation data={bannerAnimationData} />
        </div>
        <div className="mt-auto bottom-0 absolute max-xl:mb-[100px]s w-full h-[160px] fade-gradient z-10"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
