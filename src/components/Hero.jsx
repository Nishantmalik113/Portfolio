import React, { useEffect, useRef, useState } from 'react'
import Socials from './Socials'
import WelcomePage from './WelcomePage'
import { tech_stack } from '../utils'
import Project from './Project'

export default function Hero() {
  let ScrollContainer = document.querySelector(".project-cards ")
  const [width, setWidth] = useState(0)
  const refContainer = useRef();
  useEffect(() => {
      if (refContainer.current) {
          setWidth(refContainer.current.offsetWidth + 16)
      }
  }, []);
  return (
    <section  className='px-10 flex flex-col gap-5 sm:gap-30 items-center justify-center bg-[radial-gradient(circle_at_50%_0,#3F3F47,_#18181B_20%)]'>
        <WelcomePage/>
        <div className='absolute top-[110vh] md:top-[90vh] left-[10vh] md:left-[20vh] z-20 bg-gradient-to-bl'><img alt="square" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" src="../square.svg" /></div>
        <div className='absolute top-[130vh] md:top-[110vh] left-0 z-20 bg-gradient-to-bl'><img alt="square" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" src="../square.svg" /></div>
        <div className='absolute rotate-270 top-[110vh] md:top-[90vh] right-[10vh] md:right-[20vh] z-20 bg-gradient-to-bl'><img alt="square" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" src="../square.svg" /></div>
        <div className='absolute rotate-270 top-[130vh] md:top-[110vh] right-0 z-20 bg-gradient-to-bl'><img alt="square" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" src="../square.svg" /></div>
        <div className='Current_Stack flex flex-col gap-10 items-center jutify-center'>
            <h2 className='heading'>Current Stack</h2>
            <p>A small list of cool things I use to construct my projects.</p>
            <div className='tech_stack grid grid-cols-2 sm:grid-cols-3'>
                {tech_stack.map((option, optionIndex)=>{
                  return(
                    <div key={optionIndex} id={optionIndex} className='element flex flex-col items-center justify-center' >
                      <b className='text-primary-200 inset-x-0 h-full whitespace-pre-wrap break-words text-xs' >BT775aOjchJstxjozQakMimQtuWyS9LHX111tjLQf1XVJSlOt2Dh1NZ5mID6zLXWrpcaX0OKpl6Pu2Cqfj7Tpg2LT3oBYGW675b1yZscVsYLCkUynrIdnMEy0TNpckLssRR2wRvkUmneke7TghPBq1pIK9mNYOw8qgKl51TQHbcMB6II1b8NEon8LcopSzcYGLhK0cI39xyvbqzqcC7mrNoNRvCPIqa6J5ukJp5rNkWbxnCkKIZFPJr3VYdTEBigxK8oDZzH6KI2swWjYecqcw0i8l7T28QJFKWmUN5fgLUytAN3kW4e9VOvlCRgmq1N4BgY8m55gB42P6HRp7dVG1YysYvazkh0S0IFPshWJdJshd5SEh01AqfXbfl3xmvw6zbngSnmsVJpJf0SBqjp60erg6IVCKhfIcSl7ikitPo1Vh0ZjD1oIumjPMhlZu8u9ifKU9kUYyCqhdxSn0BVX6RHoKTS6YYNm6jIhBFdrEq1AQ2cnNrMCjyAEDAed1fMBsRppL1UtEBjDhCy9iVF5z4gzdl7PoFbaPPVhUDIPeyJlBHpSM5s6r0VaVnuQexMkMNqWPzolkrMlnTbkFRpBvSkXPSUSm2wRB2EKAFmLMy1Ja3rwBHQoxFkYZ7NkCb9VYKmKyJfnQHBYrfIT9UKRYwDgbLQcPJlTWUxQU6F00lQbGJf7nFDTumiOMmil2VsJdHujnbqGDHoWf4RRWlaIefqsyg8ZgW1Gv8RhnXKZ0AZK6SDabAhK3oMPxPBfZ6rYb7ZgbrUDscf8lNsM1l1c1nQ08ttn1jsGiBxsa63q9WvYF2lBJ1R7n4uq06YedU9F1YwFp1VbQHFbtHfTI3mZRKATfWybo53zkXRcQ1lMp8wYuDdQAwhHKiaYu1R0KtH5ILJ2DLFDKlqnYvLoBAH1FxtbQMEZszZuODYPs6JgdrRzN5UQO6MVeJoWyDGjeNrWr5werUBZPPliiO3IHlqEWBHOBQ8oFqiAbzr5oIz6wR2CKYfFT9RzvxQDPyzLmba7NtQsJ3twSgPPp3sRjGAKQRHdNV2a0HksMfxyHHlmFCzTVTi7ODEMAHHk3XRvl277NyHpLAEVXaOvOEc2cJQWDDL5kqnomh56vWVAP52mSKC5018RdUVwNAMNO2wGk2S2mNf58ZXVpOjpHutSIx5OshCTIw14DWQmQWFe4R8fbFVfb5lxbmIW1RFbtXgTA5qL3lKHOzhalNrZKQkxnKz9UJLKmGHFXdExpf21g7NuxDIUF6oUy5A34DAPjqS7KiHB7K95HmBkjgeR9SxVkg9tgZ01zzJ6R562fZpx8oCjYXYfP3G0gOWGbdhXcYrU9pum1UdHBvKXAsMJrClEt1h7Ro320XtauyuzZ9GcPqKxVzRzZfC8IyDeyZpAX4LV5FtOrt3GT0UlvsbzAnjOVIuDkvdULGfmS60M5U27Ip4tNY8i8cL2xJfHGlB7qL6XcQGzQcAGi8HRICNfbINIVTG0qeJemwJ</b>
                        <div className='element-box w-[30vw] h-[15vh] sm:w-[25vw] sm:h-[25vh] absolute flex flex-col items-center justify-center' 
                        onMouseMove={()=>{
                    let stackElement = document.getElementById(optionIndex)
                    stackElement.style = `background: linear-gradient(to top , black , ${option.color})`
                  }} onMouseLeave={()=>{
                    let stackElement = document.getElementById(optionIndex)
                    stackElement.style = `background: transparent`
                  }} >
                          <img src={option.logo} alt=""/>
                          <p>{option.name}</p>
                        </div>
                    </div>
                  )
                })}
            </div>
        </div>
        <div className='Work flex flex-col items-center justify-center gap-10'>
          <h2 className='heading'>Recent projects</h2>
            <div className='project-cards flex flex-col gap-20 px-1'>
            <Project id={'project-card2'} image={'../projects/vision.png'} link={'https://vision-scribe.netlify.app/'} title={'VisionScribe'} color={'radial-gradient(circle at 50% 0%, rgba(225, 29, 218, 0.69), rgb(26, 26, 26))'}/>
            <Project id={'project-card1'} image={'../projects/coffee.png'} link={'https://caffiend-nishant.netlify.app/'} title={'Caffiend'} color={'radial-gradient(circle at 50% 0%, rgba(165, 106, 106, 0.99), rgb(26, 26, 26))'}/>
            <Project id={'project-card3'} image={'../projects/forte.png'} link={'https://forte-workout-planner.netlify.app/'} title={'Forte'} color={'radial-gradient(circle at 50% 0%, rgba(236, 125, 46, 0.69), rgb(26, 26, 26))'}/>
            </div>
        </div>
        <div className='flex flex flex-col gap-10 items-center justify-center'>
        <h2 className='heading'>In Progress</h2>
        <p>Work in various stages of completion, from concept to production.</p>
        <div className='ongoing-project'>
          <Project id={'project-card4'} image={'../projects/maya.png'} title={'MayaNagri'} color={'radial-gradient(circle at 50% 0%, rgba(156, 106, 165, 0.69), rgb(26, 26, 26))'}/>
        </div>
        </div>
    </section>
  )
}
