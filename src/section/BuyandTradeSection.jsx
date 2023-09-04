import React from 'react'
import BuyIcon from "../images/illustrations/buy.png"
import SecondaryButton from "../components/button/SecondaryButton"
import Coin from "../images/crypto/Bitcoin.png"
import Flag from "../images/crypto/pngwing.com (3).png"
import {BsChevronDoubleDown} from  "react-icons/bs";


export default function BuyandTradeSection() {
  return (
    <div className='container mx-auto h-screen flex items-center'>
        <div className="grid grid-cols-2 gap-10">
            <div className='max-w-lg'>
                <h2 className='font-bold text-4xl mb-4 leading-normal'>
                    Beli & trade on <br/> the original crypto exchange.
                </h2>
                <p className='text-gray mb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Perferendis unde quo aspernatur voluptate fugiat placeat , incidunt minima rem ut consequuntur 
                </p>

                <div className='flex justify-between gap-3 mb-10 mt-10 pr-24'>
                    <div className='border border-primary rounded-2xl py-4 px-4 flex items-center'>
                        <div className="border-r border-primary pr-6">
                        <small className='text-primary text-sm p-1'>Amount</small>
                    </div>
                        <input type='text' value="5.000" className='text-right outline-none '/>
                    </div>
                    <div className='border border-primary rounded-2xl py-4 px-6 flex items-center'>
                        <img src={Flag} alt="" className="inline mr-2 w-5" />
                        <span>USD</span>
                        <BsChevronDoubleDown className='ml-2 cursor-pointer w-4 h-4'/>
                    </div>
                </div>

                <div className='flex justify-between gap-3 mb-10 -mt-5 pr-24'>
                    <div className='border border-primary rounded-2xl py-4 px-4 flex items-center'>
                        <div className="border-r border-primary pr-6">
                        <small className='text-primary text-sm p-5'>Get</small>
                    </div>
                        <input type='text' value="0.10901" className='text-right outline-none '/>
                    </div>
                    <div className='border border-primary rounded-2xl py-4 px-6 flex items-center'>
                        <img src={Coin} alt="" className="inline mr-2 w-5" />
                        <span>BTC</span>
                        <BsChevronDoubleDown className='ml-2 cursor-pointer w-4 h-4'/>
                    </div>
                </div>

                <div className='w-72 flex items-center cursor-pointer'>  
                <SecondaryButton>
                    <p className='w-full text-center'>Beli sekarang</p>
                </SecondaryButton>
                </div>
            </div>
            <div>
                <img src={BuyIcon} alt="" />
            </div>
        </div>
    </div>
  )
}
