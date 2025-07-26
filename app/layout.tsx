import type { Metadata } from "next";
import "./styles/globals.css";
import { inter } from "./fonts";

import SideNav from "./ui/(home)/SideNav";
import Header from "./ui/(home)/components/header/Header";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased `}>
        <div className="h-screen">
          <Header />
          <div className="h-[calc(100%-80px)] max-w-[1200px] mx-auto">
            <div className="h-full grid grid-flow-col auto-rows-auto grid-cols-6 grid-rows-2  ">
              <SideNav />
              <div className="bg-red-600  row-span-3 col-span-5  max-md:col-span-full">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
