import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Bonjour Agency - Premium Digital Solutions | Web Development, AI & POS Systems",
  description: "Leading digital agency specializing in web development, AI solutions, POS systems, and social media management. Transform your business with cutting-edge technology.",
  keywords: ["web development", "AI solutions", "POS systems", "social media management", "digital agency", "software development"],
  authors: [{ name: "Bonjour Agency" }],
  openGraph: {
    title: "Bonjour Agency - Premium Digital Solutions",
    description: "Transform your business with cutting-edge technology solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
