import { Logo } from "./Logo";
import ToggleThemeButton from "@/app/ui/theme/ToggleTheme";
import SearchInput from "../home/components/Search/SearchInput";
import SignInButton from "../profile/sign-button";

// component
export default function Header() {
  return (
    <div className="w-full bg-white dark:bg-neutral-primary border-b border-b-gray-secondary dark:border-b-neutral-primary h-20 md:col-span-3 sticky top-0 z-50">
      <header className=" flex justify-between items-center max-w-[1200px] h-full mx-auto ">
        <Logo>
          <h1 className="text-xl dark:text-white font-bold hidden md:block">
            I-MOVIE
          </h1>
        </Logo>
        <SearchInput />
        <div className="flex justify-center items-center gap-6 p-2 ">
          <ToggleThemeButton />
          <SignInButton />
        </div>
      </header>
    </div>
  );
}
