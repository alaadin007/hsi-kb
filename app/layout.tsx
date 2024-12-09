import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aesthetic Courses | Harley Street Institute - Medical Training',
  description: 'Premier aesthetic medicine training in London. Expert-led courses in Botox, dermal fillers, and advanced aesthetic procedures. Join the leading medical aesthetics institute.',
  keywords: 'aesthetic courses, medical aesthetics training, botox courses, dermal filler training, aesthetic medicine, Harley Street Institute',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}