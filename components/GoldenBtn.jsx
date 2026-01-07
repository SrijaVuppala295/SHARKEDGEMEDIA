import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const GoldenBtn = ({ href, target }) => {
    return (
        <div className="relative flex items-center justify-center py-20">
            {/* The Core Visual Stack - Accurate Tighter Nesting */}
            <div className="relative flex items-center justify-center w-full max-w-lg aspect-[21/9] md:aspect-[24/8] scale-90 md:scale-100 transform-gpu">

                {/* Central Vertical Light Streak - High Contrast */}
                <div className="absolute top-[-30%] bottom-[-30%] left-1/2 -translate-x-1/2 w-[180px] bg-gradient-to-b from-transparent via-[#facc15]/15 to-transparent blur-[50px] pointer-events-none z-0"></div>
                <div className="absolute top-[-20%] bottom-[-20%] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#facc15]/60 to-transparent blur-[1px] pointer-events-none z-0"></div>

                {/* Layer 4: Outer (Tighter spacing) */}
                <div className="absolute w-[98%] h-[92%] rounded-full border border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none">
                    {/* Accent dot as per image */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#facc15] shadow-[0_0_15px_#facc15] z-20"></div>
                </div>

                {/* Layer 3: Middle-Outer (Very tight) */}
                <div className="absolute w-[92%] h-[80%] rounded-full border border-[#facc15]/15 bg-gradient-to-b from-[#facc15]/[0.05] to-transparent pointer-events-none">
                    <div className="absolute left-[3%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30 blur-[0.5px]"></div>
                </div>

                {/* Layer 2: Middle-Inner (Tightened) */}
                <div className="absolute w-[86%] h-[68%] rounded-full border border-[#facc15]/25 bg-white/[0.01] pointer-events-none">
                    <div className="absolute right-[4%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border border-[#facc15]/50 flex items-center justify-center">
                        <div className="w-1 h-1 bg-[#facc15]/60 rounded-full"></div>
                    </div>
                </div>

                {/* Layer 1: Inner (Tighter surrounding the button) */}
                <div className="absolute w-[80%] h-[56%] rounded-full border border-[#facc15]/40 bg-gradient-to-r from-transparent via-[#facc15]/10 to-transparent shadow-[inset_0_0_50px_rgba(250,204,21,0.05)] pointer-events-none"></div>

                {/* The Discovery Call Button - Clean, Attractive, No circle around arrow */}
                <div className="relative z-10 flex justify-center w-full">
                    {/* Use an anchor tag or button based on href prop availability */}
                    {href ? (
                        <Link href={href} target={target} className="group relative flex items-center gap-4 px-10 py-5 rounded-full bg-[#0c0a09] border border-[#facc15] hover:bg-[#facc15] transition-all duration-500 shadow-[0_0_40px_rgba(250,204,21,0.3)] hover:shadow-[0_0_60px_#facc15] active:scale-95 group overflow-hidden cursor-pointer">
                            <span className="text-xl font-semibold tracking-tight text-white group-hover:text-black transition-colors duration-300">
                                Book a Discovery Call
                            </span>
                            <ArrowRight className="w-6 h-6 text-[#facc15] group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />

                            {/* Subtle internal shine */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </Link>
                    ) : (
                        <button className="group relative flex items-center gap-4 px-14 py-6 rounded-full bg-[#0c0a09] border border-[#facc15] hover:bg-[#facc15] transition-all duration-500 shadow-[0_0_40px_rgba(250,204,21,0.3)] hover:shadow-[0_0_60px_#facc15] active:scale-95 group overflow-hidden">
                            <span className="text-2xl font-semibold tracking-tight text-white group-hover:text-black transition-colors duration-300">
                                Book a Discovery Call
                            </span>
                            <ArrowRight className="w-7 h-7 text-[#facc15] group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />

                            {/* Subtle internal shine */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </button>
                    )}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes shimmer-text {
          to { background-position: 200% center; }
        }
        .animate-shimmer-text {
          animation: shimmer-text 6s linear infinite;
        }
      `}} />
        </div>
    );
};

export default GoldenBtn;
