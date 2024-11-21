"use client";
import React, { createContext, useEffect, useState, useCallback, useContext } from "react";

interface StakeContextType {
  stakedData: any;
  getStakedData: (props: any) => void;
}
interface Props {
  children: React.ReactNode;
}
const StakeContext = createContext<StakeContextType | undefined>(undefined);

export function StakeProvider({ children }: Props) {
  const [stakedData, setStakedContext] = useState<string>("");

  const getStakedData = () => {};
  useEffect(() => {
    getStakedData();
  }, []);

  return <StakeContext.Provider value={{ stakedData, getStakedData }}>{children}</StakeContext.Provider>;
}
export function useTheme() {
  const context = useContext(StakeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a StakeProvider");
  }
  return context;
}

export default StakeProvider;
