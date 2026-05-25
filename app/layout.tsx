import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Koyta Hope & Rift Initiative',
  description: 'Empowering Kipsigis communities in Kenya\'s Rift Valley',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HZH5G7JQK2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HZH5G7JQK2');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
