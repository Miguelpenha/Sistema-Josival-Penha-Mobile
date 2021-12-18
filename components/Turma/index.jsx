import React from 'react'
import { Container, Text } from './style'
import TextLimit from '../TextLimit'

export default function Turma({ nome, id, onClick }) {
    return (
        <Container onPress={() => onClick(id)}>
            <TextLimit component={Text} limit={14}>{nome}</TextLimit>
        </Container>
    )
}