import React from 'react'
import { Container, Texto, Img } from './style'
import { TouchableOpacity } from 'react-native'

export default function Aluno({ nome, id, onClick, foto, onClickFoto }) {
    return (
        <Container onPress={() => onClick(id)}>
            <TouchableOpacity style={{width: '26.9%', borderRadius: 30}} onPress={() => onClickFoto(foto)}>
                <Img source={{
                    uri: foto.url
                }}/>
            </TouchableOpacity>
            <Texto>{nome}</Texto>
        </Container>
    )
}