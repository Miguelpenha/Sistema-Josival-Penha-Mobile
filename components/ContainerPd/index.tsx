import React, { FC } from 'react'
import { Container } from './style'
import { StatusBar } from 'expo-status-bar'

const ContainerPd: FC = ({ children }) => {
    return (
        <Container>
            <StatusBar/>
            {children}
        </Container>
    )
}

export default ContainerPd