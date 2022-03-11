import React, { FC, useState, memo } from 'react'
import { Ipagamento } from '../../../../types'
import { useTheme } from 'styled-components'
import { Container, Row1, Campo, Label, ContainerInputDate, InputDate, ContainerInputValor, InputValor, ContainerSwitch, TextSwitchPago, SwitchPago, Button, TextButton } from './style'

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
    const [pago, setPago] = useState(pagamento.pago)
    const theme = useTheme()

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
                <ContainerSwitch>
                    <TextSwitchPago>Pago</TextSwitchPago>
                    <SwitchPago
                        value={pago}
                        thumbColor={theme.color}
                        onValueChange={() => setPago(!pago)}
                        trackColor={{false: theme.despesa, true: theme.receita}}
                    />
                </ContainerSwitch>
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