import React, { useState } from 'react'

export default function Navbar(props) {
    const[showResume, setShowResume] = useState(false)
    const{page , setPage} = props

    

    function handleScroll(){
        let scroll = window.scrollY
        
        if(scroll>200){
            let navbar = document.getElementById('navbar')
            setShowResume(true)
            navbar.classList.add('resume')
        }
        if(scroll<200){
            let navbar = document.getElementById('navbar')
            setShowResume(false)
            navbar.classList.remove('resume')
        }
    }
    window.addEventListener('scroll', handleScroll)
    
  return (
    <section className='flex flex-col items-center justify-center px-10'>
        <div id='navbar' className='navbar flex gap-1 sm:gap-5 items-center justify-around p-4 my-5'>
           <a href="/#" className={(page==='hero')? 'bg-[rgba(255,255,255,0.1)]' :''}>Home</a>
            <a href="/#/about" className={(page==='about')? 'bg-[rgba(255,255,255,0.1)]' :''}>About</a>
            <a href="/#/hire" className={(page==='hire')? 'bg-[rgba(255,255,255,0.1)]' :''}>Hire Me</a>
            {showResume && (<div className='border-l-3 border-black h-full'></div>)}
            {showResume && (<a className='resumebtn bg-radial from-slate-600 from-60% to-white' target='black' href="../docs/resume.pdf">Resume</a>)}
            </div>
    </section>
  )
}
