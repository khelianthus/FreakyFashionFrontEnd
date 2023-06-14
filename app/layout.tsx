import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Freaky Fashion',
  description: 'Fashion for you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className='h-full bg-white'>
    <body className={`${inter.className} h-full`}>        
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
