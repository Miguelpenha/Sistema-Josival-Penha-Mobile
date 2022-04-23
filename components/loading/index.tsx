import React, { FC } from 'react'
import ContainerPd from '../ContainerPd'
import HeaderBack from '../HeaderBack'
import { Load, Texto } from './style'

interface Iprops {
    onClick?: Function
    buttonBack?: boolean
}

const Loading: FC<Iprops> = ({ onClick, buttonBack=true }) => {
    return (
        <ContainerPd>
            <HeaderBack onClick={onClick} buttonBack={buttonBack} styleLogo={!buttonBack && {alignSelf: 'center', width: '80%'}}/>
            <Load source={require('../../animations/loading.json')} autoPlay/>
            <Texto>Buscando dados...</Texto>
        </ContainerPd>
    )
}

export default Loading