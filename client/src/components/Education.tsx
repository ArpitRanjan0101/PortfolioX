"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { GraduationCap, Award, Calendar } from "lucide-react";
import Section from "./ui/Section";
import Card from "./ui/Card";

interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
  achievements?: string[];
  coursework?: string[];
}

const education: Education[] = [
  {
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    year: "2014 - 2018",
    achievements: [
      "Graduated with Magna Cum Laude",
      "Dean's List for 4 consecutive semesters",
      "President of Computer Science Club",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems",
      "Web Development",
      "Machine Learning",
    ],
  },
  {
    institution: "Tech Bootcamp",
    degree: "Full Stack Web Development",
    field: "Certificate",
    year: "2018",
    achievements: [
      "Top 10% of cohort",
      "Built 5 full-stack projects",
    ],
    coursework: [
      "React & Redux",
      "Node.js & Express",
      "MongoDB & PostgreSQL",
      "RESTful APIs",
      "DevOps & Deployment",
    ],
  },
];

export default function Education() {
  return (
    <Section id="education" className="bg-black">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <span className="section-number">04</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Education & Learning</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            My academic foundation and commitment to continuous learning. Education is an ongoing journey 
            that fuels innovation and growth in the ever-evolving tech landscape.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div key={edu.institution} variants={fadeInUp}>
              <Card className="h-full hover:border-cyan-500/50 transition-all duration-300 professional-card">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-xl border border-cyan-500/30">
                    <GraduationCap className="text-cyan-400" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-3 neon-glow-cyan text-lg">
                      {edu.field}
                    </p>
                    <p className="text-lg md:text-xl font-bold text-gray-300 mb-3">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={18} className="text-pink-400" />
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                        Achievements
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-pink-400 mt-1.5">★</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-3">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-pink-500/10 text-pink-300 rounded-full border border-pink-500/30"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

