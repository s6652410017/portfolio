import { Kanit } from 'next/font/google'
import './globals.css'

// โหลดฟอนต์ Kanit (วิธีของ Next.js)
const kanit = Kanit({ 
  weight: ['400', '700'], 
  subsets: ['thai', 'latin'],
  display: 'swap',
})

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={kanit.className}>
        {/* ตรงนี้คือส่วนที่หน้าอื่นๆ จะมาแสดงผล */}
        <main>{children}</main>
      </body>
    </html>
  )
}