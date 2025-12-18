import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-velourBlack overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: Contact & Social */}
          <div>
            <h2 className="font-playfair text-2xl tracking-wider text-velourGold mb-8">
              Veloura Fragrances
            </h2>

            <ul className="space-y-5 text-gray-400">
              <li className="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-velourGold flex-shrink-0 mt-1">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C7.77146 1.25 4.25 4.77146 4.25 9C4.25 13.2285 12 22.75 12 22.75C12 22.75 19.75 13.2285 19.75 9C19.75 4.77146 16.2285 1.25 12 1.25ZM12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12Z" />
                </svg>
                <span>874 Fox street, Doornfontein ,  Johannesburg</span>
              </li>

              <li className="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-velourGold">
                  <path d="M19.95 21C18.95 21 17.95 20.95 16.95 20.85C13.35 20.45 9.85 18.95 6.95 16.05C4.05 13.15 2.55 9.65 2.15 6.05C2.05 5.05 2 4.05 2 3.05C2 2.45 2.45 2 3.05 2H7.05C7.55 2 7.95 2.3 8.1 2.8L9.3 6.8C9.4 7.2 9.35 7.6 9.1 7.9L6.6 10.5C7.8 12.9 9.9 14.9 12.4 16.1L14.9 13.6C15.2 13.35 15.6 13.3 16 13.4L20 14.6C20.5 14.75 20.8 15.15 20.8 15.65V19.65C20.8 20.25 20.35 20.7 19.95 20.7V21Z" />
                </svg>
                <a href="tel:+0995327869843" className="hover:text-velourGold transition">(+27) 73-664-1703 </a>
              </li>

              <li className="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-velourGold">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                </svg>
                <a href="mailto:support@veloura.com" className="hover:text-velourGold transition">support@veloura.com</a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-10">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-velourGold transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325V22.676C0 23.407.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.79 3.625 19.882 3.726 20.175 3.772V7.005H18.277C16.903 7.005 16.62 7.777 16.62 8.875V11.084H20.063L19.556 14.706H16.62V24H22.675C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0Z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-velourGold transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557C23.117 4.95 22.168 5.207 21.172 5.307C22.189 4.765 22.97 3.906 23.337 2.887C22.386 3.463 21.332 3.893 20.21 4.145C19.339 3.219 18.123 2.667 16.761 2.667C14.077 2.667 11.917 4.827 11.917 7.511C11.917 7.904 11.959 8.285 12.038 8.65C7.863 8.429 4.212 6.461 1.671 3.526C1.248 4.225 1.004 5.033 1.004 5.896C1.004 7.651 1.93 9.185 3.288 10.094C2.491 10.067 1.74 9.852 1.08 9.463V9.521C1.08 11.879 2.797 13.791 5.075 14.222C4.668 14.331 4.237 14.382 3.792 14.382C3.474 14.382 3.167 14.355 2.871 14.303C3.486 16.266 5.285 17.736 7.484 17.771C5.807 19.099 3.614 19.886 1.193 19.886C.8 19.886 .416 19.863 .04 19.819C2.177 21.223 4.696 22 7.414 22C16.747 22 21.834 14.459 21.834 8.027C21.834 7.815 21.83 7.606 21.818 7.4C22.839 6.761 23.722 5.949 24 5.032L24 4.557Z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-velourGold transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163C15.204 2.163 15.584 2.165 16.85 2.204C20.102 2.381 21.621 3.924 21.769 7.152C21.907 8.418 21.909 8.798 21.909 12C21.909 15.202 21.907 15.582 21.769 16.848C21.621 20.076 20.102 21.619 16.85 21.736C15.584 21.774 15.204 21.776 12 21.776C8.796 21.776 8.416 21.774 7.15 21.736C3.898 21.619 2.379 20.076 2.231 16.848C2.093 15.582 2.091 15.202 2.091 12C2.091 8.798 2.093 8.418 2.231 7.152C2.379 3.924 3.898 2.381 7.15 2.204C8.416 2.165 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.002 7.053 0.041C2.844 0.258 0.138 2.964 0 7.152C-0.038 8.432 -0.04 8.812  -0.04 12C-0.04 15.188 -0.038 15.568 0 16.848C0.138 21.036 2.844 23.742 7.053 23.959C8.333 23.998 8.741 24 12 24C15.259 24 15.667 23.998 16.947 23.959C21.156 23.742 23.862 21.036 24 16.848C24.038 15.568 24.04 15.188 24.04 12C24.04 8.812 24.038 8.432 24 7.152C23.862 2.964 21.156 0.258 16.947 0.041C15.667 0.002 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16ZM18.406 4.492C17.609 4.492 16.953 5.148 16.953 5.945C16.953 6.742 17.609 7.398 18.406 7.398C19.204 7.398 19.86 6.742 19.86 5.945C19.86 5.148 19.204 4.492 18.406 4.492Z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-velourGold transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 10.041 13 10.258 13 13.396V19H10V8H13V9.765C13.397 8.495 15.929 7.867 18 7.867C21.057 7.867 22 10.062 22 12.683V19H20Z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Account */}
          <div>
            <h3 className="font-montserrat text-lg uppercase tracking-wider text-velourGold mb-8">
              Account
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="/account" className="hover:text-velourGold transition">My Account</Link></li>
              <li><Link href="/signin" className="hover:text-velourGold transition">Login / Register</Link></li>
              <li><Link href="/cart" className="hover:text-velourGold transition">Cart</Link></li>
              <li><Link href="/wishlist" className="hover:text-velourGold transition">Wishlist</Link></li>
              <li><Link href="/shop" className="hover:text-velourGold transition">Shop</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-montserrat text-lg uppercase tracking-wider text-velourGold mb-8">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="/privacy" className="hover:text-velourGold transition">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-velourGold transition">Refund Policy</Link></li>
              <li><Link href="/terms" className="hover:text-velourGold transition">Terms of Use</Link></li>
              <li><Link href="/faq" className="hover:text-velourGold transition">FAQ’s</Link></li>
              <li><Link href="/contact" className="hover:text-velourGold transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Download App */}
          <div className="lg:text-right">
            <h3 className="font-montserrat text-lg uppercase tracking-wider text-velourGold mb-8">
              Download App
            </h3>
            <p className="text-gray-400 mb-6">Save R19.99 With the App & New User only</p>
            <div className="space-y-4">
              <a href="#" className="inline-flex items-center gap-4 bg-velourGray/50 px-6 py-4 rounded-lg hover:bg-velourGray transition">
                <svg width="34" height="35" viewBox="0 0 34 35" fill="currentColor" className="text-velourGold">
                  <path d="M29.5529 12.3412C29.3618 12.4871 25.9887 14.3586 25.9887 18.5198C25.9887 23.3331 30.2809 25.0358 30.4093 25.078C30.3896 25.1818 29.7275 27.41 28.1463 29.6804C26.7364 31.6783 25.264 33.6731 23.024 33.6731C20.7841 33.6731 20.2076 32.3918 17.6217 32.3918C15.1018 32.3918 14.2058 33.7152 12.1569 33.7152C10.1079 33.7152 8.6783 31.8664 7.03456 29.5961C5.13062 26.93 3.59229 22.7882 3.59229 18.8572C3.59229 12.552 7.756 9.20804 11.8538 9.20804C14.0312 9.20804 15.8462 10.6157 17.2133 10.6157C18.5144 10.6157 20.5436 9.12373 23.0207 9.12373C23.9595 9.12373 27.3327 9.20804 29.5529 12.3412ZM21.8447 6.45441C22.8692 5.25759 23.5939 3.59697 23.5939 1.93635C23.5939 1.70607 23.5741 1.47254 23.5313 1.28442C21.8645 1.34605 19.8815 2.37745 18.6857 3.74292C17.7469 4.79379 16.8707 6.45441 16.8707 8.13773C16.8707 8.39076 16.9135 8.64369 16.9333 8.72476C17.0387 8.74426 17.21 8.76694 17.3813 8.76694C18.8768 8.76694 20.7577 7.78094 21.8447 6.45441Z" />
                </svg>
                <div className="text-left">
                  <span className="block text-xs text-gray-400">Download on the</span>
                  <p className="font-medium text-white">App Store</p>
                </div>
              </a>

              <a href="#" className="inline-flex items-center gap-4 bg-velourGray/50 px-6 py-4 rounded-lg hover:bg-velourGray transition">
                <svg width="34" height="35" viewBox="0 0 34 35" fill="currentColor" className="text-velourGold">
                  <path d="M5.45764 1.03125L19.9718 15.5427L23.7171 11.7973C18.5993 8.69224 11.7448 4.52679 8.66206 2.65395L6.59681 1.40278C6.23175 1.18039 5.84088 1.06062 5.45764 1.03125ZM3.24214 2.76868C3.21276 2.92814 3.1875 3.08837 3.1875 3.26041V31.939C3.1875 32.0593 3.21169 32.1713 3.22848 32.2859L17.9939 17.5205L3.24214 2.76868ZM26.1785 13.2916L21.9496 17.5205L26.1047 21.6756C28.3062 20.3412 29.831 19.4147 30.0003 19.3126C30.7486 18.8552 31.1712 18.1651 31.1586 17.4112C31.1474 16.6713 30.7247 16.0098 30.0057 15.6028C29.8449 15.5104 28.3408 14.6022 26.1785 13.2916ZM19.9718 19.4983L5.50135 33.9688C5.78248 33.9198 6.06327 33.836 6.33182 33.6737C6.70387 33.4471 16.7548 27.3492 23.6433 23.1699L19.9718 19.4983Z" />
                </svg>
                <div className="text-left">
                  <span className="block text-xs text-gray-400">Get it on</span>
                  <p className="font-medium text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-velourGold/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p className="text-sm">
            © {year} Veloura Fragrances. All rights reserved.
          </p>

          <div className="flex items-center gap-8 mt-6 md:mt-0">
            <span className="text-sm font-medium text-gray-400">We Accept:</span>
            <div className="flex gap-6">
              <Image src="/images/payment/payment-01.svg" alt="Visa" width={66} height={22} />
              <Image src="/images/payment/payment-02.svg" alt="PayPal" width={50} height={22} />
              <Image src="/images/payment/payment-03.svg" alt="MasterCard" width={40} height={24} />
              <Image src="/images/payment/payment-04.svg" alt="Apple Pay" width={52} height={22} />
              <Image src="/images/payment/payment-05.svg" alt="Google Pay" width={56} height={22} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;