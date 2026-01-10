"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { RevealText } from "@/components/common/reveal-text";
import { SectionBadge } from "@/components/ui/section-badge";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  followers: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rosa Antonini",
    role: "Transformation Coach",
    image: "/clients/rosa-antonini.jpg",
    quote:
      "Consistency is the hardest thing to find in this industry, but Shark Edge nails it every time. We just wrapped up another batch of deliverables, and the workflow was seamless. I never have to micromanage or worry about deadlines. It’s a relief to have a partner I can trust completely. Already looking forward to the next project!",
    followers: "150k+ Followers",
  },
  {
    id: 2,
    name: "James Seah",
    role: "Founder, Lucid Digital Lab",
    image: "/clients/james.webp",
    quote:
      "Honestly, I don't care much about 'views'—I care about the bottom line. The strategy Shark Edge implemented was a game-changer. That trial reel strategy performed outstandingly. The last 5 videos generated 140+ qualified leads, and all the properties we featured are sold out.",
    followers: "50k+ Followers",
  },
  {
    id: 3,
    name: "Fraser Briggs",
    role: "Fitness Coach",
    image: "/clients/fraser-moves.png",
    quote:
      "Building a personal brand is overwhelming, but these guys made it simple. The perceived value of my brand has skyrocketed. People take me much more seriously, and my outreach response rate has doubled just because the content looks this good.",
    followers: "250k+ Followers",
  },
  {
    id: 4,
    name: "Alex Kahts",
    role: "Digital Marketing Expert",
    image: "/clients/alex-kahts.png",
    quote:
      "I’ve worked with plenty of agencies before, but Shark Edge is different. They don’t just edit footage; they understand emotion, pacing, and storytelling. My latest upload kept the audience hooked until the very last second.",
    followers: "100k+ Followers",
  },
  {
    id: 5,
    name: "Idan Nimtsovich",
    role: "Founder, Cyber Studios",
    image: "/clients/idan-nimtso.png",
    quote:
      "Efficiency is everything to me. Shark Edge made complex production feel simple. We went from chaos to a streamlined content machine in weeks. It genuinely feels like an in-house team. Zero stress, zero friction.",
    followers: "75k+ Followers",
  },
];

const SPRING = {
  type: "spring",
  stiffness: 50,  // Very soft spring to eliminate "lag/jerk"
  damping: 20,
  mass: 1,
} as const;

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const hoverRef = useRef(false);

  /** AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoverRef.current) {
        setActive((prev) => (prev + 1) % testimonials.length);
      }
    }, 10000); // 10 seconds (Even slower)
    return () => clearInterval(interval);
  }, []);

  /** STACK STYLES */
  const getStyle = (index: number) => {
    const pos = (index - active + testimonials.length) % testimonials.length;
    if (pos === 0) return { scale: 1, y: 0, opacity: 1, zIndex: 30 };
    if (pos === 1) return { scale: 0.95, y: -40, opacity: 0.75, zIndex: 20 };
    if (pos === 2) return { scale: 0.9, y: -80, opacity: 0.5, zIndex: 10 };
    if (pos === 3) return { scale: 0.85, y: -120, opacity: 0.25, zIndex: 5 };
    return { opacity: 0, scale: 0.8, y: -160, zIndex: 0 };
  };

  return (
    <section className="relative w-full py-16 md:py-24 px-4 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-6xl">

        {/* 🔒 HEADING — UNCHANGED */}
        <div className="text-center mb-16 flex flex-col items-center">
          <RevealText>
            <SectionBadge className="mb-6">
              TESTIMONIALS
            </SectionBadge>
          </RevealText>

          <RevealText>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              Client{" "}
              <span className="bg-gradient-to-r from-white to-[#ffc700] bg-clip-text text-transparent">
                Success
              </span>
            </h2>
          </RevealText>
        </div>

        {/* STACK */}
        <div
          className="relative h-[720px] md:h-[560px] max-w-5xl mx-auto mt-20" // Added mt-20 for more space
          onMouseEnter={() => (hoverRef.current = true)}
          onMouseLeave={() => (hoverRef.current = false)}
        >
          <AnimatePresence>
            {testimonials.map((t, i) => {
              const style = getStyle(i);

              return (
                <motion.div
                  key={t.id}
                  animate={style}
                  transition={SPRING}
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
                >
                  <div className="h-full w-full rounded-2xl bg-[#0a0a0a] border border-white/20 shadow-2xl overflow-hidden flex flex-col group transition-colors duration-300 hover:border-white/40">

                    {/* CARD HEADER */}
                    <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
                      <div className="flex items-center gap-3 text-white/40">
                        {/* User Icon with Checkmark */}
                        <div className="relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                          <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-[1px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row flex-1 items-center p-6 md:p-8 gap-6 md:gap-8">
                      {/* TEXT */}
                      <div className="flex-1 flex flex-col justify-center relative">

                        <div className="mb-8">
                          <h4 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            {t.name}
                          </h4>
                          <span className="text-base text-[#D4AF37] font-medium block">
                            {t.role}
                          </span>
                        </div>

                        <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                          {t.quote}
                        </p>
                      </div>

                      {/* IMAGE */}
                      {/* IMAGE with Mouse Following Tooltip */}
                      <TestimonialImage t={t} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-12 gap-2 relative z-50">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === active
                ? "w-8 bg-[#D4AF37]"
                : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialImage({ t }: { t: Testimonial }) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30, mass: 2 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30, mass: 2 });
  const scale = useSpring(1, { stiffness: 100, damping: 30, mass: 2 });
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 });

  // Use ref for lastY to avoid re-renders, unlike the provided snippet which used state
  const lastY = useRef(0);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotateAmplitude = 14;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY.current;
    rotateFigcaption.set(-velocityY * 0.6);
    lastY.current = offsetY;
  };

  const handleMouseEnter = () => {
    scale.set(1.02); // Slight hover scale requested in logic, keeping it subtle
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  };

  return (
    <figure
      ref={ref}
      className={`relative w-full md:w-[360px] h-[220px] md:h-[320px] rounded-2xl shrink-0 transition-colors duration-300 bg-white/5 ${(t.id === 1 || t.id === 2) ? "bg-black/20" : ""}`}
      style={{ perspective: 1000 }} // Essential for 3D tilt
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-lg"
      >
        <Image
          src={t.image}
          alt={t.name}
          fill
          className="object-cover pointer-events-none rounded-2xl" // Explicitly added rounded here too
          style={{
            objectPosition: t.id === 1 ? "center 40%" : t.id === 2 ? "center 20%" : "center center"
          }}
        />
      </motion.div>

      {/* Tooltip with Velocity Rotation */}
      <motion.figcaption
        className="absolute pointer-events-none bg-white rounded-lg px-4 py-2 text-sm font-bold text-black border border-white/10 shadow-2xl z-20 whitespace-nowrap"
        style={{
          x,
          y,
          opacity,
          rotate: rotateFigcaption,
          left: 0,
          top: 0
        }}
      >
        {t.followers}
      </motion.figcaption>
    </figure >
  );
}
