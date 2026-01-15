import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Error = () => {
  return (
    <>
      <Breadcrumb title="Page Not Found" pages={["Error"]} />

      <section className="overflow-hidden py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="bg-white rounded-2xl shadow-xl border border-velourGold/20 px-6 py-16 md:py-24 lg:py-32">
            <div className="text-center">
              {/* 404 Illustration */}
              <Image
                src="/images/404-veloura.svg" // Replace with your custom elegant 404 image (or keep original and rename)
                alt="Page Not Found"
                className="mx-auto mb-10 w-3/4 sm:w-1/2 lg:w-96"
                width={400}
                height={300}
                priority
              />

              <h2 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-6">
                Sorry, the page can’t be found
              </h2>

              <p className="max-w-[520px] mx-auto mb-10 text-gray-600 font-montserrat text-lg leading-relaxed">
                The page you were looking for appears to have been moved, deleted, or does not exist. 
                Perhaps you would  like to explore our exquisite collection instead?
              </p>

              <Link
                href="/"
                className="inline-flex items-center gap-3 font-montserrat font-medium text-velourBlack bg-velourGold px-10 py-5 rounded-full hover:bg-velourDarkGold transition-all duration-300 shadow-md hover:shadow-lg text-lg"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6654 9.37502C17.0105 9.37502 17.2904 9.65484 17.2904 10C17.2904 10.3452 17.0105 10.625 16.6654 10.625H8.95703L8.95703 15C8.95703 15.2528 8.80476 15.4807 8.57121 15.5774C8.33766 15.6742 8.06884 15.6207 7.89009 15.442L2.89009 10.442C2.77288 10.3247 2.70703 10.1658 2.70703 10C2.70703 9.83426 2.77288 9.67529 2.89009 9.55808L7.89009 4.55808C8.06884 4.37933 8.33766 4.32586 8.57121 4.42259C8.80475 4.51933 8.95703 4.74723 8.95703 5.00002L8.95703 9.37502H16.6654Z"
                    fill="currentColor"
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;