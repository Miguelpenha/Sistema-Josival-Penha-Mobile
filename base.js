import axios from 'axios'
import { API_URL, API_KEY } from '@env'

const url = API_URL

const api = axios.create({
    baseURL: url,
    headers: {
        'Authorization': `key ${API_KEY}`
    }
})

export default api