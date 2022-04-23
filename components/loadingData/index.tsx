import React, { FC } from 'react'
import Loading from '../loading'

interface Iprops {
    loading: any
    onClick?: Function
    buttonBack?: boolean
}

const LoadingData: FC<Iprops> = ({ loading, children, ...props }) => {
    if (!loading) {
        return <Loading {...props}/>
    } else {
        return <>{children}</>
    }
}

export default LoadingData