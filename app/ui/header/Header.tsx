import { Logo } from "./Logo";
import ToggleThemeButton from "@/app/ui/theme/ToggleTheme";
import Login from "@/app/login/page";
import SearchInput from "../home/components/Search/SearchInput";

export default function Header() {
  return (
    <div className="w-full bg-white dark:bg-neutral-primary border-b border-b-gray-secondary dark:border-b-neutral-primary h-20 md:col-span-3 sticky top-0 z-50">
      <header className=" flex justify-between items-center max-w-[1200px] h-full mx-auto ">
        <Logo />
        <SearchInput />
        <div className="flex justify-center items-center gap-6 p-2 ">
          <ToggleThemeButton />
          <Login />
        </div>
      </header>
    </div>
  );
}
