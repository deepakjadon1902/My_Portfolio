

"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, School, MapPin, Calendar, Award, Code, Briefcase, Users, Target, Zap, Database, Globe, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { ParallaxTilt } from "@/components/ParallaxTilt";

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Responsive Design"], icon: <Smartphone className="size-4" /> },
    { category: "Backend", items: ["Node.js", "MongoDB", "Supabase", "API Integration", "Authentication"], icon: <Database className="size-4" /> },
    { category: "Tools", items: ["GitHub", "Netlify", "Vercel", "VS Code", "Postman"], icon: <Code className="size-4" /> }
  ];

  const certifications = [
    "Introduction to Environmental Engineering and Science — IIT Kharagpur",
    "Organizational Behaviour: Individual Dynamics — IIT Guwahati", 
    "Leadership and Team Effectiveness — IIT Guwahati"
  ];

  const highlights = [
    { icon: <Target className="size-5" />, title: "Problem Solver", description: "Passionate about creating scalable, user-centric solutions" },
    { icon: <Users className="size-5" />, title: "Team Player", description: "Collaborative approach with proven agile workflow experience" },
    { icon: <Zap className="size-5" />, title: "Performance Focus", description: "Optimizing applications for speed and responsiveness" },
    { icon: <Globe className="size-5" />, title: "Full-Stack", description: "End-to-end development from frontend to backend" }
  ];

  return (
    <section id="about" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <Card className="overflow-hidden bg-gray-50/80 border border-gray-200">
          {/* Hero Header */}
          <ParallaxTilt className="relative h-32 sm:h-40 md:h-48 w-full [transform-style:preserve-3d]">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
              alt="Technology and code background"
              className="absolute inset-0 size-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/80" />
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
              <motion.h1 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1 sm:mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Deepak Jadon
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-black font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Full-Stack Web Developer
              </motion.p>
            </div>
          </ParallaxTilt>

          <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
            {/* Contact & Education Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--primary)] mb-3">Contact & Location</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-black">
                    <MapPin className="size-4 text-[color:var(--primary)] flex-shrink-0" />
                    <span className="text-sm sm:text-base">Mathura, Uttar Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-black">
                    <Mail className="size-4 text-[color:var(--primary)] flex-shrink-0" />
                    <a 
                      className="hover:text-[color:var(--primary)] transition-colors text-sm sm:text-base break-all sm:break-normal" 
                      href="mailto:deepakjadon1907@gmail.com"
                    >
                      deepakjadon1907@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-black">
                    <School className="size-4 text-[color:var(--primary)] flex-shrink-0" />
                    <span className="text-sm sm:text-base">+91 91493 70081</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <a 
                    className="text-xs sm:text-sm text-[color:var(--primary)] hover:underline underline-offset-4 break-all sm:break-normal" 
                    href="https://linkedin.com/in/deepak-jadon-612487272" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    linkedin.com/in/deepak-jadon-612487272
                  </a>
                  <a 
                    className="text-xs sm:text-sm text-[color:var(--primary)] hover:underline underline-offset-4 break-all sm:break-normal" 
                    href="https://github.com/deepakjadon1902" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    github.com/deepakjadon1902
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--primary)] mb-3">Education & Experience</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <School className="size-4 text-[color:var(--primary)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-black font-medium text-sm sm:text-base">Bachelor of Technology (B.Tech)</p>
                      <p className="text-black text-xs sm:text-sm">GLA University, Mathura</p>
                      <p className="text-black text-xs sm:text-sm">July 2022 – May 2026 • CGPA: 7.44/10</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="size-4 text-[color:var(--primary)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-black font-medium text-sm sm:text-base">Web Developer Intern</p>
                      <p className="text-black text-xs sm:text-sm">BrajMart Private Limited</p>
                      <p className="text-black text-xs sm:text-sm">May 2025 – Present</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-[color:var(--primary)] mb-4">About Me</h3>
              <p className="text-black leading-relaxed mb-4 text-sm sm:text-base">
                Results-driven Full-Stack Web Developer with hands-on experience in designing and developing scalable, 
                responsive web applications. My journey began with curiosity about technology and has evolved into a deep 
                passion for creating impactful solutions that solve real-world problems.
              </p>
              <p className="text-black leading-relaxed text-sm sm:text-base">
                Currently working as a Web Developer Intern at BrajMart Private Limited, where I develop core features 
                for social engagement platforms and optimize performance across multiple devices. I believe development 
                is not just code — it's art, passion, and innovation combined to create meaningful user experiences.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-[color:var(--primary)] mb-4">What I Bring</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div 
                    key={highlight.title}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-white/60 border border-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <div className="text-[color:var(--primary)] mt-1 flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-black text-sm sm:text-base">{highlight.title}</h4>
                      <p className="text-xs sm:text-sm text-black">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-[color:var(--primary)] mb-4">Technical Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {skills.map((skillCategory, index) => (
                  <motion.div 
                    key={skillCategory.category}
                    className="p-3 sm:p-4 rounded-lg bg-white/60 border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-[color:var(--primary)] flex-shrink-0">
                        {skillCategory.icon}
                      </div>
                      <h4 className="font-medium text-black text-sm sm:text-base">{skillCategory.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {skillCategory.items.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 text-xs bg-[color:var(--primary)]/20 text-[color:var(--primary)] rounded-md whitespace-nowrap"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-[color:var(--primary)] mb-4">Certifications & Achievements</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-white/60 border border-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <Award className="size-4 text-[color:var(--primary)] mt-1 flex-shrink-0" />
                    <p className="text-black text-xs sm:text-sm leading-relaxed">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}