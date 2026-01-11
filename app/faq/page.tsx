import { FaqSection } from "@/components/sections/faq-section"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FAQ - Shark Edge Media',
    description: 'Answers to common questions about our personal branding services and process.',
    alternates: {
        canonical: 'https://sharkedge.media/faq',
    },
}

export default function FaqPage() {
    return (
        <main>
            <div className="pt-20">
                <FaqSection />
            </div>
        </main>
    )
}
