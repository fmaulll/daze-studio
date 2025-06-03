import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chat Screenshot Generator - Create WhatsApp & iMessage Style Screenshots',
  description: 'Create realistic chat screenshots in WhatsApp and iMessage styles. Perfect for mockups, presentations, and social media content. Customize colors, time, status, and more.',
  keywords: 'chat screenshot generator, WhatsApp template, iMessage template, fake chat creator, message mockup, social media mockup, chat generator, WhatsApp screenshot, iMessage screenshot',
  openGraph: {
    title: 'Chat Screenshot Generator - WhatsApp & iMessage Style Creator',
    description: 'Create realistic chat screenshots in WhatsApp and iMessage styles. Customize colors, time, status, and more.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/screenshot-generator-preview.png', // We'll create this
        width: 1200,
        height: 630,
        alt: 'Chat Screenshot Generator Preview',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chat Screenshot Generator - Create Chat Screenshots',
    description: 'Create realistic WhatsApp and iMessage style chat screenshots. Perfect for mockups and presentations.',
    images: ['/screenshot-generator-preview.png'],
  },
}

export default function ScreenshotGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 