'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadIn } from '../../fadIn';
const Cards: React.FC = () => {
  return (
    <section className="lg:flex  md:flex-row bg-black text-white p-8 md:p-16 mt-[10rem]">
      <div className="lg:md:w-1/2 px-3 lg:px-12">
        <h2 className="text-sm font-medium tracking-widest mb-4">OUR MISSION</h2>
        <motion.h1 
                  variants={fadIn('up', 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
        className="text-2xl md:text-6xl font-bold leading-tight mb-6">
          Bringing accuracy<br /> and speed<br /> <span className='text-gray-600'>to healthcare reimbursements</span>
        </motion.h1>
      </div>
      {/* Right Side */}
      <div className="lg:md:w-1/2 text-md lg:text-lg space-y-4 px-3 lg:px-40">
        <motion.p
                  variants={fadIn('up', 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
        >
          US healthcare processes over 5 billion claims annually. The current system is highly inefficient, manual and error prone costing US healthcare organizations	 hundreds of billions of dollars annually in lost revenue.
          </motion.p>
        <motion.p
                  variants={fadIn('up', 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}>
          
          We need a highly efficient system.</motion.p>
        <motion.p
                  variants={fadIn('up', 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
        >That is why we are pioneering agent infrastructure for healthcare  reimbursements <span className="text-orange-500">speed</span>, <span className="text-orange-500">accuracy</span>, and <span className="text-orange-500">transparency</span> built-in.</motion.p>
      </div>
    </section>
  );
};

export default Cards;
