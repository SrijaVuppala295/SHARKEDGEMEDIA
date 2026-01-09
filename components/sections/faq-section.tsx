"use client"

import { useState } from "react"
import { RevealText } from "@/components/common/reveal-text"
import StarBorder from "@/components/common/star-border"

const faqs = [
  {
    question: "What makes Shark Edge different from other agencies?",
    answer:
      "We don't just 'edit videos.' We build your entire personal brand as an asset—uncovering your story, shaping your positioning, and producing content that compounds over time. Most agencies focus on output; we focus on building cultural relevance and authority.",
  },
  {
    question: "What exactly do you help with?",
    answer:
      "We turn your 'invisible brand' into a recognized authority in your niche. We do this by building and managing your entire personal brand, from core strategy and content ideas to professional editing and distribution. In short: Everything you need to turn your story into a brand that grows on autopilot.",
  },
  {
    question: "How much time will this take me?",
    answer:
      "Our process is specifically designed for busy experts. We handle all the heavy lifting—strategy, ideation, scripting, editing, and distribution. You only need to set aside 2–3 hours per month for filming (which we'll batch-record to be super efficient).",
  },
  {
    question: "Do you only work with Instagram?",
    answer:
      "No. We specialize in Instagram as a primary platform, but our strategy is holistic. We create a 'create once, distribute everywhere' system, repurposing your core content for other platforms like LinkedIn, TikTok & YouTube to maximize your reach.",
  },
  {
    question: "What if I've tried content before and it didn't work?",
    answer:
      "Content without a clear strategy is just noise. It usually fails because there was no brand foundation. We're different. We build your core brand and message first, so every piece of content has a specific job: to attract your ideal client.",
  },
  {
    question: "How much does Shark Edge's service cost?",
    answer:
      "Our pricing is tailored to your specific goals and the level of work involved to achieve them. Schedule a discovery call with us to know if we could help you achieve your outcomes or take your brand to the next big step.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center mb-14 flex flex-col items-center">

        {/* Eyebrow */}
        <RevealText>
          <StarBorder
            as="div"
            className="mb-6 text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-black transition-colors duration-300"
            color="rgba(255, 255, 255, 0.2)"
            speed="4s"
            style={{
              '--content-padding': '0.5rem 1.2rem',
              '--star-hover-bg': 'linear-gradient(180deg, #D4AF37 100%)',
              '--star-hover-text': 'black',
            } as React.CSSProperties}
          >
            FAQS
          </StarBorder>
        </RevealText>

        {/* Main Heading */}
        <RevealText>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Frequently{" "}
            <span className="bg-gradient-to-r from-white via-white to-[#ffc700] bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>
        </RevealText>

        {/* Subheading */}
        <RevealText>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-gray-400 leading-relaxed">
            Answers to common questions about our services, processes, and what
            sets us apart.
          </p>
        </RevealText>
      </div>

      <RevealText>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {isOpen ? (
                  <StarBorder
                    as="div"
                    className="w-full"
                    color="#f5c77a"
                    speed="3s"
                    style={{
                      '--border-radius': '1.5rem',
                      '--content-padding': '0'
                    } as React.CSSProperties}
                  >
                    <div className="w-full text-left px-8 py-6 bg-black backdrop-blur-md rounded-[1.5rem] border border-[#f5c77a]/10 relative z-20">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-[#F3DFA2] transition-colors duration-300 drop-shadow-[0_0_10px_rgba(243,223,162,0.4)]">
                          {faq.question}
                        </h3>
                        <span className="text-2xl rotate-180 text-[#F3DFA2] transition-all duration-300">
                          −
                        </span>
                      </div>
                      <div className="mt-4 text-white/90 leading-relaxed pr-8 animate-in fade-in slide-in-from-top-2 duration-300 font-light">
                        {faq.answer}
                      </div>
                    </div>
                  </StarBorder>
                ) : (
                  <div className="w-full text-left px-8 py-6 rounded-[1.5rem] bg-black border border-white/10 transition-all duration-300 hover:bg-neutral-900">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-white transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <span className="text-2xl text-white/50 transition-all duration-300">
                        +
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </RevealText>
    </section>
  )
}
