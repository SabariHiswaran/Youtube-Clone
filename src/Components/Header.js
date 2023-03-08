import React from 'react'
import { useDispatch } from 'react-redux'

import hamburger from "../Images/hamburger-menu.png"
import notification from "../Images/notification.png"
import profileicon from "../Images/profileicon.png"
import { menuReducer } from '../Utils/menuSlice'



const Header = () => {

    const dispatch = useDispatch()

    const handleMenuClick = () => {
        dispatch(menuReducer())
    }

    return (
        <div className='flex h-20 justify-between'>

            <div className='flex items-center'>

                <img
                    src={hamburger}
                    alt="Menu-btn"
                    className='h-6 ml-5 hover:cursor-pointer'
                    onClick={handleMenuClick}
                />

                <img
                    src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
                    alt="Youtube-logo"
                    className='h-20 ml-4'
                />

            </div>

            <div className='flex items-center'>

                <input type="text" placeholder='Search' className='border border-3 border-gray-300 w-96 h-8 rounded-l-xl' />

                <button className='bg-gray-100 h-8  border border-3 border-gray-300 rounded-r-xl pr-3 pl-3' >
                    Search
                </button>

                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WeO764gT6so9cBdAcrpeEP3_-1dztDw5qA&usqp=CAU'
                    alt="voiceassistant"
                    className='h-5 ml-6'
                />
            </div>

            <div className='flex items-center p-5'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGtB6Mbi5pmn_6KGAGivVnAGRYw8lJIL_fU87hsY&s' 
                alt="add-video" className='h-8 mr-6 pt-1' />

                <img src={notification} alt="notification-icon" className='h-6 mr-3' />

                <img src={profileicon} alt="profile-icon" className='h-14' />
            </div>
        </div>
    )
}

export default Header