import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-16 bg-white">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Two Compact Side Banners */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {/* Left Banner – Discovery Set */}
          <div className="relative z-1 overflow-hidden rounded-2xl bg-gradient-to-br from-velourGold/5 to-white shadow-xl border border-velourGold/10">
            <div className="relative px-8 py-12 lg:py-16">
              <Image
                src="/images/promo/veloura-small-1.png" // Replace with your discovery set image
                alt="Veloura Discovery Set"
                width={260}
                height={260}
                className="absolute top-1/2 left-8 -translate-y-1/2 opacity-20"
              />

              <div className="text-center lg:text-left relative z-10">
                <span className="block font-montserrat font-semibold text-lg md:text-xl text-gray-900 mb-3">
                  Discovery Set
                </span>

                <h3 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-4">
                  Try Before You Commit
                </h3>

                <p className="font-montserrat text-lg md:text-xl text-velourGold font-medium mb-8">
                  Flat 25% Off
                </p>

                <a
                  href="/shop/discovery"
                  className="inline-flex font-montserrat font-medium text-velourBlack bg-velourGold px-10 py-4 rounded-full hover:bg-velourDarkGold transition-all duration-300 shadow-md hover:shadow-lg text-base"
                >
                  Explore Sets
                </a>
              </div>
            </div>
          </div>

          {/* Right Banner – Limited Edition */}
          <div className="relative z-1 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-xl border border-velourGold/10">
            <div className="relative px-8 py-12 lg:py-16">
              <Image
                src="/images/promo/veloura-small-2.png" // Replace with your limited edition image
                alt="Veloura Limited Edition"
                width={240}
                height={240}
                className="absolute top-1/2 right-8 -translate-y-1/2 opacity-30"
              />

              <div className="text-center lg:text-left relative z-10">
                <span className="block font-montserrat font-semibold text-lg md:text-xl text-white mb-3">
                  Limited Edition
                </span>

                <h3 className="font-playfair text-3xl md:text-4xl text-white mb-4">
                  Midnight Orchid
                </h3>

                <p className="font-montserrat text-lg md:text-xl text-velourGold font-medium mb-8">
                  Up to 40% Off – While Stocks Last
                </p>

                <a
                  href="/shop/limited"
                  className="inline-flex font-montserrat font-medium text-velourBlack bg-velourGold px-10 py-4 rounded-full hover:bg-velourDarkGold transition-all duration-300 shadow-md hover:shadow-lg text-base"
                >
                  Claim Yours
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;