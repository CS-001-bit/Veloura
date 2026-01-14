"use client";
import React from "react";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500">
      <div className="relative h-20 w-20">
        {/* Outer ring - subtle gold glow */}
        <div className="absolute inset-0 rounded-full border-4 border-velourGold/30 animate-pulse-slow"></div>
        
        {/* Main spinner */}
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-solid border-velourGold border-t-transparent shadow-lg"></div>
        
        {/* Optional inner accent (tiny gold dot) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-velourGold animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;