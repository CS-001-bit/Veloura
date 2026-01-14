"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Discount from "./Discount";
import OrderSummary from "./OrderSummary";
import { useAppSelector } from "@/redux/store";
import SingleItem from "./SingleItem";
import Link from "next/link";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);

  return (
    <>
      <Breadcrumb title="Your Cart" pages={["Cart"]} />

      {cartItems.length > 0 ? (
        <section className="overflow-hidden py-20 bg-white">
          <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
            <div className="flex flex-wrap items-center justify-between gap-5 mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl text-gray-900">
                Your Cart
              </h2>
              <button className="font-montserrat text-velourGold hover:text-velourDarkGold transition duration-300 text-lg">
                Clear Shopping Cart
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-velourGold/20 overflow-hidden">
              <div className="w-full overflow-x-auto">
                <div className="min-w-[1170px]">
                  {/* Table Header */}
                  <div className="flex items-center py-6 px-10 bg-gray-50 border-b border-gray-200">
                    <div className="min-w-[400px]">
                      <p className="font-montserrat font-medium text-gray-900">Product</p>
                    </div>
                    <div className="min-w-[180px]">
                      <p className="font-montserrat font-medium text-gray-900">Price</p>
                    </div>
                    <div className="min-w-[275px]">
                      <p className="font-montserrat font-medium text-gray-900">Quantity</p>
                    </div>
                    <div className="min-w-[200px]">
                      <p className="font-montserrat font-medium text-gray-900">Subtotal</p>
                    </div>
                    <div className="min-w-[50px]">
                      <p className="font-montserrat font-medium text-gray-900 text-right">Action</p>
                    </div>
                  </div>

                  {/* Cart Items */}
                  {cartItems.map((item, key) => (
                    <SingleItem item={item} key={key} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 mt-12">
              <Discount />
              <OrderSummary />
            </div>
          </div>
        </section>
      ) : (
        <section className="overflow-hidden py-20 bg-white">
          <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 text-center">
            <div className="py-20">
              {/* Empty cart icon (kept original SVG) */}
              <svg
                className="mx-auto mb-8"
                width="120"
                height="120"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ... your original SVG paths ... */}
              </svg>

              <h3 className="font-playfair text-3xl text-gray-900 mb-4">
                Your Cart is Empty
              </h3>
              <p className="text-gray-600 font-montserrat text-lg mb-10 max-w-md mx-auto">
                Add some of our exquisite fragrances to your cart and continue your luxurious shopping experience.
              </p>

              <Link
                href="/products"
                className="inline-flex items-center font-montserrat font-medium text-velourBlack bg-velourGold px-12 py-5 rounded-full hover:bg-velourDarkGold transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;