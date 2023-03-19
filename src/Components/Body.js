import React, { useEffect } from 'react'
import SideMenuBar from './SideMenuBar'
import {Outlet} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addSuggestion } from '../Utils/searchSuggestionSlice'

const Body = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addSuggestion())
  }, [])

  return (
   <div className='flex'>
<SideMenuBar/>
<Outlet/>

   </div>
  )
}

export default Body