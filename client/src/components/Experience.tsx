"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Briefcase, Calendar } from "lucide-react";
import Section from "./ui/Section";
import Card from "./ui/Card";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Tech Company Inc.",
    role: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: [
      "Led development of multiple web applications using React and Node.js",
      "Collaborated with cross-functional teams to deliver high-quality products",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40% through optimization",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    duration: "2020 - 2022",
    description: [
      "Developed and maintained multiple client-facing applications",
      "Implemented RESTful APIs and integrated third-party services",
      "Participated in agile development processes",
      "Contributed to architectural decisions and technical planning",
    ],
    technologies: ["Vue.js", "Express", "MongoDB", "Redis"],
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    duration: "2018 - 2020",
    description: [
      "Built responsive web applications for various clients",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Optimized websites for performance and SEO",
      "Maintained and updated legacy codebases",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "WordPress"],
  },
];

export default function Experience() {
  return (
    <Section id="experience" className="bg-gradient-to-b from-white via-purple-50/50 to-white">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-4 md:mb-6 flex-wrap gap-2 md:gap-0">
            <span className="section-number">03</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Professional Experience</span>
            </h2>
          </div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A journey through my professional career, highlighting key roles, achievements, and the technologies 
            that have shaped my expertise in software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on very small screens */}
          <div className="hidden sm:block absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-purple-500 via-purple-600 to-purple-400 transform md:-translate-x-1/2 shadow-[0_0_10px_rgba(147,51,234,0.3)]" />

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={fadeInUp}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot - Hidden on very small screens */}
                <div className="hidden sm:block absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full border-4 border-white transform md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(147,51,234,0.5)]" />

                {/* Content Card */}
                <div
                  className={`w-full sm:ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <Card className="hover:border-purple-500/50 transition-all duration-300 professional-card">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl border border-purple-300">
                        <Briefcase className="text-purple-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-purple-600 font-semibold mb-3 neon-glow-cyan text-lg">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 text-sm md:text-base flex items-start gap-3 leading-relaxed"
                        >
                          <span className="text-purple-600 mt-1.5 text-lg">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-200/50">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full border border-purple-300 shadow-[0_0_5px_rgba(147,51,234,0.2)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

