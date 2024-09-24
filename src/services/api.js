/* eslint-disable no-undef */
import axios from "axios";

const apiKey = import.meta.env.VITE_APIKEY
const baseURL = import.meta.env.VITE_BASEURL

export const getApiMovie = async () => {
    const movie = await axios.get(`${baseURL}/movie/popular?page=1&api_key=${apiKey}`);
    return movie.data.results
}

export const searchMovie = async (title) => {
    const search = await axios.get(`${baseURL}/search/movie?page=1&query=${title}&api_key=${apiKey}`);
    return search.data
}