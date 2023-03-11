import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import hamburger from "../Images/hamburger-menu.png"
import notification from "../Images/notification.png"
import profileicon from "../Images/profileicon.png"
import { SEARCH_SUGGESTION_API } from '../Utils/constants'
import { menuReducer } from '../Utils/menuSlice'
import { searchReducer } from '../Utils/searchSlice'

import { BsSearch } from "react-icons/bs"

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("")

    const [searchSuggestion, setSearchSuggestion] = useState([])

    const [searchHidden, setSearchHidden] = useState(true)

    const dispatch = useDispatch()

    const selector = useSelector((store) => store.searchReducer)

    useEffect(() => {

        //implementing debouncing using setTimeOut with 200 ms and clearing the timer


        const timer = setTimeout(() => {
            if (selector[searchQuery]) {
                setSearchSuggestion(selector[searchQuery])
            }
            else {
                getSearchSuggestion()
            }
        }
            , 200)

        return () => clearTimeout(timer)

    }, [searchQuery])

    const getSearchSuggestion = async () => {
       
        const data = await fetch(SEARCH_SUGGESTION_API + searchQuery)
        const json = await data.json()
        setSearchSuggestion(json[1])
        dispatch(searchReducer({ [searchQuery]: json[1] }))
    }



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

                <a href='/'>
                    <img
                        src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
                        alt="Youtube-logo"
                        className='h-20 ml-4'
                    />
                </a>

            </div>
            <div className='mt-6'>
                <div className='flex items-center'>

                    <input
                        type="text"
                        placeholder='Search'
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='border border-3 border-gray-300 w-96 h-8 p-2 rounded-l-xl'
                        onFocus={() => setSearchHidden(false)}
                        onBlur={() => setSearchHidden(true)}
                    />

                    <button className='bg-gray-100 h-8  border border-3 border-gray-300 rounded-r-xl pr-4 pl-4 ' >
                        <BsSearch />
                    </button>

                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WeO764gT6so9cBdAcrpeEP3_-1dztDw5qA&usqp=CAU'
                        alt="voiceassistant"
                        className='h-5 ml-6'
                    />
                </div>
                {!searchHidden &&
                    <div className='bg-gray-50 w-96 border rounded-lg border-gray-100 relative shadow-md'>
                        <ul>
                            {searchSuggestion.map(item => {
                                return (
                                    <li key={item} className='p-2 flex items-center ' ><BsSearch /> <span className='ml-4'>{item} </span> </li>
                                )
                            })}
                        </ul>
                    </div>
                }
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