import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb title="Blog Details" pages={["Blog"]} />

      <section className="overflow-hidden py-20 bg-white">
        <div className="max-w-[750px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-10 shadow-2xl border border-velourGold/10">
            <Image
              className="w-full h-auto object-cover"
              src="/images/blog/veloura-blog-hero.jpg" // ← Replace with your elegant fragrance-related image
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
            The Art of Choosing Your Signature Scent
          </h1>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none text-gray-800 font-montserrat leading-relaxed">
            <p className="mb-6">
              Fragrance is more than a scent — it's an invisible accessory that tells your story before you speak. In a world of fleeting trends, finding your signature fragrance is about discovering what truly resonates with your essence.
            </p>

            <p className="mb-6">
              At Veloura, every perfume is crafted with rare, ethically sourced ingredients and blended by master perfumers who understand that true luxury is felt as much as it is smelled.
            </p>

            {/* Blockquote */}
            <blockquote className="border-l-4 border-velourGold bg-gray-50 p-8 my-10 italic text-gray-700 rounded-xl shadow-sm text-xl">
              "A great fragrance is like a beautiful memory — it lingers long after the moment has passed, evoking emotion and leaving an unforgettable impression."
              <footer className="mt-4 text-right text-gray-600 font-montserrat text-base">
                — Sophia Laurent, Master Perfumer
              </footer>
            </blockquote>

            <h3 className="font-playfair text-3xl text-gray-900 mt-12 mb-6">
              Tips for Finding Your Signature Scent
            </h3>

            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li>Trust your first impression — the top notes should make you smile</li>
              <li>Wait for the heart notes to develop — this is the true personality</li>
              <li>Let the base notes linger — they reveal the lasting character</li>
              <li>Layer with your body chemistry — the same scent smells different on everyone</li>
            </ul>

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
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  {/* Pinterest SVG */}
                </svg>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0376A8] hover:bg-opacity-90 transition duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  {/* LinkedIn SVG */}
                </svg>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00ACEE] hover:bg-opacity-90 transition duration-300"
              >
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  {/* Twitter/X SVG */}
                </svg>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1877F2] hover:bg-opacity-90 transition duration-300"
              >
                <svg width="9" height="18" viewBox="0 0 9 18" fill="none">
                  {/* Facebook SVG */}
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