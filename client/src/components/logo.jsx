import React from 'react'
import Logo from '../assets/logo.png'
function logo() {
  return (
    <div className='w-[100%] h-[100%] flex ml-3'>
        <img className='w-[70px] h-[50px] m-2' src={Logo}/>
        <div className='flex justify-center items-end pb-1'><p>PLUSE CARE</p></div>
    </div>
  )
}

export default logo