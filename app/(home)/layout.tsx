// app/(home)/layout.tsx

import Header from "@/app/ui/home/components/header/Header";
import SideNav from "../ui/home/components/asside/SideNav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" grid grid-flow-row-dense  md:grid-cols-[200px_auto]  grid-rows-[70px_auto_auto] gap-2 bg-white dark:bg-neutral-primary  ">
      <Header />

      <SideNav />
      <div className=" rows-span-full  bg-red-primary mx-auto">{children}</div>
    </div>
  );
}
