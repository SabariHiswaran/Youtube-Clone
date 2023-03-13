
const VideoMenu = () => {

    const menuitems = ["All", "Mixes", "Music", "Chess", "BodyBuilding", "Computer Programing", "Sales", " News", "Thoughts", "Recently Uploaded", "New to You", "Watched"]

    return (

        <div className="flex ">

            {menuitems.map((item, index) => {

                const colorOfMenu = item === menuitems[0] ? "font-bold text-white bg-black" : "bg-gray-200 text-black-500"


                return (

                    <button key={index} className={`${colorOfMenu} pr-3 pl-3 ml-3 border rounded-md`}> {item} </button>

                )
            })}

        </div>
    )
}

export default VideoMenu

