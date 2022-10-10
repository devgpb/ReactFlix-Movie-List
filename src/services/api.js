import axios from "axios";

// Base URL: https://api.themoviedb.org/3/
// URL API:  https://api.themoviedb.org/3/movie/now_playing?api_key=cd79deaf08c6eb7b337d1eae83cc1d3f&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;