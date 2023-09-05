import './globals.css'
import { Playfair_Display } from 'next/font/google';
import {NavBarDos} from '@/Components/NavBarDos';


const playDisplay = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'estrada-portfolio',
  description: 'In my portfolio you can discover my work done to date. Through him you can contact me by several ways, gmail, whatsapp, linkedin, etc.',
  keywords: 'portfolio, jorge, estrada, contact, work, estrada-portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      {/* <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" /> */}
      
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
      <body className={`${playDisplay.className} bg-gray-900 text-colortext-100`}>
        <header>
          <NavBarDos />
        </header>
        {children}
      </body>
    </html>
  )
}
