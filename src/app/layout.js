import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
      
      <div className=' min-h-[100vh] max-w-[90vw] mx-auto  flex flex-col justify-between'>
        {children}
      
        </div>
        <Footer/>
        </body>
    </html>
  )
}
