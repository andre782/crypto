import React from 'react'

export default function ThridButton({ children, onClick, ...props }) {
  return (
    <div
     onClick={onclick} 
     className=' hover:bg-primary hover:text-white 
     rounded-full py-4 px-10 mx-2 transition-colors duration-300
     ' {...props}>
        {children}
    </div>
  )
}

