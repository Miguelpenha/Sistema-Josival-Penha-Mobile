import React, { FC } from 'react'
import { Container, Text } from './style'

interface Iprops {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EditValueMensalidade: FC<Iprops> = ({ open }) => {
    if (open) {
        return (
            <Container>
                <Text>asd</Text>
            </Container>
        )
    } else {
        return null
    }
}

export default EditValueMensalidade