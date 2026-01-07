"use client"

import Link from "next/link"
import { MobileMenu } from "./mobile-menu"
// import { Button } from "./ui/button" // Keeping it commented out or removing it if I'm sure
import StarBorder from "./StarBorder"

export const Header = () => {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mt-5 flex items-center justify-between rounded-full border border-white/15 bg-[rgba(12,12,14,0.82)] backdrop-blur-xl px-8 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.75)] hover:shadow-[0_0_50px_rgba(255,215,0,0.2)] transition-shadow duration-500">

          {/* LOGO — BIGGER + BOLDER */}
          <Link href="/" className="group flex items-center">
            <span
              className="
      text-xl md:text-2xl lg:text-[26px]
      font-extrabold
      tracking-tight

      text-white
      transition-colors duration-300 ease-out

      group-hover:text-white/90
    "
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
                Let's Talk
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



// import Link from "next/link"
// import { MobileMenu } from "./mobile-menu"

// export const Header = () => {
//   return (
//     <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full">
//       <header className="flex items-center justify-between container">
//         <Link href="/">
//           <div className="uppercase font-sentient text-xl md:text-2xl font-light tracking-widest">SharkEdge</div>
//         </Link>
//         <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-8">
//           {['About Us', 'Process', 'FAQ', 'Contact'].map((item) => (
//             <Link
//               className="font-mono text-sm text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
//               href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
//               key={item}
//             >
//               {item}
//             </Link>
//           ))}
//         </nav>
//         <Link
//           className="uppercase max-lg:hidden transition-colors ease-out duration-150 font-mono text-sm text-primary hover:text-primary/80"
//           href="/#contact"
//         >
//           Let's Talk
//         </Link>
//         <MobileMenu />
//       </header>
//     </div>
//   )
// }
