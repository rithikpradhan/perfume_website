"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 md:px-12 py-6 flex items-center justify-between max-w-7xl mx-auto">
      {/* Menu burger icon left */}
      <button className="p-2 hover:opacity-75 transition-opacity" aria-label="Menu">
        <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </button>
 
      {/* Brand Logo - OVII */}
      <Link href="/" className="flex items-center">
        <span className="font-heading text-lg md:text-xl font-bold tracking-[0.25em] text-[#1a1a1a] uppercase select-none">
          OVII
        </span>
      </Link>
 
      {/* Cart Icon right */}
      <button className="p-2 hover:opacity-75 transition-opacity relative" aria-label="Cart">
        <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
        </svg>
      </button>
    </nav>
  );
}
