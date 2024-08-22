'use client'
import React from 'react';
import {motion} from 'framer-motion'
import { fadIn } from '../../fadIn';
const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-[8rem] bg-black text-white">
      <motion.div          
           variants={fadIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }} 
      className="mt-10 text-sm text-gray-400">
        Announcing our $110M fundraise. <a href="#" className="underline">Read more →</a>
      </motion.div>
      <motion.h1          
      variants={fadIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }} 
      className="mt-4 text-6xl font-bold">
        Accelerating healthcare <br /> payments
      </motion.h1>
      <motion.p 
                variants={fadIn('up', 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
      className="mt-6 text-lg text-gray-400 max-w-lg">
        Arrow enables fast and accurate healthcare payments for both healthcare providers and health plans
      </motion.p>
      <motion.button          
      variants={fadIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }} 
      className="mt-8 px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700">
        Get early access
      </motion.button>
    </section>
  );
};

export default HeroSection;
