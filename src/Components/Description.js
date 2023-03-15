import React, { useState } from 'react'

const Description = ({ description }) => {

    const [isTextHidden, setIsTextHidden] = useState("true")

    const handleClick = () => {
        setIsTextHidden(prevVal => !prevVal)
    }



    return (
        <div className='mt-7  w-[935px] bg-gray-100 rounded-lg hover:bg-gray-200 hover:cursor-pointer' onClick={handleClick}>
            <h2 className='font-semibold mt-3'> Description :</h2>
            <div>
                <pre className='whitespace-pre-line mt-3 text-sm'>

                    {isTextHidden ? description?.substr(0, 100) : description}
                </pre>
                <p
                    className='font-semibold hover:cursor-pointer'

                > {isTextHidden ? "Show More" : "Show Less"} </p>
            </div>
        </div>
    )
}

export default Description