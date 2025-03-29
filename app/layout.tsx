import './globals.css'
import './animations.css'
import './apple-style.css'
import { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    template: '%s | AI Ghibli Filter',
    default: 'AI Ghibli Filter | Transform Photos into Ghibli-Style Art',
  },
  description: 'Transform your photos into stunning Ghibli-style art with our AI Ghibli Filter. High-quality image processing, fast and free to use.',
  keywords: 'ai ghibli filter, ghibli ai filter, ai ghibli art filter, ghibli style ai, ai ghibli style filter, ghibli inspired ai filter, ai art ghibli effect, ghibli filter for photos',
  authors: [{ name: 'AI Ghibli Filter Team' }],
  creator: 'AI Ghibli Filter',
  publisher: 'AI Ghibli Filter',
  metadataBase: new URL('https://aighiblifilter.org'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'AI Ghibli Filter | Transform Photos into Ghibli-Style Art',
    description: 'Transform your photos into stunning Ghibli-style art with our AI Ghibli Filter. High-quality image processing, fast and free to use.',
    url: 'https://aighiblifilter.org',
    siteName: 'AI Ghibli Filter',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://aighiblifilter.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Ghibli Filter - Transform Photos into Ghibli-Style Art',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Ghibli Filter | Transform Photos into Ghibli-Style Art',
    description: 'Transform your photos into stunning Ghibli-style art with our AI Ghibli Filter',
    images: ['https://aighiblifilter.org/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://aighiblifilter.org" />
      </head>
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}
