
export const GOOGLE_API_KEY = "AIzaSyBtXLNO3vwaomPrOQgyxYZegRAOoHhY3Vg"

export const FETCH_VIDEO_API =
 `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`


 export const INDIVIDUAL_VIDEO_API = 
 `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`
    

 export const SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


 export const SEARCHED_VIDEO_LIST = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${GOOGLE_API_KEY}&q=`