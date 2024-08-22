'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadIn } from '../../fadIn';

const MessageBanner = () => {
  return (
    <div>
      <motion.div 
        variants={fadIn('up', 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} 
        className="bg-black text-white py-[8rem] px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center border-b"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-0">
          Join the future of<br />healthcare payments.
        </h1>
        <div className="flex flex-col items-center ">
          <span className="text-orange-500 text-sm mb-2">GET STARTED</span>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300 mt-4 sm:mt-0">
            Get early access
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MessageBanner;
