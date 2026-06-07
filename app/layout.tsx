import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ZED AGENCY | Web Development & SaaS',
  description:
    'Web Development, SaaS Development, Mobile Apps, Branding, Marketing, SEO and Automation',
  creator: 'ZED AGENCY',
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://z-agency-website.vercel.app',
    title: 'ZED AGENCY | Premium Digital Solutions',
    description:
      'We build digital products that grow businesses. Premium software development, branding, and marketing agency.',
    siteName: 'ZED AGENCY',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZED AGENCY | Premium Digital Solutions',
    description: 'We build digital products that grow businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function removeV0Badge() {
                var badges = document.querySelectorAll('[data-v0-badge], .v0-badge, a[href*="v0.dev"]');
                badges.forEach(function(el) { el.style.display = 'none'; });
                var all = document.querySelectorAll('*');
                all.forEach(function(el) {
                  if (el.textContent && el.textContent.trim() === 'Built with v0' && el.children.length === 0) {
                    el.parentElement && (el.parentElement.style.display = 'none');
                  }
                });
              }
              document.addEventListener('DOMContentLoaded', removeV0Badge);
              setTimeout(removeV0Badge, 500);
              setTimeout(removeV0Badge, 1500);
              var observer = new MutationObserver(removeV0Badge);
              document.addEventListener('DOMContentLoaded', function() {
                observer.observe(document.body, { childList: true, subtree: true });
              });
            })();
          `
        }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
