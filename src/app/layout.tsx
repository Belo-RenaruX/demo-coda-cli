import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Globant TODO | Stay Organized',
  description: 'A vibrant todo app powered by Globant innovation - organize your tasks with style',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' font-mono'}>
        {children}
        <script defer src="https://cloud.umami.is/script.js" data-website-id="29328871-573e-42b5-92d2-fd8d306d9a4d"></script>
      </body>
    </html>
  )
}
