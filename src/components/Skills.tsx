
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ParallaxTilt } from "@/components/ParallaxTilt";
import { Code2, Database, Settings, Users, Lightbulb, Target, MessageSquare, Presentation, Globe, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Smartphone className="size-5" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: "Advanced", category: "framework" },
      { name: "TypeScript", level: "Advanced", category: "language" },
      { name: "HTML5", level: "Expert", category: "markup" },
      { name: "CSS3", level: "Expert", category: "styling" },
      { name: "Tailwind CSS", level: "Advanced", category: "framework" },
      { name: "Vite", level: "Intermediate", category: "tool" },
      { name: "EmailJS", level: "Intermediate", category: "service" },
      { name: "Responsive Design", level: "Advanced", category: "concept" }
    ]
  },
  {
    title: "Backend Development",
    icon: <Database className="size-5" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: "Advanced", category: "runtime" },
      { name: "Nodemon", level: "Intermediate", category: "tool" },
      { name: "MongoDB", level: "Intermediate", category: "database" },
      { name: "MongoDB Atlas", level: "Intermediate", category: "cloud" },
      { name: "Supabase", level: "Intermediate", category: "baas" },
      { name: "PostgreSQL", level: "Intermediate", category: "database" },
      { name: "RESTful APIs", level: "Advanced", category: "architecture" },
      { name: "Authentication", level: "Advanced", category: "security" }
    ]
  },
  {
    title: "Development Tools",
    icon: <Settings className="size-5" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "GitHub", level: "Advanced", category: "vcs" },
      { name: "Git", level: "Advanced", category: "vcs" },
      { name: "VS Code", level: "Expert", category: "editor" },
      { name: "Postman", level: "Intermediate", category: "api" },
      { name: "Netlify", level: "Intermediate", category: "deployment" },
      { name: "Vercel", level: "Intermediate", category: "deployment" },
      { name: "CI/CD Pipeline", level: "Intermediate", category: "devops" },
      { name: "Context API", level: "Advanced", category: "state" }
    ]
  }
];

const professionalSkills = [
  { 
    name: "Problem Solving", 
    icon: <Target className="size-4" />, 
    description: "Analytical thinking and debugging complex issues",
    strength: 95
  },
  { 
    name: "Team Collaboration", 
    icon: <Users className="size-4" />, 
    description: "Agile workflow and cross-functional teamwork",
    strength: 90
  },
  { 
    name: "Leadership", 
    icon: <Presentation className="size-4" />, 
    description: "Project coordination and team effectiveness",
    strength: 85
  },
  { 
    name: "Communication", 
    icon: <MessageSquare className="size-4" />, 
    description: "Clear technical documentation and presentation",
    strength: 88
  },
  { 
    name: "UI/UX Thinking", 
    icon: <Lightbulb className="size-4" />, 
    description: "User-centric design and interface optimization",
    strength: 82
  },
  { 
    name: "Time Management", 
    icon: <Settings className="size-4" />, 
    description: "Efficient project delivery and deadline management",
    strength: 87
  }
];

const getLevelColor = (level) => {
  switch (level) {
    case "Expert": return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Advanced": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[color:var(--primary)] to-blue-400 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Comprehensive skill set spanning modern web development technologies and professional competencies
        </p>
      </motion.div>

      {/* Technical Skills Grid */}
      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut", 
              delay: categoryIndex * 0.1 
            }}
          >
            <Card className="glass card-3d h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        ease: "easeOut", 
                        delay: skillIndex * 0.05 
                      }}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[color:var(--primary)] to-blue-400"></div>
                        <span className="text-white/90 font-medium">{skill.name}</span>
                      </div>
                      <Badge className={`text-xs ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Professional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="glass card-3d">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 bg-opacity-20">
                <Users className="size-5 text-white" />
              </div>
              Professional Skills & Competencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeOut", 
                    delay: index * 0.1 
                  }}
                  className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/8 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-[color:var(--primary)] mt-1">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white/90 mb-1">{skill.name}</h4>
                      <p className="text-sm text-white/70">{skill.description}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-[color:var(--primary)] to-blue-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.strength}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                      />
                    </div>
                    <span className="text-xs text-white/60 mt-1 block text-right">{skill.strength}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Key Technologies Summary */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="glass card-3d">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 bg-opacity-20">
                <Code2 className="size-5 text-white" />
              </div>
              Core Technology Stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Supabase", "Vercel", "GitHub"].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeOut", 
                    delay: index * 0.05 
                  }}
                >
                  <ParallaxTilt className="inline-block" maxTilt={8} scale={1.05}>
                    <Badge className="px-4 py-2 text-sm bg-gradient-to-r from-[color:var(--primary)]/20 to-blue-500/20 border border-[color:var(--primary)]/30 text-white hover:from-[color:var(--primary)]/30 hover:to-blue-500/30 transition-all duration-300">
                      {tech}
                    </Badge>
                  </ParallaxTilt>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}