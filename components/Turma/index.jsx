import React from 'react'
import { Container, Texto } from './style'

export default function Turma({ nome, id, onClick }) {
    return (
        <Container onPress={() => onClick(id)}>
            <Texto>{nome}</Texto>
        </Container>
    )
}