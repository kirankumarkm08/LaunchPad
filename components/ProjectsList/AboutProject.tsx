import React from "react";
import { aboutProject } from "@/constants/dummy-data";

const AboutProject = () => {
  return (
    <div className="flex flex-wrap justify-between items-center">
      {aboutProject.map((item) => {
        return (
          <div
            key={item[0]}
            className="flex justify-between items-center px-5 py-4 bg-light-black-05 rounded-xl"
          >
            <p>{item[0]}</p>
            <p>{item[1]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AboutProject;
