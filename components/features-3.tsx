"use client";
import {Card, CardContent, CardHeader} from '@/components/ui/card'
import {Trophy, Users, Lightbulb, Rocket, Shield, Sparkles} from 'lucide-react'
import React, {ReactNode} from 'react'
import {TextEffect} from "@/components/motion-primitives/text-effect";
import {transitionVariants} from "@/lib/utils";
import {AnimatedGroup} from "@/components/motion-primitives/animated-group";

export default function Features() {
    return (
        <section id="tracks" className="py-16 md:py-32 bg-background">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="p"
                        className="font-mono text-primary uppercase tracking-wider text-sm mb-4">
                        Why Join ZeroHack
                    </TextEffect>
                    <h2 className="text-balance text-4xl font-bold lg:text-5xl tracking-tight">
                        Build. Survive. <span className="text-primary">Conquer.</span>
                    </h2>
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.2}
                        as="p"
                        className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
                        {"10-12 hours of intense innovation inspired by Marvel's Doomsday. When everything is on the line, what will you build to save the day?"}
                    </TextEffect>
                </div>
                <AnimatedGroup
                    triggerOnView
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
                >
                    <Card
                        className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y divide-primary/10 overflow-hidden border-primary/20 shadow-primary/5 *:text-center md:mt-16">
                        <div className="group shadow-primary/5 hover:bg-primary/5 transition-colors duration-300">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Trophy
                                        className="size-6 text-primary"
                                        aria-hidden
                                    />
                                </CardDecorator>

                                <h3 className="mt-6 font-semibold text-xl">Epic Prizes</h3>
                            </CardHeader>

                            <CardContent>
                                <p className="text-sm text-muted-foreground">Cash prizes, swag, and exclusive opportunities for the top teams.</p>
                            </CardContent>
                        </div>

                        <div className="group shadow-primary/5 hover:bg-primary/5 transition-colors duration-300">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Users
                                        className="size-6 text-primary"
                                        aria-hidden
                                    />
                                </CardDecorator>

                                <h3 className="mt-6 font-semibold text-xl">Elite Mentors</h3>
                            </CardHeader>

                            <CardContent>
                                <p className="mt-3 text-sm text-muted-foreground">Get guidance from industry experts and tech leaders throughout the event.</p>
                            </CardContent>
                        </div>

                        <div className="group shadow-primary/5 hover:bg-primary/5 transition-colors duration-300">
                            <CardHeader className="pb-3">
                                <CardDecorator>
                                    <Lightbulb
                                        className="size-6 text-primary"
                                        aria-hidden
                                    />
                                </CardDecorator>

                                <h3 className="mt-6 font-semibold text-xl">Innovation Tracks</h3>
                            </CardHeader>

                            <CardContent>
                                <p className="mt-3 text-sm text-muted-foreground">Multiple themed tracks to showcase your creativity and skills.</p>
                            </CardContent>
                        </div>
                    </Card>
                </AnimatedGroup>

                {/* Additional Features Grid */}
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
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <div className="flex items-start gap-4 p-4 rounded-xl border border-primary/10 bg-card/50 hover:border-primary/30 transition-colors duration-300">
                        <div className="p-2 rounded-lg bg-primary/10">
                            <Rocket className="size-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Workshops</h4>
                            <p className="text-sm text-muted-foreground mt-1">Hands-on learning sessions on cutting-edge tech.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl border border-primary/10 bg-card/50 hover:border-primary/30 transition-colors duration-300">
                        <div className="p-2 rounded-lg bg-primary/10">
                            <Shield className="size-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Safe Space</h4>
                            <p className="text-sm text-muted-foreground mt-1">Inclusive environment where all ideas are welcome.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl border border-primary/10 bg-card/50 hover:border-primary/30 transition-colors duration-300">
                        <div className="p-2 rounded-lg bg-primary/10">
                            <Sparkles className="size-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-semibold">Networking</h4>
                            <p className="text-sm text-muted-foreground mt-1">Connect with 500+ developers and industry pros.</p>
                        </div>
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    )
}

const CardDecorator = ({children}: { children: ReactNode }) => (
    <div
        className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-primary)15%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-primary)30%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div
            className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t border-primary/20">{children}</div>
    </div>
)
