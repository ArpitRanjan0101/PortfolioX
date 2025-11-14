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
    <Section id="experience" className="bg-gradient-to-b from-black via-purple-950/20 to-black">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <span className="section-number">03</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Professional Experience</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A journey through my professional career, highlighting key roles, achievements, and the technologies 
            that have shaped my expertise in software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-pink-500 via-purple-500 to-green-400 transform md:-translate-x-1/2 shadow-[0_0_10px_rgba(0,245,255,0.5)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={fadeInUp}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full border-4 border-black transform md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,245,255,0.8)]" />

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <Card className="hover:border-cyan-500/50 transition-all duration-300 professional-card">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-xl border border-cyan-500/30">
                        <Briefcase className="text-cyan-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-cyan-400 font-semibold mb-3 neon-glow-cyan text-lg">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
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
                          className="text-gray-300 text-sm md:text-base flex items-start gap-3 leading-relaxed"
                        >
                          <span className="text-cyan-400 mt-1.5 text-lg">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/50 shadow-[0_0_5px_rgba(0,245,255,0.3)]"
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

