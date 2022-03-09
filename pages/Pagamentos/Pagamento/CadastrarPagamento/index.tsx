import React, { FC, useState, memo } from 'react'
import { Ipagamento } from '../../../../types'
import { Container, Row1, Campo, Label, ContainerInputDate, InputDate, ContainerInputValor, InputValor, Button, TextButton } from './style'

interface IsetDate {
    (date: string): void
}

interface IopenModalDate {
    (date: string, setDate: IsetDate): void
} 

interface Iprops {
    open: boolean
    pagamento: Ipagamento
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    openModalDate: IopenModalDate
}

const CadastrarPagamento: FC<Iprops> = ({ open, pagamento, setOpen, openModalDate }) => {
    const [date, setDate] = useState(pagamento.vencimento)
    const [valor, setValor] = useState(pagamento.value)

    if (open) {
        return (
            <Container>
                <Row1>
                    <Campo>
                        <Label>Data</Label>
                        <ContainerInputDate onPress={() => openModalDate(date, date => setDate(date))}>
                            <InputDate>{date}</InputDate>
                        </ContainerInputDate>
                    </Campo>
                    <Campo>
                        <Label>Valor</Label>
                        <ContainerInputValor>
                            <InputValor onChangeText={setValor}>{valor}</InputValor>
                        </ContainerInputValor>
                    </Campo>
                </Row1>
                <Button>
                    <TextButton>Salvar</TextButton>
                </Button>
            </Container>
        )
    } else {
        return null
    }
}

export default memo(CadastrarPagamento)