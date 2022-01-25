import React, { FC } from 'react'
import Loading from '../loading'

interface Iprops {
    loading: any
}

const LoadingData: FC<Iprops> = ({ loading, children }) => {
    if (!loading) {
        return <Loading/>
    } else {
        return <>{children}</>
    }
}

export default LoadingData