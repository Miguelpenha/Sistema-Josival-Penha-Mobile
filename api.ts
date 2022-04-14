import useSWR, { KeyedMutator } from 'swr'
import base from './base'
import { AxiosRequestConfig } from 'axios'

export default function api<Idata>(url: string, config?: AxiosRequestConfig) {
    const { data, error, mutate } = useSWR(url, async url => {
        const response = await base(url, config)
        const data: Idata | any = await response.data

        return data
    })

    return { data, error, mutate }
}

export function get<Idata>(url: string, config?: AxiosRequestConfig) {
    const { data, error, mutate } = useSWR(url, async url => {
        const response = await base.get(url, config)
        const data: Idata = await response.data

        return data
    })
    
    return { data, error, mutate }
}

export function post<IdataParams, Idata>(url: string, dataParams?: IdataParams, config?: AxiosRequestConfig) {
    const { data, error, mutate } = useSWR(url, async url => {
        const response = await base.post(url, dataParams, config)
        const data: Idata = await response.data
        
        return data
    })
    
    return { data, error, mutate }
}