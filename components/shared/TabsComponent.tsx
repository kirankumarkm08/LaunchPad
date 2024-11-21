import React, { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface ProjectsCardsProps {
  headTitle: string;
  tabNames: string[];
  tabContents: ReactNode[];
}

export function TabsComponent({
  headTitle,
  tabNames,
  tabContents,
}: ProjectsCardsProps) {
  const dynamicStyles = {
    maxWidth: `${tabNames?.length * 200}px`,
  };

  return (
    <>
      <div className="text-light950_dark-950 h1-bold mb-10">{headTitle}</div>
      <Tabs defaultValue={tabNames[0]?.toLowerCase()} className="w-full">
        <TabsList className="grid w-full grid-cols-3" style={dynamicStyles}>
          {tabNames?.map((tabName: string) => {
            return (
              <TabsTrigger
                key={tabName}
                value={tabName.toLocaleLowerCase()}
                className="capitalize"
              >
                {tabName}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"> */}
        {tabContents.map((tabContent: ReactNode, idx) => {
          return (
            <TabsContent
              key={tabNames[idx] + idx}
              value={tabNames[idx].toLowerCase()}
            >
              {tabContent}
            </TabsContent>
          );
        })}
        {/* </div> */}
      </Tabs>
    </>
  );
}

export default TabsComponent;
