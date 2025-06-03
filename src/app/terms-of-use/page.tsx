'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-[#e0e0e0] mb-8">Terms of Use</h1>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-400 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-[#9500ff] shadow-lg mb-8">
          <p className="text-gray-400"><strong className="text-white">TL;DR:</strong> By playing any Daze Studio game, you agree to these terms. Our games use ads (AdMob), analytics (Firebase), and Google Play Games Services. Don't cheat, hack, or redistribute our games. It's all pretty standard stuff.</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Covered Products</h2>
            <div className="space-y-4 text-gray-400">
              <p>These Terms of Use apply to all mobile games and applications developed and published by Daze Studio, including but not limited to:</p>
              <ul className="list-disc pl-6">
                <li><strong className="text-white">Maze Blitz</strong> (Mobile Game)</li>
                <li><strong className="text-white">Chat Screenshot Generator</strong> (Web App)</li>
                <li>All future Daze Studio products</li>
              </ul>
              <p>When we refer to "our products," "our games," or "Daze Studio products" throughout these terms, we mean any and all games and applications published under the Daze Studio brand.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-400">
              <p>By using any Daze Studio game, you understand that anonymized data may be collected by third-party services (e.g. ads, analytics, cloud saves). See our <Link href="/privacy-policy" className="text-[#9500ff] hover:text-[#7a00d1]">Privacy Policy</Link> for full details.</p>
              <p>By playing our games, you agree to:</p>
              <ul className="list-disc pl-6">
                <li>These Terms of Use</li>
                <li>Our <Link href="/privacy-policy" className="text-[#9500ff] hover:text-[#7a00d1]">Privacy Policy</Link></li>
                <li>Google's AdMob <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener" className="text-[#9500ff] hover:text-[#7a00d1]">Terms</a></li>
                <li>Google Play Games Services <a href="https://policies.google.com/terms" target="_blank" rel="noopener" className="text-[#9500ff] hover:text-[#7a00d1]">Terms of Service</a></li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">License</h2>
            <div className="space-y-4 text-gray-400">
              <p>We grant you a <strong className="text-white">limited, non-transferable license</strong> to:</p>
              <ul className="list-disc pl-6">
                <li>Play our games for personal use</li>
                <li>Install on devices you own</li>
              </ul>
              <p><strong className="text-white">You may NOT:</strong></p>
              <ul className="list-disc pl-6">
                <li>Reverse-engineer or modify our games</li>
                <li>Use bots/cheats to alter gameplay</li>
                <li>Redistribute our games commercially</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Advertisements</h2>
            <div className="space-y-4 text-gray-400">
              <ul className="list-disc pl-6">
                <li>Ads are served via <strong className="text-white">Google AdMob</strong> (required to play)</li>
                <li>You acknowledge ads are third-party content</li>
                <li>We don't control ad targeting</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">User Responsibilities</h2>
            <div className="space-y-4 text-gray-400">
              <p>You agree to:</p>
              <ul className="list-disc pl-6">
                <li>Play fairly (no exploits)</li>
                <li>Comply with all applicable laws</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Eligibility</h2>
            <p className="text-gray-400">
              You must be at least 13 years old (or the minimum age required by your country) to use our games with Google Play Games Services. Children under this age may still play our games in offline mode without creating an account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Termination</h2>
            <div className="space-y-4 text-gray-400">
              <p>We may suspend access if you:</p>
              <ul className="list-disc pl-6">
                <li>Violate these Terms</li>
                <li>Engage in fraudulent activity</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Disclaimer & Limitation of Liability</h2>
            <div className="space-y-4 text-gray-400">
              <p className="text-white font-bold">OUR GAMES ARE PROVIDED "AS IS" WITHOUT WARRANTIES. WE ARE NOT LIABLE FOR:</p>
              <ul className="list-disc pl-6">
                <li>Game interruptions or data loss</li>
                <li>Third-party ad content</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Google Play Games Services</h2>
            <div className="space-y-4 text-gray-400">
              <p>Our games may use Google Play Games Services for sign-in, leaderboards, achievements, and cloud saves. By using these features, you also agree to Google's terms related to this service.</p>
              <ul className="list-disc pl-6">
                <li>We do not control or access your Google Play Games profile data directly</li>
                <li>You can opt out by not signing in when prompted</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Governing Law</h2>
            <p className="text-gray-400">
              These Terms are governed by the laws of your country of residence unless otherwise required by local law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Contact Us</h2>
            <p className="text-gray-400">
              For questions:{' '}
              <a href="mailto:support@doingabsolutezeroeffort.com" className="text-[#9500ff] hover:text-[#7a00d1]">
                support@doingabsolutezeroeffort.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 