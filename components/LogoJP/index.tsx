import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import { Image } from 'react-native'

const LogoJP: FC = (props) => {
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