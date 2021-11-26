import React from 'react'
import { Container, Texto, Img } from './style'

export default function Aluno({ nome, id, onClick, foto }) {
    return (
        <Container onPress={() => onClick(id)}>
            <Img source={{
                uri: foto
            }}/>
            <Texto>{nome}</Texto>
        </Container>
    )
}