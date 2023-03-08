import React from 'react'
import MainMenu from './MainMenu'
import SubMenu from './SubMenu'
import SubscriptionMenu from './SubscriptionMenu'

const SideMenuBar = () => {
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