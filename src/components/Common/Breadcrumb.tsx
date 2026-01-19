import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, pages }) => {
  return (
    <div className="overflow-hidden bg-white border-b border-gray-200">
      <div className="max-w-[1170px] w-full mx-auto px-6 sm:px-8 xl:px-0 py-10 lg:py-12 xl:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Main Title */}
          <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 font-medium tracking-tight">
            {title}
          </h1>

          {/* Breadcrumb Path */}
          <nav aria-label="Breadcrumb">
            <ul className="flex items-center gap-3 text-sm md:text-base font-montserrat">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-velourGold transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              {pages.length > 0 && (
                <>
                  <li className="text-gray-400">/</li>
                  {pages.map((page, key) => (
                    <li 
                      key={key} 
                      className={`capitalize ${
                        key === pages.length - 1 
                          ? "text-velourGold font-medium" 
                          : "text-gray-600 hover:text-velourGold transition-colors duration-300"
                      }`}
                    >
                      {page}
                    </li>
                  ))}
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;