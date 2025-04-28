import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'GrowthPath - Track Your Child\'s Learning Journey',
    description: 'GrowthPath helps parents keep track of what their children have learned and monitor their progress.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className={inter.className}>
                <Header />
                <main className="min-h-screen bg-white">
                    {children}
                </main>
            </body>
        </html>
    );
}
