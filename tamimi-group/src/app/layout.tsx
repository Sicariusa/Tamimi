import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tamimi Group | Excellence Since 1945",
  description: "Leading multinational conglomerate providing premium services across catering, facility management, board & lodging, and retail operations throughout the Gulf region.",
  keywords: "Tamimi Group, Gulf services, facility management, catering, retail, Saudi Arabia, Bahrain, Qatar, Kuwait",
  authors: [{ name: "Tamimi Group" }],
  creator: "Tamimi Group",
  publisher: "Tamimi Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tamimigroup.com'),
  openGraph: {
    title: "Tamimi Group | Excellence Since 1945",
    description: "Leading multinational conglomerate providing premium services across catering, facility management, board & lodging, and retail operations throughout the Gulf region.",
    url: 'https://tamimigroup.com',
    siteName: 'Tamimi Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tamimi Group',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tamimi Group | Excellence Since 1945",
    description: "Leading multinational conglomerate providing premium services across catering, facility management, board & lodging, and retail operations throughout the Gulf region.",
    images: ['/og-image.jpg'],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
