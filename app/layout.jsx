import localFont from 'next/font/local'
import './globals.css'

const billySans = localFont({
    src: [
        {
            path: '../public/fonts/BillySans-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/BillySans-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/BillySans-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-billy-sans',
})

export const metadata = {
    title: 'GrowthPath - Track Your Child\'s Learning Journey',
    description: 'GrowthPath helps parents keep track of what their children have learned and monitor their progress.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${billySans.variable}`}>
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
