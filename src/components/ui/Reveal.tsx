"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = "100%",
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: 30 };
      case "down":
        return { x: 0, y: -30 };
      case "left":
        return { x: 30, y: 0 };
      case "right":
        return { x: -30, y: 0 };
      case "none":
        return { x: 0, y: 0 };
      default:
        return { x: 0, y: 30 };
    }
  };

  const offset = getOffset();

  return (
    <div
      ref={ref}
      style={{ width }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: offset.x, y: offset.y },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: shouldReduceMotion ? 0.2 : duration,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
