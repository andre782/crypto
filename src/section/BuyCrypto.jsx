import React from 'react'
import SignUp from "../images/illustrations/signup.png"
import Wallet from "../images/illustrations/wallet.png"
import Okay from "../images/illustrations/okay.png"
import Arrow from "../images/arrow.svg"

export default function BuyCrypto() {
  return (
    <div className='bg-[#F4F9FF]  flex flex-col center py-20'>
    <p className='font-bold text-center text-3xl mt-12'>Get Started in just a few minutes</p>
    <div className='container mx-auto grid grid-cols-3 items-center mt-16 gap-44 relative'>
    <div className='relative'>
        <img className='mx-auto' src={SignUp} alt="" />
        <p className='text-sm mt-5 leading-relaxed text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis omnis voluptatibus, 
            explicabo earum tempora dolorum accusamus </p>
    </div>

    <img src={Arrow} alt="" className='absolute left-1/3 transform -translate-x-1/2 mb-12 w-56' />

    <div className='relative'>
        <img className='mx-auto' src={Wallet} alt="" />
        <p className='text-sm mt-5 leading-relaxed text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis omnis voluptatibus, 
            explicabo earum tempora dolorum accusamus </p>
    </div>


    <div className='relative'>
        <img className='mx-auto' src={Okay} alt="" />
        <p className='text-sm mt-5 leading-relaxed text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis omnis voluptatibus, 
            explicabo earum tempora dolorum accusamus </p>
    </div>

    <img src={Arrow} alt="" className='absolute left-2/3 transform -translate-x-1/2 mb-12 w-56' />
</div>
    </div>
  )
}
