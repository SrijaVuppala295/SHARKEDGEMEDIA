"use client"

import Link from "next/link"
import { MobileMenu } from "./mobile-menu"
import StarBorder from "./star-border"

export const Header = () => {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mt-5 flex items-center justify-between rounded-full border border-white/10 bg-black/20 backdrop-blur-md backdrop-saturate-180 px-8 py-3 shadow-lg shadow-black/20 ring-1 ring-white/10 ring-inset hover:shadow-xl hover:shadow-black/30 transition-all duration-500">

          {/* LOGO — BIGGER + BOLDER */}
          <Link href="/" className="group flex items-center" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <span
              className="
      text-xl md:text-2xl lg:text-[26px]
      font-extrabold
      tracking-tight

      text-white
      transition-colors duration-300 ease-out

      group-hover:text-white/90
    "
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Shark Edge
            </span>
          </Link>

          {/* CENTER NAV — BIGGER + BOLDER */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-10">
              {["Clients", "Process", "Results", "FAQs"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm md:text-base font-bold text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#fde68a] hover:to-[#facc15] transition-all cursor-pointer tracking-wide"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          {/* APPLY BUTTON — BIGGER + STRONGER */}
          <div className="hidden md:flex">
            <Link href="https://calendly.com/mkthoughts10/discovery-call?embed_domain=localhost&embed_type=Inline" target="_blank" rel="noopener noreferrer">
              <StarBorder
                as="div"
                className="rounded-full text-sm font-semibold [--sb-color:white] hover:[--sb-color:#FFC700] transition-all duration-300"
                color="var(--sb-color)"
                speed="3s"
                style={{
                  '--content-padding': '0.7rem 1.7rem',
                  '--star-hover-bg': 'linear-gradient(180deg, #F3DFA2 0%, #D4AF37 100%)',
                  '--star-hover-text': 'black'
                } as React.CSSProperties}
              >
                Let&apos;s Talk
              </StarBorder>
            </Link>
          </div>

          {/* MOBILE MENU */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </header>
      </div>
    </div>
  )
}
