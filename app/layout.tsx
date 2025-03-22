import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Otmane Aboulghit",
  description: "A portfolio that showcases my work and experience.",
  icons: "/arz.ico",
};

// import ApearanceProvider from "@/app/context/Themecontext";
import NavigationLayout from './layouts/NavigationLayout';
import PageWrapper from "@/components/wrapper/PageWrapper";
import { Toaster } from "react-hot-toast";
// import ThemeInitializer from "@/components/ThemeInitializer";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <PageWrapper>
          <ThemeProvider attribute="class" enableSystem defaultTheme="light">
            <NavigationLayout>
              {children}
            </NavigationLayout>
          </ThemeProvider>
        </PageWrapper>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}