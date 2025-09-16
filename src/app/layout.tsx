import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DC Buddy - Distributiecentrum Chatbot',
  description: 'Leer alles over distributiecentra van Marco, jouw digitale collega uit de logistiek',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-100 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
} 