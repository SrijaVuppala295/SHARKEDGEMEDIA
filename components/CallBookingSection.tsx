"use client"

export function CallBookingSection() {
  return (
    <section id="discovery" className="cta-section">
      <div className="cta-container">
        <span className="cta-pill">BOOK A CALL</span>

       <h2 className="cta-heading">
  Let us understand your <span style={{ color: "#facc15", textDecoration: "none" }}>growth goals</span>
</h2>



        <p className="cta-subtext">
          Book a short call with SharkEdge Media so we can understand your current
          bottlenecks and map a content system that compounds your authority and demand.
        </p>
      </div>

      <div className="cal-clean-wrapper">
        <iframe
          src="https://calendly.com/mkthoughts10/discovery-call?embed_domain=localhost&embed_type=Inline"
          className="cal-iframe-clean"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </section>
  )
}
