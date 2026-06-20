import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { brand } from '@/lib/site-config'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: '600',
  display: 'swap',
})

const siteUrl = 'https://v0-dance-studio-prototype-rose-ball.vercel.app'
const siteName = brand.name
const siteTitle = 'Rose Ballet | Scuola di Danza'
const siteDescription =
  'Rose Ballet e una scuola di danza diretta da Melania e Rossella Mellino, con percorsi per bambini, ragazzi e adulti in un ambiente professionale e stimolante.'
const ogImage = `${siteUrl}/roseballet/og.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'Rose Ballet',
    'scuola di danza Napoli',
    'danza classica Napoli',
    'danza moderna Napoli',
    'danza contemporanea Napoli',
    'pilates Napoli',
    'Napoli',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        width: 1200,
        height: 630,
        alt: 'Rose Ballet - Scuola di Danza',
        type: 'image/jpeg',
      },
    ],
    locale: 'it_IT',
    countryName: 'Italia',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        alt: 'Rose Ballet - Scuola di Danza',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'dance academy',
  other: {
    'og:image:secure_url': ogImage,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
    'twitter:image': ogImage,
    'pinterest-rich-pin': 'true',
  },
}

export const viewport: Viewport = {
  themeColor: '#C0152A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${cormorant.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
