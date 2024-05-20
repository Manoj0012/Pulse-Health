import React from 'react'
import Nav from '../components/nav'
function services() {
  return (
   <div className='min-w-[100vh] h-[100vh]'>
    <div className='w-[100%] h-[7vh]'><Nav/></div>
    <div className='w-[100%] h-[93vh] flex flex-col'>
      <div className='w-[100%] h-[30%] flex flex-col items-center'>
         <input className='w-[550px] h-[150px] bg-white mt-10 file_upload' type='file' />
           <button className='w-[80px] h-[30px] bg-main shadowb text-white mt-4'>Upload</button>    
      </div>
      <div className='w-[100%] h-[60%] flex flex-col items-center'>
        <div className='w-[450px] h-[400px] shadowb mt-4  bg-main flex flex-col text-white items-center justify-center'>
          <p className=''>Preview</p>
          <img className='w-[90%] h-[90%] preview' src='' alt='No file uploaded' />
        </div>
        <button className='w-[80px] h-[30px] bg-main text-white mt-4 shadowb'>Predict</button>
      </div>
    </div>
   </div>
  )
}

export default services