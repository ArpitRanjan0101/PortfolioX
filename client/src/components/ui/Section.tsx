"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  showDivider?: boolean;
}

export default function Section({ id, children, className = "", showDivider = true }: SectionProps) {
  return (
    <section id={id} className={`section-padding relative ${className}`}>
      {/* Section Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,245,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="professional-container relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {children}
        </motion.div>
      </div>
      
      {showDivider && (
        <div className="section-divider" />
      )}
    </section>
  );
}

