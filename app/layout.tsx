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
  // Set to true to block access
  const isSubscriptionActive = false;

  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${robotoSlab.variable} ${openSans.variable} font-sans`}>
        <LanguageProvider>
          {!isSubscriptionActive ? (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
              <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8 text-center">
                <div className="mb-6">
                  <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  Service Unavailable
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  The web server is not subscribed for, try again later
                </p>
                <div className="text-sm text-gray-500">
                  Please contact support for assistance
                </div>
              </div>
            </div>
          ) : (
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          )}
        </LanguageProvider>
      </body>
    </html>
  );
}