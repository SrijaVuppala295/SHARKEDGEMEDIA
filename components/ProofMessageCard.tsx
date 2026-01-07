import Image from "next/image";

const platforms = {
    slack: {
        name: "SLACK",
        icon: "/platforms/slack.jpg",
        color: "#FFD700", // Gold
        flare: "radial-gradient(circle at top left, rgba(255, 215, 0, 0.45) 0%, rgba(255, 215, 0, 0.1) 30%, transparent 60%)",
        border: "border-t-[rgba(255,215,0,0.4)] border-l-[rgba(255,215,0,0.4)]",
    },
    whatsapp: {
        name: "WHATSAPP",
        icon: "/platforms/whatsapp.png",
        color: "#25D366", // Green
        flare: "radial-gradient(circle at top left, rgba(37, 211, 102, 0.45) 0%, rgba(37, 211, 102, 0.1) 30%, transparent 60%)",
        border: "border-t-[#25D366]/40 border-l-[#25D366]/40",
    },
    discord: {
        name: "DISCORD",
        icon: "/platforms/discord.png",
        color: "#5865F2", // Bluple
        flare: "radial-gradient(circle at top left, rgba(88, 101, 242, 0.45) 0%, rgba(88, 101, 242, 0.1) 30%, transparent 60%)",
        border: "border-t-[#5865F2]/40 border-l-[#5865F2]/40",
    },
};

export function ProofMessageCard({
    src,
    platform,
}: {
    src: string;
    platform: keyof typeof platforms;
}) {
    const p = platforms[platform];

    return (
        <div className="group relative rounded-3xl bg-black transition-transform duration-300 hover:scale-[1.02]">
            {/* GLOW FLARE (Behind) */}
            <div
                className="absolute inset-0 rounded-3xl opacity-80 transition-opacity duration-300 group-hover:opacity-100 z-0 pointer-events-none"
                style={{ background: p.flare }}
            />

            {/* BORDER HIGHLIGHT */}
            <div
                className={`absolute inset-0 rounded-3xl border border-white/5 ${p.border} z-20 pointer-events-none`}
            />

            {/* CONTENT CONTAINER */}
            <div className="relative overflow-hidden rounded-3xl bg-black z-10">


                {/* IMAGE */}
                <div className="relative">
                    <Image
                        src={src}
                        alt={`${p.name} proof`}
                        width={600}
                        height={900}
                        className="w-full h-auto object-cover opacity-90 transition-opacity group-hover:opacity-100"
                    />
                </div>
            </div>
        </div>
    );
}
