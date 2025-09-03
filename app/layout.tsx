import type { Metadata } from "next";
import "./styles/globals.css";
import { inter } from "./fonts";
import Footer from "./ui/footer/Footer";

export const metadata: Metadata = {
  title: "I-movie App",
  description: "this is a simple movie app using api to fetch movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        cz-shortcut-listen="true"
        className={`${inter.className} antialiased dark:bg-neutral-primary `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
