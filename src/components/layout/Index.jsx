import React from 'react'
import Navbar from '../navbar/Navbar'

export default function Index({children}) {
  return (
    <div>
        <div className="mx-auto">
          <Navbar/>
            {children}
        </div>
    </div>
  )
}
