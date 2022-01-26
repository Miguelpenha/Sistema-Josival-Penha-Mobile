import React, { FC } from 'react'
import { Container, Text } from './style'
import TextLimit from '../TextLimit'

type ionClick = {
    (turma: Iprops['id']): void
}

interface Iprops {
    nome: string
    id: string
    onClick: ionClick
}

const Turma: FC<Iprops> = ({ nome, id, onClick }) => {
    return (
        <Container onPress={() => onClick(id)}>
            <TextLimit component={Text} limit={14}>{nome}</TextLimit>
        </Container>
    )
}

export default Turma