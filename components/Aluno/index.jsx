import React from 'react'
import { Text, Container, ContainerImg, Img } from './style'
import TextLimit from '../TextLimit'

export default function Aluno({ nome, id, onClick, foto, onClickFoto }) {
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