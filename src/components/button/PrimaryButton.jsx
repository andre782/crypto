import React from 'react'

export default function PrimaryButton({ children, onClick, ...props }) {
  return (
    <div onClick={onclick} className='bg-primary text-white rounded-full py-4 px-10 mx-2' {...props}>
        {children}
    </div>
  )
}
