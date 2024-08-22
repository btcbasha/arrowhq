'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { fadIn } from '../../fadIn';

function CardSection() {
  return (
    <div className="bg-white">
      <div className="flex flex-row mx-[8rem] h-screen text-black pt-[8rem]">
        {/* Left Side */}
        <motion.div 
          variants={fadIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-1/2"
        >
          <span className="text-red-500">FOR PROVIDERS</span>
          <div className="text-5xl font-medium mt-[2rem]">
            Claims Acceleration. <br />
            <span className="text-slate-500">Lightning fast payments.</span>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Error Detection.</h3>
                  <p className="text-gray-500 text-sm">
                    Catch errors in claims before submission to prevent downstream denials.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Predictive Analytics.</h3>
                  <p className="text-gray-500 text-sm">
                    Understand how much each claim will be paid and when prior to submission.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Claim Status.</h3>
                  <p className="text-gray-500 text-sm">
                    Get fully detailed, real-time claim status updates and alerts direct from payers.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Denial Management.</h3>
                  <p className="text-gray-500 text-sm">
                    Get instant alerts for denied claims and understand the root cause to fix with one click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Right Side */}
        <div 
          className="w-1/2 mx-[2rem] ml-[8rem] rounded-xl mb-[2rem]" 
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

      {/* Second Card */}
      <div className="flex flex-row mx-[8rem] h-screen text-black pt-[8rem]">
        <div 
          className="w-1/2 mx-[2rem] rounded-xl mb-[2rem]"  
          style={{ backgroundImage: `url('https://framerusercontent.com/images/UjqUIiBHmIcSH9vos9HlG2BF4bo.png?scale-down-to=2048')` }}
        >
          <motion.img
            variants={fadIn('left', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }} 
            className='pl-[4rem] py-[6rem]' 
            src="https://framerusercontent.com/images/REZFw63VHfQH4F5LYo4XSJyEmnE.jpg?scale-down-to=1024" 
            alt="" 
          />
        </div>
        {/* Left Side */}
        <motion.div variants={fadIn('left', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}  
        className="w-1/2 ml-[8rem]">
          <span className="text-red-500">FOR PROVIDERS</span>
          <div className="text-5xl font-medium mt-[2rem]">
            Claims Acceleration. <br />
            <span className="text-slate-500">Lightning fast payments.</span>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Error Detection.</h3>
                  <p className="text-gray-500 text-sm">
                    Catch errors in claims before submission to prevent downstream denials.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Predictive Analytics.</h3>
                  <p className="text-gray-500 text-sm">
                    Understand how much each claim will be paid and when prior to submission.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Claim Status.</h3>
                  <p className="text-gray-500 text-sm">
                    Get fully detailed, real-time claim status updates and alerts direct from payers.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4 border-l-2">
                <div className="ml-4">
                  <h3 className="font-semibold">Denial Management.</h3>
                  <p className="text-gray-500 text-sm">
                    Get instant alerts for denied claims and understand the root cause to fix with one click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CardSection;
