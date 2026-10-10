"use client";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { transitionVariants } from "@/lib/utils";
import { Flame, Clock, Target, Skull } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-32 relative overflow-hidden bg-background">
            {/* Background accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mx-auto max-w-5xl px-6 relative z-10">
                <div className="text-center mb-16">
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="p"
                        className="font-mono text-primary uppercase tracking-wider text-sm mb-4">
                        The Story
                    </TextEffect>
                    <h2 className="text-3xl font-bold md:text-5xl tracking-tight max-w-3xl mx-auto text-balance">
                        When Heroes Rise in the <span className="text-primary">Final Hour</span>
                    </h2>
                </div>

                <AnimatedGroup
                    triggerOnView
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.3,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Inspired by Marvel&apos;s upcoming Doomsday saga, <span className="text-foreground font-semibold">ZeroHack</span> is not just a hackathon—it&apos;s a battle against the clock where innovation is your only weapon.
                        </p>
                        <div className="text-muted-foreground leading-relaxed">
                            Organized by <span className="text-foreground font-semibold">Stackfolk</span>, a thriving tech community powered by <LinkPreview url="https://www.zerocarbon.org.in" className="font-semibold text-primary hover:text-primary/80">ZeroCarbon</LinkPreview>, this event brings together the brightest minds in Delhi to build solutions that could change the world.
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Whether you&apos;re a seasoned developer or a first-time hacker, ZeroHack welcomes all who dare to create under pressure. The theme is survival through innovation—build something extraordinary before time runs out.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 rounded-2xl border border-primary/20 bg-card/50 hover:border-primary/40 transition-colors duration-300 group">
                            <Flame className="size-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all" />
                            <h3 className="font-semibold text-lg mb-2">Intense</h3>
                            <p className="text-sm text-muted-foreground">10-12 hours of intense coding and creativity</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-primary/20 bg-card/50 hover:border-primary/40 transition-colors duration-300 group">
                            <Clock className="size-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all" />
                            <h3 className="font-semibold text-lg mb-2">Urgent</h3>
                            <p className="text-sm text-muted-foreground">The countdown adds to the thrill</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-primary/20 bg-card/50 hover:border-primary/40 transition-colors duration-300 group">
                            <Target className="size-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all" />
                            <h3 className="font-semibold text-lg mb-2">Focused</h3>
                            <p className="text-sm text-muted-foreground">Build with purpose and impact</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-primary/20 bg-card/50 hover:border-primary/40 transition-colors duration-300 group">
                            <Skull className="size-8 text-primary mb-4 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all" />
                            <h3 className="font-semibold text-lg mb-2">Epic</h3>
                            <p className="text-sm text-muted-foreground">Doomsday themed experience</p>
                        </div>
                    </div>
                </AnimatedGroup>

                {/* Quote */}
                <AnimatedGroup
                    triggerOnView
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.5,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}
                    className="mt-16"
                >
                    <blockquote className="text-center">
                        <p className="text-2xl md:text-3xl font-semibold text-foreground italic max-w-3xl mx-auto leading-relaxed">
                            &ldquo;In the face of the end, we don&apos;t give up. We <span className="text-primary">build</span>.&rdquo;
                        </p>
                        <footer className="mt-4 text-muted-foreground font-mono text-sm">
                            — The ZeroHack Manifesto
                        </footer>
                    </blockquote>
                </AnimatedGroup>
            </div>
        </section>
    )
}
