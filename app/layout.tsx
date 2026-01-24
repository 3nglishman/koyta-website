import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koyta Hope & Rift Initiative | Where Love Is Sown, Hope Is Grown",
  description: "A Canadian nonprofit dedicated to reversing generational harm and restoring dignity in Kipsigis communities through sustainable development, local entrepreneurship, and community empowerment in Kenya's Rift Valley region.",
  keywords: ["nonprofit", "Kenya", "Kipsigis", "community development", "clean water", "solar power", "farmers co-op", "education", "small business"],
  openGraph: {
    title: "Koyta Hope & Rift Initiative",
    description: "Where Love Is Sown, Hope Is Grown. Your donation has a story.",
    url: "https://koyta.org",
    siteName: "Koyta Hope & Rift Initiative",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
  {children}
</body>
    </html>
  );
}
