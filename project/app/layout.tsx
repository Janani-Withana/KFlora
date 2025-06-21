import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CartDrawer from '@/components/cart/cart-drawer';
//import VuePromotionalBanner from '@/components/promotional/vue-banner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'KFlora - Premium Plants for Your Home',
  description: 'Discover beautiful orchids, roses, hoya tiyara, lipstick plants, anthuriums, and ornamental plants. Expert care guidance and sustainable growing practices.',
  keywords: 'plants, orchids, roses, hoya, anthurium, indoor plants, gardening, plant care',
  authors: [{ name: 'KFlora Team' }],
  openGraph: {
    title: 'KFlora - Premium Plants for Your Home',
    description: 'Transform your space with our curated collection of premium plants',
    url: 'https://kflora.com',
    siteName: 'KFlora',
    images: [
      {
        url: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg',
        width: 1200,
        height: 630,
        alt: 'KFlora - Beautiful Plants Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KFlora - Premium Plants for Your Home',
    description: 'Transform your space with our curated collection of premium plants',
    images: ['https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            {/* <VuePromotionalBanner /> */} 
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <CartDrawer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}