import React from 'react'
import Nav from '../components/nav'
import Doc from '../assets/doc.png'
function home() {
  return (
    <div className='min-w-[100vh] h-[100vh] '>
      <div className='w-[100%] h-[7vh]'><Nav/></div>
      <div className='flex w-[100%] h-[73vh] '>
        <div className='w-[50%] h-[100%]  flex items-center justify-center'>
           <div className='w-[70%] h-[35%]  text-black flex flex-col justify-start '>
            <p className='mb-1 font2 '>Get Quick </p>
            <p className='mb-1 font1'>Medical Services</p>
            <p className='mb-1 color-[#323232] w-[90%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
           <button className='w-[100px] h-[30px] bg-main mt-3 text-white shadowb'>Get Services</button>
           </div>
        </div>
        <div className='w-[50%] h-[100%]  flex justify-center items-center'>
             <div className='w-[90%] h-[60%] '>
              <img className='w-[700px] h-[500px] ' src={Doc} />
             </div>
        </div>
      </div>
      <div className='w-[100%] h-[20vh]  flex justify-evenly items-start'>
        <div className='w-[200px] h-[85px] bg-white bg-main shadowb'></div>
        <div className='w-[200px] h-[85px] bg-white bg-main shadowb'></div>
        <div className='w-[200px] h-[85px] bg-white bg-main shadowb'></div>
      </div>
    </div>
  )
}

export default home