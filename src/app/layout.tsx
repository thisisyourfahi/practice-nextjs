import type { Metadata } from "next";
import "./globals.css";
import {Geist_Mono} from 'next/font/google'
import Navbar from '../app/components/navbar/Navbar'

const mono = Geist_Mono({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Fahiyan",
  description: "Created by Fahiyan with the help of Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mono.className} h-full antialiased`}
    >
      <body className="min-h-full">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
