import React from 'react'

export default function HiringForm(props) {
  const {setPage} = props
  setPage('hire')
  return (
    <section className='about min-h-screen relative flex flex-col items-center bg-[radial-gradient(circle at 50% , #3F3F47, #18181B )]'> 
    <div className='noise-overlay'></div>
    </section>

  )
}
