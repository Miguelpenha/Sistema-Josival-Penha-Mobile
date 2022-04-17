import axios from 'axios'
import { API_URL, API_KEY } from './env'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `key ${API_KEY}`
    }
})

export default api