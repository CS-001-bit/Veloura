"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000, // Slower for luxury feel
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel h-full"
    >
      {/* Slide 1: Signature Fragrance */}
      <SwiperSlide>
        <div className="flex items-center justify-between pt-6 sm:pt-0 flex-col-reverse lg:flex-row h-full">
          <div className="max-w-[420px] py-12 sm:py-16 lg:py-24 pl-6 sm:pl-10 lg:pl-16">
            <div className="flex items-center gap-5 mb-8">
              <span className="block font-playfair text-5xl sm:text-7xl text-velourGold">
                New
              </span>
              <span className="block text-gray-700 text-lg sm:text-2xl font-montserrat uppercase tracking-widest">
                Arrival
              </span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              <Link href="/product/signature">Veloura Noir Elixir</Link>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg mb-10 font-montserrat leading-relaxed">
              A captivating blend of rare oud, velvet rose, and smoked amber — an unforgettable signature scent.
            </p>

            <Link
              href="/product/signature"
              className="inline-flex items-center font-montserrat font-medium text-gray-900 border-2 border-velourGold px-10 py-4 rounded-full hover:bg-velourGold hover:text-white transition-all duration-300"
            >
              Discover Now
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://www.rioperfumes.co.za/cdn/shop/files/arabian-knight-eau-de-parfum-100ml-arabian-oud-perfume_998x_a571da0e-95b6-4a6a-ae70-4c1a3e7488db.jpg?v=1705610957"
              alt="Veloura Noir Elixir - Luxury Perfume"
              width={450}
              height={550}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2: Women's Collection */}
      <SwiperSlide>
        <div className="flex items-center justify-between pt-6 sm:pt-0 flex-col-reverse lg:flex-row h-full">
          <div className="max-w-[420px] py-12 sm:py-16 lg:py-24 pl-6 sm:pl-10 lg:pl-16">
            <div className="flex items-center gap-5 mb-8">
              <span className="block font-playfair text-5xl sm:text-7xl text-velourGold">
                20%
              </span>
              <span className="block text-gray-700 text-lg sm:text-2xl font-montserrat uppercase tracking-widest">
                Off
                <br />
                Selected
              </span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              <Link href="/category/womens">Women’s Collection</Link>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg mb-10 font-montserrat leading-relaxed">
              Delicate florals, warm vanillas, and sparkling citrus — crafted for the modern woman.
            </p>

            <Link
              href="/category/womens"
              className="inline-flex items-center font-montserrat font-medium text-gray-900 border-2 border-velourGold px-10 py-4 rounded-full hover:bg-velourGold hover:text-white transition-all duration-300"
            >
              Shop Collection
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://m.media-amazon.com/images/I/71sF+GMq6cL._AC_SL1500_.jpg"
              alt="Veloura Women's Fragrance"
              width={450}
              height={550}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3: Gift Sets */}
      <SwiperSlide>
        <div className="flex items-center justify-between pt-6 sm:pt-0 flex-col-reverse lg:flex-row h-full">
          <div className="max-w-[420px] py-12 sm:py-16 lg:py-24 pl-6 sm:pl-10 lg:pl-16">
            <div className="mb-8">
              <span className="block text-gray-700 text-lg sm:text-2xl font-montserrat uppercase tracking-widest mb-2">
                The Perfect Gift
              </span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-5xl text-gray-900 mb-6 leading-tight">
              <Link href="/category/giftsets">Luxury Gift Sets</Link>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg mb-10 font-montserrat leading-relaxed">
              Curated duos and trios in elegant packaging — ready to delight and impress.
            </p>

            <Link
              href="/category/giftsets"
              className="inline-flex items-center font-montserrat font-medium text-gray-900 border-2 border-velourGold px-10 py-4 rounded-full hover:bg-velourGold hover:text-white transition-all duration-300"
            >
              Explore Gifts
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://m.media-amazon.com/images/I/81f4z7Y0gFL._AC_SL1500_.jpg"
              alt="Veloura Luxury Gift Set"
              width={450}
              height={550}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;