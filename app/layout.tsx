import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Roboto_Slab, Open_Sans } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Primary font for headings - Strong, modern, great for branding
const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Secondary font for subheadings and emphasis - Professional, sturdy
const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-slab',
  display: 'swap',
});

// Body text font - Clean, readable, professional
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Robi Agri Products & Livestock Production - Tanzania',
  description: 'Leading agricultural and livestock production company in Tanzania. Quality cattle breeding, agricultural consultancy, and farming solutions.',
  keywords: 'agriculture, livestock, cattle breeding, farming, Tanzania, agricultural services',
  authors: [{ name: 'Robi Agri Products' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${robotoSlab.variable} ${openSans.variable} font-sans`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}