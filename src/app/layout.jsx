import NavBar from '../components/navbar/NavBar'
import './globals.css'
import { Inter,Roboto,Poppins } from 'next/font/google'
import Footer from '../components/footer/Footer';
import { ThemeProvider } from '../context/ThemeContext';
import AuthProvider from "../components/AuthProvider/AuthProvider.jsx";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yokesh blog',
  description: 'This is a description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
        <AuthProvider>
        <div className='container'>
        <NavBar/>
        {children}
        <Footer/>
        </div>
        </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}
