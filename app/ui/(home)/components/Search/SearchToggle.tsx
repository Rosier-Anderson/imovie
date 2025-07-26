"use client";

import { SearchToggleProps } from "@/app/lib/definitions";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchToggle({
  isVisible,
  onToggle,
}: SearchToggleProps) {
  return (
    <span className="md:hidden">
      <button onClick={onToggle}>
        {isVisible ? (
          "Cancel"
        ) : (
          <IoSearchOutline className="w-6 h-6 text-gray-400" />
        )}
      </button>
    </span>
  );
}
