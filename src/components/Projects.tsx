

"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Users, Database, Globe, Zap, Shield, Smartphone, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import { ParallaxTilt } from "@/components/ParallaxTilt";

type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
  timeline: string;
  teamSize?: string;
  live?: string;
  github?: string;
  achievements?: string[];
  icon: React.ReactNode;
  gradient: string;
};

const projects: Project[] = [
  {
    id: "eventflow",
    title: "EventFlow",
    description: "Full-Stack Event Management System with real-time features and modern UI",
    longDescription: "Engineered a scalable event management system using React, TypeScript, and Supabase with role-based authentication, real-time PostgreSQL operations, and comprehensive event lifecycle management.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vite", "Vercel"],
    category: "Full-Stack",
    status: "completed",
    featured: true,
    timeline: "May 2025 – July 2025",
    teamSize: "Solo Project",
    achievements: [
      "Implemented role-based authentication system",
      "Built real-time messaging and feedback collection",
      "Deployed with CI/CD pipeline on Vercel",
      "Used Context API for efficient state management"
    ],
    icon: <Calendar className="size-5" />,
    gradient: "from-blue-600 to-purple-600",
    live: "https://event-flow-silk.vercel.app/", // Replace with your actual URL
    github: "https://github.com/deepakjadon1902/EventFlow" // Replace with your actual repo
  },
  {
    id: "social-platform",
    title: "Social Engagement Platform",
    description: "Professional social platform with secure authentication and dynamic UX",
    longDescription: "Developed core features for BrajMart's social engagement platform using Node.js and MongoDB Atlas, focusing on secure authentication, responsive design, and performance optimization.",
    tech: ["Node.js", "MongoDB Atlas", "React", "Tailwind CSS", "Nodemon"],
    category: "Backend",
    status: "in-progress",
    featured: true,
    timeline: "May 2025 – Present",
    teamSize: "Team of 3",
    achievements: [
      "Implemented secure login/logout functionality",
      "Built responsive product listing pages",
      "Optimized performance across multiple devices",
      "Collaborated in fast-paced development environment"
    ],
    icon: <Users className="size-5" />,
    gradient: "from-green-600 to-teal-600",
    live: "https://www.liklet.com/", // Replace with actual URL
    github: "#" // Replace with actual repo
  },
  {
    id: "drivemate",
    title: "My DriveMate",
    description: "Transparent ride-sharing platform eliminating hidden fees",
    longDescription: "A comprehensive ride-sharing solution focused on transparency and user trust, connecting drivers with passengers directly without hidden costs.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    category: "Full-Stack",
    status: "completed",
    featured: false,
    timeline: "2024",
    icon: <Globe className="size-5" />,
    gradient: "from-orange-600 to-red-600",
    live: "https://my-drive-mate.vercel.app/", // Replace with your actual URL
    github: "https://github.com/deepakjadon1902/My-DriveMate" // Replace with your actual repo
  },
  {
    id: "student-records",
    title: "Student Record System",
    description: "Database-driven academic record management system",
    longDescription: "Comprehensive student data management system designed for educational institutions with efficient data handling and user-friendly interface.",
    tech: ["React", "Node.js", "MySQL", "Express.js"],
    category: "Full-Stack",
    status: "completed",
    featured: false,
    timeline: "2024",
    icon: <Database className="size-5" />,
    gradient: "from-indigo-600 to-blue-600",
    live: "https://student-record-five.vercel.app/", // Replace with your actual URL
    github: "https://github.com/deepakjadon1902/Student-Record" // Replace with your actual repo
  },
  {
    id: "driveease",
    title: "DriveEase",
    description: "Vehicle service booking and tracking platform",
    longDescription: "Streamlined vehicle service platform connecting users with service providers, featuring booking management and real-time tracking capabilities.",
    tech: ["React", "Node.js", "MongoDB", "REST APIs"],
    category: "Full-Stack",
    status: "completed",
    featured: false,
    timeline: "2024",
    icon: <Zap className="size-5" />,
    gradient: "from-purple-600 to-pink-600",
    live: "https://reliable-daifuku-e27641.netlify.app/", // Replace with your actual URL
    github: "https://github.com/deepakjadon1902/DriveEase" // Replace with your actual repo
  },
  {
    id: "picsync",
    title: "Timeless Touch - PicSync",
    description: "Intelligent image synchronization and organization system",
    longDescription: "Advanced image management platform with intelligent synchronization capabilities for storing, organizing, and accessing memories seamlessly.",
    tech: ["React", "Node.js", "MongoDB", "Cloud Storage"],
    category: "Full-Stack",
    status: "completed",
    featured: false,
    timeline: "2024",
    icon: <Smartphone className="size-5" />,
    gradient: "from-teal-600 to-cyan-600",
    live: "https://nimble-quokka-618ee2.netlify.app/", // Replace with your actual URL
    github: "https://github.com/deepakjadon1902/PicSync-Photo-Gallery-Application" // Replace with your actual repo
  },
  {
    id: "nagriksahayak",
    title: "NagrikSahayak",
    description: "Civic engagement platform for citizen services",
    longDescription: "Comprehensive civic platform connecting citizens with government services, complaint handling, and resource access for improved public communication.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    category: "Full-Stack", 
    status: "completed",
    featured: false,
    timeline: "2024",
    icon: <Shield className="size-5" />,
    gradient: "from-emerald-600 to-green-600",
    live: "https://nagrik-sahayak-app.vercel.app/", // Replace with your actual URL
    github: "https://github.com/deepakjadon1902/NagrikSahayak-App" // Replace with your actual repo
  },
  {
    id: "task-manager",
    title: "Task Management Application",
    description: "Modern productivity app with real-time updates",
    longDescription: "Feature-rich task management application with clean UI, real-time updates, and advanced productivity features for efficient workflow management.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "Full-Stack",
    status: "completed",
    featured: false,
    timeline: "2024", 
    icon: <Code2 className="size-5" />,
    gradient: "from-violet-600 to-purple-600",
    live: "https://task-managment-system-sable.vercel.app/", // Replace with your actual URL
    github: "https://github.com/deepakjadon1902/Task-Managment-System" // Replace with your actual repo
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed": return "bg-green-500/20 text-green-400 border-green-500/30";
    case "in-progress": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "planned": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Full-Stack": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    case "Frontend": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Backend": return "bg-green-500/20 text-green-400 border-green-500/30";
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: (i: number) => ({ 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      delay: 0.1 * i, 
      duration: 0.6,
      ease: "easeOut"
    } 
  }),
};

export default function Projects() {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", x + "%");
    e.currentTarget.style.setProperty("--y", y + "%");
  }, []);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[color:var(--primary)] to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          A showcase of full-stack applications, from event management systems to social platforms, 
          built with modern technologies and best practices
        </p>
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid lg:grid-cols-2 gap-8 mb-16"
      >
        {featuredProjects.map((project, i) => (
          <motion.div key={project.id} custom={i} variants={itemVariants}>
            <ParallaxTilt className="[transform-style:preserve-3d] h-full">
              <Card
                onMouseMove={handleMouseMove}
                className="ripple card-3d glass h-full flex flex-col group hover:scale-[1.02] transition-transform duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={`text-xs ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </Badge>
                      <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                        {project.status === "in-progress" ? "In Progress" : project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl tracking-wide group-hover:text-[color:var(--primary)] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/70 leading-relaxed">
                    {project.longDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white/90 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech}
                          className="text-xs bg-white/10 text-white/80 border-white/20 hover:bg-white/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.achievements && (
                    <div>
                      <h4 className="text-sm font-semibold text-white/90 mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {project.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="text-xs text-white/70 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--primary)] mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>{project.timeline}</span>
                    {project.teamSize && <span>{project.teamSize}</span>}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 flex gap-3">
                  <Button 
                    asChild 
                    variant="secondary" 
                    className="flex-1 hover:neon hover:scale-105 transition-all duration-300"
                  >
                    <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 justify-center">
                      <Globe className="size-4" />
                      View Live Project
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="size-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </ParallaxTilt>
          </motion.div>
        ))}
      </motion.div>

      {/* Other Projects */}
      <div>
        <motion.h3 
          className="text-2xl font-semibold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Other Projects
        </motion.h3>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project, i) => (
            <motion.div key={project.id} custom={i} variants={itemVariants}>
              <ParallaxTilt className="[transform-style:preserve-3d] h-full">
                <Card
                  onMouseMove={handleMouseMove}
                  className="ripple card-3d glass h-full flex flex-col group hover:scale-[1.03] transition-transform duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                        <div className="text-white text-sm">
                          {project.icon}
                        </div>
                      </div>
                      <Badge className={`text-xs ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg tracking-wide group-hover:text-[color:var(--primary)] transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge 
                          key={tech}
                          className="text-xs bg-white/10 text-white/80 border-white/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge className="text-xs bg-white/10 text-white/60 border-white/20">
                          +{project.tech.length - 4}
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-white/60">{project.timeline}</div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button 
                      asChild 
                      variant="secondary" 
                      size="sm"
                      className="w-full hover:neon transition-all duration-300"
                    >
                      <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                        <ExternalLink className="size-4" />
                        View Live Project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </ParallaxTilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}