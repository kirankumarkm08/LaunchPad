"use client";
import React, { useRef, useState } from "react";
import StepCard from "./StepCard";
import Stickyroll from "@stickyroll/react/stickyroll";
import { IDO_STEPS } from "@/constants";

const IdoSteps = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Stickyroll
      pages={IDO_STEPS.length}
      onPage={(page, index) => {
        const pageIndex = Math.min(index, IDO_STEPS.length - 1);
        setActiveSlide(pageIndex);
      }}
    >
      <div className="bg-[#F7F7F7] dark:bg-dark-graystone-100 py-20 lg:py-32 relative backdrop-blur-sm min-h-screen">
        <div className="mt-auto absolute top-0  max-xl:mb-[100px] w-full h-[120px] bg-light-bottom-to-top-gradient  dark:bg-dark-bottom-to-top-gradient left-0"></div>

        <div className="flex flex-col justify-center container">
          <div className="flex-center mb-10 lg:mb-16">
            <h2 className="h1-bold text-graystone950">
              Participate in{" "}
              <span className="text-primary-500">4 Quick Steps</span>
            </h2>
          </div>
          <StepCard activeSlide={activeSlide} />
        </div>

        <div className="mt-auto bottom-0 absolute  max-xl:mb-[100px] w-full h-[120px] bg-light-top-to-bottom-gradient  dark:bg-dark-top-to-bottom-gradient  left-0"></div>
      </div>
    </Stickyroll>
  );
};

export default IdoSteps;
