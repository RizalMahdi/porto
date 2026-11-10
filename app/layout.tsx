import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Muhammad Rizal Mahdi | Portofolio",
    template: "%s | Muhammad Rizal Mahdi",
  },
  description:
    "Portofolio Muhammad Rizal Mahdi, mahasiswa Sistem Informasi dengan minat di bidang web development, UI/UX, dan data.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Portofolio Muhammad Rizal Mahdi",
    title: "Muhammad Rizal Mahdi | Portofolio",
    description: "Mahasiswa Sistem Informasi dengan minat di bidang web development, UI/UX, dan data.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rizal Mahdi | Portofolio",
    description: "Mahasiswa Sistem Informasi dengan minat di bidang web development, UI/UX, dan data.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={geist.variable} suppressHydrationWarning>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <ThemeProvider>{children}<Toaster position="bottom-right" richColors /></ThemeProvider>
      </body>
    </html>
  );
}
