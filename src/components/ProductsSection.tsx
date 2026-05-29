"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  thumbnail: string;
  color: string;
  glowColor: string;
  bgGlow: string;
  accentText: string;
}

const products: Product[] = [
  {
    id: "velour",
    name: "Velour Gold",
    category: "Warm Vanilla & Golden Amber",
    price: "$165.00",
    image: "/images/velour-gold-bottle-transparent.png",
    thumbnail: "/images/velour-gold.png",
    color: "bg-[#d4af37]",
    glowColor: "shadow-[#d4af37]/35 border-[#d4af37]/50",
    bgGlow: "bg-[#d4af37]/18",
    accentText: "text-[#b4822d]"
  },
  {
    id: "opaline",
    name: "Opaline Mint",
    category: "Fresh Mint & White Musk",
    price: "$175.00",
    image: "/images/opaline-mint-bottle-transparent.png",
    thumbnail: "/images/opaline-mint.png",
    color: "bg-[#2dd4bf]",
    glowColor: "shadow-[#2dd4bf]/35 border-[#2dd4bf]/50",
    bgGlow: "bg-[#2dd4bf]/18",
    accentText: "text-[#0f766e]"
  },
  {
    id: "rose",
    name: "Rose Blush",
    category: "Damask Rose & Wild Peony",
    price: "$185.00",
    image: "/images/rose-blush-bottle-transparent.png",
    thumbnail: "/images/rose-blush.png",
    color: "bg-[#ec4899]",
    glowColor: "shadow-[#ec4899]/35 border-[#ec4899]/50",
    bgGlow: "bg-[#ec4899]/18",
    accentText: "text-[#db2777]"
  }
];

export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll position of the sticky parent wrapper
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      if (totalHeight <= 0) return;

      const scrolled = -rect.top;
      let progress = scrolled / totalHeight;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      // Split 0 to 1 progress into three ranges
      if (progress < 0.35) {
        setActiveIndex(0);
      } else if (progress < 0.68) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initialize state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Smooth scroll to corresponding container section progress when clicked
  const handleProductClick = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const startScrollY = window.scrollY + rect.top;
    const totalHeight = rect.height - window.innerHeight;

    let targetProgress = 0.15;
    if (idx === 1) targetProgress = 0.5;
    if (idx === 2) targetProgress = 0.85;

    const targetScrollY = startScrollY + targetProgress * totalHeight;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth"
    });

    setActiveIndex(idx);
  };

  const activeProduct = products[activeIndex];

  return (
    /* Parent scroll tracks h-[200vh] to scroll-drive active indices */
    <div ref={containerRef} className="relative w-full h-[200vh]">
      
      {/* Sticky layout viewport h-screen / 100vh */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-start bg-[#faf8f5] overflow-hidden pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-8">
        
        {/* Decorative Rotating Dial in Background */}
        <div className="absolute right-0 md:right-[5%] xl:right-[10%] top-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[500px] md:h-[500px] xl:w-[650px] xl:h-[650px] 2xl:w-[800px] 2xl:h-[800px] pointer-events-none select-none opacity-20">
          <div className="w-full h-full rounded-full border border-dashed border-[#1a1a1a]/30 animate-[spin_120s_linear_infinite]" />
          <div className="absolute inset-8 rounded-full border border-dotted border-[#1a1a1a]/20 animate-[spin_90s_linear_infinite_reverse]" />
        </div>

        <div className="w-full max-w-[1900px] mx-auto flex flex-col gap-6 md:gap-8 xl:gap-10 z-10 px-6 md:px-12 xl:px-24 2xl:px-30">
          
          {/* Top Heading */}
          <div className="flex flex-col gap-1.5">
            <h2 className="font-heading font-light text-3xl md:text-4xl lg:text-5xl xl:text-6.5xl 2xl:text-7xl text-[#1a1a1a] leading-none">
              Explore all <br className="md:hidden" />
              <span className="font-semibold text-emerald-800 transition-colors duration-500">
                our products
              </span>
            </h2>
            <p className="text-[10px] md:text-xs xl:text-sm text-[#1a1a1a]/50 font-sans tracking-widest uppercase mt-1">
              Sensory luxury that cares for you
            </p>
          </div>

          {/* Main Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Side: Perfume Rotary Dial List (Desktop Only) */}
            <div className="hidden lg:flex lg:col-span-5 relative w-full h-[240px] md:h-[280px] xl:h-[320px] overflow-hidden items-center">
              
              {/* Fade Gradient Masks */}
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#faf8f5] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#faf8f5] to-transparent z-10 pointer-events-none" />

              <div 
                className="absolute left-0 flex flex-col gap-4 transition-transform duration-500 ease-out w-full"
                style={{
                  transform: `translateY(calc(50% - 34px - ${activeIndex} * 84px))` 
                }}
              >
                {products.map((product, idx) => {
                  const isActive = activeIndex === idx;
                  const diff = idx - activeIndex;
                  const absDiff = Math.abs(diff);
                  
                  // Concave curve translation and style tokens
                  let translateClass = "translate-x-0";
                  let opacityClass = "opacity-35";
                  let scaleClass = "scale-[0.92]";
                  
                  if (isActive) {
                    translateClass = "translate-x-4 md:translate-x-5 xl:translate-x-6";
                    opacityClass = "opacity-100";
                    scaleClass = "scale-[1.06]";
                  } else {
                    if (absDiff === 1) {
                      translateClass = "translate-x-1.5 md:translate-x-2 xl:translate-x-2.5";
                      opacityClass = "opacity-60";
                      scaleClass = "scale-[0.98]";
                    } else {
                      translateClass = "translate-x-0";
                      opacityClass = "opacity-35";
                      scaleClass = "scale-[0.92]";
                    }
                  }

                  return (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(idx)}
                      className={`h-[68px] flex items-center w-[88%] md:w-[90%] xl:w-[92%] px-5 py-3 rounded-2xl bg-white border transition-all duration-500 ease-out cursor-pointer text-left select-none ${translateClass} ${opacityClass} ${scaleClass} ${
                        isActive
                          ? "border-emerald-800/30 shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
                          : "border-[#1a1a1a]/5 hover:bg-white hover:opacity-75"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        {/* Circular thumbnail avatar */}
                        <div className={`relative w-11 h-11 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                          isActive ? "border-emerald-800/60 scale-105" : "border-transparent"
                        }`}>
                          <Image
                            src={product.thumbnail}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="44px"
                          />
                        </div>
                        
                        <div className="flex flex-col">
                          <span className={`font-sans font-bold text-sm md:text-base leading-tight transition-colors duration-500 ${
                            isActive ? "text-emerald-800" : "text-[#1a1a1a]"
                          }`}>
                            {product.name}
                          </span>
                          <span className="text-[10px] md:text-xs text-[#1a1a1a]/50 font-light mt-0.5 whitespace-nowrap">
                            {product.category}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right Side: Interactive Parallax Shelf (Desktop Only) */}
            <div className="hidden lg:flex lg:col-span-7 relative items-center justify-center min-h-[300px] md:min-h-[380px] xl:min-h-[480px]">
              
              {/* Active Product Ambient Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className={`w-[90%] h-[90%] rounded-full blur-[110px] opacity-60 transition-all duration-700 ${
                  activeProduct.bgGlow
                }`} />
              </div>

              {/* Slider Container */}
              <div className="relative w-full max-w-[650px] h-full flex items-center justify-center z-10">
                
                {products.map((product, idx) => {
                  const diff = idx - activeIndex;
                  const isActive = diff === 0;
                  const isLeft = diff < 0;
                  const isRight = diff > 0;
 
                  let translateClass = "translate-x-0";
                  let scaleClass = "scale-[1.1] md:scale-[1.16] xl:scale-[1.24] 2xl:scale-[1.3]";
                  let opacityClass = "opacity-100 pointer-events-auto";
                  let zIndexClass = "z-30";
                  let rotateClass = "rotate-[2deg]";
 
                  if (isLeft) {
                    translateClass = "-translate-x-[52%] md:-translate-x-[64%] xl:-translate-x-[72%] 2xl:-translate-x-[76%]";
                    scaleClass = "scale-[0.66] xl:scale-[0.70] 2xl:scale-[0.74]";
                    opacityClass = "opacity-25 pointer-events-none";
                    zIndexClass = "z-10";
                    rotateClass = "-rotate-[8deg]";
                  } else if (isRight) {
                    translateClass = "translate-x-[52%] md:translate-x-[64%] xl:translate-x-[72%] 2xl:translate-x-[76%]";
                    scaleClass = "scale-[0.66] xl:scale-[0.70] 2xl:scale-[0.74]";
                    opacityClass = "opacity-25 pointer-events-none";
                    zIndexClass = "z-10";
                    rotateClass = "rotate-[8deg]";
                  }
 
                  if (Math.abs(diff) > 1) {
                    opacityClass = "opacity-0 pointer-events-none";
                  }
 
                  return (
                    <div
                      key={product.id}
                      onClick={() => {
                        if (!isActive) handleProductClick(idx);
                      }}
                      className={`absolute transition-all duration-[800ms] cubic-bezier(0.16, 1, 0.3, 1) flex flex-col items-center justify-center cursor-pointer select-none ${translateClass} ${scaleClass} ${opacityClass} ${zIndexClass}`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Bottle Image */}
                      <div className={`relative w-[200px] h-[280px] md:w-[260px] h-[360px] xl:w-[320px] xl:h-[440px] 2xl:w-[400px] 2xl:h-[550px] transition-transform duration-[800ms] cubic-bezier(0.16, 1, 0.3, 1) ${rotateClass} ${
                        isActive ? "hover:scale-[1.03]" : ""
                      }`}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          priority
                          className="object-contain filter drop-shadow-[0_20px_40px_rgba(26,26,26,0.14)]"
                          sizes="(max-width: 768px) 200px, (max-width: 1200px) 260px, (max-width: 1600px) 320px, 400px"
                        />
                      </div>
 
                      {/* Floor Shadow */}
                      <div className={`w-[75%] h-3 rounded-full bg-black/10 blur-[8px] mt-3 transition-all duration-[800ms] ${
                        isActive ? "opacity-100 scale-100" : "opacity-40 scale-75"
                      }`} />
                    </div>
                  );
                })}
 
              </div>
 
            </div>

            {/* Mobile-only Layout (Matches user reference design) */}
            <div className="lg:hidden flex flex-col items-center justify-between w-full relative flex-grow min-h-[430px] gap-6 mt-4">
              
              {/* Active Product Ambient Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className={`w-[280px] h-[280px] rounded-full blur-[75px] opacity-40 transition-all duration-700 ${
                  activeProduct.bgGlow
                }`} />
              </div>

              {/* Dashed background dial centered behind bottle */}
              <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-[#1a1a1a]/15 animate-[spin_80s_linear_infinite] pointer-events-none z-0" />

              {/* Active Bottle Container */}
              <div className="relative w-[250px] h-[300px] z-10 transition-all duration-700 ease-out flex items-center justify-center">
                {products.map((product, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={product.id}
                      className={`absolute inset-0 transition-all duration-700 ease-out flex flex-col items-center justify-center ${
                        isActive ? "opacity-100 scale-100 rotate-[2deg] translate-y-0" : "opacity-0 scale-75 rotate-[-5deg] translate-y-4 pointer-events-none"
                      }`}
                    >
                      <div className="relative w-full h-[280px]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          priority
                          className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
                          sizes="250px"
                        />
                      </div>
                      {/* Shadow */}
                      <div className="w-[70%] h-2 rounded-full bg-black/10 blur-[6px] mt-1" />
                    </div>
                  );
                })}
              </div>

              {/* Horizontal Circular Tags Row (Ingredient style click targets) */}
              <div className="flex flex-wrap justify-center items-center gap-3.5 w-full z-20 pb-4">
                {products.map((product, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(idx)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer select-none ${
                        isActive
                          ? "bg-emerald-800 text-white border-transparent shadow-md scale-105"
                          : "bg-white/80 border-[#1a1a1a]/8 text-[#1a1a1a]/70 hover:bg-white"
                      }`}
                    >
                      {/* Small circle thumbnail */}
                      <div className="relative w-5 h-5 rounded-full overflow-hidden border border-white/20">
                        <Image
                          src={product.thumbnail}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="20px"
                        />
                      </div>
                      <span className="font-sans text-[10px] font-bold tracking-wide">
                        {product.name}
                      </span>
                    </button>
                  );
                })}
              </div>
              
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
