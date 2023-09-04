import React from 'react'
// sponsor
import Patner1 from "../images/partners/partner1.png"
import Patner2 from "../images/partners/partner2.png"
import Patner3 from "../images/partners/partner3.png"
import Patner4 from "../images/partners/partner4.png"


const PatnerSection = () => {
  return (
      <div className='px-6 '>
        <div className="rounded-3xl bg-[#F4F9FF] py-20">
        <div className="container mx-auto ">
            <div className="text-center">
                <h2 className='text-3xl font-bold mb-4'>Patner terpercaya di dunia</h2>
                <p className='text-gray'>kami berpatner bersma counliess major organisasi di setiap negara</p>
            </div>
            <div className="">
                <div className="flex justify-center gap-6">
                    <img src={Patner1} alt="" />
                    <img src={Patner2} alt="" />
                    <img src={Patner3} alt="" />
                    <img src={Patner4} alt=""/>
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default PatnerSection