import React from "react";
import Link from "next/link";
import ProductItem from "@/components/Common/ProductItem";
import shopData from "@/components/Shop/shopData";

const NewArrival = () => {
  return (
    <section className="overflow-hidden py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl text-gray-900">
              New Arrivals
            </h2>
            <p className="text-gray-600 mt-2 font-montserrat text-lg">
              Fresh scents just added to the collection
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center font-montserrat font-medium text-gray-900 border-2 border-velourGold px-8 py-4 rounded-full hover:bg-velourGold hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {shopData.slice(0, 8).map((item, key) => (  // Show only 8 for clean look
            <ProductItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;