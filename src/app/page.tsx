
// "use client";

// import Navbar from "@/components/Navbar";
// import About from "@/components/About";
// import Projects from "@/components/Projects";
// import Skills from "@/components/Skills";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ParallaxTilt } from "@/components/ParallaxTilt";

// export default function Home() {
//   return (
//     <div className="min-h-screen pb-20 bg-white">
//       <Navbar />
      
//       {/* Enhanced Hero Section */}
//       <header className="relative pt-32 md:pt-40 pb-20">
//         {/* Refined Background Effects */}
//         <div className="absolute inset-0 -z-10" aria-hidden>
//           <div className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-3xl opacity-10"
//                style={{ background: "radial-gradient(ellipse at center, #00d4ff 0%, transparent 70%)" }} />
//           <div className="pointer-events-none absolute right-1/4 top-32 w-96 h-96 rounded-full blur-2xl opacity-5"
//                style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 60%)" }} />
//         </div>

//         <div className="mx-auto w-[min(1200px,95%)] text-center">
//           {/* Enhanced Hero Image with Overlay Text */}
//           <motion.div
//             initial={{ opacity: 0, y: 32 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1, duration: 0.8 }}
//             className="mt-16"
//           >
//             <ParallaxTilt className="mx-auto max-w-[1200px]" maxTilt={8} scale={1.02}>
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-300"></div>
//                 <div className="relative">
//                   <Image
//                     src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a9bdc8b-f763-4304-a362-c1b9df5e5727/generated_images/wide-cinematic-hero-image-for-a-develope-75677e68-20250919055245.jpg"
//                     alt="Professional developer workspace showcasing modern tech stack and elegant design"
//                     width={1200}
//                     height={520}
//                     priority
//                     className="mx-auto rounded-2xl shadow-xl ring-1 ring-gray-200 backdrop-blur-sm"
//                   />
//                   {/* Overlay Text on Image */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200">
//                       <div className="inline-block px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-xs font-medium tracking-wider uppercase mb-4">
//                         Digital Craftsman
//                       </div>
//                       <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-3">
//                         Deepak Jadon
//                       </h1>
//                       <h2 className="text-lg md:text-xl font-medium text-gray-700 mb-4">
//                         Full Stack Developer 
//                       </h2>
//                       <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto leading-relaxed">
//                         Crafting exceptional digital experiences through innovative code, elegant design, and cutting-edge technology solutions.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </ParallaxTilt>
//           </motion.div>
//         </div>
//       </header>

//       {/* Enhanced Main Content */}
//       <main className="mx-auto w-[min(1200px,95%)] space-y-20">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <About />
//         </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Projects />
//         </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Skills />
//         </motion.div>
//       </main>

//       {/* Enhanced Footer */}
//       <footer className="mx-auto w-[min(1200px,95%)] mt-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="relative"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl blur-sm"></div>
//           <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-700/30">
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//               <div className="text-slate-400">
//                 <span className="font-medium text-slate-300">© {new Date().getFullYear()} Deepak Jadon</span>
//                 <span className="hidden sm:inline"> • </span>
//                 <span className="block sm:inline text-sm">Crafted with precision & passion</span>
//               </div>
//               <div className="flex gap-6">
//                 <a href="https://linkedin.com/in/deepak-jadon-612487272" className="text-slate-400 hover:text-cyan-300 transition-colors duration-300">
//                   LinkedIn
//                 </a>
//                 <a href="https://github.com/deepakjadon1902" className="text-slate-400 hover:text-cyan-300 transition-colors duration-300">
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </footer>
//     </div>
//   );
// }


"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxTilt } from "@/components/ParallaxTilt";

export default function Home() {
  return (
    <div className="min-h-screen pb-20 bg-white">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <header className="relative pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        {/* Refined Background Effects */}
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="pointer-events-none absolute left-1/2 top-8 sm:top-12 md:top-16 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full blur-2xl sm:blur-3xl opacity-10"
               style={{ background: "radial-gradient(ellipse at center, #00d4ff 0%, transparent 70%)" }} />
          <div className="pointer-events-none absolute right-1/4 top-16 sm:top-24 md:top-32 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full blur-xl sm:blur-2xl opacity-5"
               style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 60%)" }} />
        </div>

        <div className="mx-auto w-full max-w-7xl text-center">
          {/* Enhanced Hero Image with Overlay Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-8 sm:mt-12 md:mt-16"
          >
            <ParallaxTilt className="mx-auto max-w-[1200px]" maxTilt={8} scale={1.02}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 rounded-lg sm:rounded-xl md:rounded-2xl blur-sm sm:blur-lg opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2a9bdc8b-f763-4304-a362-c1b9df5e5727/generated_images/wide-cinematic-hero-image-for-a-develope-75677e68-20250919055245.jpg"
                    alt="Professional developer workspace showcasing modern tech stack and elegant design"
                    width={1200}
                    height={520}
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="mx-auto rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl ring-1 ring-gray-200 w-full h-auto object-cover min-h-[300px] sm:min-h-[400px] md:min-h-[520px]"
                  />
                  {/* Overlay Text on Image */}
                  <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-6">
                    <div className="text-center bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-200 w-full max-w-[280px] sm:max-w-lg md:max-w-2xl">
                      <div className="inline-block px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-[10px] sm:text-xs font-medium tracking-wider uppercase mb-3 sm:mb-4">
                        Digital Craftsman
                      </div>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight mb-3 sm:mb-4">
                        Deepak Jadon
                      </h1>
                      <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-700 mb-3 sm:mb-4">
                        Full Stack Developer 
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                        Crafting exceptional digital experiences through innovative code, elegant design, and cutting-edge technology solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxTilt>
          </motion.div>
        </div>
      </header>

      {/* Enhanced Main Content */}
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>
      </main>

      {/* Enhanced Footer */}
      <footer className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl blur-sm"></div>
          <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center border border-slate-700/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="text-slate-400 text-center sm:text-left">
                <span className="font-medium text-slate-300 text-sm sm:text-base">© {new Date().getFullYear()} Deepak Jadon</span>
                <span className="hidden sm:inline"> • </span>
                <span className="block sm:inline text-xs sm:text-sm">Crafted with precision & passion</span>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <a 
                  href="https://linkedin.com/in/deepak-jadon-612487272" 
                  className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/deepakjadon1902" 
                  className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}