import { Noto_Sans } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-noto-sans',
})

export const metadata = {
    title: 'GrowthPath - Track Your Child\'s Learning Journey',
    description: 'GrowthPath helps parents keep track of what their children have learned and monitor their progress.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${notoSans.variable}`}>
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="font-sans">
                <main className="min-h-screen bg-white">
                    {children}
                </main>
            </body>
        </html>
    );
}
