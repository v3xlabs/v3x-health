import './globals.css';
import '../public/hack/hack.css';

import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';

export const metadata = {
    title: 'Health & Status',
    description: 'Analytics, Metrics & Status for the V3X Infrastructure.',
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <header>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://v3x.health" />
                <meta property="og:image" content="/v3x-health-opengraph.png" />
                <meta
                    property="og:description"
                    content={metadata.description}
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://v3x.health" />
                <meta property="twitter:title" content={metadata.title} />
                <meta
                    property="twitter:description"
                    content={metadata.description}
                />
                <meta
                    property="twitter:image"
                    content="/v3x-health-opengraph.png"
                />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </header>
            <body className="w-full min-h-screen">
                <NavBar />

                {children}

                <Footer />
            </body>
        </html>
    );
}
