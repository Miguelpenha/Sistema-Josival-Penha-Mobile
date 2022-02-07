import axios from 'axios'
import { url, key } from './env'

const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Authorization': `key ${process.env.API_KEY}`
    }
})

export default api