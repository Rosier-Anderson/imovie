import type { Metadata } from "next";
import "./styles/globals.css";
import { inter } from "./fonts";
import Header from "./ui/header/Header";
import SideNav from "./ui/SideNav";

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
        <div className="h-screen max-w-[1200px] mx-auto">
           <Header />
        <div className="h-[calc(100%-80px)] grid-flow-col grid grid-cols-3 grid-rows-2  ">
         <SideNav/>
          <div className="bg-red-600  row-span-3 col-span-2 max-md:col-span-3">{children}</div>
        </div>
        </div>
          
      </body>
    </html>
  );
}
