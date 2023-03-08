import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import MainMenu from './MainMenu'
import SubMenu from './SubMenu'
import SubscriptionMenu from './SubscriptionMenu'

const SideMenuBar = () => {

  const selector = useSelector((store) => store.menuslice.menustate)

  if(!selector) return null 

  return (
    <div className='flex flex-col w-52 p-5 h-128' >
        <MainMenu/>
       <span className='mt-5'> <hr/> </span>
        <SubMenu/>
        <span className='mt-5'> <hr/> </span>
        <SubscriptionMenu/>
    </div>
  )
}

export default SideMenuBar