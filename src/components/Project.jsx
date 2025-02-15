import React from 'react'

export default function Project(props) {

  const {title , desc , image , color , id , link} = props

  return (
    <section className='project hero bg-[#242428] border-1 border-[rgba(255,255,255,0.5)] w-fit p-2.5 rounded-xl'>
      <a target='black' href={link}
       id={id}
       className='project_card bg-zinc-800 border-1 border-[rgba(255,255,255,0.2)] transition duration-1000 flex flex-col gap-10 md:px-30 px-10 pt-5 rounded-xl' 
       onMouseMove={()=>{
        let project = document.getElementById(`${id}`)
        project.style.background= `${color}`
       }}
       onMouseLeave={()=>{
        let project = document.getElementById(`${id}`)
        project.style.background = '#27272A' 
       }}>
        <div className='project_header grid grid-cols-5 items-center'>
          <div className='project-heading flex flex-col gap-1 text-left col-span-4'>  
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <img src="../scroll-arrow.svg" className='rotate-270 sm:w-[40px] sm:h-[40px]' alt="" />
        </div>
        <img src={image} alt="" className=' project-png' />
      </a>
    </section>
  )
}
