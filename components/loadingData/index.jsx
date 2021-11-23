import React from 'react'
import Loading from '../loading'

export default function LoadingData({ loading, children }) {
    if (!loading) {
        return <Loading/>
    } else {
        return children
    }
}