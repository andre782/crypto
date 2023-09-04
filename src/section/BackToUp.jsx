import React from 'react'
import { BsArrowUp } from "react-icons/bs";



export default function BackToUp() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    


  return (
    <div className='container mx-auto flex justify-center'> 
      <button className='border border-[#DDDDDD] rounded-xl text-gray bg-[#FAFAFA] py-4 px-6 flex items-center'
        onClick={scrollToTop} >
        Back to Up <BsArrowUp className='ml-2' />
      </button>
    </div>
  )
}
