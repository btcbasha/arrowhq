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
        className="bg-black text-white py-[2rem] lg:py-[8rem] px-6  lg:px-12 flex flex-col sm:flex-row justify-between lg:items-center border-b"
      >
        <h1 className="text-2xl  lg:text-5xl font-bold mb-6 sm:mb-0">
          Join the future of<br />healthcare <span className='text-gray-500'> Reimbursements.</span>      
             </h1>
        <div className="flex lg:flex-col items-center ">
          <span className="text-orange-500 text-sm mb-2 font-bold hidden lg:block">GET STARTED</span>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 mt-4 sm:mt-0">
            Get early access
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MessageBanner;
