"use client";
import { motion } from "framer-motion";
import useTheme from "../hooks/useTheme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative flex items-center justify-center w-14 h-6 bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ x: 0 }}
        animate={{ x: isDarkMode ? 15 : -15 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <motion.div
          className={`absolute flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 ${
            isDarkMode ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
          initial={{ rotate: 0 }}
          animate={{ rotate: isDarkMode ? 720 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <SunIcon className="w-6 h-4 text-yellow-500" />
        </motion.div>

        <motion.div
          className={`absolute flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 ${
            isDarkMode ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
          initial={{ rotate: 0 }}
          animate={{ rotate: isDarkMode ? 0 : -720 }}
          transition={{ duration: 0.2 }}
        >
          <MoonIcon className="w-6 h-4 text-white" />
        </motion.div>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
