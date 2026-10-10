import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import BentoFeatures from "@/components/bento-features";
import Features from "@/components/features-3";
import GallerySection from "@/components/gallery-section";
import Agenda from "@/components/agenda";
import CallToAction from "@/components/call-to-action";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <BentoFeatures/>
            <Features/>
            <GallerySection/>
            <Agenda/>
            <CallToAction/>
        </>
    )
}
