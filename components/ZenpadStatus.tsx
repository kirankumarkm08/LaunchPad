"use client";
import React from "react";

import InfoIcon from "@/public/assets/icons/info-circle.svg";
import Rocket from "@/public/assets/icons/rocket.svg";
import RocketLine from "@/public/assets/icons/rocket-line.svg";
import RightEllipse from "@/public/assets/icons/right-ellipse.svg";
import LeftEllipse from "@/public/assets/icons/left-ellipse.svg";
import Image from "next/image";
const stats = [
  { id: 1, name: "Projects launched", value: "35+" },
  {
    id: 2,
    name: "Capital Raised",
    value: "$12.95 million",
    InfoIconEle: true,
  },
  { id: 3, name: "Project backers", value: "800+" },
];
const ZenpadStatus = () => {
  return (
    <div className="background-light900_dark900 bg-zenpad-rings-light dark:bg-zenpad-rings-dark bg-cover bg-no-repeat bg-[50%] relative">
      <div className="lg:py-28 relative xl:!px-0  lg:my-20 my-10 ">
        <div className="flex flex-col justify-center">
          <div>
            <p className="text-graystone300 font-bold text-[1.375rem] leading-8 capitalize text-center mb-7">
              More reasons to{" "}
              <span className="text-primary-500">Choose ZenPad</span> Over the
              Rest{" "}
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-y-16 text-center lg:grid-cols-3 max-w-[900px] m-auto">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col  gap-y-2 lg:gap-y-4"
              >
                <dt className="tracking-[0.7px] text-graystone500 text-bold uppercase ">
                  <div className="flex gap-1 justify-center items-center w-full">
                    {stat.name}
                    {stat.InfoIconEle && (
                      <InfoIcon className="w-4 h-4 text-light-mustard-400" />
                    )}
                  </div>
                </dt>
                <dd className="order-first h1-bold text-light950_dark-950">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ZenpadStatus;
