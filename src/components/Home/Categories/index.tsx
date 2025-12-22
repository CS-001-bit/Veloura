"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Our 6 Veloura categories with external images
const categories = [
  {
    name: "Men’s Fragrances",
    slug: "mens",
    image: "https://urbanscents.co.za/cdn/shop/files/image_4c2ffb14-82dd-4c15-822b-8f3f24768d98.webp?v=1743056471&width=990", // Dark woody masculine bottle
  },
  {
    name: "Women’s Fragrances",
    slug: "womens",
    image: "https://urbanscents.co.za/cdn/shop/products/LA.jpg?v=1743056401&width=533", // Soft floral feminine
  },
  {
    name: "Unisex",
    slug: "unisex",
    image: "https://amiiraa.co.za/cdn/shop/files/FAD_8442.jpg?v=1746255213&width=1946", // Clean neutral bottle
  },
  {
    name: "Arabian / Oud",
    slug: "oud",
    image: "https://www.rioperfumes.co.za/cdn/shop/files/arabian-knight-eau-de-parfum-100ml-arabian-oud-perfume_998x_a571da0e-95b6-4a6a-ae70-4c1a3e7488db.jpg?v=1705610957",
  },
  {
    name: "Gift Sets",
    slug: "giftsets",
    image: "https://m.media-amazon.com/images/I/41+IZO41ctL._AC_SY580_.jpg", // Elegant gift trio
  },
  {
    name: "Roll-ons / Minis",
    slug: "minis",
    image: "https://m.media-amazon.com/images/I/51OvkUXtpAL._AC_UF1000,1000_QL80_.jpg", // Travel/mini bottles
  },
];

const Categories = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="overflow-hidden py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl text-gray-900">
              Browse by Category
            </h2>
            <p className="text-gray-600 mt-2 font-montserrat">Discover your perfect scent</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 border-velourGold flex items-center justify-center hover:bg-velourGold hover:text-white transition group"
            >
              <svg className="w-5 h-5 text-velourGold group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-velourGold flex items-center justify-center hover:bg-velourGold hover:text-white transition group"
            >
              <svg className="w-5 h-5 text-velourGold group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          ref={sliderRef}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="categories-carousel"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.slug}>
              <Link
                href={`/category/${cat.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                  <div className="aspect-square relative">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="font-playfair text-2xl text-white drop-shadow-md group-hover:text-velourGold transition">
                      {cat.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
