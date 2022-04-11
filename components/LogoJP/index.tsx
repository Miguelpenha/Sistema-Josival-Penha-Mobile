import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import { ImageStyle, Image } from 'react-native'

interface Iprops {
    style?: ImageStyle
}

const LogoJP: FC<Iprops> = (props) => {
    const theme = useTheme()

    return (
        <Image
            {...props}
            source={
                theme.name == 'dark' ? 
                require('../../assets/Logo-Josival-Penha-Dark.png') : 
                require('../../assets/Logo-Josival-Penha-Light.png')
            }
        />
    )
}

export default LogoJP