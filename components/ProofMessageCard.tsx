import Image from "next/image";

export function ProofMessageCard({
    src,
}: {
    src: string;
}) {
    // Premium Gold Theme
    const theme = {
        color: "#FFD700", // Gold
        flare: "radial-gradient(circle at top left, rgba(255, 215, 0, 0.45) 0%, rgba(255, 215, 0, 0.1) 30%, transparent 60%)",
        border: "border-t-[rgba(255,215,0,0.4)] border-l-[rgba(255,215,0,0.4)]",
    };

    return (
        <div className="group relative rounded-3xl bg-black transition-transform duration-300 hover:scale-[1.02]">
            {/* GLOW FLARE (Behind) */}
            <div
                className="absolute inset-0 rounded-3xl opacity-80 transition-opacity duration-300 group-hover:opacity-100 z-0 pointer-events-none"
                style={{ background: theme.flare }}
            />

            {/* BORDER HIGHLIGHT */}
            <div
                className={`absolute inset-0 rounded-3xl border border-white/0 ${theme.border} z-20 pointer-events-none`}
            />

            {/* CONTENT CONTAINER */}
            <div className="relative overflow-hidden rounded-3xl bg-black z-10">
                {/* IMAGE */}
                <div className="relative">
                    <Image
                        src={src}
                        alt="Client Result"
                        width={600}
                        height={900}
                        className="w-full h-auto object-cover opacity-90 transition-opacity group-hover:opacity-100"
                    />
                </div>
            </div>
        </div>
    );
}
