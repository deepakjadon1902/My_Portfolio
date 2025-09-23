import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Suspense } from "react";
import { PageReveal } from "@/components/PageReveal";

export default function ProjectsPage() {
  return (
    <div className="dark min-h-screen pb-20">
      <Navbar />
      <PageReveal>
        <header className="pt-28 md:pt-32 pb-6 mx-auto w-[min(1100px,95%)]">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-wide">Projects</h1>
          <p className="mt-2 text-black/70">Explore real-world applications with glossy 3D cards and neon glows.</p>
        </header>
        <main className="mx-auto w-[min(1100px,95%)]">
          <Suspense fallback={<div className="glass rounded-xl p-6 animate-pulse text-black/60">Loading projects...</div>}>
            <Projects />
          </Suspense>
        </main>
      </PageReveal>
    </div>
  );
}