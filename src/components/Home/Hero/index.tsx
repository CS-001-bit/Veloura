import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-white">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          {/* Left: Main Carousel */}
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] overflow-hidden shadow-2xl bg-white">
              {/* Optional light background shape if you have one */}
              {/* <Image src="/images/hero/hero-bg.png" alt="shape" className="absolute right-0 bottom-0 opacity-10" width={534} height={520} /> */}

              <HeroCarousel />
            </div>
          </div>

          {/* Right: Two Promo Cards */}
          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              {/* Promo Card 1 */}
              <Link
                href="/category/oud"
                className="w-full relative rounded-[10px] bg-white shadow-lg p-6 sm:p-7.5 hover:shadow-2xl transition group"
              >
                <div className="flex items-center justify-between gap-8">
                  <div>
                    <h2 className="font-playfair text-2xl text-velourGold mb-6 group-hover:text-velourDarkGold transition">
                      Arabian Oud Collection
                    </h2>

                    <div>
                      <p className="font-montserrat text-gray-600 text-sm mb-2 uppercase tracking-wider">
                        Exclusive Launch
                      </p>
                      <span className="text-3xl font-medium text-velourGold">
                        From R999.99
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Image
                      src="https://www.rioperfumes.co.za/cdn/shop/files/arabian-knight-eau-de-parfum-100ml-arabian-oud-perfume_998x_a571da0e-95b6-4a6a-ae70-4c1a3e7488db.jpg?v=1705610957" // White-background oud bottle
                      alt="Arabian Oud"
                      width={160}
                      height={200}
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              </Link>

              {/* Promo Card 2 */}
              <Link
                href="/category/giftsets"
                className="w-full relative rounded-[10px] bg-white shadow-lg p-6 sm:p-7.5 hover:shadow-2xl transition group"
              >
                <div className="flex items-center justify-between gap-8">
                  <div>
                    <h2 className="font-playfair text-2xl text-velourGold mb-6 group-hover:text-velourDarkGold transition">
                      Luxury Gift Sets
                    </h2>

                    <div>
                      <p className="font-montserrat text-gray-600 text-sm mb-2 uppercase tracking-wider">
                        Perfect for Gifting
                      </p>
                      <span className="text-3xl font-medium text-velourGold">
                        From R1999.99
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Image
                      src="https://themansionworld.com/cdn/shop/files/9_ac7673e6-0d42-45de-ac3b-f9a7ede4bbba_800x.jpg?v=1745393887" // White-background gift set
                      alt="Gift Sets"
                      width={140}
                      height={180}
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Features */}
      <HeroFeature />
    </section>
  );
};

export default Hero;