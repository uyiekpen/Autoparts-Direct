import { Mail, MapPin, Smartphone } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer id="contact" className="px-4 py-8 bg-[#E3E7EA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Auto Parts Direct Logo"
                  className="h-10 w-[100px] object-cover"
                />
              </div>
              <p className="text-[#3C464D]  text-sm leading-relaxed mt-3">
                Nigeria's first AI-powered platform for instant auto parts
                sourcing. Connecting car owners with verified vendors across the
                country.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-bold text-base text-[#3C464D]  mb-3">
                Contact Us
              </h4>

              <ul className="space-y-2">
                {/* Email */}
                <li>
                  <a
                    href="mailto:hello@autopartsdirect.ng"
                    className="group flex items-center gap-2 text-[#3C464D]  hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40 rounded"
                    aria-label="Send an email to hello@autopartsdirect.ng"
                  >
                    <span className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center transition-all group-hover:bg-gray-700">
                      <Mail className="w-3.5 h-3.5 text-secondary" />
                    </span>
                    <span className="text-xs text-[#3C464D]">
                      autopartsdirect4@gmail.com{" "}
                    </span>
                  </a>
                </li>

                {/* Phone */}
                <li>
                  <a
                    href="tel:+2348012345678"
                    className="group flex items-center gap-2 text-[#3C464D]  hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/40 rounded"
                    aria-label="Call +234 801 234 5678"
                  >
                    <span className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center transition-all">
                      <Smartphone className="w-3.5 h-3.5 text-white" />
                    </span>
                    <span className="text-xs">+234 801 234 5678</span>
                  </a>
                </li>

                {/* Location */}
                <li className="flex items-center gap-2 text-[#3C464D] ">
                  <span className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center">
                    {/* MapPin reads clearer than Target for location */}
                    <MapPin className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="text-xs">Lagos, Nigeria</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-serif font-bold text-base text-[#3C464D] mb-3">
                Follow Us
              </h4>
              <div className="space-y-2">
                <a
                  href="https://www.facebook.com/share/1BPmqNzynH/"
                  className="flex items-center gap-2 text-[#3C464D]  hover:text-secondary transition-colors group"
                >
                  <div className="w-[30px] h-[30px] bg-gray-800 rounded-full flex items-center justify-center transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook-icon lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>{" "}
                  </div>
                  <span className="text-xs">autopartsdirect</span>
                </a>
                <a
                  href="https://www.instagram.com/auto.partdirect?igsh=OGU5MmFsYnZ5aXo2"
                  className="flex items-center gap-2 text-[#3C464D] hover:text-secondary transition-colors group"
                >
                  <div className="w-[30px] h-[30px] bg-gray-800 rounded-full flex items-center justify-center  transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <span className="text-xs">auto.partdirect</span>
                </a>
                <a
                  href="https://www.tiktok.com/@auto_partsdirect2?is_from_webapp=1&sender_device=pc"
                  className="flex items-center gap-2 text-[#3C464D] hover:text-secondary transition-colors group"
                >
                  <div className="w-[30px] h-[30px] bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-all">
                    <img
                      src="/tiktok.png"
                      alt=""
                      className="w-[20px] h-[20px] "
                    />
                  </div>
                  <span className="text-xs">auto_partsdirect2</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#3C464D]  text-xs text-center sm:text-left">
              © 2025 Autoparts Direct.
            </p>
            <div className="flex items-center gap-3 text-[#3C464D]  text-xs">
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer