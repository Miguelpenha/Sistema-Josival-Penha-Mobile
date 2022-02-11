import useSWR  from 'swr'
import base from './base'

export default function api(url: string, config?: object) {
    const { data, error, mutate } = useSWR(url, async url => {
        const response = await base(url, config)
        const data = await response.data

        return data
    })

    return { data, error, mutate }
}

export function get(url: string, config?: object) {
    const { data, error, mutate } = useSWR(url, async url => {
        const response = await base.get(url, config)
        const data = await response.data

        return data
    })
    
    return { data, error, mutate }
}

export function post(url: string, dataParams?: object, config?: object) {
    const { data, error } = useSWR(url, async url => {
        const response = await base.post(url, dataParams, config)
        const data = await response.data

        return data
    })
    
    return { data, error }
}