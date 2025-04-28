import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-900">GrowthPath</span>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Features
                        </a>
                        <a href="#download" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Download
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
