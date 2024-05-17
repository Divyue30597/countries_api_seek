"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface IThemeContext {
  colorScheme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<string>("");
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setColorScheme(userTheme ? "dark" : "light");
  }, []);

  useEffect(() => {
    const userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (userTheme) {
      setIsDarkTheme(true);
      document
        .querySelector(":root")
        ?.setAttribute("color-scheme", colorScheme);
    } else {
      setIsDarkTheme(false);
      document
        .querySelector(":root")
        ?.setAttribute("color-scheme", colorScheme);
    }
  }, [isDarkTheme, colorScheme]);

  function toggleTheme() {
    const theme = document.querySelector(":root")?.getAttribute("color-scheme");
    if (theme === "dark") {
      setColorScheme("light");
    } else if (theme === "light") {
      setColorScheme("dark");
    }
  }

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
