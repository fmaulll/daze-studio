import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#e0e0e0] mb-6">
          About Daze Studio
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We're a chaotic bunch of developers who believe in creating high-energy mobile experiences with zero effort and 100% chaos.
        </p>
      </div>

      {/* Story Section */}
      <section className="mb-16">
        <div className="bg-[#1a1a1a] rounded-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#e0e0e0] mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-400">
            <p>
              Born from the idea that great apps don't need to be serious, Daze Studio is all about creating experiences that make users go "wow" and sometimes "why?"
            </p>
            <p>
              We specialize in mobile game development, app creation, and building useful tools that might just change your life (or at least make you laugh).
            </p>
            <p>
              Our philosophy is simple: Do absolute zero effort, but make it fire. 🔥
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#e0e0e0] mb-8 text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-2">Innovation</h3>
            <p className="text-gray-400">
              We think outside the box, then throw the box away, then question why boxes even exist.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-2">Design</h3>
            <p className="text-gray-400">
              Beautiful interfaces that make sense (most of the time) and spark joy (always).
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#e0e0e0] mb-2">Development</h3>
            <p className="text-gray-400">
              Clean code? Sometimes. Working code? Always. Fun code? Absolutely.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-[#e0e0e0] mb-8 text-center">Our Values</h2>
        <div className="bg-[#1a1a1a] rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#9500ff]">Fun First</h3>
              <p className="text-gray-400">
                If it's not fun to use, we're not shipping it. Simple as that.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#9500ff]">User-Focused</h3>
              <p className="text-gray-400">
                We create for our users, even if sometimes they don't know what they want.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#9500ff]">Innovation</h3>
              <p className="text-gray-400">
                We're not afraid to try new things, even if they seem a little crazy.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#9500ff]">Quality</h3>
              <p className="text-gray-400">
                Zero effort doesn't mean zero quality. We make sure everything just works.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 