"use client"

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
      <Container>
        <div className="max-w-7xl mx-auto grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-white text-2xl font-bold mb-3">E-Store</h2>
            <p className="text-sm text-gray-400 leading-6">
              We provide high-quality services and digital products to help you grow your business and build your online presence.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/store" className="hover:text-white transition">Store</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-3">Subscribe to our newsletter for latest updates.</p>
            <div className="flex items-center bg-gray-800 rounded-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-gray-200 px-4 py-2 outline-none"
              />
              <button className="bg-indigo-600 rounded-r-full hover:bg-indigo-700 px-4 py-3 text-white text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>

        </div>
        <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-white transition"><FaTwitter /></Link>
            <Link href="#" className="hover:text-white transition"><FaInstagram /></Link>
            <Link href="#" className="hover:text-white transition"><FaLinkedinIn /></Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
