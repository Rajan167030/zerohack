import Link from 'next/link'
import Image from 'next/image'
import React from "react";
import { Instagram, Linkedin, Github, Youtube, MessageCircle } from "lucide-react";

const links = [
    {
        title: 'Stackfolk',
        href: '#',
    },
    {
        title: 'ZeroCarbon',
        href: '#',
    },
    {
        title: 'Code of Conduct',
        href: '#',
    },
    {
        title: 'FAQ',
        href: '#',
    },
]

const socialLinks = [
    {
        icon: Instagram,
        href: 'https://www.instagram.com/code.in_dna',
        label: 'Instagram',
    },
    {
        icon: Linkedin,
        href: 'https://www.linkedin.com/company/dna-devs/',
        label: 'LinkedIn',
    },
    {
        icon: Github,
        href: 'https://github.com/DNA-DEVELOPERS-DEV',
        label: 'GitHub',
    },
    {
        icon: Youtube,
        href: 'https://youtube.com/@dnaofficialtech?si=H6IRfh5mZyvRIaKd',
        label: 'YouTube',
    },
]

const whatsappLinks = [
    {
        title: 'ZeroHack Community',
        href: 'https://chat.whatsapp.com/BWahignV3zD95Y3twcmyrh',
    },
    {
        title: 'Stackfolk WhatsApp',
        href: 'https://chat.whatsapp.com/LOC5LAO9iDAD8S9OtygofA',
    },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32 border-t border-primary/10 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto flex items-center justify-center w-fit">
                    <Image
                        src="/stackfolk.jpg"
                        alt="Stackfolk"
                        width={260}
                        height={80}
                        className="h-18 md:h-20 w-auto rounded-md object-contain scale-110"
                    />
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-8">
                    {socialLinks.map((social, index) => (
                        <Link
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.label}
                            className="p-2 rounded-full border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                            <social.icon className="size-5" />
                        </Link>
                    ))}
                </div>

                <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
                    {whatsappLinks.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-4 py-2 text-xs text-muted-foreground transition-all duration-300 hover:border-primary/55 hover:bg-primary/10 hover:text-primary"
                        >
                            <MessageCircle className="size-4" />
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </div>

                <div className="text-center space-y-2">
                    <p className="text-muted-foreground text-sm font-mono">
                        Last Week of November 2026 • Delhi, India
                    </p>
                    <p className="text-muted-foreground/60 text-xs font-mono">
                        A Stackfolk initiative powered by ZeroCarbon
                    </p>
                    <p className="text-muted-foreground/40 text-xs">
                        Inspired by Marvel&apos;s Doomsday. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
