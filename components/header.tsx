"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  useNavbar,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Image from "next/image";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import BrochureModal from "@/components/brochure-modal";

export const HeroHeader = () => {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Tracks",
      link: "#tracks",
    },
    {
      name: "Schedule",
      link: "#schedule",
    },
    {
      name: "Gallery",
      link: "#gallery",
    },
    {
      name: "Sponsorship",
      link: "#sponsorship",
    },
    {
      name: "Team",
      link: "/team",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsBrochureOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-mono font-medium text-primary transition-all duration-200 hover:border-primary/60 hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
              >
                <FileText className="size-3.5" />
                <span>Brochure</span>
              </button>
              <NavbarButton href="https://luma.com/pp38n2ts" variant="gradient">
                Register Now
              </NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsBrochureOpen(true);
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-mono font-semibold text-primary transition-all"
                >
                  <FileText className="size-4" />
                  <span>View Brochure</span>
                </button>
                <NavbarButton
                  as="a"
                  href="https://luma.com/pp38n2ts"
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="gradient"
                  className="w-full"
                >
                  Register Now
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>

      {/* Interactive Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </>
  );
};

const NavbarLogo = () => {
  const { visible } = useNavbar();

  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center px-1 py-0.5"
    >
      <Image
        src="/stackfolk.jpg"
        alt="Stackfolk"
        width={220}
        height={60}
        className={cn(
          "w-auto rounded-md object-contain transition-all duration-300",
          visible
            ? "h-8 scale-90" // Compact/small when scrolled down and navbar is shrunk
            : "h-12 md:h-14 scale-110" // Big when expanded at the top of the page
        )}
        priority
      />
    </a>
  );
};
