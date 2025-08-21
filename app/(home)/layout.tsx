// app/(home)/layout.tsx

import Header from "@/app/ui/home/components/header/Header";
import SideNav from "../ui/home/components/asside/SideNav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-neutral-primary  ">
      <Header />
      <div className="flex max-w-[1300px] mx-auto">
        <SideNav />
        <div className=" mx-auto mt-6">{children}</div>
      </div>
    </div>
  );
}
