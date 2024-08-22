'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadIn } from "../../fadIn";
const InfiniteScrollBrand = () => {
  const logos = [
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722239365/dolfy_okslvf.png", alt: "Dolfy Learning" },
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722239908/awsap-modify_ogpqgc.jpg", alt: "Download" },
    { src:"https://res.cloudinary.com/djhilzrxt/image/upload/v1722794702/Uno_eo5gl6.jpg",alt:"uno"},
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722238954/festa-new_h4sim3.jpg", alt: "Festa Marketing" },
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722238970/idp-new_iqlzgc.png", alt: "IDP" },
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722238968/meta_space_xhg8di.png", alt: "Meta Space" },
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722238965/momentum_ias_ptmdje.png", alt: "Momentum IAS" },
    { src: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1722238948/programming_pathshala_new_cpoipf.jpg", alt: "Programming Pathshala" },
    { src:"https://res.cloudinary.com/djhilzrxt/image/upload/v1722794668/Zenzia_tfxldh.jpg",alt:"zenzia"}
    
  ];

  return (
    <div className="mt-8 sm:mt-10 md:mt-14 overflow-hidden flex flex-col">
      <div className="flex items-center justify-center my-2 sm:my-3 md:my-4 py-2 sm:py-3 md:py-4">
        <motion.h2
                  variants={fadIn('up', 0.2)}
                  initial="hidden"
                  animate="show"
                  viewport={{ once: false, amount: 0.7 }} 
        className="text-2xl  mb-3 sm:mb-4 md:mb-6 text-center text-white">Built by leaders from</motion.h2>
      </div>
      <div className="relative w-full overflow-hidden ">
        <div className="flex animate-marquee">
          <ul className="flex items-center space-x-6 sm:space-x-16 md:space-x-20">
            {[...logos, ...logos].map((logo, index) => (
              <li key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={96}
                  height={96}
                  className="w-16 sm:w-20 md:w-24 h-auto object-contain rounded-full"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollBrand;
