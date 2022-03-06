import React, { FC } from 'react'
import { Container, Title } from './style'

interface Iprops {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CadastrarPagamento: FC<Iprops> = ({ open, setOpen }) => {
    if (open) {
        return (
            <Container>
                <Title>Cadastro de pagamento</Title>
            </Container>
        )
    } else {
        return null
    }
}

export default CadastrarPagamento