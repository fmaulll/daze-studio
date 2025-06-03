'use client';

import ChatInterface from '@/components/ChatInterface';
import Script from 'next/script';
import Link from 'next/link';
import Advertisement from '@/components/Advertisement';

export default function ScreenshotGenerator() {
  // JSON-LD structured data for rich results
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Chat Screenshot Generator",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Create realistic WhatsApp and iMessage style chat screenshots. Perfect for mockups, presentations, and social media content.",
    "featureList": [
      "WhatsApp style chat screenshots",
      "iMessage style chat screenshots",
      "Customizable colors and themes",
      "Message status indicators",
      "Time and date customization",
      "Image upload support"
    ]
  };

  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <main className="min-h-screen bg-[#f0f2f5] p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <nav className="mb-8 text-gray-600">
            <Link href="/" className="hover:text-[#9500ff]">Home</Link>
            <span className="mx-2">/</span>
            <span>Chat Screenshot Generator</span>
          </nav>

          {/* Top Advertisement - Banner */}
          {/* <Advertisement 
            slot="7438105883"
            className="mb-8"
            style={{ minHeight: '90px' }}
          /> */}

          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
            Chat Screenshot Generator
          </h1>
          
          <div className="prose prose-sm max-w-none mb-6 text-center text-gray-600">
            <p>Create beautiful chat screenshots in WhatsApp and iMessage styles. Perfect for mockups, presentations, and social media content.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Features:</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Choose between WhatsApp and iMessage chat styles</li>
              <li>Customize chat appearance:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Change contact name</li>
                  <li>Customize message bubble colors (WhatsApp)</li>
                  <li>Set message time and date</li>
                  <li>Click the date at the top to edit it</li>
                </ul>
              </li>
              <li>Message controls:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Send messages as either person</li>
                  <li>Click any message bubble to edit or delete it</li>
                  <li>Upload images from both sides</li>
                  <li>Set message status (delivered, pending, not delivered)</li>
                </ul>
              </li>
              <li>Interactive editing:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Click any message to show edit/delete options</li>
                  <li>Edit messages after sending</li>
                  <li>Delete individual messages</li>
                  <li>Rearrange conversation flow naturally</li>
                </ul>
              </li>
              <li>Download your screenshot in high quality</li>
            </ul>
          </div>

          {/* Middle Advertisement - Autorelaxed */}
          {/* <Advertisement 
            slot="4177501811"
            format="autorelaxed"
            className="mb-8"
            style={{ minHeight: '250px' }}
          /> */}

          <ChatInterface />

          <div className="mt-8 text-center text-gray-600">
            <h2 className="text-xl font-semibold mb-4">How to Use</h2>
            <ol className="text-left list-decimal pl-6 space-y-2">
              <li>Select your chat style (WhatsApp/iMessage) at the top</li>
              <li>Customize the appearance:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Enter the contact name</li>
                  <li>Choose bubble colors (WhatsApp)</li>
                  <li>Set the message time</li>
                  <li>Click the date at the top to customize it</li>
                </ul>
              </li>
              <li>Create your conversation:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Type messages and use "Send as You" or "Send as Them"</li>
                  <li>Upload images using "Your Image" or "Their Image"</li>
                  <li>Click any message to edit or delete it</li>
                  <li>Set message status for your messages (WhatsApp)</li>
                </ul>
              </li>
              <li>Click "Download Screenshot" when you're done</li>
            </ol>
          </div>
        </div>
      </main>

      <footer className="bg-white py-8">
        <div className="max-w-2xl mx-auto px-4 text-center text-gray-600">
          <p className="mb-4">A free tool by <Link href="/" className="text-[#9500ff] hover:underline">Daze Studio</Link></p>
          <div className="space-x-4">
            <Link href="/privacy-policy" className="hover:text-[#9500ff]">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-[#9500ff]">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </>
  );
} 