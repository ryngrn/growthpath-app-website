import './globals.css';
import localFont from 'next/font/local';

const roca = localFont({
  src: [
    {
      path: '../public/fonts/Roca Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Roca Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Roca Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Roca Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Roca Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Roca Thin Italic.ttf',
      weight: '100',
      style: 'italic',
    },
  ],
  variable: '--font-roca',
  display: 'swap',
});

export const metadata = {
  title: 'GrowthPath',
  description: 'Track your child\'s learning journey',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roca.variable}`}>
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
