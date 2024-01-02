import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import AdminMiddleware from '@/middlewares/AdminMiddleware'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GDSC-PEC',
  description: 'Google developer student club, Punjab Engineering College, Chandigarh',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <AdminMiddleware>
              <Navbar/>
              {children}
              <Footer/>
            </AdminMiddleware>
          </body>
        </html>
    </ClerkProvider>
  )
}
