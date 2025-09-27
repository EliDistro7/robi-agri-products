import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery - Agricultural Operations & Livestock Facilities | Robi Agri Products Tanzania',
  description: 'Explore our comprehensive photo gallery showcasing agricultural operations, livestock facilities, modern farming equipment, and sustainable farming practices at Robi Agri Products Tanzania.',
  keywords: 'robi agri gallery, tanzania agriculture photos, livestock facilities, farming operations, agricultural equipment, sustainable farming, cattle farming, crop cultivation, farm facilities, agricultural gallery',
  authors: [{ name: 'Robi Agri Products' }],
  openGraph: {
    title: 'Photo Gallery - Robi Agri Products Tanzania',
    description: 'View our agricultural operations, livestock facilities, and sustainable farming practices through our comprehensive photo gallery.',
    type: 'website',
    locale: 'en_TZ',
    images: [
      {
        url: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 800,
        alt: 'Robi Agri Products - Agricultural Operations Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Gallery - Robi Agri Products Tanzania',
    description: 'Explore our agricultural operations and livestock facilities through our photo gallery.',
    images: ['https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: '/gallery',
  },
  other: {
    'geo.region': 'TZ',
    'geo.placename': 'Dar es Salaam',
    'geo.position': '-6.792354;39.208328',
    'ICBM': '-6.792354, 39.208328',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}