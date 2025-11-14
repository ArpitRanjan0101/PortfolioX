"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/animations";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import Button from "./ui/Button";

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Animated Background Gradient - White & Purple Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-50/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(192,132,252,0.06),transparent_50%)]" />

      <div className="professional-container py-12 sm:py-16 md:py-20 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={fadeInUp} className="text-center lg:text-left">
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-6 justify-center lg:justify-start"
            >
              <span className="section-number">01</span>
              <motion.p
                variants={fadeInUp}
                className="text-purple-600 font-semibold text-lg md:text-xl neon-glow-cyan"
              >
                Hello, I'm
              </motion.p>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-[1.1]"
            >
              <span className="gradient-text">Full Stack</span>
              <br />
              <span className="text-gray-900">Developer</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
            >
              I craft exceptional digital experiences through innovative web applications. 
              Combining cutting-edge technology with elegant design to deliver solutions that 
              make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 md:mb-8 w-full sm:w-auto"
            >
              <Button href="#projects" variant="primary">
                View My Work
              </Button>
              <Button
                href="/resume.pdf"
                variant="outline"
                className="group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-[0_0_10px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <social.icon size={20} className="text-purple-600 hover:text-purple-700 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={slideInRight}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Decorative circles - Purple glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/40 via-purple-300/30 to-purple-200/40 rounded-full blur-3xl animate-pulse" />
              
              {/* Image Container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-300/50 shadow-[0_0_40px_rgba(147,51,234,0.3),0_0_80px_rgba(168,85,247,0.2)] mx-auto lg:mx-0">
                <Image
                  src="/hero-image.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%236366f1' width='400' height='400'/%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='120' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EYour%3C/text%3E%3Ctext fill='%23ffffff' font-family='sans-serif' font-size='120' x='50%25' y='60%25' text-anchor='middle' dominant-baseline='middle'%3EPhoto%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Floating elements - Hidden on mobile for better performance */}
              <motion.div
                className="hidden md:block absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg opacity-80 shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="hidden md:block absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full opacity-80 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="#projects"
            className="flex flex-col items-center text-gray-500 hover:text-purple-600 transition-colors"
          >
            <span className="text-sm mb-2 text-purple-600">Scroll Down</span>
            <ChevronDown size={24} className="text-purple-600" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

