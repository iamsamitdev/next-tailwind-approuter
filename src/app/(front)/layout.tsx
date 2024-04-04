// Front Layout
export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>Header Front</nav>
        {children}
        <footer>Footer Front</footer>
      </body>
    </html>
  )
}
