import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueHaasDisplay = localFont({
  src: "../font/NeueHaasDisplayRoman.ttf",
  variable: "--font-neue-haas",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Aadifidelis × TwoSpoon — From visibility to value",
  description:
    "A phased operating platform that turns distribution scale into captured margin and strategic optionality.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f2f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={neueHaasDisplay.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
