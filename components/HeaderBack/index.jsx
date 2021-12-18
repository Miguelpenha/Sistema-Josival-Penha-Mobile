import React from 'react'
import { Container, ButtonBack, ContainerLogo, Logo } from './style'

export default function HeaderBack({ onClick }) {
    return (
        <Container>
            <ButtonBack onClick={onClick}/>
            <ContainerLogo>
                <Logo/>
            </ContainerLogo>
        </Container>
    )
}