'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadIn } from '../../fadIn';
const Cards: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row bg-black text-white p-8 md:p-16 mt-[10rem]">
      <div className="md:w-1/2 px-12">
        <h2 className="text-sm font-medium tracking-widest mb-4">OUR MISSION</h2>
        <motion.h1 
                  variants={fadIn('up', 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
        className="text-8xl md:text-6xl font-bold leading-tight mb-6">
          Bringing speed <br /> and transparency <br /> <span className='text-gray-600'>to healthcare payments</span>
        </motion.h1>
      </div>
      {/* Right Side */}
      <div className="md:w-1/2 text-lg space-y-4 px-40">
        <motion.p
                  variants={fadIn('up', 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
        >
          Healthcare is broken. Especially paying for it. The current system is slow, messy, and a terrible experience for patients, providers, and health plans.</motion.p>
        <motion.p
                  variants={fadIn('up', 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}>
          
          We deserve better.</motion.p>
        <motion.p
                  variants={fadIn('up', 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
        >That's why we're building a new era of healthcare payments with <span className="text-orange-500">speed</span>, <span className="text-orange-500">accuracy</span>, and <span className="text-orange-500">transparency</span> built-in.</motion.p>
      </div>
    </section>
  );
};

export default Cards;
