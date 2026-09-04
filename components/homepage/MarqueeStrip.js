'use client';

const marqueeItems = [
  '100% GENUINE FULL-GRAIN LEATHER',
  'PREMIUM THERMAL INSULATION',
  'SEASON 01 // LIMITED DROP',
  'BESPOKE FIT CONSULTATION VIA WHATSAPP',
  'HANDCRAFTED STREETWEAR',
  '92DEGREE COUTURE',
];

export default function MarqueeStrip() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F4F0] border-y border-[#E5E5E0] py-4 sm:py-5 select-none">
      
      {/* Edge fades for luxury feel */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAFAF8] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAFAF8] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer">
        {[...Array(2)].map((_, loopIndex) => (
          <div key={loopIndex} className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12">
            {marqueeItems.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center gap-8 sm:gap-12">
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#1A1A1A] uppercase whitespace-nowrap">
                  {item}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#A9744F] shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Inline style – works in any Next.js project */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marqueeScroll 25s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}