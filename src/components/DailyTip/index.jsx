"use client";
import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaClipboard } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const DailyTip = () => {
  const [tips, setTips] = useState([]);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    // Fetch three quotes from your API
    fetch("/api/daily-tip")
      .then((response) => response.json())
      .then((data) => setTips(data))
      .catch((error) => console.error("Error fetching the daily tips:", error));
  }, []);

  // Update the quote at regular intervals (e.g., every 5 seconds)
  useEffect(() => {
    if (tips.length > 0) {
      const interval = setInterval(() => {
        setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
      }, 5000); // 5 seconds interval

      return () => clearInterval(interval);
    }
  }, [tips]);

  // Function to copy the current quote to the clipboard
  const copyToClipboard = () => {
    const currentTip =
      tips[currentTipIndex]?.content + " — " + tips[currentTipIndex]?.author;
    navigator.clipboard.writeText(currentTip).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };

  if (tips.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl bg-white dark:bg-gray-700 p-6 rounded-lg border border-solid">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTipIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="relative p-4 md:p-6 rounded-lg  flex items-center justify-center h-32"
        >
          {/* <FaQuoteLeft className="absolute -top-4 left-4 text-lg text-gray-400 dark:text-gray-600" /> */}
          <p className="text-lg text-center md:text-xl text-gray-600 dark:text-gray-300 font-medium italic mx-6">
            {tips[currentTipIndex]?.content}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="text-center">
        <button
          onClick={copyToClipboard}
          className=" text-lg text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100"
          title="Copy Quote"
        >
          <FaClipboard />
        </button>
        {copySuccess && (
          <p className="text-xs text-green-400 dark:text-green-400">
            Quote copied!
          </p>
        )}
      </div>
      <div className="text-center mt-4">
        <p className="text-sm md:text-base text-gray-400 dark:text-gray-400">
          — {tips[currentTipIndex]?.author}
        </p>
      </div>
    </div>
  );
};

export default DailyTip;
