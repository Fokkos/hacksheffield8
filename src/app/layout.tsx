import type {Metadata} from 'next'
import './globals.css'
import Navbar from "@/components/navbar";
import {fontSans} from "@/app/fonts";
import {Providers} from "@/app/providers";


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
      <body className={`${fontSans.className} m-0`}>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
