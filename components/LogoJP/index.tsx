import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import { Image } from 'react-native'

const LogoJP: FC = (props) => {
    const theme = useTheme()
    
    return (
        <Image
            {...props}
            source={
                require(`../../assets/Logo-Josival-Penha-${theme.name === 'dark' ? 'Dark' : 'Light'}.png`)
            }
        />
    )
}

export default LogoJP