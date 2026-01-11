import { ProcessSection } from "@/components/sections/process-section"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Process - Shark Edge Media',
    description: 'See how we turn your expertise into a personal brand empire in just 2 hours a month.',
    alternates: {
        canonical: 'https://sharkedge.media/process',
    },
}

export default function ProcessPage() {
    return (
        <div className="pt-48">
            <ProcessSection />
        </div>
    )
}
