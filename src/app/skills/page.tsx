import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import { Suspense } from "react";
import { PageReveal } from "@/components/PageReveal";

export default function SkillsPage() {
  return (
    <div className="dark min-h-screen pb-20">
      <Navbar />
      <PageReveal>
        <header className="pt-28 md:pt-32 pb-6 mx-auto w-[min(1100px,95%)]">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-wide">Skills</h1>
          <p className="mt-2 text-black/70">Technical and professional skills with animated glossy badges.</p>
        </header>
        <main className="mx-auto w-[min(1100px,95%)]">
          <Suspense fallback={<div className="glass rounded-xl p-6 animate-pulse text-black/60">Loading skills...</div>}>
            <Skills />
          </Suspense>
        </main>
      </PageReveal>
    </div>
  );
}