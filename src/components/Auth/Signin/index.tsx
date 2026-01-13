import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <>
      <Breadcrumb title="Sign In" pages={["Sign In"]} />

      <section className="overflow-hidden py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-lg mx-auto rounded-2xl bg-white shadow-xl border border-velourGold/20 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-3">
                Welcome Back to Veloura
              </h2>
              <p className="text-gray-600 font-montserrat text-lg">
                Sign in to access your account and continue your fragrance journey.
              </p>
            </div>

            <form>
              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-montserrat text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="hello@veloura.com"
                  className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
                />
              </div>

              {/* Password Field */}
              <div className="mb-8">
                <label htmlFor="password" className="block mb-2 font-montserrat text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
                />
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full py-4 px-8 font-montserrat font-medium text-velourBlack bg-velourGold rounded-full hover:bg-velourDarkGold transition-all duration-300 shadow-md hover:shadow-lg text-lg"
              >
                Sign In
              </button>

              {/* Forgot Password */}
              <div className="text-center mt-6">
                <Link
                  href="/forgot-password"
                  className="text-gray-600 hover:text-velourGold font-montserrat transition duration-300"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-montserrat">Or</span>
                </div>
              </div>

              {/* Social Sign In */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-3 px-6 border border-gray-300 rounded-full hover:bg-gray-50 transition duration-300">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Google icon SVG (same as yours) */}
                    <g clipPath="url(#clip0_98_7461)">
                      {/* ... your Google SVG paths ... */}
                    </g>
                  </svg>
                  <span className="font-montserrat text-gray-700">Sign in with Google</span>
                </button>

                <button className="flex items-center justify-center gap-3 py-3 px-6 border border-gray-300 rounded-full hover:bg-gray-50 transition duration-300">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* GitHub icon SVG (same as yours) */}
                    <path
                      d="M10.9997 1.83331C5.93773 1.83331 1.83301 6.04119 1.83301 11.232C1.83301 15.3847 4.45954 18.9077 8.10178 20.1505C8.55988 20.2375 8.72811 19.9466 8.72811 19.6983C8.72811 19.4743 8.71956 18.7338 8.71567 17.9485C6.16541 18.517 5.6273 16.8395 5.6273 16.8395C5.21032 15.7532 4.60951 15.4644 4.60951 15.4644C3.77785 14.8811 4.6722 14.893 4.6722 14.893C5.59272 14.9593 6.07742 15.8615 6.07742 15.8615C6.89499 17.2984 8.22184 16.883 8.74493 16.6429C8.82718 16.0353 9.06478 15.6208 9.32694 15.3861C7.2909 15.1484 5.15051 14.3425 5.15051 10.7412C5.15051 9.71509 5.5086 8.87661 6.09503 8.21844C5.99984 7.98167 5.68611 7.02577 6.18382 5.73115C6.18382 5.73115 6.95358 5.47855 8.70532 6.69458C9.43648 6.48627 10.2207 6.3819 10.9997 6.37836C11.7787 6.3819 12.5635 6.48627 13.2961 6.69458C15.0457 5.47855 15.8145 5.73115 15.8145 5.73115C16.3134 7.02577 15.9995 7.98167 15.9043 8.21844C16.4921 8.87661 16.8477 9.715 16.8477 10.7412C16.8477 14.351 14.7033 15.146 12.662 15.3786C12.9909 15.6702 13.2838 16.2423 13.2838 17.1191C13.2838 18.3766 13.2732 19.3888 13.2732 19.6983C13.2732 19.9485 13.4382 20.2415 13.9028 20.1492C17.5431 18.905 20.1663 15.3833 20.1663 11.232C20.1663 6.04119 16.0621 1.83331 10.9997 1.83331Z"
                      fill="#15171A"
                    />
                  </svg>
                  <span className="font-montserrat text-gray-700">Sign in with GitHub</span>
                </button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center mt-8 text-gray-600 font-montserrat">
                Don’t have an account yet?{" "}
                <Link
                  href="/signup"
                  className="text-velourGold hover:text-velourDarkGold font-medium transition duration-300"
                >
                  Sign up now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;