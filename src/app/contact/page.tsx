import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";
import { PageReveal } from "@/components/PageReveal";

export default function ContactPage() {
  return (
    <div className="dark min-h-screen pb-20">
      <Navbar />

      <PageReveal>
        <header className="relative pt-28 md:pt-32 pb-6">
          <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
            <div
              className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 size-[700px] rounded-full blur-3xl"
              style={{ background: "radial-gradient(closest-side, var(--neo-aqua), transparent)" }}
            />
          </div>
          <div className="mx-auto w-[min(1100px,95%)]">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-wide">Contact</h1>
            <p className="mt-2 text-black/70">Let's build something futuristic together.</p>
          </div>
        </header>

        <main className="mx-auto w-[min(1100px,95%)]">
          <Suspense fallback={<div className="glass rounded-xl p-6 animate-pulse text-black/60">Loading contact form...</div>}>
            <ContactForm />
          </Suspense>
        </main>
      </PageReveal>
    </div>
  );
}