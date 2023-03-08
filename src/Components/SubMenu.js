
import {MdOutlineVideoLibrary,MdOutlineHistory,MdOutlineWatchLater,MdOndemandVideo} from 'react-icons/md'

import {BiLike} from "react-icons/bi"

import {RiArrowDropDownLine} from "react-icons/ri"

const SubMenu=() => {
    return (
        <div> 

        <ul className='flex flex-col justify-between h-60'>

            <li  className='flex items-center mt-5'> 

            <span className='flex justify-start w-12'> <MdOutlineVideoLibrary/></span> 
            <span className='flex justify-start w-40'> Library </span>

            </li>

            
            <li  className='flex items-center'> 

            <span className='flex justify-start w-12'> <MdOutlineHistory/> </span> 
            <span className='flex justify-start w-40'> History </span>

            </li>

                
            <li  className='flex items-center'> 

            <span className='flex justify-start w-12'>  <MdOndemandVideo/></span> 
            <span className='flex justify-start w-40'> Your Videos </span>

            </li>

            
            <li  className='flex items-center'> 

            <span className='flex justify-start w-12'> <MdOutlineWatchLater/></span> 
            <span className='flex justify-start w-40'> Watch Later </span>

            </li>

            
            <li  className='flex items-center'> 

            <span className='flex justify-start w-12'> <BiLike/> </span> 
            <span className='flex justify-start w-40'> Liked Videos </span>

            </li>

            
            <li  className='flex items-center'> 

            <span className='flex justify-start w-12'> <RiArrowDropDownLine/> </span> 
            <span className='flex justify-start w-40'> Show More </span>

            </li>


        </ul>

    </div>
    )
}

export default SubMenu