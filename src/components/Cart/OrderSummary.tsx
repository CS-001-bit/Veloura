"use client";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const OrderSummary = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="lg:max-w-[455px] w-full">
      {/* Order Summary Box */}
      <div className="bg-white rounded-2xl shadow-xl border border-velourGold/20 overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200 py-6 px-6 md:px-10 bg-gray-50">
          <h3 className="font-playfair text-2xl md:text-3xl text-gray-900">
            Order Summary
          </h3>
        </div>

        {/* Summary Content */}
        <div className="pt-6 pb-10 px-6 md:px-10">
          {/* Table Header */}
          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div>
              <h4 className="font-montserrat font-medium text-gray-900 text-lg">
                Product
              </h4>
            </div>
            <div>
              <h4 className="font-montserrat font-medium text-gray-900 text-lg text-right">
                Subtotal
              </h4>
            </div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item, key) => (
            <div
              key={key}
              className="flex items-center justify-between py-5 border-b border-gray-200 last:border-b-0"
            >
              <div>
                <p className="font-montserrat text-gray-800">
                  {item.title} × {item.quantity}
                </p>
              </div>
              <div>
                <p className="font-montserrat text-gray-900 font-medium text-right">
                  R{(item.discountedPrice || item.price) * item.quantity}
                </p>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex items-center justify-between pt-6">
            <div>
              <p className="font-montserrat font-medium text-xl text-gray-900">
                Total
              </p>
            </div>
            <div>
              <p className="font-montserrat text-2xl font-bold text-velourGold text-right">
                R{totalPrice.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Checkout Button */}
          <Link href="/checkout">
            <button
              type="button"
              className="w-full flex justify-center font-montserrat font-medium text-velourBlack bg-velourGold py-4 px-8 rounded-full hover:bg-velourDarkGold transition-all duration-300 shadow-md hover:shadow-lg mt-10 text-lg"
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;