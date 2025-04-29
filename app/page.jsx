import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';
import Image from 'next/image';
import { Footer } from '../components/footer';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pb-0">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex-1">
                            <div className="mb-8 -mt-48">
                                <Image
                                    src="/images/logo-min.svg"
                                    alt="GrowthPath"
                                    width={200}
                                    height={50}
                                    className="h-12 w-auto"
                                    priority
                                />
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-roca">
                                Track Your Child&apos;s Learning Journey
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                GrowthPath helps parents keep track of what their children have learned and monitor their progress.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#"
                                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Download for iOS
                                </a>
                                <a
                                    href="#"
                                    className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
                                >
                                    Download for Android
                                </a>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="relative w-full max-w-md mx-auto mb-0">
                                <Image
                                    src="/images/iphone-image.png"
                                    alt="GrowthPath App Screenshot"
                                    width={500}
                                    height={1000}
                                    className="rounded-xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section Transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white shadow-[0_30px_35px_-5px_rgba(0,0,0,0.15)]" />
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-lg bg-gray-50">
                            <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
                            <p className="text-gray-600">
                                Easily monitor your child&apos;s learning milestones and achievements over time.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg bg-gray-50">
                            <h3 className="text-xl font-semibold mb-4">Learning Journal</h3>
                            <p className="text-gray-600">
                                Document and celebrate your child&apos;s learning moments with photos and notes.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg bg-gray-50">
                            <h3 className="text-xl font-semibold mb-4">Goal Setting</h3>
                            <p className="text-gray-600">
                                Set and track learning goals to support your child&apos;s development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8">Start Your Child&apos;s Learning Journey Today</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#"
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Download for iOS
                        </a>
                        <a
                            href="#"
                            className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
                        >
                            Download for Android
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time.</p>
            </Card>
        );
    }
}
