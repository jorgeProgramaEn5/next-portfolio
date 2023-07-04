import './globals.css'
import { Playfair_Display } from 'next/font/google'

const playDisplay = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-Portfolio',
  description: 'In my portfolio you can discover my work done to date. Through him you can contact me by several ways, gmail, whatsapp, linkedin, etc.',
  keywords: 'portfolio, jorge, estrada, contact, work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#603cba" />
      <meta name="theme-color" content="#ffffff" />


      </head>
      <body className={playDisplay.className}>
        {children}
      </body>
    </html>
  )
}
