import React, { FC } from 'react'
import { useTheme } from 'styled-components'
import ContainerPd from '../ContainerPd'
import HeaderBack from '../HeaderBack'
import { Load, Texto } from './style'
import { Platform } from 'react-native'

interface Iprops {
    onClick?: Function
    buttonBack?: boolean
}

const Loading: FC<Iprops> = ({ onClick, buttonBack=true }) => {
    const theme = useTheme()

    return (
        <ContainerPd>
            <HeaderBack onClick={onClick} buttonBack={buttonBack} styleLogo={!buttonBack && {alignSelf: 'center', width: '80%'}}/>
            <Load color={theme.primary} size={Platform.OS === 'android' ? 50 : 'large'}/>
            <Texto>Buscando dados...</Texto>
        </ContainerPd>
    )
}

export default Loading