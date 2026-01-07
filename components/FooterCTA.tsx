"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"

export function FooterCTA() {
  const layersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!layersRef.current) return

    const container = layersRef.current
    const layers = container.querySelectorAll(".gold-glass")
    const button = container.querySelector(".cta-button")

    const tl = gsap.timeline({ paused: true })

    tl.to(container, {
      scale: 1.05, // Slightly larger on hover
      duration: 0.45,
      ease: "power3.out",
    })

    tl.to(
      layers,
      {
        scale: 1.02,
        duration: 0.45,
        stagger: 0.05,
        ease: "power2.out",
      },
      0
    )

    tl.to(
      button,
      {
        y: -3,
        scale: 1.05,
        duration: 0.35,
        ease: "power3.out",
      },
      0
    )

    const onEnter = () => tl.play()
    const onLeave = () => tl.reverse()

    container.addEventListener("mouseenter", onEnter)
    container.addEventListener("mouseleave", onLeave)

    return () => {
      container.removeEventListener("mouseenter", onEnter)
      container.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return (
    <footer className="text-white px-6 py-20 text-center space-y-12 overflow-hidden">
      {/* CTA AREA */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white via-[#ffeebb] to-[#ffc700] bg-clip-text text-transparent pb-1">
          Turn your brand to the next level.
        </h2>

        <p className="text-base md:text-lg glow-text/soft">
          Need more Clarity? Get in Touch.
        </p>

        {/* CTA CONTAINER */}
        <div className="w-full flex justify-center items-center mt-12 sm:mt-16">
          <div className="relative w-full flex justify-center">

            {/* Scaler Wrapper - Adjusted to 0.52 (Sweet spot between 0.45 and 0.6) */}
            <div className="relative origin-center transform scale-[0.52] sm:scale-100 transition-transform duration-300">
              {/* STRICT 560x260 CONTAINER */}
              <div
                ref={layersRef}
                className="cta-container relative w-[560px] h-[260px] flex items-center justify-center"
              >

                {/* Layer 1: Base */}
                <div className="absolute inset-0 rounded-full gold-glass layer-1" />

                {/* Layer 2: Inset 10 (40px) */}
                <div className="absolute inset-10 rounded-full gold-glass layer-2" />

                {/* Layer 3: Inset 20 (80px) */}
                <div className="absolute inset-20 rounded-full gold-glass layer-3" />

                {/* BUTTON */}
                <Link
                  href="https://calendly.com/mkthoughts10/discovery-call"
                  target="_blank"
                  className="relative z-10"
                >
                  <button className="cta-button px-12 py-5 rounded-full font-medium text-black transition-transform duration-300 flex items-center gap-3 focus:outline-none whitespace-nowrap text-lg">
                    Book a Discovery Call <span className="text-xl">→</span>
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-white/10 pt-10 space-y-6">
        <div className="text-lg font-medium">Shark Edge Media</div>

        <div className="flex justify-center gap-6 text-xl">
          <a className="hover:text-yellow-300 transition"><FaInstagram /></a>
          <a className="hover:text-yellow-300 transition"><FaLinkedin /></a>
          <a className="hover:text-yellow-300 transition"><FaFacebook /></a>
        </div>

        <div className="text-sm text-white/60">
          © Shark Edge Media. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        /* =========================
           GLASS BASE
        ========================= */
        .gold-glass {
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        /* =========================
           LAYERS – LIGHT CRYSTAL GOLD
        ========================= */
        .layer-1 {
          background: linear-gradient(
            180deg,
            rgba(255, 248, 220, 0.85),
            rgba(242, 211, 94, 0.65),
            rgba(230, 195, 74, 0.45)
          );
          border: 1px solid rgba(255, 255, 255, 0.28);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.75),
            0 0 85px rgba(242, 211, 94, 0.65);
        }

        .layer-2 {
          background: linear-gradient(
            180deg,
            rgba(242, 211, 94, 0.65),
            rgba(212, 175, 55, 0.55)
          );
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow: 0 0 90px rgba(230, 195, 74, 0.55);
        }

        .layer-3 {
          background: linear-gradient(
            180deg,
            rgba(212, 175, 55, 0.65),
            rgba(165, 124, 0, 0.65)
          );
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 120px rgba(212, 175, 55, 0.45);
        }

        /* =========================
           BUTTON – BRIGHT, CRYSTAL (TONED DOWN)
        ========================= */
        .cta-button {
          background: linear-gradient(
            180deg,
            #fff8d6,  /* Softer start instead of pure white */
            #f2d35e,
            #d4af37
          );
          color: #1a1200;
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.5), /* Reduced opacity */
            0 0 35px rgba(242, 211, 94, 0.4);       /* Reduced spread and opacity */
        }
      `}</style>
    </footer>
  )
}
