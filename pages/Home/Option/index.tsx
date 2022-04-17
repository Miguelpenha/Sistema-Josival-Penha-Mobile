import React, { FC } from 'react'
import { Container, Icon, Title } from './style'
import { Ioption } from '../type'

const Option: FC<Ioption> = ({ onClick, icon, title }) => {
    return (
        <Container onPress={() => onClick()}>
            <Icon name={icon} size={32}/>
            <Title>{title}</Title>
        </Container>
    )
}

export default Option