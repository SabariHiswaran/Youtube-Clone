import React from 'react'


import { BsSearch } from "react-icons/bs"



const SearchSuggestion = ({item}) => {
   
  return (
   
    <li key={item} className='p-2 flex items-center hover:bg-gray-300 ' >
    <BsSearch /> 
    
    <span className='ml-4'>{item} </span>
   
    </li>
  
  )
}

export default SearchSuggestion