import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-expect-error TS2882: side-effect CSS import is resolved by Next.js at build time.
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/sections/navbar";
import { FooterSection } from "@/components/sections/footer";
import { ResumeButton } from "@/components/resume-button";
import { Toaster } from "@/components/ui/sonner";
import { buildMetadata } from "@/config/site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider>
          <Navbar />
          <ResumeButton />
          <main>{children}</main>
          <FooterSection />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}