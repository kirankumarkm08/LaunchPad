import clsx from "clsx";
import React from "react";
import LinkButton from "../ui/nextLink";
import { IDO_STEPS } from "@/constants";
import IconAnimation from "./IconAnimation";

const StepCard = ({ activeSlide }: any) => {
  return (
    <nav aria-label="Progress" className="flex lg:gap-5 justify-center">
      <ol role="list" className="overflow-hidden  flex-1">
        {IDO_STEPS.map((step, stepIdx) => {
          const activeCard = stepIdx === activeSlide;
          return (
            <li
              key={step.name}
              className={clsx(
                stepIdx !== IDO_STEPS.length - 1 ? "pb-4" : "",
                "relative transition-all duration-300"
              )}
            >
              <>
                <div
                  className={`group relative flex transition-all duration-500 opacity-1 ${
                    activeCard ? "items-start" : "items-start"
                  }`}
                >
                  <span
                    className={`flex relative justify-center items-center h-12 basis-12  lg:h-20 lg:basis-24 flex-shrink-0`}
                  >
                    <span
                      className={`absolute text-light700_dark-700 z-10 flex h-[20px] w-[20px] top-4 items-center justify-center rounded bg-lightWhite20_darkWhite20 transition-all duration-850 text-sm`}
                    >
                      {stepIdx + 1}
                    </span>

                    <span
                      className={`${
                        activeCard ? "!scale-100 opacity-100" : ""
                      } opacity-0 h2-bold rounded-[10px] lg:h1-bold absolute  h-[40px] w-[40px]  lg:h-[70px] lg:w-[70px] text-light700_dark-700 z-10 flex  p-6 items-center justify-center lg:rounded-[20px] bg-lightStone200_darkStone200 transition-all duration-850 scale-0 `}
                    >
                      {stepIdx + 1}
                    </span>

                    <div
                      className={`absolute top-[5.5rem] transition-all duration-850 scale-y-0  mt-0.5 h-[80%] w-0.5 dark:bg-light-white-10 bg-dark-white-10 ${
                        activeCard &&
                        stepIdx !== IDO_STEPS.length - 1 &&
                        "!opacity-100 !scale-y-100"
                      } opacity-0 `}
                      aria-hidden="true"
                    />
                  </span>
                  <div
                    className={`${
                      activeCard ? "" : "mt-4"
                    } ml-4 flex min-w-0 flex-col items-start  transition-all duration-850`}
                  >
                    <span
                      className={` ${
                        activeCard
                          ? "h3-bold lg:h2-bold text-light950_dark-950"
                          : "  text-regular text-light500_dark-500"
                      } transition-all duration-850 `}
                    >
                      {step.name}
                    </span>
                    <div
                      className={`${
                        activeCard ? "opacity-100 !max-h-96" : "opacity-0 "
                      }  flex flex-col max-h-0 transition-all duration-850 items-start`}
                    >
                      <span className="small-regular  lg:text-regular text-light500_dark-500 mt-3 transition-all duration-850">
                        {step.description}
                      </span>
                      <LinkButton
                        className="w-auto mt-4 capitalize inline-flex"
                        href={"/"}
                      >
                        {step.linkText}
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </>
            </li>
          );
        })}
      </ol>
      <div className="flex-1 w-60 h-60 lg:w-[420px] lg:h-[420px] justify-center items-center hidden md:flex relative">
        <div className="w-60 h-60 lg:w-[420px] lg:h-[420px] absolute bg-steps-grid-line-light dark:bg-steps-grid-line-dark bg-cover bg-no-repeat">
          <IconAnimation iconIndex={activeSlide} />
        </div>
      </div>
    </nav>
  );
};

export default StepCard;
