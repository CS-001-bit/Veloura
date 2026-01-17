"use client";
import React from "react";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import Image from "next/image";
import Link from "next/link";

const SingleItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();

  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
    openModal();
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
  };

  const handleAddToWishlist = () => {
    dispatch(
      addItemToWishlist({
        ...item,
        status: "available",
        quantity: 1,
      })
    );
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <Image
          src={item.imgs.previews[0]}
          alt={item.title}
          width={400}
          height={400}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Quick Actions (hover) */}
        <div className="absolute right-3 bottom-3 translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2">
          {/* Quick View */}
          <button
            onClick={handleQuickViewUpdate}
            aria-label="Quick View"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-lg hover:bg-velourGold hover:text-white transition-colors duration-300 text-gray-700"
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 9H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Add to Wishlist */}
          <button
            onClick={handleAddToWishlist}
            aria-label="Add to Wishlist"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-lg hover:bg-velourGold hover:text-white transition-colors duration-300 text-gray-700"
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00001 16.5C9.00001 16.5 2.25 12 2.25 6.375C2.25 4.09665 3.97165 2.25 6.375 2.25C7.83375 2.25 9.00001 3.08333 9.00001 3.08333C9.00001 3.08333 10.1663 2.25 11.625 2.25C14.0284 2.25 15.75 4.09665 15.75 6.375C15.75 12 9.00001 16.5 9.00001 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            aria-label="Add to Cart"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-lg hover:bg-velourGold hover:text-white transition-colors duration-300 text-gray-700"
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1.5L3.75 1.5L6 12.75H15.75M15.75 15.75C15.75 16.3023 15.3023 16.75 14.75 16.75C14.1977 16.75 13.75 16.3023 13.75 15.75C13.75 15.1977 14.1977 14.75 14.75 14.75C15.3023 14.75 15.75 15.1977 15.75 15.75ZM6 15.75C6 16.3023 5.55228 16.75 5 16.75C4.44772 16.75 4 16.3023 4 15.75C4 15.1977 4.44772 14.75 5 14.75C5.55228 14.75 6 15.1977 6 15.75ZM15.75 4.5L5.25 4.5C4.69772 4.5 4.25 4.94772 4.25 5.5L4.25 12.75H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="text-velourGold"
            >
              <path d="M8 1L10.2658 5.23607L15.0969 5.52786L11.5485 9.26393L12.4729 14.4721L8 12.2361L3.52714 14.4721L4.45154 9.26393L0.903113 5.52786L5.73416 5.23607L8 1Z" />
            </svg>
          ))}
          <span className="ml-2 text-xs text-gray-600">({item.reviews})</span>
        </div>

        {/* Title */}
        <h3 className="font-playfair text-lg md:text-xl text-gray-900 mb-2 group-hover:text-velourGold transition-colors duration-300 line-clamp-2">
          <Link href={`/product/${item.id}`}>{item.title}</Link>
        </h3>

        {/* Price – Now in black */}
        <div className="flex items-center justify-center gap-2 text-lg font-medium">
          <span className="text-gray-900 font-semibold">
            R{item.discountedPrice || item.price}
          </span>
          {item.discountedPrice && (
            <span className="text-gray-500 line-through text-sm">
              R{item.price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleItem;