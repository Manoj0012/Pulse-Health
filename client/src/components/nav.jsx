
import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import Logo from './logo';
function nav() {
    let navbar=[
      {title:"Home",Link:"/"},{title:"Service",Link:"/services"},{title:"Contact us",Link:"/contact"},{title:"Signup",Link:"/signup"}
    ]
  return (
    <div className='min-w-[100vh] h-[7vh]  flex justify-evenly shadowb bg-white'>
        <div className='w-[55%] h-[100%] bg-white flex justify-center items-center'><Logo/></div>
        <div className='w-[45%] h-[100%] text-black flex items-center justify-evenly  mt-3 font2'>
            { navbar.map((items,index)=>{
                    return(
                        <NavLink className="w-[75px] h-[24px] text-sm text-center" key={index} to={items.Link}>{items.title}</NavLink>
                    )
                })}
        </div>
    </div>
  )
}

export default nav