import React from 'react'
import { Container, Load, Texto } from './style'

export default function Loading() {
    return (
        <Container>
            <Load source={require('../../animations/loading.json')} autoPlay/>
            <Texto>Buscando dados...</Texto>
        </Container>
    )
}