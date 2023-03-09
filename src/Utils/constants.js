
const GOOGLE_API_KEY = "AIzaSyBtXLNO3vwaomPrOQgyxYZegRAOoHhY3Vg"

export const FETCH_VIDEO_API =
 `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`