"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, hoverLift } from "@/lib/animations";
import { ExternalLink, Github } from "lucide-react";
import Card from "./ui/Card";
import Section from "./ui/Section";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    image: "/project1.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and drag-and-drop functionality.",
    image: "/project2.jpg",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts and interactive charts.",
    image: "/project3.jpg",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Social Media Analytics",
    description: "Analytics platform for tracking social media performance with detailed insights and reports.",
    image: "/project4.jpg",
    technologies: ["Next.js", "Python", "D3.js", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Learning Management System",
    description: "Comprehensive LMS with course creation, student tracking, and assessment tools.",
    image: "/project5.jpg",
    technologies: ["React", "Express", "MySQL", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
    image: "/project6.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-white">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-4 md:mb-6 flex-wrap gap-2 md:gap-0">
            <span className="section-number">02</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Featured Projects</span>
            </h2>
          </div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A curated selection of my recent work, showcasing innovative solutions and cutting-edge technologies. 
            Each project represents a unique challenge solved with creativity and technical excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              custom={index}
            >
              <Card className="h-full flex flex-col group cursor-pointer professional-card">
                {/* Project Image */}
                <div className="relative w-full h-40 sm:h-48 md:h-52 mb-4 md:mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100 border border-purple-200">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span className="text-sm">Project Image</span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} className="text-white" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} className="text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full border border-purple-300 shadow-[0_0_5px_rgba(147,51,234,0.2)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

