import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Pearl Legacy",
  description: "Pearl Legacy Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
