"use client";
import React from 'react';
import { Bot, Boxes, Cpu, ShieldAlert, Lightbulb, ArrowUpRight } from 'lucide-react';
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { transitionVariants } from "@/lib/utils";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

const tracks = [
  {
    id: "01",
    badge: "Track 01 • Autonomous AI",
    title: "AI Agentic",
    icon: Bot,
    description:
      "Build autonomous multi-agent systems, reasoning workflows, tool-using agents, and intelligent automated workflows that operate without friction.",
    tags: ["Autonomous Agents", "Multi-Agent Swarms", "LLM Tool-Calling", "Workflow Automation"],
    colSpan: "lg:col-span-1",
  },
  {
    id: "02",
    badge: "Track 02 • Decentralized Web",
    title: "Web3 & Blockchain",
    icon: Boxes,
    description:
      "Construct trustless protocols, smart contracts, next-gen DeFi architectures, on-chain governance, and verifiable decentralized applications.",
    tags: ["Smart Contracts", "DeFi Protocols", "Cross-Chain", "Decentralized Apps"],
    colSpan: "lg:col-span-1",
  },
  {
    id: "03",
    badge: "Track 03 • Hardware & Edge",
    title: "IoT & Smart Devices",
    icon: Cpu,
    description:
      "Bridge hardware and digital intelligence with embedded devices, sensor telemetry, edge computing, robotics, and real-time physical automation.",
    tags: ["Edge Computing", "Embedded Systems", "Sensor Networks", "Robotics"],
    colSpan: "lg:col-span-1",
  },
  {
    id: "04",
    badge: "Track 04 • Defense & Security",
    title: "Cyber Security",
    icon: ShieldAlert,
    description:
      "Build proactive defense utilities, zero-trust architectures, vulnerability scanners, cryptography tools, and AI-powered intrusion protection.",
    tags: ["Zero-Trust Security", "Threat Detection", "Penetration Testing", "Cryptography"],
    colSpan: "lg:col-span-1",
  },
  {
    id: "05",
    badge: "Track 05 • Wildcard Innovation",
    title: "Open Innovation",
    icon: Lightbulb,
    description:
      "Got a disruptive vision that defies categorization? Build groundbreaking solutions across FinTech, HealthTech, Climate, EdTech, or any visionary idea that changes the game.",
    tags: ["Wildcard Ideas", "Social Impact", "Cross-Domain Tech", "Disruptive Solutions"],
    colSpan: "md:col-span-2 lg:col-span-2",
  },
];

export default function Features() {
  return (
    <section id="tracks" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Glow background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <TextEffect
            triggerOnView
            preset="fade-in-blur"
            speedSegment={0.3}
            as="p"
            className="font-mono text-primary uppercase tracking-wider text-sm mb-4"
          >
            Hackathon Tracks
          </TextEffect>
          <h2 className="text-balance text-4xl font-bold lg:text-5xl tracking-tight">
            Choose Your <span className="text-primary drop-shadow-[0_0_25px_rgba(34,197,94,0.4)]">Battleground</span>
          </h2>
          <TextEffect
            triggerOnView
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.2}
            as="p"
            className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            {"5 premier tracks to ignite your innovation. Pick your domain, assemble your squad, and build the future before time runs out."}
          </TextEffect>
        </div>

        <AnimatedGroup
          triggerOnView
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.2,
                },
              },
            },
            ...transitionVariants,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tracks.map((track) => {
            const IconComponent = track.icon;
            return (
              <div
                key={track.id}
                className={`group relative flex flex-col justify-between rounded-2xl border border-primary/20 bg-card/60 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/90 hover:shadow-[0_0_35px_rgba(34,197,94,0.15)] hover:-translate-y-1 overflow-hidden ${track.colSpan}`}
              >
                {/* Subtle card glow overlay */}
                <div className="absolute -top-12 -right-12 size-36 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      {track.badge}
                    </span>
                    <div className="size-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all">
                      <IconComponent className="size-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    <span>{track.title}</span>
                    <ArrowUpRight className="size-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary" />
                  </h3>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {track.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary/80 border border-border text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </AnimatedGroup>
      </div>
    </section>
  );
}
