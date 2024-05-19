"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextProps {
  colorScheme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<string>("dark");

  useEffect(() => {
    setColorScheme(
      document.querySelector(":root")?.getAttribute("color-scheme")!
    );
  }, []);

  function toggleTheme() {
    if (colorScheme === "dark") {
      setColorScheme("light");
      document.querySelector(":root")?.setAttribute("color-scheme", "light");
      localStorage.setItem("theme", "light");
    } else {
      setColorScheme("dark");
      document.querySelector(":root")?.setAttribute("color-scheme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
