"use client";
import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useContext,
} from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}
interface Props {
  children: React.ReactNode;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: Props) {
  const [mode, setMode] = useState<string>("dark");
  const handleChangeTheme = useCallback(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  useEffect(() => {
    handleChangeTheme();
  }, [mode, handleChangeTheme]);

  if (!mode) {
    return "<div>Loading...<div>";
  }
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default ThemeProvider;
