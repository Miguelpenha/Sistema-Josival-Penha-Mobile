import axios from 'axios'

const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Authorization': `key ${process.env.API_KEY}`
    }
})

export default api