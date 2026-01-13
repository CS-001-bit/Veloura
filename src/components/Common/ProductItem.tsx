"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";

const ProductItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();

  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...item,
        quantity: 1,
      })
    );
  };

  const handleItemToWishList = () => {
    dispatch(
      addItemToWishlist({
        ...item,
        status: "available",
        quantity: 1,
      })
    );
  };

  const handleProductDetails = () => {
    dispatch(updateproductDetails({ ...item }));
  };

  return (
    
    <div className="group h-full">
      {/* Card */}
      <div className="relative rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 overflow-hidden">
        {/* Image */}
        
        <div className="relative h-80 overflow-hidden">
          <Image
            src={item.imgs.previews[0]}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* New Badge */}
          
          {item.new && (
            <span className="absolute top-4 left-4 bg-velourGold text-velourBlack font-montserrat font-bold text-xs uppercase px-4 py-2 rounded-full shadow-md">
              New
            </span>
          )}
        </div>

        {/* Content Below */}
        <div className="p-4 text-center">
          <h3
            className="font-playfair text-xl text-gray-900 group-hover:text-velourGold transition mb-3"
            onClick={handleProductDetails}
          >
            <Link href="/shop-details">{item.title}</Link>
          </h3>

          {/* Stars (simplified gold) */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-velourGold">
                <path d="M8 1L10.2658 5.23607L15.0969 5.52786L11.5485 9.26393L12.4729 14.4721L8 12.2361L3.52714 14.4721L4.45154 9.26393L0.903113 5.52786L5.73416 5.23607L8 1Z" />
              </svg>
            ))}
            <span className="text-gray-600 text-sm ml-2">({item.reviews})</span>
          </div>

          {/* Price */}
<div className="mb-6">
  <span className="text-3xl font-medium text-gray-900">  {/* ← Changed to black/gray-900 */}
    R{item.discountedPrice || item.price}
  </span>
  {item.discountedPrice && (
    <span className="ml-3 text-lg text-gray-500 line-through">
      R{item.price}
    </span>
  )}
</div>

          {/* Add to Cart Button (Always Visible, Smaller & Elegant) */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 px-8 bg-transparent border-2 border-velourGold text-velourGold font-montserrat font-medium rounded-full hover:bg-velourGold hover:text-white transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;