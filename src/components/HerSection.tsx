'use client'
import React from 'react';
import {motion} from 'framer-motion'
import { fadIn } from '../../fadIn';
import { ArrowRight } from "lucide-react";
const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-[8rem]  text-white ">
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
      className="mt-4 text-3xl lg:text-6xl font-bold">
        Intelligent RCM agent 
      </motion.h1>
      <motion.p 
                variants={fadIn('up', 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
      className="mt-6 lg:text-lg text-gray-400 px-4 max-w-xl">
        Lunabill is building agent infrastructure for healthcare organizations to improve their financial health by automating back-office workflows at zero cost
      </motion.p>
      <motion.button          
      variants={fadIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }} 
      className="mt-8 px-6 lg:px-8 flex py-3 lg:py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-600">
          Get early access
          <ArrowRight className="ml-2" /> 
      </motion.button>
    </section>
  );
};

export default HeroSection;
