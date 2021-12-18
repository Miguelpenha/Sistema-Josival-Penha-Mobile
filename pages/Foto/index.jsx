import React from 'react'
import { Container, Img, ButtonBack } from './style'

export default function Foto({ route, navigation }) {
    const { foto } = route.params
   
    return (
        <Container>
            <Img source={{
                uri: foto.url
            }} foto={foto}/>
            <ButtonBack onClick={() => navigation.goBack()}/>
        </Container>
    )
}