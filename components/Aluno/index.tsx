import React, { FC } from 'react'
import { Container, ContainerImg, Img, Text } from './style'
import TextLimit from '../TextLimit'
import { Inavigation } from '../../types'

interface ionClickFoto {
    (foto: Inavigation['Foto']['foto']): void
}

interface onClick {
    (aluno: string): void
}

interface Iprops {
    nome: string
    id: string
    onClick: onClick
    foto: Inavigation['Foto']['foto']
    onClickFoto: ionClickFoto
}

const Aluno: FC<Iprops> = ({ nome, id, onClick, foto, onClickFoto }) => {
    return (
        <Container onPress={() => onClick(id)}>
            <ContainerImg onPress={() => onClickFoto(foto)}>
                <Img source={{
                    uri: foto.url
                }}/>
            </ContainerImg>
            <TextLimit component={Text} limit={29}>{nome}</TextLimit>
        </Container>
    )
}

export default Aluno