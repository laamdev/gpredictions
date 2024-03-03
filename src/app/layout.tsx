import '@/app/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          'antialised relative h-full font-sans',
          `${inter.className}`
        )}
      >
        <main className='relative flex min-h-screen flex-col'>{children}</main>
      </body>
    </html>
  )
}
