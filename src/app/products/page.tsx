import Link from 'next/link';
import Image from 'next/image';

export default function Products() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#e0e0e0] mb-6">
          Our Products
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          From addictive games to useful tools, we create experiences that make you go "wow" (and sometimes "why?").
        </p>
      </div>

      {/* Products Grid */}
      <div className="space-y-16">
        {/* Maze Blitz */}
        <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
          <div className="md:grid md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9500ff] to-[#ff00aa] opacity-20"></div>
              <Image
                src="/maze-blitz-preview.png"
                alt="Maze Blitz Game Preview"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-12 space-y-6">
              <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center">
                {/* <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> */}
                <Image src="/MAZEBLITZ_1080x1080.png" alt="Maze Blitz" width={44} height={44} className='rounded-lg' />
              </div>
              <h2 className="text-3xl font-bold text-[#e0e0e0]">Maze Blitz</h2>
              <p className="text-gray-400">
                An addictively challenging maze game that will test your reflexes and patience. Dodge traps, collect loot, and try not to rage-quit (we dare you).
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Challenging Gameplay
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multiple Levels
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Endless Mode
                </li>
              </ul>
              <a
                href="https://play.google.com/store/apps/details?id=com.DazeStudio.MazeBlitz"
                target="_blank"
                className="inline-block bg-[#9500ff] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#7a00d1] transition-colors"
              >
                Download Now
              </a>
            </div>
          </div>
        </div>

        {/* Chat Screenshot Generator */}
        <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
          <div className="md:grid md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-full order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9500ff] to-[#ff00aa] opacity-20"></div>
              <Image
                src="/chat-preview.png"
                alt="Chat Screenshot Generator Preview"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-12 space-y-6">
              <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#e0e0e0]">Chat Screenshot Generator</h2>
              <p className="text-gray-400">
                Create beautiful chat screenshots in WhatsApp and iMessage styles. Perfect for mockups, presentations, or just having fun with fake conversations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multiple Chat Styles
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customizable Colors
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Easy Export
                </li>
              </ul>
              <Link
                href="/screenshot-generator"
                className="inline-block bg-[#9500ff] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#7a00d1] transition-colors"
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#e0e0e0] mb-4">
          More Chaos Coming Soon
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We're always cooking up new ways to make your digital life more interesting. Stay tuned for our next masterpiece!
        </p>
      </div>
    </div>
  );
} 