"use client";
import React from "react";
import { cn } from "@/lib/utils"; // Utility for merging classes

export function Navbar() {
  return (
    <nav className="bg-black sticky  top-4 border border-gray-600  text-white py-4 px-6 rounded-lg shadow-lg flex items-center justify-between max-w-5xl mx-auto">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
       
        <span className="font-semibold text-lg">Arrow</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-sm font-medium">
        <a href="#mission" className="hover:text-gray-400">
          Mission
        </a>
        <a href="#providers" className="hover:text-gray-400">
          Providers
        </a>
        <a href="#health-plans" className="hover:text-gray-400">
          Health Plans
        </a>
        <a href="#careers" className="hover:text-gray-400">
          Careers
        </a>
        <a href="#blog" className="hover:text-gray-400">
          Blog
        </a>
      </div>

      {/* Call-to-Action Button */}
      <div>
        <a
          href="#get-early-access"
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full transition duration-300"
        >
          Get early access
        </a>
      </div>
    </nav>
  );
}
