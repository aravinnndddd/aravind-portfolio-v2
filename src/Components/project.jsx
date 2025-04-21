import React from 'react'

export const Project = () => {
  return (
    <div id="projects" className='flex flex-col h-[100vh] bg-black'>
 <h1 className='text-white text-center font-bold text-4xl pb-[10px]'>Projects</h1>
        <div className=' flex flex-row justify-center gap-2 w-[100%] h-[40vh] bg-black'>
     <div className='flex flex-col w-[30%] h-[35vh] bg-purple-500/20 rounded-lg'>
     <h1 className='text-white text-center text-2xl mt-[10px]'>Project-1</h1>
     </div>
     <div className='flex flex-col w-[30%] h-[35vh] bg-purple-500/20 rounded-lg'><h1 className='text-white text-center text-2xl mt-[10px]'>Project-2</h1></div>
     <div className='flex flex-col w-[30%] h-[35vh] bg-purple-500/20 rounded-lg'><h1 className='text-white text-center text-2xl mt-[10px]'>Project-3</h1></div>
     </div>
     <div className=' flex flex-row justify-center gap-2 w-[100%] h-[40vh] bg-black'>
     <div className='flex flex-col w-[30%] h-[35vh] bg-purple-500/20 rounded-lg'><h1 className='text-white text-center text-2xl mt-[10px]'>Project-4</h1></div>
     <div className='flex flex-col w-[30%] h-[35vh] bg-purple-500/20 rounded-lg'><h1 className='text-white text-center text-2xl mt-[10px]'>Project-5</h1></div>
     <div className='flex flex-col w-[30%] h-[35vh] bg-purple-500/20 rounded-lg'><h1 className='text-white text-center text-2xl mt-[10px]'>Project-6</h1></div>
    </div>
  
     </div>
  )
}
