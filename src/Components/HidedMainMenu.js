import { useSelector } from 'react-redux/es/exports'

import { FaHome, FaBolt } from 'react-icons/fa'

import { MdSubscriptions } from 'react-icons/md'

import {Link} from 'react-router-dom'

const HidedMainMenu = () => {

    const selector = useSelector((store) => store.menuslice.watchPageMenuState)

     if(!selector) return null

    return (
        <div  className="h-60">  

            <ul className='flex flex-col justify-between h-56'>
                <Link to="/">
                <li className='flex flex-col  p-1'>

                    <span className='flex justify-start w-12'> <FaHome /></span>
                    <span className='flex justify-start  w-12 text-sm'> Home </span>

                </li>
                </Link>


                <li className='flex flex-col p-1'>

                    <span className='flex justify-start w-12'> <FaBolt />  </span>
                    <span className='flex justify-start w-12  text-sm'> Shorts </span>

                </li>


                <li className='flex flex-col p-1'>

                    <span className='flex justify-start w-12'> <MdSubscriptions /></span>
                    <span className='flex justify-start w-12  text-sm'> Library </span>

                </li>


            </ul>
        </div>
    )
}

export default HidedMainMenu