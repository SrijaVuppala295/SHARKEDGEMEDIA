import { ResultsSection } from "@/components/sections/results-section"
import { BeforeAfterResults } from "@/components/sections/before-after-results"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Client Results - Shark Edge Media',
    description: 'View our case studies and the transformations we have achieved for our clients.',
    alternates: {
        canonical: 'https://sharkedge.media/results',
    },
}

export default function ResultsPage() {
    return (
        <main>
            <div className="pt-32">
                <ResultsSection />
                <BeforeAfterResults />
            </div>
        </main>
    )
}
