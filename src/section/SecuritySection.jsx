import React from 'react'
import Banks from "../images/illustrations/banks.png"
import verified from "../images/partners/verif.png"


export default function SecuritySection() {
  return (
    <div className="container mx-auto h-screen  flex items-center">
        <div className="grid grid-cols-2 gap-16">
            <div className='mb-auto'>
                <img  src={Banks} alt="" />
            </div>

            <div>
            <h2 class="font-bold text-3xl mb-6 leading-normal mt-36">
                Indusrty-Leading security from <br/> day one
            </h2>
                <p className='flex items center text-base font-bold mb-1'>
                    <span className='mr-2'>
                        <img className='w-4 h-4 mt-1' src={verified} alt="" />
                    </span>
                    Safety Security and compSance
                </p> 
                <p className='text-sm text-gray mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint earum aliquid odit quos perferendis 
                pariatur nisi neque inventore deleniti reprehenderit, </p>

               

                <p className='flex items center text-base font-bold mb-1'>
                    <span className='mr-2'>
                        <img className='w-4 h-4 mt-1' src={verified} alt="" />
                    </span>
                   Hardware Security Keys
                </p>  
                <p className='text-sm text-gray mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint earum aliquid odit quos perferendis pariatur nisi neque 
                inventore deleniti reprehenderit,</p>



                <p className='flex items center text-base font-bold mb-1'>
                    <span className='mr-2'>
                        <img className='w-4 h-4 mt-1' src={verified} alt="" />
                    </span>
                    SOC certification
                </p>  
                <p className='text-sm text-gray'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint earum aliquid odit quos perferendis pariatur nisi neque 
                inventore deleniti reprehenderit,</p>
            </div>
        </div>
    </div>
  )
}
