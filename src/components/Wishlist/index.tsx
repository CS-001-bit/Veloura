"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { useAppSelector } from "@/redux/store";
import SingleItem from "./SingleItem";

export const Wishlist = () => {
  const wishlistItems = useAppSelector((state) => state.wishlistReducer.items);

  return (
    <>
      <Breadcrumb title="Your Wishlist" pages={["Wishlist"]} />

      <section className="overflow-hidden py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-7.5">
            
            <button className="font-montserrat text-velourGold hover:text-velourDarkGold transition duration-300">
              Clear Wishlist
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-xl border border-velourGold/20">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[1170px]">
                {/* Table Header */}
                <div className="flex items-center py-6 px-10 bg-gray-50 border-b border-gray-200">
                  <div className="min-w-[83px]"></div>
                  <div className="min-w-[387px]">
                    <p className="font-montserrat font-medium text-gray-900">Product</p>
                  </div>
                  <div className="min-w-[205px]">
                    <p className="font-montserrat font-medium text-gray-900">Unit Price</p>
                  </div>
                  <div className="min-w-[265px]">
                    <p className="font-montserrat font-medium text-gray-900">Stock Status</p>
                  </div>
                  <div className="min-w-[150px]">
                    <p className="font-montserrat font-medium text-gray-900 text-right">Action</p>
                  </div>
                </div>

                {/* Wishlist Items */}
                {wishlistItems.map((item, key) => (
                  <SingleItem item={item} key={key} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;