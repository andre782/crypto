import React from 'react'
import "./style.css"
import GlobalCrypto from "../images/illustrations/globe.png"
import PrimaryButton from '../components/button/PrimaryButton'
import SecondaryButton from '../components/button/SecondaryButton'
import { FaAngleDoubleDown } from "react-icons/fa";



export default function HeroSection() {
  
  return (
    <div>
        <section className='bg-primary bg-opacity-5'>
        <div className="container mx-auto  grid grid-cols-2">
          <div className='flex items-center'>
            <div>
                <p className='text-primary'>MASUK HARI INI </p>
                <h1 className='text-5xl font-bold leading-normal mt-3'>Gk ngerti  </h1>
                <h1 className='text-blue text-5xl font-bold leading-normal'>gua mau di</h1>
                <h1 className='text-5xl font-bold leading-normal'>isi apa disini</h1>
                <p className='text-gray mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel voluptatum doloribus! Libero cupiditate possimus non at, totam, distinctio, </p>
                <div className="flex mt-4">
                    <PrimaryButton>
                        Gaskeun Lurde
                    </PrimaryButton>
                    <SecondaryButton >
                        Download App <FaAngleDoubleDown className='inline ml-2'/>
                      </SecondaryButton>
                </div>
            </div>
          </div>
          <div>
            <img src={GlobalCrypto} alt="Globe" className='mb-28'/>
          </div>
        </div>
      </section>
    </div>
  )
}
