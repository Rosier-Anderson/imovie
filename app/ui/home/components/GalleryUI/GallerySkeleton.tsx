"use client";
import React from "react";

export default function GallerySkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      {/* Poster Placeholder */}
      <div className="w-[180px] h-[270px] bg-gray-300 rounded-md" />

      {/* Title Placeholder */}
      <div className="w-3/4 h-4 bg-gray-300 rounded" />

      {/* Vote and Date Placeholder */}
      <div className="w-1/2 h-4 bg-gray-300 rounded" />
    </div>
  );
}
