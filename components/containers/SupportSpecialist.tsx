import React from 'react';

import flash from "../../public/lampara_pixar1-removebg-preview.png";
import table from "../../public/mesa2-sin-fondo.png";
 import monitor from "../../public/monitor1-sin-fondo.png";

import Image from 'next/image';

import { CiFaceSmile } from "react-icons/ci";
import { MdAddTask } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";


export const SupportSpecialist = () => {
  return (
    <div className='relative w-full flex flex-col bg-image'>
        <div className='mb-40 mt-14 text-center'>
            <h1 className='text-white mb-3'>Support Specialist IT</h1>
            {/* <h3 className="text-gray-300 text-lg">TI</h3> */}
        </div>

        <div className="absolute w-96 h-64 top-40 left-10 flex flex-col gap-6 text-center">
          {/* --- CARD --- */}
          <div className='flex gap-6'>
            <div className='relative bg-red-500 bg-opacity-40 p-6 flex flex-col items-center'>
            <CiFaceSmile size={80} />
            <h2 className='text-white mb-2'>CUSTOMER SERVICE</h2>
            <div className='absolute z-50 w-full h-full p-6 inset-0 bg-red-500 cursor-pointer bg-opacity-100 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-1000"'>
                  <p className='text-white'>Excellent customer service skills to understand user needs and provide timely, effective support.</p>
            </div>
          </div>
          {/* CARD */}
          <div className='relative bg-cyan-500 bg-opacity-40 p-6 flex flex-col items-center'>
            <MdAddTask size={80} />
            <h2 className='text-white'>PROBLEM SOLVING</h2>
            <div className='absolute z-50 w-full h-full p-6 inset-0 bg-cyan-500 cursor-pointer bg-opacity-100 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-1000"'>
                  <p className='text-white'>Strong problem-solving skills enable quick diagnosis and effective resolution of technical issues.</p>
            </div>
          </div>
          </div>
           <div className='relative bg-pink-500 bg-opacity-40 p-6 flex flex-col items-center'>
            <RiCustomerService2Fill size={80} />
            <h2 className='text-white'>COMMUNICATION</h2>
            <div className='absolute z-50 w-full h-full p-6 inset-0 bg-pink-500 cursor-pointer bg-opacity-100 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-1000"'>
                  <p className='text-white'>Strong communication skills to clearly explain technical information and collaborate with users and teams.</p>
            </div>
          </div>
        </div>

        <div className="w-100 flex justify-end align-bottom relative image-container">
            <div className="absolute -top-10 right-72">
              <Image width={200} height={280} src={monitor} alt="Flash" />
            </div>
              <div className="absolute -top-20 right-24">
             <Image width={200} height={280} src={flash} alt="Flash" />
             </div>

             <div>
              <Image width={680} height={380} src={table} alt="Table" />
             </div>
        </div>
    </div>
  )
}
