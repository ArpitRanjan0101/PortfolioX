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
  const baseStyles = "px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base transition-all duration-300 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 text-black font-bold hover:from-cyan-300 hover:via-pink-400 hover:to-purple-400 shadow-[0_0_20px_rgba(0,245,255,0.5)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all duration-300",
    secondary: "bg-black/40 text-white backdrop-blur-sm border-2 border-cyan-400/50 hover:border-pink-500/70 hover:bg-black/60 shadow-[0_0_15px_rgba(0,245,255,0.3)] hover:shadow-[0_0_25px_rgba(255,0,255,0.4)]",
    outline: "border-2 border-cyan-400 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-pink-500 hover:text-black hover:border-transparent shadow-[0_0_15px_rgba(0,245,255,0.4)] hover:shadow-[0_0_25px_rgba(255,0,255,0.5)]"
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

