import React from 'react'
import SideMenuBar from './SideMenuBar'
import {Outlet} from 'react-router-dom'

const Body = () => {
  return (
   <div className='flex'>
<SideMenuBar/>
<Outlet/>

   </div>
  )
}

export default Body