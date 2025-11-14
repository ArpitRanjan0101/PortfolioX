"use client";

import { motion } from "framer-motion";
import { hoverScale } from "@/lib/animations";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button"
}: ButtonProps) {
  const baseStyles = "px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 inline-flex items-center justify-center gap-2 w-full sm:w-auto";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white font-bold hover:from-purple-700 hover:via-purple-600 hover:to-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300",
    secondary: "bg-white/80 text-purple-600 backdrop-blur-sm border-2 border-purple-500/50 hover:border-purple-600/70 hover:bg-white shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]",
    outline: "border-2 border-purple-500 text-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 hover:text-white hover:border-transparent shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
  };

  const buttonContent = (
    <motion.button
      {...hoverScale}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        {...hoverScale}
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return buttonContent;
}

