"use client";
import React from "react";

const Billing = () => {
  return (
    <div className="mt-12">
      <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-8">
        Billing Details
      </h2>

      <div className="bg-white rounded-2xl shadow-xl border border-velourGold/20 overflow-hidden p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block mb-3 font-montserrat text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Your first name"
              className="w-full py-4 px-6 rounded-xl border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block mb-3 font-montserrat text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Your last name"
              className="w-full py-4 px-6 rounded-xl border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
              required
            />
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-10">
          <label htmlFor="companyName" className="block mb-3 font-montserrat text-gray-700">
            Company Name (optional)
          </label>
          <input
            type="text"
            id="companyName"
            placeholder="Your company name"
            className="w-full py-4 px-6 rounded-xl border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
          />
        </div>

        {/* Country / Region */}
        <div className="mb-10">
          <label htmlFor="countryName" className="block mb-3 font-montserrat text-gray-700">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select className="w-full appearance-none bg-white rounded-xl border border-gray-300 text-gray-900 py-4 px-6 pr-10 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300">
              <option value="ZA">South Africa</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              {/* Add more options as needed */}
            </select>
            <span className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <svg
                className="fill-current"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.41469 5.03569L2.41467 5.03571L2.41749 5.03846L7.76749 10.2635L8.0015 10.492L8.23442 10.2623L13.5844 4.98735L13.5844 4.98735L13.5861 4.98569C13.6809 4.89086 13.8199 4.89087 13.9147 4.98569C14.0092 5.08024 14.0095 5.21864 13.9155 5.31345C13.9152 5.31373 13.915 5.31401 13.9147 5.31429L8.16676 10.9622L8.16676 10.9622L8.16469 10.9643C8.06838 11.0606 8.02352 11.0667 8.00039 11.0667C7.94147 11.0667 7.89042 11.0522 7.82064 10.9991L2.08526 5.36345C1.99127 5.26865 1.99154 5.13024 2.08609 5.03569C2.18092 4.94086 2.31986 4.94086 2.41469 5.03569Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Street Address */}
        <div className="mb-10">
          <label htmlFor="address" className="block mb-3 font-montserrat text-gray-700">
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            placeholder="House number and street name"
            className="w-full py-4 px-6 rounded-xl border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300 mb-4"
            required
          />
          <input
            type="text"
            id="addressTwo"
            placeholder="Apartment, suite, unit, etc. (optional)"
            className="w-full py-4 px-6 rounded-xl border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
          />
        </div>

        {/* Town / City */}
        <div className="mb-10">
          <label htmlFor="town" className="block mb-3 font-montserrat text-gray-700">
            Town / City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="town"
            placeholder="Your city"
            className="w-full py-4 px-6 rounded-xl border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
            required
          />
        </div>

        {/* Country */}
        <div className="mb-10">
          <label htmlFor="country" className="block mb-3 font-montserrat text-gray-700">
            Country
          </label>
          <input
            type="text"
            id="country"
            placeholder="Your country"
            className="w-full py-4 px-6 rounded-xl border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
          />
        </div>

        {/* Phone */}
        <div className="mb-10">
          <label htmlFor="phone" className="block mb-3 font-montserrat text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+27 (123) 456-7890"
            className="w-full py-4 px-6 rounded-xl border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-10">
          <label htmlFor="email" className="block mb-3 font-montserrat text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="hello@veloura.com"
            className="w-full py-4 px-6 rounded-xl border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
            required
          />
        </div>

        {/* Create Account Checkbox */}
        <div>
          <label
            htmlFor="createAccount"
            className="flex cursor-pointer select-none items-center font-montserrat text-gray-700 text-lg"
          >
            <div className="relative mr-4">
              <input
                type="checkbox"
                id="createAccount"
                className="sr-only"
              />
              <div className="h-6 w-6 rounded-xl border-2 border-gray-300 transition-all duration-300 peer-checked:border-velourGold peer-checked:bg-velourGold/10">
                <svg
                  className="absolute inset-0 m-auto h-4 w-4 text-velourGold opacity-0 peer-checked:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            Create an account for faster checkout
          </label>
        </div>
      </div>
    </div>
  );
};

export default Billing;