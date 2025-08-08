// app/(home)/layout.tsx

import Header from "@/app/ui/home/components/header/Header";
import SideNav from "@/app/ui/home/SideNav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark:bg-neutral-primary">
      <Header />
      <div className="flex  h-[calc(100%-80px)] max-w-[1200px] mx-auto">
        {" "}
        <SideNav />
        <div className=" h-full grid grid-flow-col auto-rows-auto grid-cols-6 grid-rows-2">
          <div className=" row-span-3 col-span-5 max-md:col-span-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
