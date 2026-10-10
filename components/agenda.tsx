"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Clock, Rocket, Code, Trophy, Users, Coffee, Sparkles, Mic, Zap } from "lucide-react";

export default function Agenda() {
    const timelineData = [
        {
            title: "Morning",
            content: (
                <div>
                    <p className="mb-6 text-sm font-normal text-muted-foreground">
                        The countdown begins. Get registered, form teams, and prepare for 10-12 hours of intense innovation.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Rocket className="size-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-primary">09:00 AM</p>
                                <h4 className="font-semibold text-foreground">Opening Ceremony</h4>
                                <p className="text-sm text-muted-foreground mt-1">Kickoff with keynote speakers, theme reveal, and team formation.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Code className="size-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-primary">10:00 AM</p>
                                <h4 className="font-semibold text-foreground">Hacking Begins</h4>
                                <p className="text-sm text-muted-foreground mt-1">The clock starts! Dive into building your projects with your team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Afternoon",
            content: (
                <div>
                    <p className="mb-6 text-sm font-normal text-muted-foreground">
                        Keep the momentum going. Refuel, learn, and push through the core development phase.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Coffee className="size-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-primary">01:00 PM</p>
                                <h4 className="font-semibold text-foreground">Lunch + Workshop</h4>
                                <p className="text-sm text-muted-foreground mt-1">Refuel with lunch while attending optional tech workshops.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Zap className="size-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-primary">02:00 PM</p>
                                <h4 className="font-semibold text-foreground">Power Sprint</h4>
                                <p className="text-sm text-muted-foreground mt-1">Intense coding phase. First checkpoint for progress review with mentors.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Users className="size-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-primary">05:00 PM</p>
                                <h4 className="font-semibold text-foreground">Snacks + Mentor Round</h4>
                                <p className="text-sm text-muted-foreground mt-1">Quick break and dedicated 1-on-1 mentor sessions for expert feedback.</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Evening",
            content: (
                <div>
                    <p className="mb-6 text-sm font-normal text-muted-foreground">
                        The final stretch. Polish your projects, present your innovations, and celebrate!
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Sparkles className="size-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-primary">06:00 PM</p>
                                <h4 className="font-semibold text-foreground">Final Sprint</h4>
                                <p className="text-sm text-muted-foreground mt-1">Last 2 hours! Polish your MVP, prepare demos, and finalize everything.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Mic className="size-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-primary">08:00 PM</p>
                                <h4 className="font-semibold text-foreground">Demo Time</h4>
                                <p className="text-sm text-muted-foreground mt-1">Code freeze! Teams present their projects in 3-minute pitches to judges.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <Trophy className="size-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-mono text-xs text-primary">09:00 PM</p>
                                <h4 className="font-semibold text-foreground">Awards Ceremony</h4>
                                <p className="text-sm text-muted-foreground mt-1">Winners announced and epic prizes distributed. Networking dinner follows!</p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Details",
            content: (
                <div>
                    <p className="mb-6 text-sm font-normal text-muted-foreground">
                        Important event information. More details will be announced soon.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-6 rounded-xl bg-card border border-primary/20">
                            <div className="flex items-center gap-3 mb-3">
                                <Clock className="size-5 text-primary" />
                                <h4 className="font-semibold">Date & Time</h4>
                            </div>
                            <p className="text-xl font-mono font-bold text-foreground">Last Week of November 2026</p>
                            <p className="text-sm text-muted-foreground mt-1">10-12 hours of intense hacking</p>
                        </div>
                        <div className="p-6 rounded-xl bg-card border border-primary/20">
                            <div className="flex items-center gap-3 mb-3">
                                <Rocket className="size-5 text-primary" />
                                <h4 className="font-semibold">Venue</h4>
                            </div>
                            <p className="text-xl font-mono font-bold text-foreground">Delhi, India</p>
                            <p className="text-sm text-muted-foreground mt-1">Offline event - venue TBA</p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="schedule" className="bg-background">
            <Timeline data={timelineData} />
        </section>
    );
}
