import React from 'react'
import Marquee from 'react-fast-marquee'
import { testimonials1, testimonials2 } from '../utils'

export default function Testimonials() {




  return (
    <section className='w-full flex flex-col gap-10'>
        <Marquee pauseOnHover={true} speed={100} gradient={true} gradientColor='#1E1E22' gradientWidth={150}>
            {testimonials1.map((option,optionIndex)=>{
                return(
                    <div key={optionIndex} className='testimonial'>
                        <img src={option.img} alt="" className='max-w-[200px] rounded-[50%]'/>
                        <div>
                            <h4>{option.name}</h4>
                            <p>{option.desc}</p>
                        </div>
                    </div>
                )
            })}
        </Marquee>
        <Marquee pauseOnHover={true}  direction='right' speed={100} gradient={true} gradientColor='#1E1E22' gradientWidth={150}>
        {testimonials2.map((option,optionIndex)=>{
                return(
                    <div key={optionIndex} className='testimonial'>
                        <img src={option.img} alt="" className='max-w-[200px] rounded-[50%]'/>
                        <div>
                            <h4>{option.name}</h4>
                            <p>{option.desc}</p>
                        </div>
                    </div>
                )
            })}
        </Marquee>
    </section>
  )
}
