import React from 'react'
import { Container, ButtonBack, IconBack, ContainerLogo, Logo } from './style'

export default function HeaderBack({ onClick }) {
    return (
        <Container>
            <ButtonBack onPress={onClick}>
                <IconBack name="arrow-back" size={40}/>
            </ButtonBack>
            <ContainerLogo>
                <Logo source={require('../../assets/logo-josival-penha.png')}/>
            </ContainerLogo>
        </Container>
    )
}