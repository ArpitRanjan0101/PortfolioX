"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import Button from "./ui/Button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (234) 567-8900",
    href: "tel:+12345678900",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Your City, Country",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1000);
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-white via-purple-50/50 to-white">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-4 md:mb-6 flex-wrap gap-2 md:gap-0">
            <span className="section-number">05</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">Let's Connect</span>
            </h2>
          </div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Have a project in mind or want to collaborate? I'm always open to discussing new opportunities, 
            innovative ideas, or just having a conversation about technology and design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div variants={fadeInUp} className="space-y-6 md:space-y-7">
            <div>
              <p className="text-gray-600 text-sm md:text-base mb-10 md:mb-12 leading-relaxed">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ x: 5 }}
                >
                  <Card className="hover:border-purple-500/50 transition-all duration-300 professional-card p-5 sm:p-6 md:p-7">
                    <div className="flex items-center gap-5 md:gap-6">
                      <div className="p-3.5 md:p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl flex-shrink-0">
                        <info.icon className="text-purple-600" size={26} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs md:text-sm text-gray-500 mb-1 font-medium">{info.label}</p>
                        <p className="text-sm md:text-base text-gray-900 font-semibold break-words">{info.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-10 md:pt-12">
              <p className="text-gray-600 mb-6 md:mb-7 font-medium text-sm md:text-base">Follow me on</p>
              <div className="flex gap-4 md:gap-5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 md:p-4 rounded-full bg-white hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-[0_0_10px_rgba(147,51,234,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={22} className="text-purple-600 hover:text-purple-700 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <Card className="professional-card p-6 sm:p-7 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7">
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base font-medium text-gray-700 mb-2.5 md:mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-white border-2 border-purple-200 rounded-lg text-gray-900 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all shadow-[0_0_10px_rgba(147,51,234,0.1)] focus:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-700 mb-2.5 md:mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-white border-2 border-purple-200 rounded-lg text-gray-900 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all shadow-[0_0_10px_rgba(147,51,234,0.1)] focus:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm md:text-base font-medium text-gray-700 mb-2.5 md:mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-white border-2 border-purple-200 rounded-lg text-gray-900 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all shadow-[0_0_10px_rgba(147,51,234,0.1)] focus:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm md:text-base font-medium text-gray-700 mb-2.5 md:mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-white border-2 border-purple-200 rounded-lg text-gray-900 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all shadow-[0_0_10px_rgba(147,51,234,0.1)] focus:shadow-[0_0_20px_rgba(168,85,247,0.2)] resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 md:p-5 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm md:text-base mb-2"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    onClick={() => {}}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}

