"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Camera, Calendar, MapPin, Users, Trophy, ExternalLink, X, ZoomIn, Sparkles } from "lucide-react";
import { TextEffect } from "@/components/motion-primitives/text-effect";

// NOTE: To add your real event images, save them in the /public/ folder (e.g. /public/gallery/event1.jpg)
// and replace the imageSrc paths in the events list below!
interface GalleryItem {
  id: string;
  title: string;
  category: "hackathon" | "bootcamp" | "awards" | "meetup";
  date: string;
  location: string;
  participants: string;
  description: string;
  imageSrc?: string; // Replace with your real photo path (e.g., "/gallery/event1.jpg")
  badgeColor?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "ZeroHack Chapter 1: The Genesis",
    category: "hackathon",
    date: "November 2025",
    location: "Delhi, India",
    participants: "450+ Hackers",
    description: "Our flagship inaugural hackathon where 100+ projects were built across Web3 and AI under intense 12-hour pressure.",
    imageSrc: "", // Place your real photo here
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  },
  {
    id: "2",
    title: "Midnight Sprint & Builder Jam",
    category: "hackathon",
    date: "October 2025",
    location: "Tech Hub, Delhi",
    participants: "250+ Builders",
    description: "High-voltage late-night coding sprint fueled by energy drinks, live mentor checkpoints, and rapid prototype demos.",
    imageSrc: "", // Place your real photo here
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  },
  {
    id: "3",
    title: "Grand Finale & Winner Felicitation",
    category: "awards",
    date: "November 2025",
    location: "Main Auditorium",
    participants: "₹1L+ Prizes Distributed",
    description: "Top 10 finalist teams pitched before leading VC partners and tech executives. Celebrated top 3 championship champions.",
    imageSrc: "", // Place your real photo here
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  },
  {
    id: "4",
    title: "AI Agents & Autonomous Workflows Bootcamp",
    category: "bootcamp",
    date: "August 2025",
    location: "Virtual & On-Ground",
    participants: "300+ Students",
    description: "Hands-on engineering workshop breaking down multi-agent orchestration, function calling, and real-time LLM architectures.",
    imageSrc: "", // Place your real photo here
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
  },
  {
    id: "5",
    title: "Web3 & Smart Contract Audit Session",
    category: "bootcamp",
    date: "July 2025",
    location: "Delhi Dev Space",
    participants: "180+ Developers",
    description: "Deep-dive technical session on smart contract vulnerability analysis, zero-knowledge concepts, and decentralized storage.",
    imageSrc: "", // Place your real photo here
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  },
  {
    id: "6",
    title: "Stackfolk Community Mixer & Project Showcase",
    category: "meetup",
    date: "June 2025",
    location: "Delhi, India",
    participants: "400+ Attendees",
    description: "Uniting designers, founders, and engineers to collaborate, find hackathon teammates, and demo open-source side projects.",
    imageSrc: "", // Place your real photo here
    badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/30",
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<"all" | "hackathon" | "bootcamp" | "awards" | "meetup">("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-16 md:py-32 bg-[#090a0a] relative overflow-hidden border-t border-border/40">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-10 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <TextEffect
            triggerOnView
            preset="fade-in-blur"
            speedSegment={0.3}
            as="p"
            className="font-mono text-primary uppercase tracking-wider text-sm mb-4"
          >
            Past Events & Memories
          </TextEffect>
          <h2 className="text-balance text-4xl font-bold lg:text-5xl tracking-tight text-white">
            Hall of <span className="text-primary drop-shadow-[0_0_25px_rgba(34,197,94,0.4)]">Legends</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Relive the high-stakes coding sprints, winner celebrations, and unforgettable developer energy from our past editions.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Moments" },
              { id: "hackathon", label: "Hackathons" },
              { id: "bootcamp", label: "Bootcamps" },
              { id: "awards", label: "Awards & Winners" },
              { id: "meetup", label: "Community Mixers" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(34,197,94,0.35)]"
                    : "bg-card/60 text-muted-foreground border-border/60 hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl border border-primary/20 bg-card/40 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:bg-card/80 hover:shadow-[0_0_35px_rgba(34,197,94,0.18)] hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image / Placeholder Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-secondary via-[#0f1712] to-[#070b08] flex items-center justify-center border-b border-border/40">
                {item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* High-aesthetic placeholder when real photo is not yet provided */
                  <div className="relative size-full flex flex-col items-center justify-center p-6 text-center">
                    {/* Background circuit grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.06)_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <div className="relative z-10 size-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-3 shadow-[0_0_25px_rgba(34,197,94,0.2)]">
                      <Camera className="size-6" />
                    </div>
                    <span className="relative z-10 font-mono text-xs uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                      Event Photo Placeholder
                    </span>
                    <span className="relative z-10 text-[11px] text-muted-foreground/60 mt-1">
                      Click to preview & swap image
                    </span>
                  </div>
                )}

                {/* Top overlay badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border backdrop-blur-md ${item.badgeColor}`}>
                    {item.category}
                  </span>
                  <div className="size-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="size-4" />
                  </div>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3.5 text-primary" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5 text-primary" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-primary font-semibold flex items-center gap-1">
                    <Users className="size-3.5" />
                    {item.participants}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform text-primary flex items-center gap-1">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User Guide Box */}
        <div className="mt-12 p-4 md:p-6 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <Sparkles className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Want to showcase your real event photos?</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Drop your images into <code className="text-primary font-mono bg-background/80 px-1.5 py-0.5 rounded border border-primary/20">public/gallery/</code> and set the <code className="text-primary font-mono bg-background/80 px-1.5 py-0.5 rounded border border-primary/20">imageSrc</code> in <code className="font-mono text-foreground">gallery-section.tsx</code>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Image Detail Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl border border-primary/30 bg-[#0e1010] p-6 shadow-[0_0_50px_rgba(34,197,94,0.25)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full border border-border bg-secondary/80 text-muted-foreground hover:text-foreground transition-all"
            >
              <X className="size-4" />
            </button>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-br from-secondary via-[#0f1712] to-[#070b08] flex items-center justify-center border border-primary/20 mb-5">
              {selectedItem.imageSrc ? (
                <Image
                  src={selectedItem.imageSrc}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-6">
                  <div className="size-16 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-3">
                    <Camera className="size-8" />
                  </div>
                  <p className="font-mono text-sm text-foreground font-semibold">{selectedItem.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">Photo placeholder ready for your image</p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground mb-3">
              <span className={`px-2.5 py-0.5 rounded-full border ${selectedItem.badgeColor}`}>
                {selectedItem.category.toUpperCase()}
              </span>
              <span>•</span>
              <span className="text-primary font-semibold">{selectedItem.participants}</span>
              <span>•</span>
              <span>{selectedItem.date}</span>
              <span>•</span>
              <span>{selectedItem.location}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{selectedItem.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
