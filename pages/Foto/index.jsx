import React from 'react'
import { Container, Img } from './style'

export default function Foto({ route }) {
    const { foto } = route.params
   
    return (
        <Container>
            <Img source={{
                uri: foto.url
            }} foto={foto}/>
        </Container>
    )
}