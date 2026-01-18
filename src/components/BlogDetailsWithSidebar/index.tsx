"use client";
import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SearchForm from "../Blog/SearchForm";
import LatestPosts from "../Blog/LatestPosts";
import LatestProducts from "../Blog/LatestProducts";
import blogData from "../BlogGrid/blogData";
import shopData from "../Shop/shopData"; 
import Image from "next/image";
import Link from "next/link";

const BlogDetailsWithSidebar = () => {
  return (
    <>
      <Breadcrumb title="Blog Details" pages={["Blog"]} />

      <section className="overflow-hidden py-20 bg-white">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
            {/* Main Blog Content */}
            <div className="lg:max-w-[750px] w-full">
              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden mb-10 shadow-2xl border border-velourGold/10">
                <Image
                  className="w-full h-auto object-cover"
                  src="/images/blog/veloura-blog-hero.jpg" // Replace with your elegant fragrance-related image
                  alt="Veloura Fragrance Blog"
                  width={750}
                  height={477}
                  priority
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6 mb-8 text-gray-600 font-montserrat text-sm">
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  Mar 27, 2025
                </span>
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  320k Views
                </span>
              </div>

              {/* Blog Title */}
              <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
                The Art of Layering Fragrances
              </h1>

              {/* Blog Content */}
              <div className="prose prose-lg max-w-none text-gray-800 font-montserrat leading-relaxed">
                <p className="mb-6">
                  Fragrance layering is an art form — combining scents to create a signature that’s uniquely yours. At Veloura, we believe the perfect scent evolves with every pulse point.
                </p>

                <p className="mb-6">
                  Start with a light citrus or green note as your base, layer a floral heart, and finish with a warm, woody base. The result is depth, longevity, and personal expression.
                </p>

                {/* Blockquote */}
                <blockquote className="border-l-4 border-velourGold bg-gray-50 p-8 my-10 italic text-gray-700 rounded-xl shadow-sm text-xl">
                  "A fragrance isn’t just worn — it’s remembered. Layering allows you to leave an impression that lingers long after you’ve left the room."
                  <footer className="mt-4 text-right text-gray-600 font-montserrat text-base">
                    — Sophia Laurent, Master Perfumer
                  </footer>
                </blockquote>

                <h3 className="font-playfair text-3xl text-gray-900 mt-12 mb-6">
                  Tips for Perfect Layering
                </h3>

                <ul className="list-disc pl-6 space-y-4 mb-8">
                  <li>Always start with the lightest scent and build upward in intensity</li>
                  <li>Use complementary families — citrus with florals, woods with spices</li>
                  <li>Apply to pulse points: wrists, neck, behind ears</li>
                  <li>Experiment — your signature is yours alone</li>
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-6 mt-12">
                  <span className="font-montserrat text-gray-700">Popular Topics:</span>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/blog?tag=fragrance"
                      className="inline-flex font-montserrat text-sm text-gray-700 hover:text-white bg-gray-100 hover:bg-velourGold px-5 py-2 rounded-full transition-all duration-300"
                    >
                      Layering
                    </Link>
                    <Link
                      href="/blog?tag=perfume"
                      className="inline-flex font-montserrat text-sm text-gray-700 hover:text-white bg-gray-100 hover:bg-velourGold px-5 py-2 rounded-full transition-all duration-300"
                    >
                      Signature Scents
                    </Link>
                    <Link
                      href="/blog?tag=notes"
                      className="inline-flex font-montserrat text-sm text-gray-700 hover:text-white bg-gray-100 hover:bg-velourGold px-5 py-2 rounded-full transition-all duration-300"
                    >
                      Fragrance Notes
                    </Link>
                  </div>
                </div>

                {/* Social Sharing */}
                <div className="flex justify-center gap-6 mt-12">
                  <Link
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BD081C] hover:bg-opacity-90 transition duration-300"
                  >
                    {/* Pinterest icon */}
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0376A8] hover:bg-opacity-90 transition duration-300"
                  >
                    {/* LinkedIn icon */}
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00ACEE] hover:bg-opacity-90 transition duration-300"
                  >
                    {/* Twitter/X icon */}
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] hover:bg-opacity-90 transition duration-300"
                  >
                    {/* Facebook icon */}
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:max-w-[370px] w-full space-y-12">
              {/* Search Form */}
              <SearchForm />

              {/* Recent Posts */}
              <LatestPosts blogs={blogData} />

              {/* Latest Products */}
              <LatestProducts products={shopData} />

              {/* Popular Categories */}
              <div className="bg-white rounded-2xl shadow-xl border border-velourGold/20 overflow-hidden">
                <div className="px-8 py-6 bg-gray-50 border-b border-gray-200">
                  <h2 className="font-playfair text-2xl text-gray-900">
                    Popular Categories
                  </h2>
                </div>

                <div className="p-8 space-y-4">
                  {["Floral", "Oud & Woody", "Citrus & Fresh", "Oriental Spice", "Vanilla Gourmand", "Limited Editions"].map((cat, i) => (
                    <button
                      key={i}
                      className="group flex w-full items-center justify-between py-3 px-5 rounded-xl transition-all duration-300 hover:bg-velourGold/5 text-gray-800 hover:text-velourGold"
                    >
                      {cat}
                      <span className="inline-flex min-w-[2.5rem] items-center justify-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 group-hover:bg-velourGold/10 group-hover:text-velourGold transition-colors">
                        {Math.floor(Math.random() * 50) + 5}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-2xl shadow-xl border border-velourGold/20 overflow-hidden">
                <div className="px-8 py-6 bg-gray-50 border-b border-gray-200">
                  <h2 className="font-playfair text-2xl text-gray-900">
                    Tags
                  </h2>
                </div>

                <div className="p-8 flex flex-wrap gap-3">
                  {["Floral", "Oud", "Citrus", "Vanilla", "Limited", "Signature", "Layering", "Luxury"].map((tag, i) => (
                    <Link
                      key={i}
                      href={`/blog?tag=${tag.toLowerCase()}`}
                      className="inline-flex font-montserrat text-sm text-gray-700 hover:text-white bg-gray-100 hover:bg-velourGold px-5 py-2 rounded-full transition-all duration-300"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsWithSidebar;