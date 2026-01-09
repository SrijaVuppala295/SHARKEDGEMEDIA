"use client";

import Image from "next/image";
import { RevealText } from "./reveal-text";
import StarBorder from "./StarBorder";
import { ProofMessageCard } from "./ProofMessageCard";
import { Masonry } from "./ui/masonry";


const resultsData = [
    { src: "/Results/1 (1).jpg" },
    { src: "/Results/1 (2).jpg" },
    { src: "/Results/1 (3).jpg" },
    { src: "/Results/1 (4).jpg" },
    { src: "/Results/1 (5).jpg" },
    { src: "/Results/1 (6).jpg" },
    { src: "/Results/1 (7).jpg" },
    { src: "/Results/1 (8).jpg" },
    { src: "/Results/1 (9).png" },
];


export function ClientResults() {

    return (
        <section id="clients" className="relative py-28 px-4 overflow-hidden">
            <div className="mx-auto max-w-6xl flex flex-col items-center gap-14">


                {/* Section Heading */}
                <div className="text-center mb-16 relative flex flex-col items-center">

                    {/* Eyebrow */}
                    <RevealText>
                        <StarBorder
                            as="div"
                            className="mb-6 text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-black transition-colors duration-300"
                            color="rgba(255, 255, 255, 0.2)"
                            speed="4s"
                            style={{
                                '--content-padding': '0.5rem 1.2rem',
                                '--star-hover-bg': 'linear-gradient(180deg, #F3DFA2 0%, #D4AF37 100%)',
                                '--star-hover-text': 'black',
                            } as React.CSSProperties}
                        >
                            PROOF OF WORK
                        </StarBorder>
                    </RevealText>

                    {/* Main Heading */}
                    <RevealText>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                            Here's{" "}
                            <span className="bg-gradient-to-r from-white via-white to-[#ffc700] bg-clip-text text-transparent">
                                what our Clients say
                            </span>
                        </h2>
                    </RevealText>

                    {/* Subheading */}
                    <RevealText>
                        <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg text-gray-400 leading-relaxed">
                            Unfiltered feedback and real screenshots from founders, coaches, and creators
                            who trusted SharkEdge with their content.
                        </p>
                    </RevealText>

                </div>


                {/* Masonry screenshots */}
                <div className="relative w-full">
                    <Masonry
                        data={resultsData}
                        duration={0.8}
                        stagger={0.05} // Increased slightly from 0.01 for better visibility of effect, can tweak
                        gap={32}
                        renderItem={(item, index) => (
                            <ProofMessageCard
                                key={index}
                                src={item.src}
                            />
                        )}
                    />

                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
                </div>

            </div>
        </section>
    );
}
