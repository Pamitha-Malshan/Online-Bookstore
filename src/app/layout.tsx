import type { Metadata } from "next";
import { MantineProvider } from '@mantine/core';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "online bookstore",
  description: "online bookstore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MantineProvider>
      <body className={inter.className}>{children}</body>
      </MantineProvider>
    </html>
  );
}
