import type {Metadata} from 'next'
import './globals.css'
import Navbar from "@/components/navbar";
import {fontSans} from "@/app/fonts";


export const metadata: Metadata = {
  title: 'The Unhackable',
  description: 'Website created for HackSheffield8',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
