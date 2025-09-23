

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Download, FileText, Linkedin, Github, Mail, User, MapPin, Phone, GraduationCap, Code, Award, Briefcase, Calendar, Star } from "lucide-react";
import { PageReveal } from "@/components/PageReveal";

export default function ResumePage() {
  const skills = {
    frontend: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Responsive Design"],
    backend: ["Node.js", "Express", "REST APIs", "Authentication", "Nodemon"],
    database: ["MongoDB Atlas", "Supabase", "PostgreSQL"],
    tools: ["GitHub", "Vercel", "Netlify", "VS Code", "Postman", "EmailJS"]
  };

  const projects = [
    {
      name: "EventFlow",
      description: "Full‑stack event management platform with real-time updates",
      tech: "React, TypeScript, Tailwind, Supabase",
      highlight: true
    },
    {
      name: "My DriveMate",
      description: "Transparent ride‑sharing platform with user safety features",
      tech: "React, Node.js, MongoDB",
      highlight: true
    },
    {
      name: "Student Record System",
      description: "Academic data management with grade tracking",
      tech: "React, Node.js, MongoDB",
      highlight: false
    },
    {
      name: "DriveEase",
      description: "Vehicle service booking & real-time tracking system",
      tech: "React, Node.js, REST APIs",
      highlight: false
    }
  ];

  const certifications = [
    "Introduction to Environmental Engineering & Science — IIT Kharagpur (Nov 2024)",
    "Organizational Behaviour: Individual Dynamics — IIT Guwahati (May 2025)",
    "Leadership and Team Effectiveness — IIT Guwahati (May 2025)"
  ];

  return (
    <div className="dark min-h-screen pb-20 bg-white">
      <Navbar />

      <PageReveal>
        {/* Header Section */}
        <header className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
            <div
              className="pointer-events-none absolute left-1/2 top-6 sm:top-8 md:top-10 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[700px] h-[400px] sm:h-[500px] md:h-[700px] rounded-full blur-2xl sm:blur-3xl"
              style={{ background: "radial-gradient(closest-side, var(--neo-aqua), transparent)" }}
            />
          </div>
          <div className="mx-auto max-w-6xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-black">
              Professional Resume
            </h1>
            <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-black/70 max-w-3xl">
              Full‑Stack Web Developer — Comprehensive overview of my professional journey, technical expertise, 
              project portfolio, and achievements in modern web development.
            </p>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          {/* Personal Information Card */}
          <section className="glass card-3d ripple rounded-xl p-4 sm:p-6 md:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <User className="size-6 sm:size-7 text-[color:var(--neo-aqua)]" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-black">
                    Deepak Jadon
                  </h2>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-black/80 mb-3 sm:mb-4">
                  Full-Stack Web Developer
                </h3>
                
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <div className="flex items-center gap-3 text-black/70">
                    <MapPin className="size-4 text-[color:var(--neo-aqua)] flex-shrink-0" />
                    <span>Mathura, Uttar Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-black/70">
                    <Phone className="size-4 text-[color:var(--neo-aqua)] flex-shrink-0" />
                    <span>+91 91493 70081</span>
                  </div>
                  <div className="flex items-center gap-3 text-black/70">
                    <Mail className="size-4 text-[color:var(--neo-aqua)] flex-shrink-0" />
                    <a href="mailto:deepakjadon1907@gmail.com" className="hover:text-black transition-colors">
                      deepakjadon1907@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:flex-col lg:items-end">
                <Link 
                  href="https://linkedin.com/in/deepak-jadon-612487272" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--border)]/70 px-3 py-2 text-xs sm:text-sm text-black/80 hover:text-black hover:neon transition-all duration-200"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </Link>
                <Link 
                  href="https://github.com/deepakjadon1902" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--border)]/70 px-3 py-2 text-xs sm:text-sm text-black/80 hover:text-black hover:neon transition-all duration-200"
                >
                  <Github className="size-4" /> GitHub
                </Link>
                <a 
                  href="mailto:deepakjadon1907@gmail.com" 
                  className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--border)]/70 px-3 py-2 text-xs sm:text-sm text-black/80 hover:text-black hover:neon transition-all duration-200"
                >
                  <Mail className="size-4" /> Email
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mt-6 sm:mt-8">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Star className="size-5 sm:size-6 text-[color:var(--neo-aqua)]" />
                <h3 className="text-lg sm:text-xl font-semibold text-black">Professional Summary</h3>
              </div>
              <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                Results‑driven Full‑Stack Web Developer with hands-on experience in building scalable, responsive applications using
                modern technologies including React, TypeScript, Node.js, and MongoDB Atlas. Proficient in developing RESTful APIs, 
                implementing secure authentication systems, and optimizing frontend performance. Strong collaborative team player 
                committed to delivering clean, maintainable code and seeking opportunities to contribute to impactful software solutions 
                that drive business growth and user satisfaction.
              </p>
            </div>
          </section>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Education */}
            <section className="glass card-3d ripple rounded-xl p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <GraduationCap className="size-5 sm:size-6 text-[color:var(--neo-aqua)]" />
                <h3 className="text-lg sm:text-xl font-semibold text-black">Education</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="border-l-2 border-[color:var(--neo-aqua)]/30 pl-4">
                  <h4 className="font-semibold text-black text-sm sm:text-base">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-black/70 text-sm">GLA University, Mathura</p>
                  <p className="text-black/60 text-xs sm:text-sm flex items-center gap-2 mt-1">
                    <Calendar className="size-3" />
                    July 2022 – May 2026
                  </p>
                  <p className="text-black/70 text-sm mt-2">CGPA: 7.44/10</p>
                </div>
                <div className="mt-3 sm:mt-4">
                  <h5 className="text-sm font-medium text-black/80 mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {["Operating Systems", "DBMS", "Computer Networks", "Machine Learning", "Web Development", "Cloud Computing"].map((course) => (
                      <span key={course} className="px-2 py-1 bg-[color:var(--neo-aqua)]/10 text-[color:var(--neo-aqua)] rounded-md text-xs">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="glass card-3d ripple rounded-xl p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Briefcase className="size-5 sm:size-6 text-[color:var(--neo-aqua)]" />
                <h3 className="text-lg sm:text-xl font-semibold text-black">Professional Experience</h3>
              </div>
              <div className="border-l-2 border-[color:var(--neo-aqua)]/30 pl-4">
                <h4 className="font-semibold text-black text-sm sm:text-base">Web Developer Intern</h4>
                <p className="text-black/70 text-sm">BrajMart Private Limited</p>
                <p className="text-black/60 text-xs sm:text-sm flex items-center gap-2 mt-1 mb-3">
                  <Calendar className="size-3" />
                  May 2025 – Present
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-black/80">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[color:var(--neo-aqua)] mt-2 flex-shrink-0"></span>
                    Built and maintained core features for a social engagement platform using Node.js and MongoDB Atlas.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[color:var(--neo-aqua)] mt-2 flex-shrink-0"></span>
                    Implemented secure authentication systems and responsive product listing UIs with React + Tailwind CSS.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[color:var(--neo-aqua)] mt-2 flex-shrink-0"></span>
                    Enhanced cross-device responsiveness and performance by optimizing UI components and API calls.
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Technical Skills */}
          <section className="glass card-3d ripple rounded-xl p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Code className="size-5 sm:size-6 text-[color:var(--neo-aqua)]" />
              <h3 className="text-lg sm:text-xl font-semibold text-black">Technical Expertise</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div>
                <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">Frontend</h4>
                <div className="space-y-1 sm:space-y-2">
                  {skills.frontend.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-black/80">
                      <span className="w-1 h-1 rounded-full bg-[color:var(--neo-aqua)]"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">Backend</h4>
                <div className="space-y-1 sm:space-y-2">
                  {skills.backend.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-black/80">
                      <span className="w-1 h-1 rounded-full bg-[color:var(--neo-aqua)]"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">Database</h4>
                <div className="space-y-1 sm:space-y-2">
                  {skills.database.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-black/80">
                      <span className="w-1 h-1 rounded-full bg-[color:var(--neo-aqua)]"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2 sm:mb-3 text-sm sm:text-base">Tools & Platforms</h4>
                <div className="space-y-1 sm:space-y-2">
                  {skills.tools.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-black/80">
                      <span className="w-1 h-1 rounded-full bg-[color:var(--neo-aqua)]"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Projects */}
            <section className="glass card-3d ripple rounded-xl p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <FileText className="size-5 sm:size-6 text-[color:var(--neo-aqua)]" />
                <h3 className="text-lg sm:text-xl font-semibold text-black">Featured Projects</h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {projects.map((project) => (
                  <div key={project.name} className={`p-3 sm:p-4 rounded-lg ${project.highlight ? 'bg-[color:var(--neo-aqua)]/5 border border-[color:var(--neo-aqua)]/20' : 'bg-white/50'}`}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-black text-sm sm:text-base">{project.name}</h4>
                      {project.highlight && (
                        <span className="px-2 py-1 bg-[color:var(--neo-aqua)]/20 text-[color:var(--neo-aqua)] text-xs rounded-md">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-black/70 mb-2 leading-relaxed">{project.description}</p>
                    <p className="text-xs text-black/60">
                      <span className="font-medium">Tech Stack:</span> {project.tech}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="glass card-3d ripple rounded-xl p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Award className="size-5 sm:size-6 text-[color:var(--neo-aqua)]" />
                <h3 className="text-lg sm:text-xl font-semibold text-black">Certifications & Achievements</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/50">
                    <Award className="size-4 text-[color:var(--neo-aqua)] mt-1 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-black/80 leading-relaxed">{cert}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 sm:mt-6 p-3 rounded-lg bg-[color:var(--neo-aqua)]/5 border border-[color:var(--neo-aqua)]/20">
                <h4 className="font-semibold text-black text-sm mb-2">Professional Skills</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {["Problem Solving", "Team Leadership", "UI/UX Design", "Communication", "Time Management", "Debugging"].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-[color:var(--neo-aqua)]/10 text-[color:var(--neo-aqua)] rounded-md text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <section className="glass card-3d ripple rounded-xl p-4 sm:p-6 md:p-8 text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4">Ready to Collaborate?</h3>
            <p className="text-sm sm:text-base text-black/70 mb-4 sm:mb-6 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities and innovative projects. 
              Let's connect and explore how we can work together to create exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="mailto:deepakjadon1907@gmail.com?subject=Resume%20Request&body=Hello%20Deepak%2C%20please%20share%20your%20latest%20resume%20(PDF)."
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[color:var(--neo-aqua)]/90 text-black font-medium px-4 sm:px-6 py-2 sm:py-3 hover:neon hover:translate-y-[-1px] transition-all duration-200 text-sm sm:text-base"
              >
                <Download className="size-4" /> Request PDF Resume
              </a>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[color:var(--border)]/70 px-4 sm:px-6 py-2 sm:py-3 text-black/80 hover:text-black hover:neon transition-all duration-200 text-sm sm:text-base"
              >
                <FileText className="size-4" /> View Project Portfolio
              </Link>
            </div>
          </section>
        </main>
      </PageReveal>
    </div>
  );
}