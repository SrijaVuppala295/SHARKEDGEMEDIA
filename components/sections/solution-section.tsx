// components/solution-section.tsx
"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"

import { RevealText } from "@/components/common/reveal-text"
import { SectionBadge } from "@/components/ui/section-badge"

export function SolutionSection() {
  // ... (keep existing hook logic)
  const innerCircleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // ... (keep existing hook logic)
    const el = innerCircleRef.current
    if (!el) return

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })

    tl.to(el, {
      scale: 1.5, // Zoom out (looks larger)
      duration: 2,
      ease: "power2.inOut",
    })
      .to(el, {
        scale: 1, // Zoom in (back to original)
        duration: 2,
        ease: "power2.inOut",
      })

    return () => {
      tl.kill()
    }
  }, [])
  return (
    <section
      id="solution"
      className="relative w-full border-t border-white/5 px-4 py-16 lg:py-28 sm:px-6 overflow-hidden"
    >
      {/* subtle radial glow behind heading */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,199,0,0.18),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        {/* LEFT SIDE – heading + copy */}
        <div className="max-w-xl text-center lg:text-left space-y-8 flex flex-col items-center lg:items-start">
          <div className="space-y-6 flex flex-col items-center lg:items-start">

            <RevealText>
              <SectionBadge className="mb-[30px]">
                SOLUTION
              </SectionBadge>
            </RevealText>

            <div className="space-y-3">
              <RevealText>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-medium leading-tight text-center lg:text-left">
                  The <span className="bg-gradient-to-r from-white via-white to-[#ffc700] bg-clip-text text-transparent">Shark Edge</span> Ecosystem.
                </h2>
              </RevealText>
              <RevealText>
                <span className="block text-2xl sm:text-3xl font-medium mt-2 bg-gradient-to-r from-white via-white to-[#ffc700] bg-clip-text text-transparent leading-tight text-center lg:text-left">
                  People don&apos;t buy from business anymore, they buy from people.
                </span>
              </RevealText>

              <RevealText>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  In today&apos;s market, your expertise alone isn&apos;t enough.
                  Authority is your ultimate advantage.
                </p>
              </RevealText>

              <RevealText>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  The problem isn&apos;t your product or service, it&apos;s your
                  positioning &amp; branding.
                </p>
              </RevealText>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – large circular loop */}
        <RevealText>
          <div className="relative flex items-center justify-center">
            {/* background glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,199,0,0.28),transparent_70%)] blur-3xl opacity-80" />
            </div>

            {/* main disc */}
            <div className="relative h-[22rem] w-[22rem] sm:h-[24rem] sm:w-[24rem]">
              {/* outer disc */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#151515] via-[#050505] to-black shadow-[0_0_60px_rgba(0,0,0,0.95)] border border-white/8" />
              {/* mid ring */}
              <div className="absolute inset-8 rounded-full border border-white/10" />
              {/* inner ring */}
              <div className="absolute inset-16 rounded-full border border-white/10" />

              {/* centre circle – Branding, Content & Systems */}
              <div className="absolute inset-[4.9rem] sm:inset-[5.2rem] flex items-center justify-center">
                <div
                  ref={innerCircleRef}
                  className="flex h-40 w-40 sm:h-44 sm:w-44 flex-col items-center justify-center rounded-full bg-gradient-to-b from-[#20160a] via-black to-black border border-yellow-500/55 shadow-[0_0_55px_rgba(250,204,21,0.6)] text-center px-4 z-10 relative hover:scale-105 transition-transform duration-300"
                >
                  {/* <p className="text-[11px] sm:text-xs font-medium text-white/65 mb-1">
                  Core Engine
                </p> */}
                  <p className="text-xs sm:text-sm font-semibold text-yellow-100 leading-snug">
                    Branding, Content &amp; Systems
                  </p>
                </div>
              </div>

              {/* Orbit with 3 gold pills */}
              <div className="absolute inset-5 flex items-center justify-center">
                <div className="relative h-full w-full rounded-full border border-yellow-400/50 orbit-spin">
                  {/* Brand that brings sales – bottom-right */}
                  <div className="absolute right-[-4.3rem] bottom-[8%] orbit-counter">
                    <div className="rounded-full border border-amber-400/80 bg-gradient-to-r from-[#facc15]/80 via-[#fed7aa]/80 to-[#f97316]/80 px-4 py-1 text-[11px] sm:text-xs font-semibold text-black shadow-[0_0_30px_rgba(250,204,21,0.95)] whitespace-nowrap backdrop-blur">
                      Brand that brings sales
                    </div>
                  </div>

                  {/* Video that drives engagement – top-right */}
                  <div className="absolute right-[-4.3rem] top-[8%] orbit-counter">
                    <div className="rounded-full border border-amber-400/80 bg-gradient-to-r from-[#facc15]/80 via-[#fed7aa]/80 to-[#f97316]/80 px-4 py-1 text-[11px] sm:text-xs font-semibold text-black shadow-[0_0_30px_rgba(250,204,21,0.95)] whitespace-nowrap backdrop-blur">
                      Video that drives engagement
                    </div>
                  </div>

                  {/* Nothing is unbranded – left-middle */}
                  <div className="absolute left-[-4.3rem] top-1/2 -translate-y-1/2 orbit-counter">
                    <div className="rounded-full border border-amber-400/80 bg-gradient-to-r from-[#facc15]/80 via-[#fed7aa]/80 to-[#f97316]/80 px-4 py-1 text-[11px] sm:text-xs font-semibold text-black shadow-[0_0_30px_rgba(250,204,21,0.95)] whitespace-nowrap backdrop-blur">
                      Nothing is unbranded
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </RevealText>
      </div>
    </section >
  )
}
