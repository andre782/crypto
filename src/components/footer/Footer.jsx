import React from 'react'
import Logo from "../../images/logo.svg"
import PrimaryButton from '../button/PrimaryButton'
import { BsArrowRight } from 'react-icons/bs'

export default function Footer() {
  return (
    <div className='mt-32'>
      <div className="grid grid-cols-5 container">
          <img className='ml-32' src={Logo} alt="" />
          
        <div className="flex justify-center p-6">
          <ul className=''>
            <li className='mb-4'>
              <a className='text-black' href="/">Buy Crypto</a>
            </li>
            <li className='mb-4'>
              <a className='text-black' href="/">Exchanges</a>
            </li>
            <li className='mb-4'>
              <a className='text-black' href="/">Watchlist</a>
            </li>
            <li className='mb-4'>
              <a className='text-black' href="/">Portofolio</a>
            </li>
            <li className='mb-4'>
              <a className='text-black' href="/">NFT</a>
            </li>
          </ul>
        </div>

        {/*  */}
        <div className="flex justify-center p-6">
          <ul className=''>
            <li className='mb-4'>
              <a className='text-black' href="/">Products</a>
            </li>
            <li className='mb-4'>
              <a className='text-black' href="/">About us</a>
            </li>
            <li className='mb-4'>
              <a className='text-black' href="/">Carrers</a>
            </li>
            <li className='mb-4'>
              <a className='text-black' href="/">Blog</a>
            </li>
            <li className='mb-4'>
              <a className='text-black' href="/">Security</a>
            </li>
          </ul>
        </div>



          {/*  */}
          <div className="flex justify-center p-6">
          
          <ul className=''>
            <li className='mb-4'>
              <a className='text-black' href="/">Help Center</a>
            </li>
            <li className='mb-4'>
              <a className='text-black' href="/">Contact Us</a>
            </li>
            <li className='mb-4'>
              <a className='text-black' href="/">System Status</a>
            </li>
            <li className='mb-4'>
              <a className='text-black' href="/">Area of Avability</a>
            </li>
            <li className='mb-4'>
              <a className='text-black' href="/">Privacy policy</a>
            </li>
          </ul>
        </div>


        <div className="flex justify-center p-6">
          
          <ul className=''>
            <li className='mb-4'>
              <a className='text-black' href="/">News Letter</a>
            </li>
            <li className='mb-4'>
              <a className='text-gray text-sm' href="/">
                never miss nything Crypto where you on the go
              </a>
            </li>
              <div className='flex my-4'>
                <input type="email" className='border border-lightgray rounded-xl p-4' placeholder='enter your email'/>

                <div className="w-1 cursor-pointer">
                <PrimaryButton>
                <BsArrowRight className='text-white text-2xl items-center'/>
                </PrimaryButton>
                </div>
              </div>
          </ul>
        </div>


      </div>
            <div className="text-center">
      <p className="text-center mb-9 mt-3 text-xl">Copyright 2022 NEFA LLC. All rights reserved</p>
    </div>
    </div>
  )
}
