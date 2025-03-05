import React, { useEffect, useRef, useState } from 'react'
import { achievements } from '../utils';
import Testimonials from './Testimonials';

export default function About(props) {
  window.scrollTo(0,0)
  const {setPage} = props
  let ScrollContainer = document.querySelector(".achievement-box")
  const [width, setWidth] = useState(0)
  const refContainer = useRef();

  useEffect(()=>{
    setPage('about')

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
          if(entry.isIntersecting){
              entry.target.classList.add('show');
          }
      });
  });
  
  const heroElements = document.querySelectorAll('.hero');
  heroElements.forEach((el)=> observer.observe(el));
  if (refContainer.current) {
    setWidth(refContainer.current.offsetWidth + 16)
}  
}, [])

  return (
    <section className='about flex flex-col items-center bg-[radial-gradient(circle at 50% , #3F3F47, #18181B )]'> 
      <div className='px-10 sm:mt-20 mt-20'>
        <h1 className='Header hero my-10 mb-20 sm:mb-15'>I'm Nishant.</h1> 
      </div>
      <div className='ME hero px-10 grid md:grid-cols-2 gap-5 sm:gap-10 md:gap-0 pb-10 sm:pb-30 items-center justify-center'>
        <div className=' flex flex-col sm:items-center justify-center'>
          <div className='img-box h-full px-2 pt-10 rounded-t-[45%] bg-slate-500 flex flex-col items-center justify-center'>
            <img src="../about/ME(1).png" alt=""className='max-w-[350px]' />
          </div>
        </div>
        <div className='intro hero flex flex-col md:gap-0 sm:gap-10 gap-5 items-center h-full justify-between'>
          <h3>I'm a self-taught Frontend Developer working globally, from India.</h3>
          <p>👋 Hi there! I'm a passionate extrovert who loves building things with code. I'm very curious about AI, Saas and cleaner UI! This is my personal space where I share my thoughts, projects and a bit about my journey.</p>
        </div>
      </div>
      <div className='w-full sm:py-15 py-10 filler'></div>
      <div className='summary relative bg-black w-full pb-30'>
        <div className='noise-overlay'></div>
        <div className='flex flex-col items-center justify-center gap-10 px-10'>
          <p className='hero'><b className='text-[5rem]'>M</b>y journey into tech started when I saw my seniors in school using HTML and motivated by that I started creating a basic website—only 
          to realize I had no idea what I was doing. That led me to Python in high school, which made me more interested towards computers. Then, 
          during the 2nd year of my college education, I switched gears to JavaScript, HTML, and CSS. I built my first project, a shopping website, 
          which actually worked—surprisingly!</p>
          <p className='hero'>I got hooked and moved on to React, though I spent way too much time watching tutorials 
          without actually building anything. But then I had a breakthrough: I built a workout generater that people actually used. 
          That was the moment I knew I was onto something.</p>
          <p className='hero'>From there, I built a few beginner-friendly projects, some of them were actually exciting. Along the way, I picked up some 
          freelance gigs, overall built more than 5 apps and eventually landed my first internship as a frontend developer.</p>
          <p className='hero'>These days, I'm building my own product and diving into backend development with Node.js, experimenting with Docker and firebase. 
          I believe that passion, curiosity, and plenty of coffee can take you further than a formal degree ever could.</p></div>
      </div>
      <div className='qualities relative px-10 pb-30 bg-gradient-to-b from-[#242429] to-[#18181B] flex flex-col gap-20 items-center justify-center'>
      <div className='noise-overlay'></div>
        <h2 className='hero'>I AM</h2>
        <div className='quality-cards  flex lg:flex-row flex-col gap-5 sm:px-20'>
          <div className='flex flex-col gap-5'>
            <div className='card hero relative flex flex-col gap-1 p-5'>
              <div className="bg-zinc-500 relative z-20 flex w-fit items-center justify-center rounded-full p-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search text-primary-900 xs:h-7 xs:w-7 h-6 w-6"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div>
              <img src="../boxes.png" alt="" className='absolute' />
              <h4>Curiosity-Driven</h4>
              <p>I'm always eager to explore new technologies and concepts. This curiosity has driven me to continuously learn and improve my skills, 
                turning challenges into opportunities for growth.</p>
            </div>
            <div className='card hero relative flex flex-col gap-1 p-5'>
              <img src="../boxes.png" alt="" className='absolute' />
              <div className="bg-zinc-500 relative z-20 flex w-fit items-center justify-center rounded-full p-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-primary-900 xs:h-7 xs:w-7 h-6 w-6"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg></div>
              <h4>Resilient</h4>
              <p>I don't give up easily. From getting stuck in “tutorial hell” to overcoming project roadblocks, I’ve learned to stay persistent and keep pushing forward, no matter the obstacles.</p>
            </div>
          </div>
          <div className='flex flex-col gap-5 md:mt-30'>
            <div className='card hero relative flex flex-col gap-1 p-5'>
            <img src="../boxes.png" alt="" className='absolute' />
              <div className="bg-zinc-500 relative z-20 flex w-fit items-center justify-center rounded-full p-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book text-primary-900 xs:h-7 xs:w-7 h-6 w-6"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg></div>
              <h4>Passionate Learner</h4>
              <p>Driven by a deep love for technology, constantly seeking to expand knowledge and skills, and always motivated to learn and grow in the ever-evolving tech landscape.</p>
            </div>
            <div className='card hero relative flex flex-col gap-1 p-5'>
              <img src="../boxes.png" alt="" className='absolute' />
              <div className="bg-zinc-500 relative z-20 flex w-fit items-center justify-center rounded-full p-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles text-primary-900 xs:h-7 xs:w-7 h-6 w-6"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg></div>
              <h4>Creative Thinker</h4>
              <p>Brings a unique perspective to problem-solving, thinking outside the box to develop innovative solutions that push boundaries and challenge conventional methods.</p>
            </div>
          </div>
        </div>

      </div>
      <div className='w-full relative px-10 sm:pb-30 bg-gradient-to-b from-[#18181B] to-[#242429] flex flex-col gap-20 items-center justify-center'>
        <div className='noise-overlay'></div>
        <h2 className='hero'>Achievements</h2>
        <div className='flex flex-col gap-10 achievements relative'>
          <div ref={refContainer} className='sm:mx-10 achievement-box '>
            {achievements.map((option, optionIndex)=>{
              return(
                  <a key={optionIndex} target='black' href={option.link} className='hero text-center px-10 flex flex-col gap-5 p-5 items-center justify-center achievement-card '>
                  <h4>{option.name}</h4>
                  <img src={option.img} alt=""/>
                  <p>{option.desc}</p>
                </a>
              )
            })}
            </div>
            <button className='absolute top-60 bg-white rounded-[50%] w-15 ' onClick={()=>{
                      ScrollContainer.style.scrollBehavior = "smooth"
                      ScrollContainer.scrollLeft -= width
                  }}><img src="../left-arrow.png" alt="" /></button>
            <button className='absolute right-0 top-60 bg-white rounded-[50%] w-15' onClick={()=>{
                      ScrollContainer.style.scrollBehavior = "smooth"
                      ScrollContainer.scrollLeft += width
                  }} ><img src="../right-arrow.png" alt="" /></button>
        </div>
      </div>
      <div className='relative flex flex-col items-center justify-center w-full sm:pb-30 bg-gradient-to-t from-[#18181B] to-[#242429] '>
        <div className='noise-overlay'></div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='hero'>Testimonials</h2>
          <p>What 'People' say about me.</p>
        </div>
        <Testimonials/>
      </div>
    </section>
  )
}
