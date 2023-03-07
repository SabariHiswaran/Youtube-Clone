
import {MdOutlineVideoLibrary,MdOutlineHistory,MdOutlineWatchLater,MdOndemandVideo} from 'react-icons/md'

import {BiLike} from "react-icons/bi"

import {RiArrowDropDownLine} from "react-icons/ri"

const SubMenu=() => {
    return (
        <div> 
            
        <ul>
            <li  className='flex items-center'> <MdOutlineVideoLibrary/> Library </li>
            <li className='flex items-center'><MdOutlineHistory/> History </li>
            <li className='flex items-center'> <MdOndemandVideo/> Your Videos </li>
            <li className='flex items-center'><MdOutlineWatchLater/> Watch Later </li>
            <li className='flex items-center'> <BiLike/> Liked Videos </li>
            <li className='flex items-center'><RiArrowDropDownLine/> Show More </li>
        </ul>

    </div>
    )
}

export default SubMenu