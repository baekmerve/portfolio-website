import type { Metadata } from "next";
import { Jost, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/views/Footer";
import Navbar from "@/components/navbarFolder/Navbar";


const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat-sans",
});

export const metadata: Metadata = {
  title: "Merve Baek's portfolio website",
  description: "FrontEnd developer Merve Baek's portfolio website powered by Next.js 15",
  icons: {
    icon: "/images/logo3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${caveat.variable} ${jost.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
