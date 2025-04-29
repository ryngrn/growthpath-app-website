import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <Image
                            src="/images/logo-min.svg"
                            alt="GrowthPath"
                            width={200}
                            height={50}
                            className="h-8 w-auto"
                        />
                        <p className="text-gray-400 mt-2">Track your child&apos;s learning journey</p>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex space-x-4 mb-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} GrowthPath. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
