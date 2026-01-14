import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="overflow-hidden py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image with Overlay */}
          <Image
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" // Elegant fragrance-inspired bg (replace with your preferred)
            alt="Veloura Newsletter Background"
            className="absolute inset-0 w-full h-full object-cover"
            width={1170}
            height={300}
            priority
          />

          {/* Dark Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 px-8 md:px-16 py-16 lg:py-20">
            {/* Left: Text */}
            <div className="max-w-xl">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 leading-tight">
                Stay in the Scent
              </h2>
              <p className="text-white/90 font-montserrat text-lg md:text-xl max-w-md">
                Subscribe for exclusive fragrance releases, limited-edition drops, and insider offers.
              </p>
            </div>

            {/* Right: Form */}
            <div className="w-full lg:max-w-md">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full py-4 px-6 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/30 transition-all duration-300 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="inline-flex justify-center items-center font-montserrat font-medium text-velourBlack bg-velourGold px-10 py-4 rounded-full hover:bg-velourDarkGold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;