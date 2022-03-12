import React, { FC, useState, memo } from 'react'
import { Ipagamento } from '../../../../types'
import { useTheme } from 'styled-components'
import { Container, Row1, Campo, Label, ContainerInputDate, InputDate, ContainerInputValor, InputValor, ContainerSwitch, TextSwitchPago, SwitchPago, Button, TextButton } from './style'
import submit from './submit'
import dinero from 'dinero.js'

dinero.globalLocale = 'pt-br'

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
    idAluno: string
    mês: string
    onSubmit: Function
}

const CadastrarPagamento: FC<Iprops> = ({ open, pagamento, setOpen, openModalDate, idAluno, mês, onSubmit }) => {
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
                            <InputValor onChangeText={value => {
                                value.includes(',') ? null : value = `${value},00`
                                let precoBruto = Number(
                                    value.replace('.', '')
                                    .replace(',', '')
                                    .replace('R$', '')
                                    .trimStart()
                                )

                                setValor(dinero({ amount: precoBruto, currency: 'BRL' }).toFormat())
                            }}>{valor}</InputValor>
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
                <Button onPress={() => {
                    submit(date, valor, pago, pagamento.forma, idAluno, mês)
                    setOpen(false)
                    onSubmit()
                }}>
                    <TextButton>Salvar</TextButton>
                </Button>
            </Container>
        )
    } else {
        return null
    }
}

export default memo(CadastrarPagamento)