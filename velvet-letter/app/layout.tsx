import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Little Something for You",
  description: "A letter, written slowly and meant only for you.",
  applicationName: "Velvet Letter",
  themeColor: "#160d10",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
