"use client";

import { motion } from "framer-motion";
import { hoverLift } from "@/lib/animations";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = "", onClick }: CardProps) {
  return (
    <motion.div
      {...hoverLift}
      onClick={onClick}
      className={`glass rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-purple-200/50 hover:border-purple-400/70 transition-all duration-300 ${className}`}
      style={{
        boxShadow: '0 8px 32px rgba(147, 51, 234, 0.1), 0 0 20px rgba(168, 85, 247, 0.05)'
      }}
    >
      {children}
    </motion.div>
  );
}

