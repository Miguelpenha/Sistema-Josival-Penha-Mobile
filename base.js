import axios from 'axios'
import { API_URL, API_KEY } from '@env'

const url = API_URL
const key = API_KEY

const api = axios.create({
    baseURL: url,
    headers: {
        'Authorization': `key ${key}`
    }
})

export default api