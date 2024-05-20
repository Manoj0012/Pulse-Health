import React from 'react'
import Logo from '../assets/logo.png'
function logo() {
  return (
    <div className='w-[100%] h-[100%] flex ml-3 justify-start items-center'>
        <img className='w-[125px] h-[27px] mt-4 ml-2' src={Logo}/>
    </div>
  )
}

export default logo