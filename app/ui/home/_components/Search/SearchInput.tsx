"use client";

import React, { useState } from "react";
import SearchField from "./SearchField";
import SearchToggle from "./SearchToggle";

export default function SearchInput() {
  const [showInput, setShowInput] = useState<boolean>(false);

  const handleClick = () => {
    setShowInput((prev) => !prev);
  };

  return (
    <>
      <SearchField isVisible={showInput} />
      <SearchToggle isVisible={showInput} onToggle={handleClick} />
    </>
  );
}
