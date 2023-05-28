'use client'
import './globals.css'
import { AuthContextProvider } from '@/context/AuthContext';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Crypto-Alert',
//   description: 'cryptocurrency, coins, stable coins, bitcoin, doge, ethereum',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
