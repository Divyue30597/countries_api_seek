"use client";

import { useContext } from "react";
import ThemeContext from "@/app/context/ThemeContext";

const useChangeTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useChangeTheme must be used within ThemeProvider");
  }

  return context;
};

export default useChangeTheme;
