"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CustomSelect from "./CustomSelect";
import { menuData } from "./menuData"; // We'll update this next if needed
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const { openCartModal } = useCartModalContext();

  const productsInCart = useSelector((state: any) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);






  // Sticky menu logic
  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  // Updated categories for Veloura
  const categoryOptions = [
    { label: "All Categories", value: "0" },
    { label: "Women’s Fragrances", value: "1" },
    { label: "Men’s Fragrances", value: "2" },
    { label: "Unisex", value: "3" },
    { label: "Arabian / Oud", value: "4" },
    { label: "Gift Sets", value: "5" },
    { label: "Roll-ons / Minis", value: "6" },
  ];

  return (
    <header
      className={`fixed left-0 top-0 w-full z-50 transition-all duration-500 ${
        stickyMenu ? "bg-velourBlack/95 backdrop-blur-md shadow-lg" : "bg-velourBlack"
      
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-0">
        {/* Top Bar */}
        <div
          className={`flex flex-col lg:flex-row items-center justify-between py-5 lg:py-6 transition-all duration-300 ${
            stickyMenu ? "py-4" : ""
          }`}
        >

         
          

<header
  className={`fixed left-0 top-0 w-full z-50 transition-all duration-500 ${
    stickyMenu 
      ? "bg-velourBlack/90 backdrop-blur-md shadow-2xl border-b border-velourGold/20" 
      : "bg-gradient-to-b from-velourBlack/80 to-transparent"
  }`}
></header>


          {/* Logo */}
<Link href="/" className="flex-shrink-0">
  <h1 className="font-playfair text-4xl md:text-5xl tracking-widest text-velourGold hover:text-velourDarkGold transition-colors duration-300">
    Veloura
  </h1>
  <p className="text-xs tracking-widest uppercase mt-1 text-velourGold/80">
    Fragrances
  </p>
</Link>
          

          {/* Search Bar */}
          <div className="w-full max-w-xl mt-6 lg:mt-0">
            <form className="flex items-center">
              <CustomSelect options={categoryOptions} />
              <div className="relative w-full">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for scents, notes, brands..."
                  className="w-full bg-velourGray border border-velourGold/30 rounded-r-lg py-3 pl-5 pr-12 text-white placeholder:text-gray-400 focus:outline-none focus:border-velourGold transition"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-velourGold hover:text-velourDarkGold transition"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M19.5 17.75L14.25 12.5C15.4167 11.0833 16 9.33333 16 7.5C16 3.83333 12.9167 1 9 1C5.08333 1 2 3.83333 2 7.5C2 11.1667 5.08333 14 9 14C10.8333 14 12.5833 13.4167 14 12.25L19.25 17.5L19.5 17.75ZM3.5 7.5C3.5 4.75 5.75 2.5 9 2.5C12.25 2.5 14.5 4.75 14.5 7.5C14.5 10.25 12.25 12.5 9 12.5C5.75 12.5 3.5 10.25 3.5 7.5Z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-8 mt-6 lg:mt-0">
            {/* Account */}
            <Link
              href="/signin"
              className="hidden md:flex items-center gap-3 text-white hover:text-velourGold transition"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" />
                <path d="M12 14C8.13401 14 4 17.134 4 22H20C20 17.134 15.866 14 12 14Z" />
              </svg>
              <span className="font-montserrat text-sm">Account</span>
            </Link>

            {/* Cart */}
            <button
              onClick={openCartModal}
              className="flex items-center gap-3 text-white hover:text-velourGold transition relative"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 18.89 18.11 18 17 18ZM1 2H4.27L5.21 4H20C20.55 4 21 4.45 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 12.97C16.96 13.58 16.3 14 15.55 14H8.1L7.2 15.63L7.17 15.75C7.17 15.89 7.28 16 7.43 16H19V18H7C6.45 18 6 17.55 6 17C6 16.83 6.05 16.67 6.12 16.5L7.36 13.97L3 4H1V2ZM7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 18.89 8.11 18 7 18Z" />
              </svg>
              <div className="text-left">
                <span className="block text-xs uppercase text-velourGold/80">Cart</span>
                <span className="font-montserrat text-sm">
                  {productsInCart.length} items — ${totalPrice}
                </span>
              </div>
              {productsInCart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-velourGold text-velourBlack text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {productsInCart.length}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setNavigationOpen(!navigationOpen)}
              className="lg:hidden text-velourGold"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d={navigationOpen ? "M18 6L6 18M6 6L18 18" : "M3 12H21M3 6H21M3 18H21"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-velourGold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <nav className="flex items-center justify-center py-4">
            <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <li>
                <Link href="/" className="text-white font-montserrat text-sm uppercase tracking-wider hover:text-velourGold transition">
                  Home
                </Link>
              </li>
              <li className="relative group">
                <span className="text-white font-montserrat text-sm uppercase tracking-wider hover:text-velourGold cursor-pointer transition flex items-center gap-1">
                  Shop
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                {/* Dropdown - you can replace with your <Dropdown /> if preferred */}
                <ul className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block">
                  <div className="bg-velourGray/95 backdrop-blur-md border border-velourGold/30 rounded-2xl py-6 px-10 shadow-2xl">
                    {categoryOptions.slice(1).map((cat) => (
                      <li key={cat.value}>
                        <Link
                          href={`/category/${cat.value}`}
                          className="block text-white hover:text-velourGold font-montserrat text-sm py-2 transition"
                        >
                          {cat.label}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </li>
              <li>
                <Link href="/wishlist" className="text-white font-montserrat text-sm uppercase tracking-wider hover:text-velourGold transition">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white font-montserrat text-sm uppercase tracking-wider hover:text-velourGold transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white font-montserrat text-sm uppercase tracking-wider hover:text-velourGold transition">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navigationOpen && (

        <div className="fixed inset-0 bg-velourBlack/95 z-40 lg:hidden">

          <div className="flex flex-col items-center justify-center h-full gap-8">
            {/* Mobile menu items here if you want them separate */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;