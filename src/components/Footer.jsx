import React from 'react'
import { socials } from '../utils'

export default function Footer(props) {

    const {setPage} = props

    let today = new Date()
    let hrs 
    let min = today.getMinutes()
    let timestamp
    if(today.getHours()>12){
        hrs = today.getHours()-12
        timestamp = "PM"
    }else{
        hrs = today.getHours()
        timestamp = "AM"}


  return (
    <section className='footer flex flex-col gap-5 p-10'>
        <div className='p-10 grid grid-cols-1 sm:grid-cols-2 gap-10 justify-around'>
            <div className='footer_paragraph flex flex-col gap-5 text-left'>
                <h3>Curious?</h3>
                <p>I'm always open to new opportunities, 
                    collaborations, and projects. Whether you 
                    have a project in mind or just want to say 
                    hello, feel free to reach out via mail or 
                    connect with me on any of my socials.
                </p>
                <div className='social_links grid grid-cols-4 w-fit gap-0 md:gap-10 items-center justify-center'>
                    {socials.map((option, optionIndex)=>{
                        return(
                        <a key={optionIndex} className='social_button hover:text-black' href={option.src}>
                            <abbr title={option.name}><i className={`${option.logo}`}></i></abbr>
                        </a>
                        )
                    })}
                </div>
            </div>
            <div className='footer_links flex flex-col gap-5 text-left sm:text-right'>
                <h3>[Navigation]</h3>
                <a href="/#/" onClick={()=>{setPage('hero')}} >Home</a>
                <a href="/#/about" onClick={()=>{setPage('about')}}>About</a>
                <a href="/#/hire" onClick={()=>{setPage('hire')}} >Hire Me</a>
            </div>
        </div>
        <div className='grid grid-cols-2 px-10 justify-arounds'>
            <h3 className='footer-heading text-left'><b>©</b> 2025
                Nishant Malik
            </h3>
            <div className='time_location text-right flex flex-col sm:justify-between gap-5'>
                <p>Local Time - <b>{hrs}:{min} {timestamp}</b> </p>
                <div className='flex items-center justify-between'>
                    <div></div>
                    <table className='w-fit'>
                        <tbody>
                            <tr>
                                <td rowSpan={3} className='globe'><i className='fa-solid fa-globe text-3xl'></i></td>
                            </tr>
                            <tr>
                                <td className='working'><b>Working Globally</b></td>
                            </tr>
                            <tr><td>Available for Work</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}
