import React from 'react'
import Nav from '../components/nav'
function signup() {
  return (
    <div className='min-w-[100vh] h-[100vh] banner1'>
      <div className='w-[100%] h-[7vh]'><Nav/></div>
      <div className='w-[100%] h-[93vh] flex justify-center items-center'>
           <div className='w-[400px] h-[550px] bg-white shadowb flex-col'>
            <div className='w-[100%] h-[10%] flex justify-center items-center'>Signup</div>
            <div className='w-[100%] h-[20%] flex flex-col justify-evenly items-center mt-2'>
              <p className='text-start'>Name</p>
              <input type='text' className='w-[90%] h-[50%]' />
            </div>
            <div className='w-[100%] h-[20%] flex flex-col justify-evenly items-center mt-2'>
              <p className='text-start'>Password</p>
              <input type='text' className='w-[90%] h-[50%]' />
            </div>
            <div className='w-[100%] h-[20%] flex flex-col justify-evenly items-center mt-2'>
              <p className='text-start'>Confirm Password</p>
              <input type='text' className='w-[90%] h-[50%]' />
            </div>
           </div>
      </div>
    </div>
  )
}

export default signup