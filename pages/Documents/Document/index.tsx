import React from 'react'
import { ListRenderItemInfo } from 'react-native'
import { Idocument } from '../types'
import { Container, Icon, Title } from './style'

function Document({ item }: ListRenderItemInfo<Idocument>) {
    return (
        <Container onPress={item.onPress}>
            <Icon name={item.icon} size={40}/>
            <Title>{item.title}</Title>
        </Container>
    )
}

export default Document