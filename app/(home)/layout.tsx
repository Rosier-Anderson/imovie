// app/(home)/layout.tsx

import SideNav from "../ui/(home)/SideNav";
import Header from "../ui/(home)/components/header/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <Header />
      <div className="h-[calc(100%-80px)] max-w-[1200px] mx-auto">
        <div className="h-full grid grid-flow-col auto-rows-auto grid-cols-6 grid-rows-2">
          <SideNav />
          <div className="bg-red-600 row-span-3 col-span-5 max-md:col-span-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
