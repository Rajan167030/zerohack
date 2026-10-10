import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Ayush leads organizer operations end-to-end, ensuring every ZeroHack milestone lands on time and with quality.",
      name: "Ayush Yadav",
      designation: "Organizer",
      src: "/ayush.jpeg",
      imagePosition: "50% 16%",
    },
    {quote:
        "Akshit leads co-organizer operations end-to-end, ensuring every ZeroHack milestone lands on time and with qulity.",
      name: "Akshit Tiwari",
      designation: "Co-Organizer",
      src: "/me.jpeg",
    },
    {
      quote:
        "Deepansu drives core execution and planning support to keep collaboration smooth across the entire team.",
      name: "Deepansu",
      designation: "Core Team",
      src: "/deepansu.jpeg",
      imagePosition: "50% 18%",
    },
    {
      quote:
        "Rajan Jha contributes across technical and on-ground workflows so the event experience feels seamless for participants.",
      name: "Rajan Jha",
      designation: "Core Team",
      src: "/rajann.jpeg",
      imagePosition: "50% 18%",
    },
    {
      quote:
        "Paras Joshi supports logistics, communication, and delivery quality to keep ZeroHack impactful and execution-ready.",
      name: "Paras Joshi",
      designation: "Core Team",
      src: "/paras.jpeg",
      imagePosition: "50% 22%",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} autoplay />;
}
