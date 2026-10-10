"use client";
import React, { useEffect } from "react";
import { X, Download, Printer, Zap, Calendar, MapPin, Trophy, Shield, Cpu, Bot, Boxes, Lightbulb, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-primary/30 bg-[#0c0d0d] shadow-[0_0_50px_rgba(34,197,94,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-border/60 px-6 py-4 bg-card/60 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-primary bg-primary/10 border border-primary/25 px-2.5 py-1 rounded-full">
              ZeroHack 2026
            </span>
            <span className="text-sm font-semibold text-foreground hidden sm:inline">
              Official Hackathon Brochure
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-primary rounded-lg border border-border hover:border-primary/40 bg-secondary/60 transition-all"
              title="Print / Save as PDF"
            >
              <Printer className="size-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg border border-border hover:bg-secondary/80 transition-all"
              aria-label="Close brochure"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 text-foreground" id="printable-brochure">
          {/* Header Banner */}
          <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-[#0d1f0d]/50 to-transparent p-6 md:p-8 overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
                  Stackfolk & ZeroCarbon Present
                </p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                  ZERO HACK <span className="text-primary">2026</span>
                </h2>
                <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-xl">
                  Delhi&apos;s most anticipated 10-12 hour hackathon inspired by Marvel&apos;s Doomsday. When the clock strikes zero, legends are born.
                </p>
              </div>

              <div className="flex flex-col gap-2 shrink-0 font-mono text-xs text-muted-foreground bg-background/80 border border-primary/20 p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-primary" />
                  <span>Last Week of Nov 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" />
                  <span>Delhi, India (Offline)</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Trophy className="size-4" />
                  <span>₹1,00,000+ Prize Pool</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl border border-primary/20 bg-card/40 p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold font-mono text-primary">500+</p>
              <p className="text-xs text-muted-foreground mt-1">Hackers & Builders</p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-card/40 p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold font-mono text-primary">10-12</p>
              <p className="text-xs text-muted-foreground mt-1">Intense Hours</p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-card/40 p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold font-mono text-primary">5</p>
              <p className="text-xs text-muted-foreground mt-1">Premier Tracks</p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-card/40 p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold font-mono text-primary">50+</p>
              <p className="text-xs text-muted-foreground mt-1">Mentors & Judges</p>
            </div>
          </div>

          {/* The 5 Tracks */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" />
              <span>Hackathon Tracks</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-primary/20 bg-card/30 flex gap-3">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Bot className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">1. AI Agentic</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Autonomous multi-agent systems, proactive LLM reasoning, workflow automation, and custom tool calling.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-primary/20 bg-card/30 flex gap-3">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Boxes className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">2. Web3 & Blockchain</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Decentralized protocols, DeFi instruments, smart contracts, on-chain governance, and cross-chain dApps.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-primary/20 bg-card/30 flex gap-3">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Cpu className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">3. IoT & Smart Hardware</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Edge computing, smart sensors, robotics, telemetry pipelines, and real-time physical automation.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-primary/20 bg-card/30 flex gap-3">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Shield className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">4. Cyber Security</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Zero-trust infrastructure, threat detection, ethical hacking, privacy utilities, and vulnerability defense.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-primary/20 bg-card/30 flex gap-3 md:col-span-2">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Lightbulb className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">5. Open Innovation (Wildcard)</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Cross-domain disruptive ideas across FinTech, HealthTech, Climate, EdTech, or any breakthrough that defies boundaries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Perks & Benefits */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" />
              <span>Participant Perks & Swag</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Cash Prizes & Grand Trophy",
                "Official ZeroHack Custom Swag & T-Shirts",
                "Free Meals, Midnight Snacks & Energy Drinks",
                "Direct VC & Hiring Opportunities",
                "Mentorship from Top Tech Leaders",
                "Certificates & Exclusive Badges",
              ].map((perk, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card/20 text-xs">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rules & Eligibility */}
          <div className="p-5 rounded-xl border border-border/80 bg-secondary/30">
            <h4 className="font-semibold text-sm text-foreground mb-2">Eligibility & Guidelines</h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground leading-relaxed">
              <li>Open to all university students, self-taught developers, and early professionals.</li>
              <li>Teams of 2 to 4 members are allowed (solo hackers can form teams during kickoff).</li>
              <li>All project code must be developed during the hackathon hours. Pre-existing templates must be declared.</li>
              <li>Judging criteria: Innovation (30%), Technical Execution (30%), Impact (20%), and Pitch/Demo (20%).</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 px-6 py-4 bg-card/60 backdrop-blur-sm">
          <p className="text-xs text-muted-foreground font-mono">
            Organized by Stackfolk • Powered by ZeroCarbon
          </p>

          <div className="flex items-center gap-3">
            <Button
              onClick={handlePrint}
              variant="outline"
              size="sm"
              className="border-primary/30 text-xs font-mono"
            >
              <Download className="size-3.5 mr-1.5" />
              Save / Print PDF
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs font-semibold shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              <a href="https://luma.com/pp38n2ts" target="_blank" rel="noreferrer">
                <Zap className="size-3.5 mr-1.5" />
                Register on Luma
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
