import React from 'react'
import { NavLink } from 'react-router-dom'



// icon
import { IoIosPlayCircle, IoMdArrowRoundForward } from 'react-icons/io'
import { FaRegRegistered } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div>
      <footer className=''>
        {/* Top */}

        {/* Bottom */}
        <div className='py-7 font-semibold'>
          {/* Redirection Links */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center justify-items-center'>
            <div className='flex-col p-5'>
              <div className='text-3xl '>About</div>
              <div className='text-xl mt-4 self-start'>
                <p>History</p>
                <p>Awards</p>
                <p>Careers</p>
                <p>News</p>
              </div>
            </div>
            <div className='flex flex-col p-5'>
              <div className='text-3xl'>Inspire</div>
              <div className='text-xl mt-4'>
                <p>Innovate</p>
                <p>Research</p>
                <p>Events</p>              
              </div>
            </div>
            <div className='flex flex-col items-center p-5'>
              <div className='text-3xl'>Popular</div>
              <div className='text-xl mt-4'>
                <p> <NavLink className='flex items-center justify-center' to={'/product'}>BCM 95<FaRegRegistered className='ml-1' /> </NavLink> </p>
                <p> <NavLink className='flex items-center justify-center' to={'/product'}>SHODEN<FaRegRegistered className='ml-1' /> </NavLink> </p>
                <p> <NavLink className='flex items-center justify-center' to={'/product'}>OXYSTORM<FaRegRegistered className='ml-1' /> </NavLink> </p>
                <p> <NavLink className='flex items-center justify-center' to={'/product'}>View All <IoMdArrowRoundForward className='ml-2'/> </NavLink> </p>
              </div>
            </div>
            <div className='flex flex-col p-5'>
              <div className='text-3xl'>Help</div>
              <div className='text-xl mt-4'>
                <p>Service</p>
                <p>FAQ&apos;s</p>
                <p>Collaborate</p>
              </div>
            </div>
            <div className='flex flex-col p-5'>
              <div className='text-3xl'>Contact</div>
              <div className='text-xl mt-4'>
                <p>Get In Touch</p>
                <p>Global Offices</p>
              </div>
            </div>
          </div>
          {/* Copyrights Section */}
          <div className='flex flex-col sm:flex-row items-center text-center mt-7 justify-center border-t-2 p-2 border-[#290c06]'>
            <div className='w-full sm:w-1/3 text-3xl flex items-center justify-center'>
              <div>FLORAEXTRACTS</div>
              <div className='self-start'><FaRegRegistered size={20} /></div>
            </div>
            <div className='w-full sm:w-2/3 text-xl mt-4 sm:mt-0'>Flora Extracts | Copyright@2024 | All rights reserved</div>
            <div className='w-full sm:w-1/3 text-3xl mt-4 sm:mt-0'>Join Us</div>
          </div>
        </div>
      </footer> 
    </div>
  )
}
