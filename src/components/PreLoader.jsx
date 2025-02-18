import React, { useState } from 'react'

export default function PreLoader() {
    const [showOverlay, setShowOverlay] = useState(false)

    setTimeout(()=>{
        setShowOverlay(true)
      },2000)

  return (
    <div>
        <div id='spinner' className='preLoader relative'>
            <div className='loading'></div>
            {showOverlay && (<div className='absolute overlay w-full h-full bg-[#18181B] p-10'></div>)}
        </div>
    </div>
  )
}
