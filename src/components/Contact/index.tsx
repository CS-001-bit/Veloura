import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" pages={["Contact"]} />

      <section className="overflow-hidden py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Left: Contact Information */}
            <div className="rounded-2xl bg-white shadow-xl border border-velourGold/20 p-8 md:p-12">
              <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-8 text-center md:text-left">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <p className="flex items-start gap-4 text-gray-700">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 shrink-0 text-velourGold"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-montserrat">
                    <strong className="text-gray-900">Business Hours:</strong><br />
                    Monday – Friday: 9:00 AM – 6:00 PM<br />
                    Saturday: 10:00 AM – 4:00 PM
                  </span>
                </p>

                <p className="flex items-start gap-4 text-gray-700">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1 shrink-0 text-velourGold"
                  >
                    <path
                      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <span className="font-montserrat">
                    <strong className="text-gray-900">Address:</strong><br />
                    35 Siemert Street<br />
                    Doornfontein,Johannesburg
                  </span>
                </p>

                <p className="flex items-center gap-4 text-gray-700">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 text-velourGold"
                  >
                    <path
                      d="M22 16.92V19.92C22 20.4704 21.7893 20.921 21.4142 21.2961C21.0391 21.6712 20.5304 21.8819 20 21.8819C16.718 21.8819 13.5622 20.577 11.101 18.1158C8.63978 15.6546 7.335 12.4988 7.335 9.21685C7.335 8.68641 7.54564 8.1777 7.92072 7.80263C8.29579 7.42756 8.80449 7.21692 9.335 7.21692H12.335C12.8645 7.21692 13.3732 7.42756 13.7483 7.80263C14.1233 8.1777 14.334 8.68641 14.334 9.21685C14.334 10.0569 14.694 10.8684 15.334 11.5084C15.974 12.1484 16.7855 12.5084 17.6255 12.5084C18.156 12.5084 18.6647 12.719 19.0398 13.0941C19.4148 13.4692 19.6255 13.9779 19.6255 14.5084V16.92Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-montserrat">
                    <strong className="text-gray-900">Phone:</strong> + 073 664 1704
                  </span>
                </p>

                <p className="flex items-center gap-4 text-gray-700">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 text-velourGold"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-montserrat">
                    <strong className="text-gray-900">Email:</strong> Khendy@veloura.com
                  </span>
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="rounded-2xl bg-white shadow-xl border border-velourGold/20 p-8 md:p-12">
              <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-8 text-center">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 font-montserrat text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Your first name"
                      className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block mb-2 font-montserrat text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Your last name"
                      className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 font-montserrat text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@veloura.com"
                      className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 font-montserrat text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+27 73 664 1701 "
                      className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-montserrat text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Inquiry about..."
                    className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-montserrat text-gray-700">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white placeholder:text-gray-400 text-gray-900 outline-none focus:border-velourGold focus:ring-2 focus:ring-velourGold/20 transition-all duration-300"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 font-montserrat font-medium text-velourBlack bg-velourGold rounded-full hover:bg-velourDarkGold transition-all duration-300 shadow-md hover:shadow-lg text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;