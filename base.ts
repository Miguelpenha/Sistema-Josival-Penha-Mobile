import axios from 'axios'
import { url, key } from './env'

const api = axios.create({
    baseURL: url,
    headers: {
        'Authorization': `key ${key}`
    }
})

export default api