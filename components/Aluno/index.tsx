import React, { FC } from 'react'
import { Container, ContainerImg, Img, Text } from './style'
import TextLimit from '../TextLimit'
import { Inavigation } from '../../types'

interface ionClickFoto {
    (foto: Inavigation['Foto']['foto']): void
}

interface onClick {
    (aluno: Iprops['aluno']): void
}

interface Iprops {
    aluno: {
        nome: string
        id: string
        foto: Inavigation['Foto']['foto']
    }
    onClick: onClick
    onClickFoto: ionClickFoto
}

const Aluno: FC<Iprops> = ({ aluno, onClick, onClickFoto }) => {
    return (
        <Container onPress={() => onClick(aluno)}>
            <ContainerImg onPress={() => onClickFoto(aluno.foto)}>
                <Img source={{
                    uri: aluno.foto.url
                }}/>
            </ContainerImg>
            <TextLimit component={Text} limit={29}>{aluno.nome}</TextLimit>
        </Container>
    )
}

export default Aluno