import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title="Blog Details" pages={["Blog"]} />

      <section className="overflow-hidden py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-10 shadow-2xl border border-velourGold/10">
            <Image
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" // Elegant perfume bottle image (replace with your preferred)
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

          {/* Main Title */}
          <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
            The Art of Choosing Your Signature Scent
          </h1>

          {/* Intro Paragraph */}
          <p className="text-gray-700 font-montserrat text-lg leading-relaxed mb-8">
            Fragrance is more than a scent — it's an invisible accessory that tells your story before you speak. In a world of fleeting trends, finding your signature fragrance is about discovering what truly resonates with your essence.
          </p>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-gray-800 font-montserrat">
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet eros ac ipsum egestas dapibus. Vivamus gravida, ex non placerat tincidunt, lorem felis facilisis tellus, vitae bibendum purus felis eget tellus. In non rutrum ipsum. Morbi ut dui ante.
            </p>

            <p className="mb-6">
              Nunc faucibus libero sem, quis placerat nisl pellentesque eget. Morbi porta velit ut leo sollicitudin, a faucibus purus faucibus. Maecenas mollis dui nec metus euismod, sed aliquam risus luctus.
            </p>

            {/* Blockquote */}
            <blockquote className="border-l-4 border-velourGold bg-gray-50 p-6 my-10 italic text-gray-700 rounded-xl shadow-sm">
              "A great fragrance is like a beautiful memory — it lingers long after the moment has passed, evoking emotion and leaving an unforgettable impression."
              <footer className="mt-4 text-right text-gray-600 font-montserrat text-sm">
                — Sophia Laurent, Master Perfumer
              </footer>
            </blockquote>

            <h3 className="font-playfair text-3xl text-gray-900 mt-12 mb-6">
              The Notes That Define Elegance
            </h3>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
              <li>Top notes: Bergamot, Mandarin, Saffron — the sparkling first impression</li>
              <li>Heart notes: Velvet Rose, Oud, Jasmine — the soul of the fragrance</li>
              <li>Base notes: Smoked Amber, Vanilla, Patchouli — the lasting warmth</li>
              <li>Signature longevity: 8–12 hours on skin, days on fabric</li>
            </ul>

            <p className="mb-6">
              Each Veloura fragrance is crafted with rare, ethically sourced ingredients, blended by master perfumers who understand that true luxury is felt as much as it is smelled.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-6 mt-12">
              <span className="font-montserrat text-gray-700">Popular Topics:</span>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/blog?tag=fragrance"
                  className="inline-flex font-montserrat text-sm text-gray-700 hover:text-white bg-gray-100 hover:bg-velourGold px-5 py-2 rounded-full transition-all duration-300"
                >
                  Signature Scents
                </Link>
                <Link
                  href="/blog?tag=perfume"
                  className="inline-flex font-montserrat text-sm text-gray-700 hover:text-white bg-gray-100 hover:bg-velourGold px-5 py-2 rounded-full transition-all duration-300"
                >
                  Luxury Perfumes
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
                <svg width="18" height="18" viewBox="0 0 17 17" fill="none">
                  {/* Pinterest icon SVG (same as yours) */}
                </svg>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0376A8] hover:bg-opacity-90 transition duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  {/* LinkedIn icon SVG */}
                </svg>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00ACEE] hover:bg-opacity-90 transition duration-300"
              >
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  {/* Twitter/X icon SVG */}
                </svg>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] hover:bg-opacity-90 transition duration-300"
              >
                <svg width="9" height="18" viewBox="0 0 9 18" fill="none">
                  {/* Facebook icon SVG */}
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;