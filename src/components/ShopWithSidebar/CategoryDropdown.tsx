"use client";
import React, { useState } from "react";

const CategoryItem = ({ category }) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      className={`group flex w-full items-center justify-between py-3 px-5 rounded-xl transition-all duration-300 hover:bg-velourGold/5 ${
        selected ? "bg-velourGold/10 text-velourGold" : "text-gray-800"
      }`}
      onClick={() => setSelected(!selected)}
    >
      <div className="flex items-center gap-4">
        {/* Custom checkbox circle */}
        <div
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
            selected
              ? "border-velourGold bg-velourGold/10"
              : "border-gray-300 group-hover:border-velourGold/50"
          }`}
        >
          <svg
            className={`h-4 w-4 text-velourGold transition-all duration-300 ${
              selected ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span className="font-montserrat text-lg group-hover:text-velourGold transition-colors duration-300">
          {category.name}
        </span>
      </div>

      {/* Product count badge */}
      <span
        className={`inline-flex min-w-[2.5rem] items-center justify-center rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
          selected
            ? "bg-velourGold text-velourBlack shadow-sm"
            : "bg-gray-100 text-gray-700 group-hover:bg-velourGold/10 group-hover:text-velourGold"
        }`}
      >
        {category.products}
      </span>
    </button>
  );
};

const CategoryDropdown = ({ categories }) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-velourGold/20 overflow-hidden">
      {/* Dropdown Header */}
      <div
        onClick={(e) => {
          e.preventDefault();
          setToggleDropdown(!toggleDropdown);
        }}
        className={`cursor-pointer flex items-center justify-between py-5 px-8 bg-gray-50 transition-all duration-300 hover:bg-gray-100 ${
          toggleDropdown ? "border-b border-velourGold/10" : ""
        }`}
      >
        <h3 className="font-playfair text-2xl text-gray-900">Categories</h3>

        <button
          aria-label="Toggle category dropdown"
          className={`text-gray-700 transition-transform duration-300 ${
            toggleDropdown ? "rotate-180" : ""
          }`}
        >
          <svg
            className="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Content */}
      <div
        className={`flex flex-col gap-2 py-6 px-6 transition-all duration-300 ${
          toggleDropdown ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {categories.map((category, key) => (
          <CategoryItem key={key} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDropdown;