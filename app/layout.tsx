import React from "react"
import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import {Analytics} from '@vercel/analytics/next'
import './globals.css'
import FooterSection from "@/components/footer";
import {HeroHeader} from "@/components/header";

const _geist = Geist({subsets: ["latin"]});
const _geistMono = Geist_Mono({subsets: ["latin"]});

export const metadata: Metadata = {
    title: 'ZeroHack | The Ultimate Doomsday Hackathon by Stackfolk',
    description: 'ZeroHack - When the clock strikes zero, legends are born. Join Delhi\'s most epic hackathon powered by ZeroCarbon. Last week of November 2026. Build. Survive. Conquer.',
    generator: 'Stackfolk x ZeroCarbon',
    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-icon.png',
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark overflow-x-hidden">
        <body className="font-sans antialiased overflow-x-hidden bg-background">
        <HeroHeader/>
        {children}
        <FooterSection/>
        <Analytics/>
        </body>
        </html>
    )
}
