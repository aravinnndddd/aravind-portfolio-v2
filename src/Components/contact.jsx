import React from 'react'
import MoonViewer from './models'
// import moon from '../assets/moon.png'


export const Contact = () => {
  return (
    <div id="contact" className='h-[100vh] bg-black flex items-center justify-center'>
      <div className='h-[70vh] w-[70%] flex  bg-white/10 rounded-3xl text-white '>
     
        <form action="" className='flex flex-col gap-4  justify-center mx-[100px] my-[10vh]'>
          <fieldset><legend>Name:</legend>
          <input type="text" placeholder='Your name' name='name' className='w-[300px] h-[5vh] px-2 rounded bg-white/20' /></fieldset>
          <fieldset><legend>Email:</legend>
          <input type="text" placeholder='example@gmail.com' name='email' className='w-[300px] px-2 h-[5vh] rounded bg-white/20' /></fieldset>
          <fieldset><legend>Enquiry:</legend>
          <textarea name="enquiries" className='w-[100%] h-[15vh] rounded bg-white/20'></textarea></fieldset>
          <div className='flex justify-end w-[100%]'><button className='w-[100px] px-2 h-[5vh] rounded bg-white/20'>Submit</button></div>
        </form>
        <MoonViewer/>
      </div>
    </div>
  )
}
