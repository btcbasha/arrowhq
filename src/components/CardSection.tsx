'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadIn } from '../../fadIn';

function CardSection() {
  return (
    <div className="bg-white py-[2rem] lg:py-[5rem]">
      <div className="lg:flex lg:flex-row mx-4 lg:mx-[8rem] h-auto lg:h-screen text-black pt-6 lg:pt-[4rem]">
        {/* Left Side */}
        <motion.div 
          variants={fadIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/2"
        >
          <span className="text-red-500">FOR PROVIDERS</span>
          <div className="text-2xl lg:text-5xl font-medium mt-[2rem]">
          Speed Up<br />
            <span className="text-slate-500">Reimbursements </span>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">EHR Integrations.</h3>
                  <p className="text-gray-500 text-sm">
                  Get connected with any EHR to allow for real-time exchange of medical documentation.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Automated Coding.</h3>
                  <p className="text-gray-500 text-sm">
                  AI powered autonomous coding with zero human touch.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Billing automation.</h3>
                  <p className="text-gray-500 text-sm">
                  Automate entire billing process from claim generation to tracking payment statuses.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Denial Management.</h3>
                  <p className="text-gray-500 text-sm">
                  Get realtime updates on denied claims and one touch automated fix.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Payment.</h3>
                  <p className="text-gray-500 text-sm">
                  Use our Virtual Credit Card for fast, secure reimbursement. 
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Clearinghouse.</h3>
                  <p className="text-gray-500 text-sm">
                  Realtime prior authorization and claim status updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Right Side */}
        <div 
          className="lg:w-1/2 mx-4 lg:mx-[2rem] lg:ml-[8rem] rounded-xl mb-[2rem]  mt-[4rem]" 
          style={{ backgroundImage: `url('https://framerusercontent.com/images/gjJtdB6srl6aeMqqtQoknoy4WuU.png')` }}
        >
          <motion.img         
           variants={fadIn('left', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }} 
            className='pl-[4rem] py-[6rem]' 
            src="https://framerusercontent.com/images/REZFw63VHfQH4F5LYo4XSJyEmnE.jpg?scale-down-to=1024" 
            alt="" 
          />
        </div>
      </div>

    </div>
  );
}

export default CardSection;
