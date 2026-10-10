"use client";

import { motion } from "motion/react";
import { BackgroundLines } from "@/components/ui/background-lines";
import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";

export default function TeamPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a]">
      <BackgroundLines className="relative w-full pt-24 pb-16">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="mb-4 font-mono text-sm tracking-widest text-primary">
              THE PEOPLE BEHIND
            </p>
            <h1 className="mb-6 text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-b from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                CORE TEAM
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Meet the core members powering ZeroHack.
            </p>
          </motion.div>

          <section className="mt-6">
            <AnimatedTestimonialsDemo />
          </section>
        </div>
      </BackgroundLines>
    </main>
  );
}
