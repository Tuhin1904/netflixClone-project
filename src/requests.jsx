const API_KEY="acf532c369bb9ad7d412b327cff82f6a"

const requests={
    fetchFavourite:`/discover/movie?api_key=${API_KEY}`,
    fetchMostWatched:`/tv/top_rated?api_key=${API_KEY}`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}`,  
    fetchUpcoming:`/movie/upcoming?api_key=${API_KEY}`,
    fetchSeries:`/tv/airing_today?api_key=${API_KEY}`

}

export default requests;