// Root Layout
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | NextBrand Template",
    default: "NextBrand | NextBrand Template",
  },
  description: "NextBrand Tailwind CSS Multipurpose Landing Page",
  keywords: ["Next.js", "Tailwind CSS", "Multipurpose", "Landing Page"],
  authors: [{ name: "ITGenius Team", url: "https://itgenius.co.th"}],

  // favicon: "/favicon.ico",
  icons: "/favicon.ico",

  // Robots
  robots: "index, follow",  
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
