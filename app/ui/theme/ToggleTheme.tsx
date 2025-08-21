import clsx from "clsx";
import React, { useState, useEffect } from "react";

export default function ToggleThemeButton() {
  const [isDark, setDark] = useState<boolean>(false);

  const ToggleTheme = (): void => {
    setDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button onClick={ToggleTheme}>
      <div
        className={clsx(
          "relative inline-block p-1 w-14 h-8 rounded-3xl cursor-pointer transition-colors duration-300",
          isDark ? "bg-red-primary" : "bg-gray-primary"
        )}
      >
        <span
          className={clsx(
            "block bg-white w-6 h-6 rounded-full absolute top-1 transition-all duration-300",
            isDark ? "left-7" : "left-1"
          )}
        ></span>
      </div>
    </button>
  );
}
