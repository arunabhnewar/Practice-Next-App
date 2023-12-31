// "use client";

import Loader from "@/components/Loader/Loader";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import Providers from "@/context/providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Next App",
  description: "My first next application",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className='container'>
            <Navbar />
            {children}
            <Loader />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
