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
      className={`glass rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300 ${className}`}
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 245, 255, 0.05)'
      }}
    >
      {children}
    </motion.div>
  );
}

