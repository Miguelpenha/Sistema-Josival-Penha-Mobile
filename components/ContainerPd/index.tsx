import React, { FC } from 'react'
import { Container } from './style'

const ContainerPd: FC = ({ children }) => {
    return (
        <Container>{children}</Container>
    )
}

export default ContainerPd