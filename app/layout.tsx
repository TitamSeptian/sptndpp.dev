import './globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import {ThemeProvider} from "@/components/theme-provider";

const Soras =Sora({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
  title: 'sptndpp.dev',
  description: 'My Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Soras.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col h-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
