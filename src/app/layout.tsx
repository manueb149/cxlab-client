import LayoutWrapper from '@/Layout'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full">
      <body className="h-full">
        <LayoutWrapper devMode>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  )
}
