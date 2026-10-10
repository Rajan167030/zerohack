"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  Trophy, 
  Users, 
  Lightbulb, 
  Code, 
  Zap,
  Coffee
} from "lucide-react";
import { motion } from "motion/react";

export default function BentoFeatures() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <p className="font-mono text-primary uppercase tracking-wider text-sm mb-4">
            What Awaits You
          </p>
          <h2 className="text-balance text-3xl font-bold lg:text-4xl tracking-tight">
            The <span className="text-primary">ZeroHack</span> Experience
          </h2>
        </div>
        
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-border p-2 items-center space-x-2 bg-card"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-primary/60 shrink-0" />
        <div className="w-full bg-muted h-4 rounded-full" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-border p-2 items-center space-x-2 w-3/4 ml-auto bg-card"
      >
        <div className="w-full bg-muted h-4 rounded-full" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-primary/60 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-border p-2 items-center space-x-2 bg-card"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-primary/60 shrink-0" />
        <div className="w-full bg-muted h-4 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.2 } },
    hover: { width: ["0%", "100%"], transition: { duration: 2 } },
  };
  const arr = new Array(6).fill(0);
  const maxWidths = ["72%", "58%", "84%", "66%", "93%", "61%"];
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skeleton-two" + i}
          variants={variants}
          style={{ maxWidth: maxWidths[i % maxWidths.length] }}
          className="flex flex-row rounded-full border border-border p-2 items-center space-x-2 bg-muted w-full h-4"
        />
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { scale: 1 },
    animate: { scale: 1.02, transition: { duration: 0.2 } },
  };
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      variants={variants}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
      <Zap className="h-12 w-12 text-primary/60" />
      <p className="text-xs text-muted-foreground mt-2 font-mono">DOOMSDAY</p>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = { initial: { x: 20, rotate: -5 }, hover: { x: 0, rotate: 0 } };
  const second = { initial: { x: -20, rotate: 5 }, hover: { x: 0, rotate: 0 } };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-card p-4 border border-border flex flex-col items-center justify-center"
      >
        <Code className="h-8 w-8 text-primary" />
        <p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">
          Build Fast
        </p>
        <p className="border border-primary/50 bg-primary/10 text-primary text-xs rounded-full px-2 py-0.5 mt-4">
          Sprint
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-card p-4 border border-border flex flex-col items-center justify-center">
        <Zap className="h-8 w-8 text-primary" />
        <p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">
          Win Big
        </p>
        <p className="border border-primary/50 bg-primary/10 text-primary text-xs rounded-full px-2 py-0.5 mt-4">
          Epic
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-card p-4 border border-border flex flex-col items-center justify-center"
      >
        <Coffee className="h-8 w-8 text-primary" />
        <p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground mt-4">
          Stay Fueled
        </p>
        <p className="border border-primary/50 bg-primary/10 text-primary text-xs rounded-full px-2 py-0.5 mt-4">
          Energy
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-border p-2 items-start space-x-2 bg-card"
      >
        <Users className="rounded-full h-10 w-10 text-primary p-2 bg-primary/10" />
        <p className="text-xs text-muted-foreground">
          Network with 300+ developers, designers, and industry experts at ZeroHack...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-border p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-card"
      >
        <p className="text-xs text-muted-foreground">Let&apos;s build!</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-primary/60 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Team Formation",
    description: <span className="text-sm">Find your squad and form the ultimate team to conquer ZeroHack.</span>,
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <Users className="h-4 w-4 text-primary" />,
  },
  {
    title: "Intense Hacking",
    description: <span className="text-sm">10-12 hours of non-stop coding, building, and innovating.</span>,
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <Code className="h-4 w-4 text-primary" />,
  },
  {
    title: "Doomsday Theme",
    description: <span className="text-sm">Build solutions inspired by Marvel&apos;s epic Doomsday universe.</span>,
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <Zap className="h-4 w-4 text-primary" />,
  },
  {
    title: "The ZeroHack Way",
    description: <span className="text-sm">Build fast, win big, and stay fueled throughout the hackathon.</span>,
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <Trophy className="h-4 w-4 text-primary" />,
  },
  {
    title: "Community & Networking",
    description: <span className="text-sm">Connect with passionate developers and industry leaders.</span>,
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <Lightbulb className="h-4 w-4 text-primary" />,
  },
];
