

// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Github, Linkedin, Mail, Menu, X, Download, User, Code, Briefcase, MessageSquare, Home } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ParallaxTilt } from "@/components/ParallaxTilt";
// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("/");

//   const navItems = [
//     { href: "/", label: "Home", icon: <Home className="size-4" /> },
//     { href: "/about", label: "About", icon: <User className="size-4" /> },
//     { href: "/projects", label: "Projects", icon: <Code className="size-4" /> },
//     { href: "/skills", label: "Skills", icon: <Briefcase className="size-4" /> },
//     { href: "/contact", label: "Contact", icon: <MessageSquare className="size-4" /> },
//     { href: "/resume", label: "Resume", icon: <Download className="size-4" /> },
//   ];

//   const socialLinks = [
//     { 
//       href: "mailto:deepakjadon1907@gmail.com", 
//       icon: <Mail className="size-4" />, 
//       label: "Email",
//       color: "hover:text-red-400"
//     },
//     { 
//       href: "https://linkedin.com/in/deepak-jadon-612487272", 
//       icon: <Linkedin className="size-4" />, 
//       label: "LinkedIn",
//       color: "hover:text-blue-400"
//     },
//     { 
//       href: "https://github.com/deepakjadon1902", 
//       icon: <Github className="size-4" />, 
//       label: "GitHub",
//       color: "hover:text-purple-400"
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           scrolled 
//             ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-2xl" 
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 lg:h-20">
            
//             {/* Logo Section */}
//             <motion.div
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               <ParallaxTilt maxTilt={8} scale={1.05} className="inline-block">
//                 <Link href="/" className="group flex items-center space-x-2">
//                   <div className="relative">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     <div className="relative bg-gray-100 backdrop-blur-sm border border-gray-300 rounded-lg px-3 py-2">
//                       <span className="text-black font-bold text-lg tracking-wider">
//                         DJ
//                       </span>
//                     </div>
//                   </div>
//                   <div className="hidden sm:block">
//                     <span className="text-black font-semibold text-xl tracking-wide group-hover:text-blue-600 transition-colors duration-300">
//                       Deepak Jadon
//                     </span>
//                     <div className="text-xs text-black font-medium -mt-1">Full-Stack Developer</div>
//                   </div>
//                 </Link>
//               </ParallaxTilt>
//             </motion.div>

//             {/* Desktop Navigation */}
//             <motion.div
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//               className="hidden lg:flex items-center"
//             >
//               <div className="flex items-center space-x-1 bg-gray-100/80 backdrop-blur-sm border border-gray-200 rounded-full px-2 py-2">
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.href}
//                     initial={{ y: -20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
//                   >
//                     <ParallaxTilt maxTilt={5} scale={1.02} className="inline-block">
//                       <Link
//                         href={item.href}
//                         className={`relative group flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                           activeSection === item.href
//                             ? "text-black bg-white border border-blue-400"
//                             : "text-black hover:text-black hover:bg-white/70"
//                         }`}
//                       >
//                         <span className="opacity-70 group-hover:opacity-100 transition-opacity">
//                           {item.icon}
//                         </span>
//                         <span>{item.label}</span>
//                         {activeSection === item.href && (
//                           <motion.div
//                             layoutId="activeTab"
//                             className="absolute inset-0 bg-white rounded-full border border-blue-400"
//                             transition={{ type: "spring", duration: 0.6 }}
//                           />
//                         )}
//                       </Link>
//                     </ParallaxTilt>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Desktop Social Links */}
//             <motion.div
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.6 }}
//               className="hidden md:flex items-center space-x-2"
//             >
//               <div className="flex items-center space-x-1 bg-gray-100/80 backdrop-blur-sm border border-gray-200 rounded-full px-2 py-2">
//                 {socialLinks.map((social, index) => (
//                   <motion.div
//                     key={social.href}
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ delay: 0.1 * index + 0.6, duration: 0.4 }}
//                   >
//                     <ParallaxTilt maxTilt={8} scale={1.1} className="inline-block">
//                       <Button
//                         asChild
//                         size="sm"
//                         variant="ghost"
//                         className={`text-black hover:text-black ${social.color} hover:bg-white/70 rounded-full transition-all duration-300`}
//                       >
//                         <a
//                           href={social.href}
//                           target={social.href.startsWith('mailto') ? '_self' : '_blank'}
//                           rel="noreferrer"
//                           aria-label={social.label}
//                         >
//                           {social.icon}
//                         </a>
//                       </Button>
//                     </ParallaxTilt>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Mobile Menu Button */}
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//               className="lg:hidden"
//             >
//               <ParallaxTilt maxTilt={10} scale={1.1}>
//                 <Button
//                   onClick={toggleMenu}
//                   size="sm"
//                   variant="ghost"
//                   className="text-black hover:text-black hover:bg-white/70 rounded-full p-2"
//                 >
//                   <AnimatePresence mode="wait">
//                     {isOpen ? (
//                       <motion.div
//                         key="close"
//                         initial={{ rotate: -90, opacity: 0 }}
//                         animate={{ rotate: 0, opacity: 1 }}
//                         exit={{ rotate: 90, opacity: 0 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <X className="size-5" />
//                       </motion.div>
//                     ) : (
//                       <motion.div
//                         key="menu"
//                         initial={{ rotate: 90, opacity: 0 }}
//                         animate={{ rotate: 0, opacity: 1 }}
//                         exit={{ rotate: -90, opacity: 0 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <Menu className="size-5" />
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </Button>
//               </ParallaxTilt>
//             </motion.div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
//               onClick={toggleMenu}
//             />
//             <motion.div
//               initial={{ x: "100%", opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: "100%", opacity: 0 }}
//               transition={{ type: "spring", damping: 25, stiffness: 200 }}
//               className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white border-l border-gray-200 shadow-2xl z-50 lg:hidden"
//             >
//               <div className="flex flex-col h-full">
//                 {/* Mobile Header */}
//                 <div className="flex items-center justify-between p-6 border-b border-gray-200">
//                   <div>
//                     <h3 className="text-black font-semibold text-lg">Menu</h3>
//                     <p className="text-black text-sm">Navigate through portfolio</p>
//                   </div>
//                   <Button
//                     onClick={toggleMenu}
//                     size="sm"
//                     variant="ghost"
//                     className="text-black hover:text-black hover:bg-gray-100 rounded-full"
//                   >
//                     <X className="size-5" />
//                   </Button>
//                 </div>

//                 {/* Mobile Navigation Links */}
//                 <div className="flex-1 px-6 py-8 space-y-3">
//                   {navItems.map((item, index) => (
//                     <motion.div
//                       key={item.href}
//                       initial={{ x: 50, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: 0.1 * index, duration: 0.4 }}
//                     >
//                       <Link
//                         href={item.href}
//                         onClick={toggleMenu}
//                         className="group flex items-center space-x-4 p-4 rounded-xl text-black hover:text-black hover:bg-gray-100 transition-all duration-300"
//                       >
//                         <div className="text-black group-hover:text-black transition-colors">
//                           {item.icon}
//                         </div>
//                         <span className="font-medium">{item.label}</span>
//                         <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
//                           <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                         </div>
//                       </Link>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Mobile Social Links */}
//                 <div className="px-6 py-6 border-t border-gray-200">
//                   <p className="text-black text-sm mb-4">Connect with me</p>
//                   <div className="flex items-center justify-center space-x-4">
//                     {socialLinks.map((social, index) => (
//                       <motion.div
//                         key={social.href}
//                         initial={{ y: 20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
//                       >
//                         <ParallaxTilt maxTilt={15} scale={1.15}>
//                           <Button
//                             asChild
//                             size="lg"
//                             variant="ghost"
//                             className={`text-black hover:text-black ${social.color} hover:bg-gray-100 rounded-full transition-all duration-300`}
//                           >
//                             <a
//                               href={social.href}
//                               target={social.href.startsWith('mailto') ? '_self' : '_blank'}
//                               rel="noreferrer"
//                               aria-label={social.label}
//                             >
//                               {social.icon}
//                             </a>
//                           </Button>
//                         </ParallaxTilt>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X, Download, User, Code, Briefcase, MessageSquare, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxTilt } from "@/components/ParallaxTilt";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  const navItems = [
    { href: "/about", label: "About", icon: <User className="size-4" /> },
    { href: "/projects", label: "Projects", icon: <Code className="size-4" /> },
    { href: "/skills", label: "Skills", icon: <Briefcase className="size-4" /> },
    { href: "/contact", label: "Contact", icon: <MessageSquare className="size-4" /> },
    { href: "/resume", label: "Resume", icon: <Download className="size-4" /> },
  ];

  const socialLinks = [
    { 
      href: "mailto:deepakjadon1907@gmail.com", 
      icon: <Mail className="size-4" />, 
      label: "Email",
      color: "hover:text-red-400"
    },
    { 
      href: "https://linkedin.com/in/deepak-jadon-612487272", 
      icon: <Linkedin className="size-4" />, 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      href: "https://github.com/deepakjadon1902", 
      icon: <Github className="size-4" />, 
      label: "GitHub",
      color: "hover:text-purple-400"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-2xl" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <ParallaxTilt maxTilt={8} scale={1.05} className="inline-block">
                <Link href="/" className="group flex items-center space-x-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-gray-100 backdrop-blur-sm border border-gray-300 rounded-lg px-3 py-2">
                      <span className="text-black font-bold text-lg tracking-wider">
                        DJ
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-black font-semibold text-xl tracking-wide group-hover:text-blue-600 transition-colors duration-300">
                      Deepak Jadon
                    </span>
                    <div className="text-xs text-black font-medium -mt-1">Full-Stack Developer</div>
                  </div>
                </Link>
              </ParallaxTilt>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:flex items-center"
            >
              <div className="flex items-center space-x-1 bg-gray-100/80 backdrop-blur-sm border border-gray-200 rounded-full px-2 py-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
                  >
                    <ParallaxTilt maxTilt={5} scale={1.02} className="inline-block">
                      <Link
                        href={item.href}
                        className={`relative group flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeSection === item.href
                            ? "text-black bg-white border border-blue-400"
                            : "text-black hover:text-black hover:bg-white/70"
                        }`}
                      >
                        <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                        {activeSection === item.href && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-white rounded-full border border-blue-400"
                            transition={{ type: "spring", duration: 0.6 }}
                          />
                        )}
                      </Link>
                    </ParallaxTilt>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Desktop Social Links */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden md:flex items-center space-x-2"
            >
              <div className="flex items-center space-x-1 bg-gray-100/80 backdrop-blur-sm border border-gray-200 rounded-full px-2 py-2">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.href}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * index + 0.6, duration: 0.4 }}
                  >
                    <ParallaxTilt maxTilt={8} scale={1.1} className="inline-block">
                      <Button
                        asChild
                        size="sm"
                        variant="ghost"
                        className={`text-black hover:text-black ${social.color} hover:bg-white/70 rounded-full transition-all duration-300`}
                      >
                        <a
                          href={social.href}
                          target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                          rel="noreferrer"
                          aria-label={social.label}
                        >
                          {social.icon}
                        </a>
                      </Button>
                    </ParallaxTilt>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="lg:hidden"
            >
              <ParallaxTilt maxTilt={10} scale={1.1}>
                <Button
                  onClick={toggleMenu}
                  size="sm"
                  variant="ghost"
                  className="text-black hover:text-black hover:bg-white/70 rounded-full p-2"
                >
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="size-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="size-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </ParallaxTilt>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white border-l border-gray-200 shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div>
                    <h3 className="text-black font-semibold text-lg">Menu</h3>
                    <p className="text-black text-sm">Navigate through portfolio</p>
                  </div>
                  <Button
                    onClick={toggleMenu}
                    size="sm"
                    variant="ghost"
                    className="text-black hover:text-black hover:bg-gray-100 rounded-full"
                  >
                    <X className="size-5" />
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 px-6 py-8 space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="group flex items-center space-x-4 p-4 rounded-xl text-black hover:text-black hover:bg-gray-100 transition-all duration-300"
                      >
                        <div className="text-black group-hover:text-black transition-colors">
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.label}</span>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Social Links */}
                <div className="px-6 py-6 border-t border-gray-200">
                  <p className="text-black text-sm mb-4">Connect with me</p>
                  <div className="flex items-center justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.href}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
                      >
                        <ParallaxTilt maxTilt={15} scale={1.15}>
                          <Button
                            asChild
                            size="lg"
                            variant="ghost"
                            className={`text-black hover:text-black ${social.color} hover:bg-gray-100 rounded-full transition-all duration-300`}
                          >
                            <a
                              href={social.href}
                              target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                              rel="noreferrer"
                              aria-label={social.label}
                            >
                              {social.icon}
                            </a>
                          </Button>
                        </ParallaxTilt>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}