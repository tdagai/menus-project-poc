import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

import StyledComponentsRegistry from '../../lib/registry';
import type { Metadata } from 'next'
import Script from 'next/script';
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Teddy\'s Menus POC',
  description: 'Website created as a proof of concept for my menus idea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body id="bootsrap-overrides" className={leagueSpartan.className}>
        <StyledComponentsRegistry>
          <main id="root">{children}</main>
        </StyledComponentsRegistry>
      </body>
      <Script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossOrigin="anonymous"
      />

      <Script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossOrigin="anonymous"
      />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossOrigin="anonymous"
      />
    </html>
  )
}