"use client";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { socialLinks } from "@/constants";
import Socials from "@/components/shared/Socials";
import TabsComponent from "@/components/shared/TabsComponent";
import AboutProject from "@/components/ProjectsList/AboutProject";
const tabNames: string[] = ["About Project", "IDO & Token", "Whitelist"];
const tabContents = [
  <AboutProject />,
  <div className="flex">This is tab2 </div>,
  <div className="flex">This is tab 3</div>,
];
export default function ProjectDetails({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <div className="dark relative isolate bg-dark-900">
        <div className="container">
          <div className="flex flex-col sm:rounded-3xl lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden relative">
              <Image
                src="/assets/images/projects/detail_image.svg"
                alt="project_image"
                className="object-cover"
                height={525}
                width={1280}
              />

              <div className="flex flex-col absolute top-[40%] p-7">
                <Image
                  src="/assets/images/projects/demo/demo.svg"
                  alt="project_image"
                  className="object-cover"
                  height={100}
                  width={100}
                />
                <div className="flex flex-col lg:flex-row gap-20 justify-between bg-dark-900">
                  <div className="flex flex-col w-3/5">
                    <div className="flex items-center justify-start">
                      <div className="h1-bold text-dark-text-700">
                        StarHeros (STAR)
                      </div>
                      <Badge>Closed</Badge>
                    </div>
                    <p className="text-regular text-dark-text-700 mt-2 mb-8">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex eveniet nulla incidunt adipisci suscipit odio ipsa
                      inventore veniam. Dolore itaque molestias veritatis
                      asperiores animi est labore minus eaque pariatur
                      laboriosam!
                    </p>
                    <div className="flex justify-between items-center">
                      <Socials socialLinks={socialLinks} />
                      <div className="flex space-x-6 text-dark-text-950">
                        <Badge className="dark !px-4 !py-2">Gaming</Badge>
                        <Badge className="dark !px-4 !py-2">GameFi</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-2/5 text-dark-text-700 gap-4 pt-16">
                    <p className="text-medium text-dark-text-950">
                      IDO Quick Stats
                    </p>
                    <div className="flex justify-between">
                      <p className="small-medium">Total Raise</p>
                      <p className="small-medium">$200,000</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="small-medium">Starts At</p>
                      <p className="small-medium">Jan 15, 14:00 UTC</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="small-medium">Pool Size</p>
                      <p className="small-medium">78000 STAR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-20 flex gap-5 justify-between">
        <div className="flex-1">
          <TabsComponent
            headTitle=""
            tabNames={tabNames}
            tabContents={tabContents}
          />
        </div>

        <div className="w-1/3 bg-red-500 rounded-3xl bg-light-white-05 dark:bg-dark-white-05 border-2"></div>
      </div>
    </>
  );
}
