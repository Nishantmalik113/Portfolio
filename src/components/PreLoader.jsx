import React, { useEffect, useState } from 'react'
import { greeting } from '../utils'

export default function PreLoader() {
    let showOverlay = 0

    
    useEffect(()=>{
      let greet = document.getElementById('greet')
      var i = 0;                  //  set your counter to 1
      function myLoop() {         //  create a loop function
        setTimeout(function() {   //  call a 3s setTimeout when the loop is called
          greet.innerText=`.${greeting[i]}` //  your code here
          i++;                    //  increment the counter
          if (i < 9) {           //  if the counter < 10, call the loop function
            myLoop();             //  ..  again which will trigger another 
          }else{
            showOverlay = 1
          }                       //  ..  setTimeout()
        }, 243)
      }

      myLoop();        
    })

  return (
    <div>
        <div id='spinner' className='preLoader relative'>
          <div className='noise-overlay'></div>
            <h1 id='greet'></h1>
           <div className='absolute overlay  bg-[#18181B]'></div>
        </div>
    </div>
  )
}
