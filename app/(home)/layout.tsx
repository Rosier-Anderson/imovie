// app/(home)/layout.tsx

import Header from "@/app/ui/home/components/header/Header";
import SideNav from "@/app/ui/home/SideNav";


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <Header />
      <div className="h-[calc(100%-80px)] max-w-[1200px] mx-auto">
        <div className=" relative h-full grid grid-flow-col auto-rows-auto grid-cols-6 grid-rows-2">
          <SideNav />
          <div className=" row-span-3 col-span-5 max-md:col-span-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
