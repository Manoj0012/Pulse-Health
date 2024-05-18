import React from 'react'
import Nav from '../components/nav'
import Doc from '../assets/doc.png'
function home() {
  return (
    <div className='min-w-[100vh] h-[100vh] '>
      <div className='w-[100%] h-[7vh]'><Nav/></div>
      <div className='flex w-[100%] h-[93vh] '>
        <div className='w-[50%] h-[100%]  flex items-center justify-center'>
           <div className='w-[70%] h-[30%]  text-black flex flex-col justify-start '>
            <p className='mb-1 font2 '>Get Quick </p>
            <p className='mb-1 font1'>Medical Services</p>
            <p className='mb-1 color-[#323232] w-[90%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
           <button className='w-[100px] h-[40px] bg-main mt-3 text-white shadowb'>Get Services</button>
           </div>
        </div>
        <div className='w-[50%] h-[100%]  flex justify-center items-center'>
             <div className='w-[70%] h-[70%] '>
              <img className='w-[600px] h-[500px] ' src={Doc} />
             </div>
        </div>
      </div>
    </div>
  )
}

export default home