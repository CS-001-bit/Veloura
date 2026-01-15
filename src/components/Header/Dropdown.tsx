"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Dropdown = ({ menuItem, stickyMenu }) => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const pathUrl = usePathname();

  return (
    <li
      onClick={() => setDropdownToggler(!dropdownToggler)}
      className={`group relative before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-velourGold before:transition-all before:duration-300 hover:before:w-full ${
        pathUrl.includes(menuItem.title) && "before:!w-full"
      }`}
    >
      <a
        href="#"
        className={`flex items-center gap-1.5 font-montserrat font-medium text-gray-900 capitalize transition-colors duration-300 hover:text-velourGold ${
          stickyMenu ? "xl:py-4" : "xl:py-6"
        } ${pathUrl.includes(menuItem.title) && "text-velourGold"}`}
      >
        {menuItem.title}
        <svg
          className={`fill-current text-gray-600 group-hover:text-velourGold transition-transform duration-300 ${
            dropdownToggler ? "rotate-180" : ""
          }`}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.95363 4.67461C3.13334 4.46495 3.44899 4.44067 3.65866 4.62038L6.99993 8.34147L10.3412 4.62038C10.5509 4.44067 10.8665 4.46495 11.0462 4.67461C11.2259 4.88428 11.2017 5.19993 10.992 5.37964L7.32532 9.37964C7.13808 9.5401 6.86178 9.5401 6.67453 9.37964L3.00787 5.37964C2.7982 5.19993 2.77392 4.88428 2.95363 4.67461Z"
            fill="currentColor"
          />
        </svg>
      </a>

      {/* Dropdown Menu */}
      <ul
        className={`absolute left-0 top-full z-50 min-w-[220px] rounded-xl bg-white shadow-xl border border-velourGold/10 py-3 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 ${
          dropdownToggler && "opacity-100 visible translate-y-0"
        } ${stickyMenu ? "xl:top-full" : "xl:top-full"}`}
      >
        {menuItem.submenu.map((item, i) => (
          <li key={i}>
            <Link
              href={item.path}
              className={`block px-6 py-3 font-montserrat text-sm text-gray-800 hover:bg-velourGold/10 hover:text-velourGold transition-colors duration-200 ${
                pathUrl === item.path && "bg-velourGold/10 text-velourGold font-medium"
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;