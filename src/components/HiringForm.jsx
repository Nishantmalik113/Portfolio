import React, { useEffect, useState } from 'react'
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import toast, { Toaster } from 'react-hot-toast'

export default function HiringForm(props) {
  window.scrollTo(0,0)
  const {setPage} = props

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSumbitting, setIsSumbmitting] = useState(false)

  async function handleSubmit(){
    if(!name || !email || !email.includes('@') || !message){
      return
    }
    
    try{
      setIsSumbmitting(true)
      const userRef = doc(db , 'contacts', email)
        const res = await setDoc(userRef,{
          email: email,
          name: name,
          message: message
          
        },{ merge: true })
        setName('')
        setEmail('')
        setMessage('')
    }catch(err){
      console.log(err.message)
    }finally{
      toast("Message Has been sumbitted..... Thank you for reaching out to me.",{icon:'👍', duration:'600'})
      setName('')
      setEmail('')
      setMessage('')
      setIsSumbmitting(false)
    }
  }


  useEffect(()=>{
      setPage('hire')
      const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    });
    
    
    
    const hiddenElements = document.querySelectorAll('.hero');
    hiddenElements.forEach((el)=> observer.observe(el));
    })


  return (
    <section className='hire px-10 flex flex-col items-center bg-[radial-gradient(circle at 50% , #3F3F47, #18181B )]'> 
      <div className='noise-overlay'></div>
      <div className='px-10 sm:mt-20 mt-20'>
        <h1 className='my-10 hero'>Ready To Connect?.</h1> 
      </div>
      <div className='grid sm:grid-cols-3 sm:w-7xl hero '>
        <div className='sm:p-0 p-5 w-full h-full flex flex-col items-center justify-center bg-slate-800 sm:rounded-l-xl '>
          <img src="../Achievements/IIT_M.png" alt="" className='hero w-[250px] sm:w-[350px] rounded-xl'/>
        </div>
        <div className=' flex flex-col gap-1 bg-slate-800 p-10'>
          <h3 className='text-[2rem] font-semibold text-slate-500'>Contact Me</h3>
          <div className='hero flex flex-col gap-5 item-center justify-center'>
            <input type="text" value={name} placeholder='Name' onChange={(e)=>{setName(e.target.value)}} className='focus:outline-none' />
            <input type="text" value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} className='focus:outline-none' />
            <textarea type="text" value={message}  placeholder='Message' onChange={(e)=>{setMessage(e.target.value)}} className='h-[100px] text-top focus:outline-none'/>
            <button onClick={handleSubmit}  className='text-xl font-semibold'>{(isSumbitting) ? 'Submitting':'Connect'}</button>
          </div>
        </div>
        <div className='hero flex flex-col gap-10 justify-center sm:rounded-r-xl p-10 bg-slate-800'>
          <div className='hero flex flex-col gap-1 ml-10'>
            <h3>Email Me?</h3>
            <a href='mailto:nishantmalik113@gmail.com'>nishantmalik113@gmail.com</a>
          </div>
          <div className='hero flex flex-col gap-1 ml-10'>
            <h3>Locate Me</h3>
            <p>Vellore, Tamil Nadu, India</p>
          </div>
        </div>
      </div>

    </section>

  )
}
