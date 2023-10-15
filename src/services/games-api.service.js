import axios from 'axios'

const baseURL = 'https://api.rawg.io/api/';
const key = "332375cb6d3643679ce3fe2891140810"
const platform = "187"      //PS5

export async function getGames(type = "games", page = 0, pageSize = 10) {
    try {
        const res = await axios.get(`${baseURL}${type}?key=${key}&platforms=${platform}`)
        console.log('axios results', res.data.results);
        return res.data.results;
    } catch (error) {
        throw error
    }
}
