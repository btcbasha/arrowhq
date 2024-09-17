"use client";
import React from "react";
import { ABeeZee } from "next/font/google";

const abeezee = ABeeZee({ subsets: ["latin"], weight: "400" });

export function Navbar() {
  return (
    <nav className="bg-[#060112] text-white py-6 px-4 lg:px-12 rounded-lg shadow-lg flex items-center justify-between mx-auto">
      <div className="flex items-center space-x-2">
        <span className={`font-bold text-xl ${abeezee.className}`}>lunabill</span>
      </div>

      <div className="flex  lg:space-x-8 text-sm font-medium hidden lg:block">
        <a href="#mission" className="hover:text-gray-400">
          Mission
        </a>
        <a href="#providers" className="hover:text-gray-400">
          Providers
        </a>
        <a href="#health-plans" className="hover:text-gray-400">
          Health Plans
        </a>
        <a href="#blog" className="hover:text-gray-400">
          Blog
        </a>
      </div>

      <div>
        <a
          href="#get-early-access"
          className="bg-blue-700 hover:bg-blue-600 flex text-white py-2 px-4 rounded-full transition duration-300"
        >
          Get early access
        </a>
      </div>
    </nav>
  );
}
