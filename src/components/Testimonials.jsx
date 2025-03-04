import React from 'react'
import Marquee from 'react-fast-marquee'
import { testimonials1, testimonials2 } from '../utils'

export default function Testimonials() {




  return (
    <section className='w-full flex flex-col items-center py-5'>
        <p className='hold-text'>Hold down to view</p>
        <Marquee pauseOnClick={true} speed={100} gradient={true} gradientColor='#1E1E22' gradientWidth={150} className='py-10'>
            {testimonials1.map((option,optionIndex)=>{
                return(
                    <div key={optionIndex} className='testimonial'>
                        <div className='grid grid-cols-3 sm:gap-0 gap-10 items-center'>
                            <img src={option.img} alt="" className='sm:max-w-[100px] max-w-[80px] rounded-[50%]'/>
                            <div className='flex flex-col col-span-2'>
                                <h4>{option.name}</h4>
                                <p>{option.post}</p>
                            </div>
                            
                        </div>
                        <p>{option.desc}</p>
                    </div>
                )
            })}
        </Marquee>
        <Marquee pauseOnClick={true}  direction='right' speed={100} gradient={true} gradientColor='#1E1E22' gradientWidth={150}>
        {testimonials2.map((option,optionIndex)=>{
            return(
                <div key={optionIndex} className='testimonial'>
                    <div className='grid grid-cols-3 sm:gap-0 gap-10 items-center'>
                        <img src={option.img} alt="" className='sm:max-w-[100px] max-w-[80px] rounded-[50%]'/>
                        <div className='flex flex-col col-span-2'>
                            <h4>{option.name}</h4>
                            <p>{option.post}</p>
                        </div>
                        
                    </div>
                    <p>{option.desc}</p>
                </div>
            )
            })}
        </Marquee>
    </section>
  )
}
