"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: "velour",
    image: "/images/velour-gold-bottle-transparent.png",
    bgGradient: "from-[#fbf9f5] via-[#f3dfc4] to-[#fdfcfb] bg-gradient-to-tr",
    outlineText: "VELOUR GOLD",
    textColor: "rgba(180, 130, 45, 0.12)",
    textStroke: "1.5px rgba(120, 85, 20, 0.35)",
    headline: "Golden Luxury In Every Single Spray.",
    subhead: "Gentle, luxury formula crafted with velvet vanilla and golden amber notes. Perfect for skin, body, and hair — luxury beauty that's kind to you and the planet.",
    price: "$110.00",
    features: [
      { title: "Signature Longevity", desc: "Exquisite scent that lasts up to 12 hours on skin." },
      { title: "Artisanal Blending", desc: "Crafted in small batches by master French perfumers." },
      { title: "Everyday Luxury", desc: "Designed to fit seamlessly into your daily presence." }
    ]
  },
  {
    id: "opaline",
    image: "/images/opaline-mint-bottle-transparent.png",
    bgGradient: "from-[#f5faf8] via-[#def0eb] to-[#fbfdfd] bg-gradient-to-tr",
    outlineText: "OPALINE MINT",
    textColor: "rgba(15, 118, 110, 0.10)",
    textStroke: "1.5px rgba(10, 80, 75, 0.35)",
    headline: "Botanical Freshness In Every Spray.",
    subhead: "Invigorating fresh formulas crafted with organic mint leaves and white musk. Perfect for skin, body, and hair — botanical beauty that's kind to you and the planet.",
    price: "$95.00",
    features: [
      { title: "Botanical Coolness", desc: "Fresh organic mint leaves and pure eucalyptus." },
      { title: "Sustainable Luxury", desc: "Vegan formulation with 100% natural ingredients." },
      { title: "Clean Scent Trail", desc: "Invigorating projection that refreshes the room." }
    ]
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [currentSlide]);

  const handleSlideChange = (nextIndex: number) => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide(nextIndex);
    }, 800); // Wait for full exit transition to complete
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    handleSlideChange(nextIndex);
  };

  const prevSlide = () => {
    const nextIndex = (currentSlide - 1 + slides.length) % slides.length;
    handleSlideChange(nextIndex);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const slide = slides[currentSlide];
  const nextSlideIndex = (currentSlide + 1) % slides.length;
  const nextSlideData = slides[nextSlideIndex];

  return (
    <section className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-all duration-[1200ms] ${slide.bgGradient}`}>
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[75vw] md:w-[50vw] md:h-[50vw] rounded-full blur-[90px] md:blur-[140px] opacity-[0.22] md:opacity-[0.28] transition-all duration-[1200ms] ${
          slide.id === "velour" ? "bg-[#d4af37]" : "bg-[#2dd4bf]"
        }`} />
      </div>

      {/* Left side reviews badge (Visible on all screens with responsive absolute layout) */}
      <div 
        className={`flex absolute left-4 md:left-8 xl:left-14 top-[12vh] md:top-34 items-center gap-2.5 md:gap-3 bg-white/40 backdrop-blur-md border border-white/20 rounded-full py-1.5 px-3 md:py-2 md:px-4 shadow-sm select-none transition-all duration-[800ms] cubic-bezier(0.16, 1, 0.3, 1) z-30 ${
          animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        <div className="flex -space-x-2.5">
          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-tr from-amber-200 to-yellow-500 border-2 border-white/80 shadow-sm flex items-center justify-center text-[8px] md:text-[9px] font-bold text-[#1a1a1a]">E</div>
          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-tr from-rose-200 to-pink-500 border-2 border-white/80 shadow-sm flex items-center justify-center text-[8px] md:text-[9px] font-bold text-white">M</div>
          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-tr from-teal-200 to-cyan-500 border-2 border-white/80 shadow-sm flex items-center justify-center text-[8px] md:text-[9px] font-bold text-white">J</div>
          <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#10b981] border-2 border-white/80 shadow-sm flex items-center justify-center text-white text-[10px] md:text-xs font-bold font-sans">
            +
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center text-amber-500 text-[8px] md:text-[10px] tracking-tighter">
            ★★★★★
          </div>
          <span className="text-[8px] md:text-[9px] font-semibold text-[#1a1a1a]/70 whitespace-nowrap">
            10k+ Happy Customers
          </span>
        </div>
      </div>

      {/* 1. BACKGROUND: Large Brand Outline Text (Centered, stacked vertically behind the bottle) */}
      <div className="absolute inset-x-0 inset-y-0 max-w-7xl  mx-auto px-6 md:px-12 flex items-center justify-center pointer-events-none select-none z-10 overflow-hidden">
        <div className={`flex flex-col items-center justify-center text-center font-heading font-black uppercase text-[18vw] md:text-[14vw] lg:text-[12vw] xl:text-[160px] leading-[1.1] md:leading-[0.95] gap-8 md:gap-0 -translate-y-12 lg:-translate-y-20 transition-all duration-[800ms] ease-out ${
          animate 
            ? "opacity-100 scale-100 tracking-[0.1em]" 
            : "opacity-0 scale-95 tracking-normal"
        }`}>
          {slide.outlineText.split(" ").map((word, index) => (
            <span 
              key={index}
              className="whitespace-nowrap"
              style={{ 
                color: slide.textColor,
                WebkitTextStroke: slide.textStroke,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* 2. MIDDLEGROUND: Centered Isolated Perfume Bottle with Zoom and Tilt animations (z-index 20) */}
      <div className="relative z-20 flex items-center justify-center w-full max-w-[540px] md:max-w-[620px] aspect-square flex-shrink-0 translate-y-4 md:translate-y-10 lg:translate-y-16">
        <div className="relative w-[92%] h-[92%] md:w-[90%] md:h-[90%]">
          <Image
            src={slide.image}
            alt={slide.outlineText}
            fill
            className={`object-contain pointer-events-auto filter drop-shadow-[0_20px_40px_rgba(26,26,26,0.12)] transition-all duration-[800ms] cubic-bezier(0.16, 1, 0.3, 1) ${
              animate 
                ? "opacity-100 scale-100 rotate-[4deg] translate-y-0 animate-float-tilt" 
                : "opacity-0 scale-[0.6] rotate-[-15deg] translate-y-12"
            }`}
            sizes="(max-width: 768px) 100vw, 550px"
            priority
          />
        </div>
      </div>

      {/* Right side details card (Visible on all screens with responsive sizing and layout) */}
      <div 
        className={`flex absolute right-4 md:right-8 xl:right-16 bottom-[10vh] md:bottom-24 flex-col gap-2 md:gap-3 lg:gap-4 bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl p-2 md:p-3 lg:p-4 shadow-sm w-[130px] md:w-[170px] lg:w-[280px] select-none transition-all duration-[800ms] cubic-bezier(0.16, 1, 0.3, 1) z-30 ${
          animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        <div className="relative h-18 md:h-24 lg:h-36 w-full rounded-xl overflow-hidden shadow-sm">
          <Image 
            src={slide.id === "velour" ? "/images/velour-gold.png" : "/images/opaline-mint.png"}
            alt="Scent profile description"
            fill
            className="object-cover"
          />
        </div>
        <p className="font-sans text-[8px] md:text-[9px] lg:text-[11px] text-[#1a1a1a]/70 leading-relaxed font-light text-left px-1">
          {slide.id === "velour" 
            ? "Indulge in a signature presence that defines classic warmth and everyday sophistication."
            : "Invigorate your daily routines with botanical freshness that lingers naturally."}
        </p>
      </div>

      {/* Carousel Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSlideChange(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === i ? "bg-[#1a1a1a] w-6" : "bg-[#1a1a1a]/25 w-1.5"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
