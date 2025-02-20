import React from 'react'

export default function WelcomePage() {
  return (
    <div className='welcome flex flex-col items-center justify-center px-10 h-screen'>
        <h1 className='overflow-hidden flex w-full'><i className='fa-solid fa-code'></i></h1>
        <h1 className='overflow-hidden Header my-10'>Hi. I'm Nishant.<br /> A<span className='sm:p-0 pr-3'></span> FrontEnd Developer.</h1>
        <h1 className='overflow-hidden flex flex-col w-full text-right'><i className='fa-solid fa-code'></i></h1>
        <p className='overflow-hidden my-10 heading'>Building seamless, interactive web applications with a focus on performance and user experience.</p>
        <img alt="scroll-indicator" loading="lazy" width="45" height="45" decoding="async" data-nimg="1" className="overflow-hidden animate-moveUpAndFade" src="../scroll-arrow.svg" ></img>
    </div>
  )
}
