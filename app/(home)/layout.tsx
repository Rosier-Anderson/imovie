// app/(home)/layout.tsx

import SideNav from "../ui/asside/SideNav";
import Header from "../ui/header/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-neutral-primary mb-20 ">
      <Header />

      <div className="flex max-w-[1300px] mx-auto ">
        <SideNav />
        <div className=" mx-auto mt-6 w-full">{children}</div>
      </div>
    </div>
  );
}
