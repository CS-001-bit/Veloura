"use client";
import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import Newsletter from "../Common/Newsletter";
import RecentlyViewedItems from "./RecentlyViewed";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { useAppSelector, useDispatch } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cart-slice";
import { AppDispatch } from "@/redux/store";

const ShopDetails = () => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();

  const [previewImg, setPreviewImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // Get product from Redux (set when clicking product)
  const productFromStorage = useAppSelector(
    (state) => state.productDetailsReducer.value
  );

  const product = productFromStorage || {
    title: "Veloura Noir Elixir",
    price: 5999.99,
    imgs: {
      previews: [
        "https://www.rioperfumes.co.za/cdn/shop/files/arabian-knight-eau-de-parfum-100ml-arabian-oud-perfume_998x_a571da0e-95b6-4a6a-ae70-4c1a3e7488db.jpg?v=1705610957",
        "https://m.media-amazon.com/images/I/81Qd9xQ8h1L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71sF+GMq6cL._AC_SL1500_.jpg",
      ],
      thumbnails: [
        "https://www.rioperfumes.co.za/cdn/shop/files/arabian-knight-eau-de-parfum-100ml-arabian-oud-perfume_998x_a571da0e-95b6-4a6a-ae70-4c1a3e7488db.jpg?v=1705610957",
        "https://m.media-amazon.com/images/I/81Qd9xQ8h1L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71sF+GMq6cL._AC_SL1500_.jpg",
      ],
    },
    description: "A captivating blend of rare oud, velvet rose, and smoked amber — an unforgettable signature scent that lingers with mystery and elegance.",
    notes: "Top: Bergamot, Saffron\nHeart: Rose, Oud\nBase: Amber, Vanilla, Patchouli",
    reviews: 128,
    rating: 4.8,
  };

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        ...product,
        quantity,
      })
    );
  };

  const tabs = [
    { id: "description", title: "Description" },
    { id: "notes", title: "Fragrance Notes" },
    { id: "reviews", title: "Reviews" },
  ];

  return (
    <>
      <Breadcrumb title={product.title} pages={["shop", "product"]} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Images */}
            <div>
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white mb-8">
                <Image
                  src={product.imgs.previews[previewImg]}
                  alt={product.title}
                  width={600}
                  height={700}
                  className="object-contain"
                />
                <button
                  onClick={openModal}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-800">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {product.imgs.thumbnails.map((thumb, i) => (
                  <button
                    key={i}
                    onClick={() => setPreviewImg(i)}
                    className={`rounded-lg overflow-hidden border-2 transition ${previewImg === i ? "border-velourGold" : "border-gray-200"
                      }`}
                  >
                    <Image
                      src={thumb}
                      alt={`${product.title} view ${i + 1}`}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col justify-center">
              <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-6">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-velourGold">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-medium text-gray-900">
                  R{product.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg mb-10 leading-relaxed font-montserrat">
                {product.description}
              </p>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center border-2 border-gray-300 rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    −
                  </button>
                  <span className="w-16 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-velourGold text-velourBlack font-montserrat font-medium rounded-full hover:bg-velourDarkGold transition shadow-lg"
                >
                  Add to Cart
                </button>
              </div>

              {/* Tabs */}
              <div className="border-t border-gray-200 pt-10">
                <div className="flex gap-8 mb-8 border-b border-gray-200">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-4 font-montserrat font-medium transition ${activeTab === tab.id
                          ? "text-velourGold border-b-2 border-velourGold"
                          : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>

                <div className="text-gray-700 leading-relaxed font-montserrat">
                  {activeTab === "description" && <p>{product.description}</p>}
                  {activeTab === "notes" && <pre className="whitespace-pre-line">{product.notes}</pre>}
                  {activeTab === "reviews" && <p>Customer reviews coming soon...</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecentlyViewedItems />
      <Newsletter />
    </>
  );
};

export default ShopDetails;