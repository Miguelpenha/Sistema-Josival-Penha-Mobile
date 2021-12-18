import React, { useContext } from 'react'
import { Image } from 'react-native'
import { ThemeContext } from 'styled-components'

export default function LogoJP(props) {
    const theme = useContext(ThemeContext)

    if (theme.name === 'dark') {
        return <Image {...props} source={require('../../assets/Logo-Josival-Penha-Dark.png')}/>
    } else {
        return <Image {...props} source={require('../../assets/Logo-Josival-Penha-Light.png')}/>
    }
}