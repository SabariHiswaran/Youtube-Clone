import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import hamburger from "../Images/hamburger-menu.png"
import notification from "../Images/notification.png"
import profileicon from "../Images/profileicon.png"
import { SEARCH_SUGGESTION_API } from '../Utils/constants'
import { menuReducer } from '../Utils/menuSlice'
import { searchReducer } from '../Utils/searchSlice'

import { BsSearch } from "react-icons/bs"
import SearchSuggestion from './SearchSuggestion'
import { Outlet } from 'react-router-dom'

import {RxCross2} from 'react-icons/rx'
import {VscBlank} from 'react-icons/vsc'
import { addSuggestion } from '../Utils/searchSuggestionSlice'

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("")

    const [searchSuggestion, setSearchSuggestion] = useState([])

    const dispatch = useDispatch()

    const searchHidden = useSelector((store) => store.searchSuggestionSlice.suggestion)

    const selector = useSelector((store) => store.searchReducer)

    const isVisible = searchHidden ? "invisible" : "visible"

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

    const clearSearch = () => {
        setSearchQuery("")
    }
    
    return (
        <>
            <div className='flex h-20 justify-between '>

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
                            onChange={(e) =>{
                                dispatch(addSuggestion())
                                setSearchQuery(e.target.value)
                            } }
                            className='border border-3 border-gray-300 border-r-0 w-[540px] h-[41px] p-1 rounded-l-xl focus:outline-none'
                            value={searchQuery}
                        />

                        {
                            searchQuery.length >=1 
                            ? 
                        <button
                         className=" h-[41px]  border border-r-0 border-l-0 border-t-gray-300 border-b-gray-300 pl-3 w-[40px] "
                         onClick={clearSearch}
                         >
                            <RxCross2 />
                        </button>
                        :
                        <button
                         className=" h-[41px]  border border-r-0 border-l-0 border-t-gray-300 border-b-gray-300 pl-3 w-[40px] "
                        
                         >
                            <VscBlank />
                        </button>
                        }

                        <button className='bg-gray-100 h-[41px]  border border-3 border-gray-300 rounded-r-xl pr-4 pl-4 ' >
                            <BsSearch />
                        </button>
        
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WeO764gT6so9cBdAcrpeEP3_-1dztDw5qA&usqp=CAU'
                            alt="voiceassistant"
                            className='h-5 ml-6'
                        />
                    </div>
                        
                    <div className={`bg-gray-50 w-[580px] border rounded-lg border-gray-100 relative shadow-md ${isVisible}`}>
                        <ul>
                            {searchSuggestion?.map((item,index) => {
                                return (
                                   
                                         <SearchSuggestion item ={item} key={index} searchQuery = {searchQuery} setSearchQuery = {setSearchQuery} /> 

                                )
                            })}
                        </ul>
                    </div>
                   
                </div>
                      
                <div className='flex items-center p-5'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGtB6Mbi5pmn_6KGAGivVnAGRYw8lJIL_fU87hsY&s'
                        alt="add-video" className='h-8 mr-6 pt-1' />

                    <img src={notification} alt="notification-icon" className='h-6 mr-3' />

                    <img src={profileicon} alt="profile-icon" className='h-14' />
                </div>
            </div>
            <Outlet />
        </>

    )
}

export default Header