'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <header className="py-8 text-center">
        <Image 
          src="/CompanyLogo.png" 
          alt="Daze Studio Logo" 
          width={200} 
          height={80}
          className="mx-auto"
        />
        <div className="mt-2 text-base italic text-gray-400">
          Doing Absolute Zero Effort – But Still Fire
        </div>
      </header>

      <section className="text-center py-16 px-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#9500ff] to-[#ff00aa] bg-clip-text text-transparent">
          Games & Apps That Slap
        </h1>
        <p className="max-w-[500px] mx-auto mt-4 mb-8 text-xl text-gray-300">
          At Daze Studio, we craft high-energy mobile experiences and useful tools with zero effort and 100% chaos. Because why not?
        </p>
        <Link
          href="#products"
          className="inline-block bg-[#9500ff] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#7c00d1] transition-colors"
        >
          See Our Products
        </Link>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-4">
        <div className="bg-[#1a1a1a] p-8 rounded-xl text-center">
          <h3 className="text-4xl font-bold text-[#e0e0e0] mb-2">100+</h3>
          <p className="text-gray-400">Happy<br />Users</p>
        </div>
        <div className="bg-[#1a1a1a] p-8 rounded-xl text-center">
          <h3 className="text-4xl font-bold text-[#e0e0e0] mb-2">2</h3>
          <p className="text-gray-400">Amazing<br />Products</p>
        </div>
        <div className="bg-[#1a1a1a] p-8 rounded-xl text-center">
          <h3 className="text-4xl font-bold text-[#e0e0e0] mb-2">24/7</h3>
          <p className="text-gray-400">Support &<br />Chaos</p>
        </div>
        <div className="bg-[#1a1a1a] p-8 rounded-xl text-center">
          <h3 className="text-4xl font-bold text-[#e0e0e0] mb-2">∞</h3>
          <p className="text-gray-400">Unlimited<br />Potential</p>
        </div>
      </section>

      <section id="products" className="py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e0e0e0] text-center mb-12">
          Our Epic Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          <div className="bg-[#1a1a1a] p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center">
              {/* <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> */}
              <Image src="/MAZEBLITZ_1080x1080.png" alt="Maze Blitz" width={44} height={44} className='rounded-lg' />
            </div>
            <h3 className="text-xl font-bold text-[#9500ff]">Maze Blitz</h3>
            <p className="text-gray-400">
              Dodge traps, solve mazes, and collect loot — Maze Blitz is fast, fun, and slightly unfair.
            </p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.DazeStudio.MazeBlitz"
              target="_blank"
              className="text-[#9500ff] hover:text-[#7a00d1] flex items-center gap-2"
            >
              Play Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#9500ff]">Chat Screenshot Generator</h3>
            <p className="text-gray-400">
              Create beautiful chat screenshots in WhatsApp and iMessage styles. Perfect for mockups and presentations.
            </p>
            <Link
              href="/screenshot-generator"
              className="text-[#9500ff] hover:text-[#7a00d1] flex items-center gap-2"
            >
              Try Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e0e0e0] text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          <div className="bg-[#1a1a1a] p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e0e0e0]">App Development</h3>
            <p className="text-gray-400">
              Mobile apps that make users go "wow" and sometimes "why?"
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e0e0e0]">Game Development</h3>
            <p className="text-gray-400">
              Games that are addictively frustrating yet somehow fun.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e0e0e0]">Development Tools</h3>
            <p className="text-gray-400">
              Useful tools that make your life easier, maybe.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-xl space-y-4">
            <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-3.343 7.014l-3.001 2.25A2 2 0 0112 21.75a2 2 0 01-2.656-.736l-3-2.25A9 9 0 113.343 4.986l3.001-2.25A2 2 0 018.999 2.25a2 2 0 012.656.736l3 2.25A9 9 0 0121 12z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e0e0e0]">Web Development</h3>
            <p className="text-gray-400">
              From stunning landing pages to full-featured web apps.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
