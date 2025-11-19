import AllProviders from "@/providers/AllProviders";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "LAUFEN - Premium Bathroom Solutions",
  description:
    "Discover LAUFEN's premium bathroom products, collections, and design inspiration. Since 1892, enabling bathroom experiences for both body and soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <AllProviders>{children}</AllProviders>
      </body>
    </html>
  );
}
