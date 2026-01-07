import { Hero } from "@/components/hero"
import { ClientResults } from "@/components/client-results"
import { TestimonialsSection } from "@/components/testimonials"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ProcessSection } from "@/components/process-section"
import { ResultsSection } from "@/components/results-section"
import { BeforeAfterResults } from "@/components/BeforeAfterResults"
// import { CallBookingSection } from "@/components/CallBookingSection"
import { FaqSection } from "@/components/FaqSection"
import { FooterCTA } from "@/components/FooterCTA"

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
