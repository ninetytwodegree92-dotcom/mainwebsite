import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import PageLoader from "@/components/PageLoader";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "92DEGREE – Luxury Leather Outerwear & Streetwear",
  description:
    "Premium leather puffer jackets, hoodies, and streetwear engineered for thermal warmth.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextTopLoader
          color="#A9744F"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #A9744F, 0 0 5px #A9744F"
          zIndex={999999}
          showAtBottom={false}
        />

        <PageLoader />
        <Navbar />
        <CartDrawer />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}