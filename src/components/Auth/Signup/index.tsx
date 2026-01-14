"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <>
      <Breadcrumb title="Create Account" pages={["Signup"]} />

      <section className="overflow-hidden py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-lg mx-auto rounded-2xl bg-white shadow-xl border border-velourGold/20 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-3">
                Join Veloura
              </h2>
              <p className="text-gray-600 font-montserrat text-lg">
                Create your account to unlock exclusive fragrances and personalized offers.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Social Signup Buttons */}
              <button className="flex items-center justify-center gap-3 py-4 px-6 border border-gray-300 rounded-full hover:bg-gray-50 transition duration-300 font-montserrat text-gray-700">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Google icon SVG (same as yours) */}
                  <g clipPath="url(#clip0_98_7461)">
                    {/* ... your Google SVG paths ... */}
                  </g>
                </svg>
                Sign Up with Google
              </button>

              <button className="flex items-center justify-center gap-3 py-4 px-6 border border-gray-300 rounded-full hover:bg-gray-50 transition duration-300 font-montserrat text-gray-700">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* GitHub icon SVG (same as yours) */}
                  <path d="..." fill="#15171A" />
                </svg>
                Sign Up with GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-6 bg-white text-gray-500 font-montserrat">Or</span>
              </div>
            </div>

            {/* Signup Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-montserrat text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-montserrat text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="hello@veloura.com"
                  className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 font-montserrat text-gray-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="re-type-password" className="block mb-2 font-montserrat text-gray-700">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="re-type-password"
                  placeholder="Re-type your password"
                  autoComplete="new-password"
                  className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                className="w-full flex justify-center font-montserrat font-medium text-velourBlack bg-velourGold py-4 px-8 rounded-full hover:bg-velourDarkGold transition-all duration-300 shadow-md hover:shadow-lg mt-6 text-lg"
              >
                Create Account
              </button>

              {/* Sign In Link */}
              <p className="text-center mt-8 text-gray-600 font-montserrat">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-velourGold hover:text-velourDarkGold font-medium transition duration-300"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;