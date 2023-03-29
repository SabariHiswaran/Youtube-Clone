

// export const GOOGLE_API_KEY = "AIzaSyBtXLNO3vwaomPrOQgyxYZegRAOoHhY3Vg"

export const GOOGLE_API_KEY = "AIzaSyDeNXW4PLogKTOO4kKV7CENgT9ooRLJRDs"

export const FETCH_VIDEO_API =
 `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`


 export const INDIVIDUAL_VIDEO_API = 
 `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`
    

//  export const SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const SEARCH_SUGGESTION_API = "https://sabari-youtube.netlify.app/api/search?client=firefox&ds=yt&q="

 export const SEARCHED_VIDEO_LIST = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${GOOGLE_API_KEY}&q=`


 export const SUGGESTED_VIDEO_LIST = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&key=${GOOGLE_API_KEY}&q=`