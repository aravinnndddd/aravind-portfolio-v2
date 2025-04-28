import React from 'react'
import MoonViewer from './models'
// import moon from '../assets/moon.png'


export const Contact = () => {
  return (
    <div id="contact" className='h-[100vh] bg-black flex items-center justify-center'>
      <div className='shadow-lg shadow-cyan-500/50 ring-2 ring-purple-500 md:h-[70vh] w-[70%] md:flex  bg-white/10 rounded-3xl text-white '>
     
        <form action="" className='filter- flex flex-col gap-4  justify-center mx-10 md:my-[10vh] mt-[50px]'>
          <fieldset><legend>Name:</legend>
          <input type="text" placeholder='Your name' name='name' className='ring-2 ring-blue-500 w-[90%] md:w-[300px] md:h-[5vh] px-2 rounded bg-white/20' /></fieldset>
          <fieldset><legend>Email:</legend>
          <input type="text" placeholder='example@gmail.com' name='email' className='ring-2 ring-blue-500 w-[90%] md:w-[100%] px-2 md:h-[5vh] rounded bg-white/20' /></fieldset>
          <fieldset><legend>Enquiry:</legend>
          <textarea name="enquiries" className='ring-2 ring-blue-500 w-[90%] md:w-[100%] md:h-[15vh] rounded bg-white/20'></textarea></fieldset>
          <div className='flex justify-end w-[100%]'><button className='w-[100px] px-2 mx-auto md:h-[5vh] rounded bg-white/20 ring-2 ring-blue-500 '>Submit</button></div>
        </form>
        <MoonViewer/>
      </div>
    </div>
  )
}
