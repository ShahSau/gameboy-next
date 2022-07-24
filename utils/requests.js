const API_Key = process.env.API_Key


export default{
    fetchTrending:{
        title:"Trending",
        url:`/trending/all/week?api_key=${API_Key}&language=en-US`,
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/movie/top_rated/week?api_key=${API_Key}&language=en-US`,
    },
    fetchActionMovies:{
        title:"Action",
        url:`/discover/movie/week?api_key=${API_Key}&with_generes=28`,
    },
    fetchComedyMovies:{
        title:"Comedy",
        url:`/discover/movie/week?api_key=${API_Key}&with_generes=35`,
    },
    fetchHorrorMovies:{
        title:"Horror",
        url:`/discover/movie/week?api_key=${API_Key}&with_generes=27`,
    },
    fetchRomanceMovies:{
        title:"Romance",
        url:`/discover/movie/week?api_key=${API_Key}&with_generes=10749`,
    },
    fetchMystry:{
        title:"Mystery",
        url:`/discover/movie/week?api_key=${API_Key}&with_generes=9648`,
    },
    fetchSciFi:{
        title:"Sci-Fi",
        url:`/discover/movie/week?api_key=${API_Key}&with_generes=878`,
    },
    fetchWesterns:{
        title:"Western",
        url:`/discover/movie/week?api_key=${API_Key}&with_generes=37`,
    },
    fetchAnimation:{
        title:"Animation",
        url:`/discover/movie/week?api_key=${API_Key}&with_generes=16`,
    },
    fetchTV:{
        title:"TV",
        url:`/discover/movie/week?api_key=${API_Key}&with_generes=10770`,
    },

}