"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import StarBorder from "./StarBorder"
import { InfiniteScroll } from "./ui/infinite-scroll"

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  // Delay video loading to prioritize initial page render
  useEffect(() => {
    const timer = setTimeout(() => setVideoReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const faceImages = [
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120",
    "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=120",
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120",
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120",
    "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=120",
    "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=120",
  ]

  const companyLogos = [
    {
      alt: "Antomolio",
      src: "/logos/Antomolio1.png",
      height: 36,
      width: "auto",
    },
    {
      alt: "BabyGrip",
      src: "/logos/baby-grip.png",
      height: 36,
      width: "auto",
    },
    {
      alt: "Cleo’s Kitchen",
      src: "/logos/Cleos Kitchen Logo.png",
      height: 36,
      width: "auto",
    },
    {
      alt: "Color Swell",
      src: "/logos/colors-swell.png",
      height: 36,
      width: "auto",
    },
    {
      alt: "Fame Machine",
      src: "/logos/Fame Machine.png",
      height: 36,
      width: "auto",
    },
    {
      alt: "Goods",
      src: "/logos/Goods.png",
      height: 36,
      width: "auto",
    },
    {
      alt: "Home Hulab",
      src: "/logos/home-hulab.png",
      height: 36,
      width: "auto",
    },
    {
      alt: "HSS",
      src: "/logos/HSS.png",
      height: 36,
      width: "auto",
    },
    {
      alt: "Terra",
      src: "/logos/terra-new.png",
      height: 36,
      width: "auto",
    },
    {
      alt: "Lucid",
      src: "/logos/lucid-digitals.png",
      height: 36,
      width: "auto",
    },
    {
      alt: "PAANI",
      src: "/logos/PAANI.png",
      height: 36,
      width: "auto",
    },
    {
      alt: "Rosa",
      src: "/logos/rosa-altmoni.png",
      height: 36,
      width: "auto",
    },
  ]

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background – scoped to hero only */}
      <div className="absolute inset-0 pointer-events-none">
        {videoReady && (
          <video
            ref={(el) => {
              if (el) {
                el.playbackRate = 2.0;
                // Force play on mount
                el.play().catch(() => { });
              }
            }}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover"
            onCanPlay={(e) => {
              // Ensure video plays when ready
              const video = e.currentTarget;
              video.play().catch(() => { });
            }}
            onPause={(e) => {
              // Auto-resume if paused unexpectedly (power saving, tab switch, etc.)
              const video = e.currentTarget;
              if (!document.hidden) {
                video.play().catch(() => { });
              }
            }}
          >
            <source src="/Background/hero-bg.webm" type="video/webm" />
            <source src="/Background/hero-bg.mp4" type="video/mp4" />
          </video>
        )}

        {/* Dark overlay + subtle glow */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

        <div className="absolute -top-40 left-1/2 h-80 w-[34rem] -translate-x-1/2 rounded-[48px] bg-white/10 blur-3xl opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center space-y-10 pt-32 md:pt-40 lg:pt-48">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[4.2rem] font-medium leading-[1.1] mx-auto max-w-6xl text-center flex flex-col items-center gap-2">
            {/* Line 1: Level up your Personal Brand */}
            {/* Using clamp for fluid typography: min 32px, preferred 6vw, max 96px */}
            <span className="block text-[#E4E9F2] leading-[1.1] md:whitespace-nowrap"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
              }}
            >
              <span className="tracking-tight" style={{ fontFamily: 'var(--font-inter-local)', fontWeight: 500 }}>Level up your </span>
              <span className="tracking-tight" style={{ fontFamily: 'var(--font-instrument-italic)', fontStyle: 'italic' }}>Personal Brand</span>
            </span>

            {/* Line 2: with Authority Positioning */}
            <span className="block text-[#E4E9F2] leading-[1.1] md:whitespace-nowrap"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
              }}
            >
              <span className="tracking-tight" style={{ fontFamily: 'var(--font-inter-local)', fontWeight: 500 }}>with </span>
              <span className="tracking-tight" style={{ fontFamily: 'var(--font-instrument-italic)', fontStyle: 'italic' }}>Authority Positioning</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/60 leading-relaxed max-w-4xl mx-auto text-balance">
            If you're a busy founder, coach or business owner who wants to grow a personal brand but
            has zero time to post, then this is for you.
          </p>


          <div className="mt-10 md:mt-12 flex justify-center">
            <StarBorder
              as="a"
              href="/#discovery"
              thickness={1.5}
              speed="3.5s"
              color="#f5c77a"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                const target = document.getElementById('discovery');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book a Discovery Call
            </StarBorder>
          </div>

          {/* Benefit ticks */}
          <div className="mt-12 w-full flex justify-center">
            <div className="flex flex-row flex-wrap items-center justify-center gap-10">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#f5c77a] shadow-[0_0_6px_rgba(245,199,122,0.7)] flex-shrink-0">
                  <span className="text-[8px] font-bold text-black leading-none">✓</span>
                </span>
                <span className="text-sm sm:text-base font-medium text-white/90 leading-none">
                  Requires only 2 hours of your time
                </span>
              </div>

              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#f5c77a] shadow-[0_0_6px_rgba(245,199,122,0.7)] flex-shrink-0">
                  <span className="text-[8px] font-bold text-black leading-none">✓</span>
                </span>
                <span className="text-sm sm:text-base font-medium text-white/90 leading-none">
                  All you need is to record your unique insights
                </span>
              </div>
            </div>
          </div>

          {/* Faces + trust sentence */}
          <div className="mt-14 flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {faceImages.map((src, i) => (
                <img
                  key={`face-${i}`}
                  src={src}
                  alt="client"
                  className="h-11 w-11 rounded-full border-2 border-black object-cover"
                />
              ))}
            </div>
            <p className="max-w-3xl text-center text-base sm:text-lg font-medium text-white/85 leading-relaxed">
              Helping more than 100+ coaches, entrepreneurs, and business owners build impactful
              personal brands with proven systems.
            </p>
          </div>

          {/* Scrolling client logos */}
          <div className="mt-10 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-10">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

            <InfiniteScroll speed={50} hoverSpeed={10} gap={120}>
              {companyLogos.map((logo, index) => (
                <img
                  key={`${logo.alt}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="company-logo-img object-contain transition-all duration-300
                              brightness-0 invert opacity-60
                              hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                  style={{
                    height: "45px", // Enforced 45px as requested
                    width: "auto",
                  }}
                  loading="lazy"
                />
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
