import React from 'react'
import BTC from "../images/illustrations/tradingtools.png"
import SecondaryButton from '../components/button/SecondaryButton'
import ThridButton from "../components/button/ThridButton"

export default function TredingFooter() {
  return (
    <div className='bg-[#F4F9FF]'>
    <div className="container mx-auto flex items-center ">
    
        <div className='grid grid-cols-2 gap-16 mb-32'>
            <div className='mt-32'>
            <h2 class="font-bold text-3xl mb-6  ">
            Advanced Treding <span className="text-cyan-400">Tools</span>
          </h2>
          <p className="font-bold text-xl leading-normal mb-1">
            Profesionall acces, Non-stop Availability
          </p>
          <p className='text-base text-gray mb-6'>we provide premium acces to crypto trading for both individuals and institutions through hight liquidity, 
            reliable order execution and constant iptime
          </p>


          <p className="font-bold text-xl leading-normal mb-1">
            A Range of powerfull Apis
          </p>
          <p className='text-base text-gray mb-6'>set up your own treding interface or deploy your algorithmic
            starategy with our high performance fix and HTTP Apis connect to our WebSocket for real_time data streaming
          </p>


         
          <p className="font-bold text-xl leading-normal mb-1">
            Customer Support
          </p>
          <p className='text-base text-gray mb-12'>
            Premium 24/7 support avaliable to will customers workwide by phone of emaail dedicated around manager of partner 
          </p>
          <div className='w-auto flex items-centercursor-pointer'>  
                <SecondaryButton>
                    <p className='w-full text-center'>Get Started</p>
                </SecondaryButton>

                <ThridButton>
                    <p className='border-none w-full text-center'>Learn More</p>
                </ThridButton>
                </div>
             
            </div>  

            {/* button */}


            <div>
                <img className='w-full' src={BTC} alt="" />
            </div>
        </div>
    </div>
    </div>

    
  )
}
