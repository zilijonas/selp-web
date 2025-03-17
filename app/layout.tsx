import { cn } from '@/lib/utils';
import { Montserrat, Poppins } from 'next/font/google';
import type React from 'react';
import './globals.css';
import { Providers } from './providers';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'SELP - Self Help | Coming Soon',
  description:
    'SELP is an innovative medical assessment app that revolutionizes self-help. Discover the future of healthcare at your fingertips – coming soon on App Store and Google Play.',
  keywords:
    'SELP, Self Help, Medical Assessment, Health App, Healthcare, App Store, Google Play, 3D Human Model, Personalized Questionnaire',
  authors: [{ name: 'SELP Team' }],
  openGraph: {
    title: 'SELP - Self Help | Coming Soon',
    description:
      'SELP is short for Self Help. Experience the future of medical assessments and wellness at your fingertips.',
    url: 'https://selp.life',
    siteName: 'SELP',
    images: [
      {
        url: 'https://selp.life/assets/SELP_banner.webp',
        width: 1792,
        height: 1024,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SELP - Self Help | Coming Soon',
    description:
      'SELP is short for Self Help. Experience the future of medical assessments and wellness at your fingertips.',
    images: ['https://selp.life/assets/SELP_banner.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-gradient-to-br from-[#add8e6] to-[#00008b] font-sans antialiased',
          montserrat.variable,
          poppins.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
