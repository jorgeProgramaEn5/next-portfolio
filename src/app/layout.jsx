import './globals.css'
import '../Styles/tailwind.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-Portfolio',
  description: 'In my portfolio you can discover my work done to date. Through him you can contact me by several ways, gmail, whatsapp, linkedin, etc.',
  keywords: 'portfolio, jorge, estrada, contact, work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
