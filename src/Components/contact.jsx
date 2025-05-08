import React, { useState } from 'react';
import axios from 'axios';
import { DcStatus } from './dcStatus';
// import MoonViewer from './models';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiries: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await axios.post('https://your-backend-url.com/feedback', {
        name: formData.name,
        feedback: formData.enquiries
      });

      console.log('Submitted successfully:', res.data);
      alert('Thank you for your feedback!');

      // Clear the form after submit
      setFormData({
        name: '',
        email: '',
        enquiries: ''
      });

    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again!');
    }
  };

  return (
    <div id="contact" className='h-[100vh]  bg-black flex  justify-center '>
      <h1 className='text-center absolute font-bold text-3xl   text-white'>Contact Me</h1>
      <div className='shadow-lg p-10 shadow-cyan-500/50 ring-2 ring-purple-500 md:h-[60vh] md:w-[50%] w-[90%] md:flex h-[50vh] rounded-3xl text-white md:justify-center '>
     
      
        
        <div className=' md:flex md:w-[100%] md:h-[60vh] items-center justify-center md:rounded-3xl md:overflow-hidden w-[100%] h-[50vh]'>
      <DcStatus/>
      </div>
        {/* <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center mx-1 md:my-[12vh] mt-[20px]'>
          
          <fieldset><legend>Name:</legend>
          <input type="text" placeholder='Your name' name='name' value={formData.name} onChange={handleChange} className='ring-2 ring-blue-500 w-[90%] md:w-[300px] md:h-[5vh] px-2 rounded bg-white/20' /></fieldset>

          <fieldset><legend>Email:</legend>
          <input type="email" placeholder='example@gmail.com' name='email' value={formData.email} onChange={handleChange} className='ring-2 ring-blue-500 w-[90%] md:w-[100%] px-2 md:h-[5vh] rounded bg-white/20' /></fieldset>

          <fieldset><legend>Enquiry:</legend>
          <textarea name="enquiries" value={formData.enquiries} onChange={handleChange} className='ring-2 ring-blue-500 w-[90%] md:w-[100%] md:h-[15vh] rounded bg-white/20'></textarea></fieldset>

          <div className='flex justify-end w-[100%]'>
            <button type="submit" className='w-[100px] px-2 mx-auto md:h-[5vh] rounded bg-white/20 ring-2 ring-blue-500'>
              Submit
            </button>
          </div>
          
        </form> */}
     
{/* 
        <MoonViewer /> */}
      </div>
     
    </div>
  );
};
