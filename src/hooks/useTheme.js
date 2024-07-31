"use client";
import { useEffect } from "react";
import useStore from "../store/useStore";

const useTheme = () => {
  const { isDarkMode, toggleDarkMode } = useStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};

export default useTheme;
