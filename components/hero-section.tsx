"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";
import LanyardWithControls from "@/components/lanyard-with-controls";
import { Zap, MapPin, Calendar } from 'lucide-react';
import Dither from "@/components/Dither";
import { motion } from "motion/react";

const poweredBy = [
    {
        name: "Stackfolk",
        logo: "/stackfolk.jpg",
        logoClass: "h-12 w-auto rounded-md object-contain scale-105",
    },
    {
        name: "ZeroCarbon",
        logo: "/ZeroCarbon__1_-removebg-preview.png",
        logoClass: "h-10 w-auto",
        tier: "Diamond Tier (Highest)",
    },
    {
        name: "ZeroHack",
        logo: "/stackfolk.jpg",
        logoClass: "h-10 w-auto rounded-sm",
    },
];

export default function HeroSection() {
    return (
        <main className="overflow-hidden">
            <section className='min-h-screen relative bg-[#0a0a0a]'>
                {/* Dither background - only in hero section */}
                <div className='absolute inset-0 w-full h-full pointer-events-none overflow-hidden'>
                    <Dither
                        waveColor={[0.15, 0.5, 0.3]}
                        disableAnimation={false}
                        enableMouseInteraction={true}
                        mouseRadius={0.3}
                        colorNum={4}
                        pixelSize={2}
                        waveAmplitude={0.3}
                        waveFrequency={3}
                        waveSpeed={0.05}
                    />
                </div>
                {/* Subtle dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="relative z-10 pb-24 pt-32 md:pt-40 md:pb-32 lg:pb-40 lg:pt-48 flex flex-col lg:grid lg:grid-cols-2 gap-8">
                    <div className="relative mx-auto flex max-w-2xl flex-col px-6 lg:px-12 lg:block">
                        <div className="mx-auto max-w-2xl text-center lg:ml-0 lg:text-left">
                            {/* STACKFOLK Badge */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 mb-6"
                            >
                                <div className="bg-destructive px-3 py-1 rounded">
                                    <span className="font-bold text-white text-sm tracking-wider">STACK</span>
                                </div>
                                <span className="font-bold text-foreground text-sm tracking-wider">FOLK</span>
                            </motion.div>

                            {/* Main Title - ZERO HACK on one line */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative"
                            >
                                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none whitespace-nowrap"
                                    style={{
                                        fontFamily: 'system-ui, -apple-system, sans-serif',
                                        fontWeight: 900,
                                    }}>
                                    <span className="bg-gradient-to-b from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
                                        style={{
                                            filter: 'drop-shadow(0 0 60px rgba(34, 197, 94, 0.4))',
                                            WebkitTextStroke: '1px rgba(34, 197, 94, 0.2)',
                                        }}>
                                        ZERO HACK
                                    </span>
                                </h1>
                                {/* Green accent line */}
                                <motion.div 
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="h-1 md:h-1.5 bg-gradient-to-r from-primary via-primary to-transparent mt-3 origin-left rounded-full max-w-md"
                                    style={{ boxShadow: '0 0 30px rgba(34, 197, 94, 0.6)' }}
                                />
                            </motion.div>

                            {/* HACKATHON subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest text-muted-foreground/80 uppercase"
                            >
                                Hackathon
                            </motion.p>

                            {/* Event Details */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
                            >
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="size-4 text-primary" />
                                    <span className="font-mono text-sm">Last Week of November 2026</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="size-4 text-primary" />
                                    <span className="font-mono text-sm">Delhi, India</span>
                                </div>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
                            >
                                When the clock strikes zero, legends are born. Join Delhi&apos;s most epic 10-12 hour hackathon where innovators unite to build the future.
                            </motion.p>

                            {/* Stats badges */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start"
                            >
                                <span className="flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full text-sm font-mono text-primary">
                                    <span className="size-2 rounded-full bg-primary animate-pulse" />
                                    10-12 Hours
                                </span>
                                <span className="bg-secondary/80 border border-border px-4 py-2 rounded-full text-sm font-mono text-muted-foreground">
                                    Offline Event
                                </span>
                                <span className="bg-secondary/80 border border-border px-4 py-2 rounded-full text-sm font-mono text-muted-foreground">
                                    Epic Prizes
                                </span>
                            </motion.div>

                            {/* CTA Buttons */}
                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.8,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                            >
                                <Button
                                    asChild
                                    size="lg"
                                    className="px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300 font-mono font-semibold">
                                    <Link href="#register">
                                        <Zap className="size-4 mr-2" />
                                        <span className="text-nowrap">Register Now</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="px-6 text-base border-border hover:bg-secondary hover:border-primary/30 font-mono">
                                    <Link href="#about">
                                        <span className="text-nowrap">Learn More</span>
                                    </Link>
                                </Button>
                            </AnimatedGroup>
                        </div>
                    </div>
                    
                    {/* Lanyard Section */}
                    <LanyardWithControls
                        position={[0, 0, 18]}
                        containerClassName='relative w-full h-[55vh] lg:h-[72vh] select-none overflow-hidden'
                        defaultName="" />
                </div>
            </section>
            
            {/* Partners Slider */}
            <section className="bg-background py-12 md:py-16 border-t border-border/50">
                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}
                    className="group relative m-auto max-w-6xl px-6"
                >
                    <div className="flex flex-col items-center md:flex-row">
                        <div className="md:max-w-44 md:border-r md:border-primary/20 md:pr-6">
                            <p className="text-sm font-mono uppercase text-primary">Powered by</p>
                        </div>
                        <div className="relative py-6 md:w-[calc(100%-11rem)]">
                            <InfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={112}>
                                {poweredBy.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex items-center gap-3 rounded-xl border border-primary/15 bg-card/40 px-4 py-2"
                                    >
                                        <Image
                                            src={item.logo}
                                            alt={item.name}
                                            width={120}
                                            height={48}
                                            className={item.logoClass}
                                        />
                                        <div className="flex flex-col">
                                            <span className="font-mono font-bold text-foreground">{item.name}</span>
                                            {item.tier ? (
                                                <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                                                    {item.tier}
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </InfiniteSlider>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </AnimatedGroup>
            </section>
        </main>
    )
}
