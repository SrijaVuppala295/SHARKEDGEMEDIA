import { TestimonialsSection } from "@/components/sections/testimonials"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Testimonials - Shark Edge Media',
    description: 'Read what founders and coaches are saying about working with Shark Edge Media.',
    alternates: {
        canonical: 'https://sharkedge.media/testimonials',
    },
}

import Home from "../page"
import { AutoScroll } from "@/components/common/auto-scroll"

export default function TestimonialsPage() {
    return (
        <>
            <AutoScroll id="testimonials" />
            <Home />
        </>
    )
}
