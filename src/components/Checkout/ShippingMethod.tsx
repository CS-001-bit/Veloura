"use client";
import React, { useState } from "react";
import Image from "next/image";

const ShippingMethod = () => {
  const [shippingMethod, setShippingMethod] = useState("free");

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-velourGold/20 overflow-hidden">
      <div className="border-b border-gray-200 py-6 px-8 bg-gray-50">
        <h3 className="font-playfair text-2xl md:text-3xl text-gray-900">
          Shipping Method
        </h3>
      </div>

      <div className="p-6 md:p-10 space-y-6">
        <label
          htmlFor="free"
          className="flex cursor-pointer items-center gap-4 group"
          onClick={() => setShippingMethod("free")}
        >
          <div className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:border-velourGold">
            <div
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                shippingMethod === "free" ? "bg-velourGold scale-100" : "bg-transparent scale-0"
              }`}
            />
          </div>
          <span className="font-montserrat text-lg text-gray-900 group-hover:text-velourGold transition-colors duration-300">
            Free Shipping
          </span>
        </label>

        <label
          htmlFor="fedex"
          className="flex cursor-pointer items-start gap-4 group"
          onClick={() => setShippingMethod("fedex")}
        >
          <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:border-velourGold">
            <div
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                shippingMethod === "fedex" ? "bg-velourGold scale-100" : "bg-transparent scale-0"
              }`}
            />
          </div>

          <div className="flex-1 rounded-xl border border-gray-200 p-6 transition-all duration-300 group-hover:border-velourGold/50 group-hover:shadow-md">
            <div className="flex items-center gap-6">
              <div className="shrink-0">
                <Image
                  src="/images/checkout/fedex.svg"
                  alt="FedEx"
                  width={80}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="border-l border-gray-200 pl-6">
                <p className="font-montserrat font-semibold text-xl text-gray-900">
                  R199.00
                </p>
                <p className="text-gray-600 font-montserrat text-sm mt-1">
                  Standard Shipping (2–4 business days)
                </p>
              </div>
            </div>
          </div>
        </label>

        <label
          htmlFor="dhl"
          className="flex cursor-pointer items-start gap-4 group"
          onClick={() => setShippingMethod("dhl")}
        >
          <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:border-velourGold">
            <div
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                shippingMethod === "dhl" ? "bg-velourGold scale-100" : "bg-transparent scale-0"
              }`}
            />
          </div>

          <div className="flex-1 rounded-xl border border-gray-200 p-6 transition-all duration-300 group-hover:border-velourGold/50 group-hover:shadow-md">
            <div className="flex items-center gap-6">
              <div className="shrink-0">
                <Image
                  src="/images/checkout/dhl.svg"
                  alt="DHL"
                  width={80}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div className="border-l border-gray-200 pl-6">
                <p className="font-montserrat font-semibold text-xl text-gray-900">
                  R249.00
                </p>
                <p className="text-gray-600 font-montserrat text-sm mt-1">
                  Express Shipping (1–2 business days)
                </p>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ShippingMethod;