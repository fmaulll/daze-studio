'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-[#e0e0e0] mb-8">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-400 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-[#9500ff] shadow-lg mb-8">
          <p className="text-gray-400"><strong className="text-white">TL;DR:</strong> Daze Studio games use AdMob for ads (which collects device data), Firebase for analytics, and Google Play Games Services for cloud saves and leaderboards. We don't store your personal info. Game progress is saved locally or to your Google account if logged in.</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Covered Products</h2>
            <div className="space-y-4 text-gray-400">
              <p>This privacy policy applies to all mobile games and applications developed and published by Daze Studio, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Maze Blitz</strong> (Mobile Game)</li>
                <li><strong className="text-white">Chat Screenshot Generator</strong> (Web App)</li>
                <li>All future Daze Studio products</li>
              </ul>
              <p>When we refer to "our products," "our games," or "Daze Studio products" throughout this policy, we mean any and all games and applications published under the Daze Studio brand.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Information We Collect</h2>
            <div className="space-y-4 text-gray-400">
              <h3 className="text-xl font-bold text-[#e0e0e0]">Automatically Collected Data</h3>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong className="text-white">Advertising Data:</strong> AdMob (Google) may collect:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Advertising ID (for personalized ads)</li>
                    <li>Device type/model</li>
                    <li>Device identifiers (e.g. Android Advertising ID)</li>
                    <li>IP address (general location)</li>
                  </ul>
                </li>
                <li><strong className="text-white">Analytics Data:</strong> Firebase Analytics (Google) may collect:
                  <ul className="list-disc pl-6 mt-2">
                    <li>App usage information (e.g. session length, screens viewed)</li>
                    <li>Device and platform data (e.g. Android version, country)</li>
                    <li>Events like level completions, ads watched</li>
                  </ul>
                </li>
                <li><strong className="text-white">Game Progress:</strong> Saved locally on your device (not shared with us)</li>
              </ul>

              <h3 className="text-xl font-bold text-[#e0e0e0] mt-6">What We Don't Collect</h3>
              <ul className="list-disc pl-6">
                <li>Your name, email, or contact info</li>
                <li>Precise GPS location</li>
                <li>Payment information (unless a game has in-app purchases, which will be clearly disclosed)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">How We Use Data</h2>
            <div className="space-y-4 text-gray-400">
              <ul className="list-disc pl-6">
                <li><strong className="text-white">Ads:</strong> Display relevant ads via AdMob</li>
                <li><strong className="text-white">Analytics:</strong> Understand how players use our games to improve gameplay and performance (via Firebase)</li>
                <li><strong className="text-white">Game Functionality:</strong> Save your progress locally or in the cloud via Google Play Games Services</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Third-Party Services</h2>
            <div className="space-y-4 text-gray-400">
              <p>We use the following third-party services:</p>
              <ul className="list-disc pl-6">
                <li><strong className="text-white">Google AdMob:</strong> For advertisements</li>
                <li><strong className="text-white">Google Firebase Analytics:</strong> For anonymous usage tracking and performance insights</li>
                <li><strong className="text-white">Google Play Games Services:</strong> For sign-in, achievements, leaderboards, and cloud saves</li>
              </ul>
              <p>Learn more:</p>
              <ul className="list-disc pl-6">
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-[#9500ff] hover:text-[#7a00d1]">Google Privacy Policy</a></li>
                <li><a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener" className="text-[#9500ff] hover:text-[#7a00d1]">AdMob Data Collection</a></li>
                <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener" className="text-[#9500ff] hover:text-[#7a00d1]">Firebase Privacy and Security</a></li>
                <li><a href="https://support.google.com/googleplaygames/answer/10549852" target="_blank" rel="noopener" className="text-[#9500ff] hover:text-[#7a00d1]">Play Games Services Privacy</a></li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Children's Privacy</h2>
            <div className="space-y-4 text-gray-400">
              <p>All Daze Studio games comply with COPPA:</p>
              <ul className="list-disc pl-6">
                <li>No personal data knowingly collected from children under 13</li>
                <li>Ads shown are filtered for child-friendly content via AdMob</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">User Controls</h2>
            <div className="space-y-4 text-gray-400">
              <p>You can:</p>
              <ul className="list-disc pl-6">
                <li><strong className="text-white">Reset Advertising ID</strong> in Android settings</li>
                <li><strong className="text-white">Opt out of personalized ads</strong> via <a href="https://adssettings.google.com" target="_blank" rel="noopener" className="text-[#9500ff] hover:text-[#7a00d1]">Google Ad Settings</a></li>
                <li>Delete local game data by uninstalling the app</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Data Deletion Request</h2>
            <p className="text-gray-400">
              If you'd like to request deletion of your game data (e.g. cloud save, leaderboard info), please email us at{' '}
              <a href="mailto:support@doingabsolutezeroeffort.com" className="text-[#9500ff] hover:text-[#7a00d1]">
                support@doingabsolutezeroeffort.com
              </a>
              . We'll forward the request to the relevant third-party services (e.g. Google Play Games Services) if needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#e0e0e0] mb-4">Contact Us</h2>
            <p className="text-gray-400">
              For questions or data requests:{' '}
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