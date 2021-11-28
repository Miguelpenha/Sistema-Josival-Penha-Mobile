import React from 'react'
import { Container } from './style'

export default function ContainerPd({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}