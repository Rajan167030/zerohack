import {Button} from '@/components/ui/button'
import Link from 'next/link'
import {TextEffect} from "./motion-primitives/text-effect"
import {AnimatedGroup} from "@/components/motion-primitives/animated-group";
import {transitionVariants} from "@/lib/utils";
import {Zap, Mail, Users} from "lucide-react";

export default function CallToAction() {
    return (
        <section id="sponsorship" className="py-16 mx-2 bg-background">
            <div id="register" className="sr-only" aria-hidden="true" />
            <div className="mx-auto max-w-5xl rounded-3xl border border-primary/30 bg-gradient-to-b from-primary/5 to-transparent px-6 py-12 md:py-20 lg:py-32 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                
                <div className="text-center relative z-10">
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="p"
                        className="font-mono text-primary uppercase tracking-wider text-sm mb-4">
                        The Clock is Ticking
                    </TextEffect>
                    <h2 className="text-balance text-4xl font-bold lg:text-5xl tracking-tight">
                        Ready to Face <span className="text-primary drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]">Doomsday?</span>
                    </h2>
                    <TextEffect
                        triggerOnView
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.3}
                        as="p"
                        className="mt-4 text-muted-foreground max-w-xl mx-auto">
                        Limited spots available. Register now to secure your place at Delhi&apos;s most anticipated hackathon. Don&apos;t let time run out.
                    </TextEffect>

                    {/* Stats */}
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
                        className="mt-10 flex flex-wrap justify-center gap-8 md:gap-16"
                    >
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-mono font-bold text-primary">500+</p>
                            <p className="text-sm text-muted-foreground mt-1">Hackers</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-mono font-bold text-primary">10-12</p>
                            <p className="text-sm text-muted-foreground mt-1">Hours</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-mono font-bold text-primary">50+</p>
                            <p className="text-sm text-muted-foreground mt-1">Mentors</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl font-mono font-bold text-primary">1</p>
                            <p className="text-sm text-muted-foreground mt-1">Epic Event</p>
                        </div>
                    </AnimatedGroup>

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
                        className="mt-12 flex flex-wrap justify-center gap-4"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300 font-mono font-semibold px-8">
                            <Link href="https://luma.com/pp38n2ts">
                                <Zap className="size-4 mr-2" />
                                <span>Register Now</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 font-mono">
                            <Link href="#">
                                <Users className="size-4 mr-2" />
                                <span>Become a Sponsor</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="ghost"
                            className="hover:bg-primary/10 font-mono">
                            <Link href="#">
                                <Mail className="size-4 mr-2" />
                                <span>Contact Us</span>
                            </Link>
                        </Button>
                    </AnimatedGroup>

                    <p className="mt-8 text-xs text-muted-foreground font-mono">
                        Registration opens soon. Join our waitlist to get notified first.
                    </p>
                </div>
            </div>
        </section>
    )
}
