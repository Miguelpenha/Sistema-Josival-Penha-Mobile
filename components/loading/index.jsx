import React from 'react'
import { Container, Logo, Load, Texto } from './style'

export default function Loading() {
    return (
        <Container>
            <Logo/>
            <Load source={require('../../animations/loading.json')} autoPlay/>
            <Texto>Buscando dados...</Texto>
        </Container>
    )
}