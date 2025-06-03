import Link from 'next/link';

export default function Services() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#e0e0e0] mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We create apps and games that make users go "wow" and sometimes "why?" — but always with style.
        </p>
      </div>

      {/* Main Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#1a1a1a] p-8 rounded-xl space-y-6">
          <div className="w-16 h-16 bg-[#9500ff]/10 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#e0e0e0]">App Development</h3>
          <p className="text-gray-400">
            We build mobile apps that users actually want to use. From concept to launch, we handle everything with our signature chaotic style.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Native iOS & Android
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cross-platform Development
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              UI/UX Design
            </li>
          </ul>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-xl space-y-6">
          <div className="w-16 h-16 bg-[#9500ff]/10 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#e0e0e0]">Game Development</h3>
          <p className="text-gray-400">
            Creating games that are addictively frustrating yet somehow fun. We specialize in mobile games that keep players coming back for more.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Unity Development
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Game Design
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Monetization Strategy
            </li>
          </ul>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-xl space-y-6">
          <div className="w-16 h-16 bg-[#9500ff]/10 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#e0e0e0]">Development Tools</h3>
          <p className="text-gray-400">
            We create tools that make developers' lives easier. From chat generators to productivity tools, we've got you covered.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Custom Tool Development
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              API Integration
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Automation Solutions
            </li>
          </ul>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-xl space-y-6">
          <div className="w-16 h-16 bg-[#9500ff]/10 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-3.343 7.014l-3.001 2.25A2 2 0 0112 21.75a2 2 0 01-2.656-.736l-3-2.25A9 9 0 113.343 4.986l3.001-2.25A2 2 0 018.999 2.25a2 2 0 012.656.736l3 2.25A9 9 0 0121 12z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#e0e0e0]">Web Development</h3>
          <p className="text-gray-400">
            From stunning landing pages to full-featured web applications, we create web experiences that capture attention and drive engagement.
          </p>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Landing Pages
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Responsive Design
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Modern Web Apps
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1a1a1a] rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#e0e0e0] mb-4">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Whether you need a mobile app, game, or development tool, we're here to help with our unique blend of chaos and creativity.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#9500ff] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#7a00d1] transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
} 