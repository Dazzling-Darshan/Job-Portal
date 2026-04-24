import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Job<span className="text-blue-600">Portal</span>
            </h1>
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              Find your dream job easily with our modern job portal platform.
              Explore thousands of opportunities tailored for you.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="font-semibold text-gray-700 mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Jobs</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Browse</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="font-semibold text-gray-700 mb-3">Resources</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-blue-600 cursor-pointer transition">Help Center</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-blue-600 cursor-pointer transition">Terms & Conditions</li>
              <li className="hover:text-blue-600 cursor-pointer transition">FAQ</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="font-semibold text-gray-700 mb-3">Follow Us</h2>
            <div className="flex gap-4">
              <div className="p-2 bg-white rounded-full shadow hover:bg-blue-50 transition cursor-pointer">
                <FaFacebookF className="text-blue-600" />
              </div>
              <div className="p-2 bg-white rounded-full shadow hover:bg-blue-50 transition cursor-pointer">
                <FaTwitter className="text-blue-500" />
              </div>
              <div className="p-2 bg-white rounded-full shadow hover:bg-blue-50 transition cursor-pointer">
                <FaLinkedinIn className="text-blue-700" />
              </div>
              <div className="p-2 bg-white rounded-full shadow hover:bg-blue-50 transition cursor-pointer">
                <FaGithub className="text-gray-800" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>

          <div className="flex gap-4 mt-3 md:mt-0 text-sm text-gray-500">
            <span className="hover:text-blue-600 cursor-pointer transition">Privacy</span>
            <span className="hover:text-blue-600 cursor-pointer transition">Terms</span>
            <span className="hover:text-blue-600 cursor-pointer transition">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;