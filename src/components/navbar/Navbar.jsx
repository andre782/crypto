import React from 'react'
import Logo from "../../images/logo.svg"
import PrimaryButton from "../button/PrimaryButton"
import SecondaryButton from '../button/SecondaryButton'
import { BsChevronDoubleDown } from "react-icons/bs";


export default function Navbar() {
  return (
    <nav className="bg-primary bg-opacity-5">
    <div className='sticky container mx-auto top-0 py-8 flex justify-between items-center'>
        <div className="flex items-center">
          <img src={Logo} className='mr-9' alt="" />
          <div className='flex'>
            <a href="/" className='mx-7 hover:text-primary'>Cryptocurenccy</a>
            <a href="/" className='mx-7 hover:text-primary'>Exchanges</a>
            <a href="/" className='mx-7 hover:text-primary'>watchlist</a>
            <a href="/" className='mx-7 hover:text-primary'>NFT</a>
            <a href="/" className='mx-7 hover:text-primary'>Portofiolio</a>
            <a href="/" className='mx-7 hover:text-primary'>
              Product<BsChevronDoubleDown className='inline ml-2'/>
            </a>
          </div>
        </div>

        
          

          <div className='flex'>
            <SecondaryButton>
              Sign In
            </SecondaryButton>
            <PrimaryButton>
              Sign Up
            </PrimaryButton>

          </div>
    </div>
    </nav>
  )
}
