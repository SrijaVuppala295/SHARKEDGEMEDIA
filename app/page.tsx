import dynamic from "next/dynamic"
import { Hero } from "@/components/hero"

// Dynamic imports for below-fold components - code splitting
const ClientResults = dynamic(() => import("@/components/client-results").then(mod => ({ default: mod.ClientResults })))
const TestimonialsSection = dynamic(() => import("@/components/testimonials").then(mod => ({ default: mod.TestimonialsSection })))
const ProblemSection = dynamic(() => import("@/components/problem-section").then(mod => ({ default: mod.ProblemSection })))
const SolutionSection = dynamic(() => import("@/components/solution-section").then(mod => ({ default: mod.SolutionSection })))
const ProcessSection = dynamic(() => import("@/components/process-section").then(mod => ({ default: mod.ProcessSection })))
const ResultsSection = dynamic(() => import("@/components/results-section").then(mod => ({ default: mod.ResultsSection })))
const BeforeAfterResults = dynamic(() => import("@/components/BeforeAfterResults").then(mod => ({ default: mod.BeforeAfterResults })))
const FaqSection = dynamic(() => import("@/components/FaqSection").then(mod => ({ default: mod.FaqSection })))
const FooterCTA = dynamic(() => import("@/components/FooterCTA").then(mod => ({ default: mod.FooterCTA })))

export default function Home() {
  return (
    <>
      <Hero />
      <ClientResults />
      <TestimonialsSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <ResultsSection />
      <BeforeAfterResults />
      {/* <CallBookingSection /> */}
      <FaqSection />
      <FooterCTA />
      {/* footer */}
    </>
  )
}
