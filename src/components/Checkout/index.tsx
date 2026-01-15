"use client";
import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Login from "./Login";
import Shipping from "./Shipping";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
import Coupon from "./Coupon";
import Billing from "./Billing";
import Link from "next/link";

const Checkout = () => {
  return (
    <>
      <Breadcrumb title="Checkout" pages={["Checkout"]} />

      <section className="overflow-hidden py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <form>
            <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
              {/* Checkout Left – Billing, Shipping, Notes */}
              <div className="lg:max-w-[670px] w-full space-y-12">
                {/* Login */}
                <Login />

                {/* Billing Details */}
                <Billing />

                {/* Shipping Address */}
                <Shipping />

                {/* Order Notes */}
                <div className="bg-white rounded-2xl shadow-xl border border-velourGold/20 p-8 md:p-10">
                  <label htmlFor="notes" className="block mb-4 font-montserrat text-gray-700 text-lg">
                    Order Notes (optional)
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    rows={5}
                    placeholder="Notes about your order, e.g. special delivery instructions, fragrance preferences, gift wrapping..."
                    className="w-full py-4 px-6 rounded-xl border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Checkout Right – Order Summary, Coupon, Shipping Method, Payment, Checkout Button */}
              <div className="lg:max-w-[455px] w-full space-y-12">
                {/* Order Summary */}
                <div className="bg-white rounded-2xl shadow-xl border border-velourGold/20 overflow-hidden">
                  <div className="border-b border-gray-200 py-6 px-8 bg-gray-50">
                    <h3 className="font-playfair text-2xl md:text-3xl text-gray-900">
                      Your Order
                    </h3>
                  </div>

                  <div className="p-8">
                    {/* Table Header */}
                    <div className="flex items-center justify-between py-4 border-b border-gray-200">
                      <h4 className="font-montserrat font-medium text-gray-900 text-lg">
                        Product
                      </h4>
                      <h4 className="font-montserrat font-medium text-gray-900 text-lg text-right">
                        Subtotal
                      </h4>
                    </div>

                    {/* Example Items – replace with real cart items */}
                    <div className="space-y-6 py-6">
                      <div className="flex justify-between text-gray-800">
                        <p className="font-montserrat">Noir Elixir × 1</p>
                        <p className="font-montserrat text-right">R1,299.00</p>
                      </div>
                      <div className="flex justify-between text-gray-800">
                        <p className="font-montserrat">Velvet Rose × 2</p>
                        <p className="font-montserrat text-right">R2,398.00</p>
                      </div>
                      {/* Add dynamic cart items here */}
                    </div>

                    {/* Shipping Fee */}
                    <div className="flex justify-between py-4 border-t border-gray-200 text-gray-800">
                      <p className="font-montserrat">Shipping Fee</p>
                      <p className="font-montserrat text-right">R199.00</p>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between pt-6">
                      <p className="font-montserrat font-medium text-xl text-gray-900">
                        Total
                      </p>
                      <p className="font-montserrat text-2xl font-bold text-velourGold">
                        R3,896.00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coupon */}
                <Coupon />

                {/* Shipping Method */}
                <ShippingMethod />

                {/* Payment Method */}
                <PaymentMethod />

                {/* Checkout Button */}
                <button
                  type="submit"
                  className="w-full flex justify-center font-montserrat font-medium text-velourBlack bg-velourGold py-5 px-10 rounded-full hover:bg-velourDarkGold transition-all duration-300 shadow-lg hover:shadow-xl text-xl mt-6"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;