import React from 'react'


import { BsSearch } from "react-icons/bs"
import {  Link } from 'react-router-dom'


const SearchSuggestion = ({item,setSearchQuery}) => {
   
  return (
    <Link to={"/results?search_query="+item} >
    <li key={item} className='p-2 flex items-center hover:bg-gray-300 '  onClick={() => setSearchQuery(item)}>
    <BsSearch /> 
    
    <span className='ml-4'>{item} </span>
   
    </li>
    </Link>
  )
}

export default SearchSuggestion