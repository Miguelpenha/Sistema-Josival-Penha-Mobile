import React, { FC } from 'react'
import { Container, ContainerImg, Img, ContainerData, Text } from './style'
import TextLimit from '../TextLimit'
import { Inavigation, Ialuno } from '../../types'

interface ionClickFoto {
    (foto: Inavigation['Foto']['foto']): void
}

interface onClick {
    (aluno: Iprops['aluno']): void
}

interface Iprops {
    aluno: Ialuno
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
            <ContainerData>
                <TextLimit component={Text} limit={27}>{aluno.nome}</TextLimit>
                <TextLimit component={Text} limit={27}>{aluno.turma}</TextLimit>
            </ContainerData>
        </Container>
    )
}

export default Aluno