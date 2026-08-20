"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplitEntranceLoader() {
  const [stage, setStage] = useState<"holding" | "splitting" | "done">("holding");

  useEffect(() => {
    // 1. Hold and display brand typography for 1.4 seconds
    const splitTimer = setTimeout(() => {
      setStage("splitting");
    }, 1400);

    // 2. Complete split animation after curtains slide fully off-screen
    const finishTimer = setTimeout(() => {
      setStage("done");
    }, 2800);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (stage === "done") return null;

  const isSplitting = stage === "splitting";

  return (
    <div className="fixed inset-0 z-[999999] pointer-events-none overflow-hidden flex">
      
      {/* LEFT SPLIT CURTAIN PANEL */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isSplitting ? "-100%" : 0 }}
        transition={{
          duration: 1.2,
          ease: [0.77, 0, 0.175, 1] // Luxury high-end easeInOutExpo
        }}
        className="w-1/2 h-full bg-[#070B14] relative border-r border-amber-500/40 shadow-[10px_0_30px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* RIGHT SPLIT CURTAIN PANEL */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isSplitting ? "100%" : 0 }}
        transition={{
          duration: 1.2,
          ease: [0.77, 0, 0.175, 1]
        }}
        className="w-1/2 h-full bg-[#070B14] relative border-l border-amber-500/40 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* CENTER FLOATING BRAND TYPOGRAPHY */}
      <AnimatePresence>
        {!isSplitting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.06, filter: "blur(4px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto z-20 text-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="font-logo-brand text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[0.24em] uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                NAS
              </h1>
              
              <div className="font-logo-sub text-[9px] sm:text-xs text-amber-400 font-semibold tracking-[0.38em] uppercase mt-3.5 whitespace-nowrap drop-shadow-md">
                HUKUK & DANIŞMANLIK
              </div>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 80, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
                className="h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-5"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default SplitEntranceLoader;
