import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Koyta Hope & Rift Initiative",
  description: "Where Love Is Sown, Hope Is Grown",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full overflow-x-hidden bg-[#faf8f5]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
