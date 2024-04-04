// Front Layout

import Footer from "@/components/front/Footer"
import Navbar from "@/components/front/Navbar"
import PrelineScript from "@/components/PrelineScript"

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      <PrelineScript />
    </html>
  )
}
