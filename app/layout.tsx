import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Mohammed Daniyal Raza - Frontend Engineer & Founder of UXU Tech',
  description: 'Mohammed Daniyal Raza is a Frontend Engineer and Founder of UXU Tech startup. Expert in React, Next.js, TypeScript. Professional portfolio showcasing 2+ years experience in web development and startup leadership.',
  keywords: [
    'Mohammed Daniyal Raza',
    'Daniyal Raza', 
    'Mohammed Daniyal',
    'Daniyal',
    'Frontend Engineer',
    'Front end engineer',
    'UXU Tech',
    'UXU Tech Founder',
    'Founder UXU Tech',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Web Developer Pakistan',
    'Startup Founder Pakistan',
    'Karachi Frontend Developer',
    'UI/UX Developer',
    'Full Stack Developer',
    'React Expert',
    'Web Development Services',
    'Portfolio Mohammed Daniyal',
    'Daniyal Portfolio',
    'UXU Tech Services',
    'Pakistan Web Developer',
    'Karachi Startup Founder'
  ],
  authors: [{ name: 'Mohammed Daniyal Raza' }],
  creator: 'Mohammed Daniyal Raza',
  publisher: 'Mohammed Daniyal Raza',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mohammeddaniyalraza.vercel.app/',
  },
  openGraph: {
    title: 'Mohammed Daniyal Raza - Frontend Engineer & Founder of UXU Tech',
    description: 'Mohammed Daniyal Raza is a Frontend Engineer and Founder of UXU Tech startup. Expert in React, Next.js, TypeScript with 2+ years experience.',
    type: 'website',
    url: 'https://mohammeddaniyalraza.vercel.app/',
    siteName: 'Mohammed Daniyal Raza',
    locale: 'en_US',
    images: [
      {
        url: 'https://mohammeddaniyalraza.vercel.app/profile-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohammed Daniyal Raza - Frontend Engineer & UXU Tech Founder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Daniyal Raza - Frontend Engineer & UXU Tech Founder',
    description: 'Frontend Engineer and Founder of UXU Tech startup. Expert in React, Next.js, TypeScript with 2+ years experience.',
    creator: '@daniyalrazaqa',
    images: ['https://mohammeddaniyalraza.vercel.app/profile-image.png'],
  },
  verification: {
    google: 'lVdTc8vSPPj34ef28O-HDfiIIMPvKJdpXxTc2nSEFHQ',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'application-name': 'Mohammed Daniyal Raza Portfolio',
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/* create a head tag */}
      <head>
        <meta name="google-site-verification" content="a7f528bdae0add45" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}