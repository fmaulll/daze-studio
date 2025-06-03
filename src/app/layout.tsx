import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daze Studio - Doing Absolute Zero Effort',
  description: 'High-energy mobile experiences with zero effort and 100% chaos.',
  keywords: 'game development, app development, web development, development tools, mobile games',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/icon.png', sizes: '192x192', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://dazestudio.app'),
  openGraph: {
    title: 'Daze Studio - Doing Absolute Zero Effort',
    description: 'High-energy mobile experiences with zero effort and 100% chaos.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/icon.png',
        width: 192,
        height: 192,
        alt: 'Daze Studio Logo',
      }
    ],
    siteName: 'Daze Studio'
  },
  twitter: {
    card: 'summary',
    title: 'Daze Studio - Doing Absolute Zero Effort',
    description: 'High-energy mobile experiences with zero effort and 100% chaos.',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2558078406235032"
          crossOrigin="anonymous"
        />
        <link rel="canonical" href="https://dazestudio.app" />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white min-h-screen`}>
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
