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
        

      <link 
        rel="icon" 
        href="/favicon.ico" 
        sizes="any" 
      />

      <link
        rel="icon"
        href="/icon.png"
        type="image"
        sizes="any"
      />

      <link
        rel="apple-touch-icon"
        href="/apple-icon.png"
        type="image"
        sizes="any"
      />

      </head>
      <body className={playDisplay.className}>
        {children}
      </body>
    </html>
  )
}
