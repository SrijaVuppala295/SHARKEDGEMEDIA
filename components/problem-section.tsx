"use client"

import { EyeOff, Tag, RefreshCcw, MegaphoneOff } from "lucide-react"
import { RevealText } from "./reveal-text"
import StarBorder from "./StarBorder"

const problems = [
  {
    label: "Credible but Unseen",
    Icon: EyeOff,
    body: [
      "You've built something real and get amazing results for your clients, but no one outside your circle knows you exist.",
    ],
  },
  {
    label: "The Commodity Trap",
    Icon: Tag,
    body: [
      "Because you're not a recognized authority, you're seen as an option, forcing you to compete on price.",
    ],
  },
  {
    label: "Referral-Only Loop",
    Icon: RefreshCcw,
    body: [
      "Relying only on word of mouth isn't scalable. You've hit a growth limit & lack a reliable system to attract new clients.",
    ],
  },
  {
    label: "Shouting into the Void",
    Icon: MegaphoneOff,
    body: [
      "You create content, but it fails to build authority or attract leads. It feels like efforts without impact.",
    ],
  },
]

export function ProblemSection() {

  return (
    <section
      id="problem"
      className="relative w-full px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >


      <div className="mx-auto max-w-6xl space-y-12 text-center">


        {/* Section Heading */}
        <div className="text-center mb-16 relative flex flex-col items-center">

          {/* Eyebrow */}
          <RevealText>
            <StarBorder
              as="div"
              className="mb-6 text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-black transition-colors duration-300"
              color="rgba(255, 255, 255, 0.2)"
              speed="4s"
              style={{
                '--content-padding': '0.5rem 1.2rem',
                '--star-hover-bg': 'linear-gradient(180deg, #F3DFA2 0%, #D4AF37 100%)',
                '--star-hover-text': 'black',
              } as React.CSSProperties}
            >
              PROBLEM
            </StarBorder>
          </RevealText>

          {/* Main Heading */}
          <RevealText>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              {" "}
              <span className="bg-gradient-to-r from-white via-white to-[#ffc700] bg-clip-text text-transparent">
                The Invisible Expert
              </span>
            </h2>
          </RevealText>

          {/* Subheading */}
          <RevealText>
            <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-gray-400 leading-relaxed">
              You Are An Expert, But Does Anyone Know It?
            </p>
          </RevealText>

        </div>

        {/* 2×2 Grid */}
        <RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-4xl mx-auto">
            {problems.map(({ label, Icon, body }, i) => (
              <div
                key={label}
                className="group relative flex flex-col items-start text-left h-full w-full rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-xl p-8 sm:p-10 transition-all duration-500 hover:border-[#facc15]/60 hover:shadow-[0_0_50px_rgba(250,204,21,0.15)] hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffd54a] to-[#facc15] text-black shadow-lg">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl sm:text-2xl font-bold text-white">
                  {label}
                </h3>

                {/* Body Text */}
                <div className="flex flex-col gap-2 text-sm sm:text-base text-gray-400 leading-relaxed font-medium">
                  {body.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealText>
      </div>
    </section >
  )
}
