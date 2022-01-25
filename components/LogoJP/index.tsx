import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import { Image } from 'react-native'

const LogoJP: FC = (props) => {
    const theme = useTheme()

    if (theme.name === 'dark') {
        return <Image {...props} source={require('../../assets/Logo-Josival-Penha-Dark.png')}/>
    } else {
        return <Image {...props} source={require('../../assets/Logo-Josival-Penha-Light.png')}/>
    }
}

export default LogoJP