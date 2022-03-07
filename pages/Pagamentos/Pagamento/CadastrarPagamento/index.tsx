import React, { FC, useState, useRef, memo } from 'react'
import { Ipagamento } from '../../../../types'
import { Container, ContainerDate, LabelDate, ContainerInputDate, InputDate } from './style'
import Calendar from '../../Calendar'
import { Modalize } from 'react-native-modalize'

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
    const [date, setDate] = useState('')

    if (open) {
        return (
            <Container>
                <ContainerDate>
                    <LabelDate>Data</LabelDate>
                    <ContainerInputDate onPress={() => openModalDate(pagamento.vencimento, date => setDate(date))}>
                        <InputDate>{pagamento.vencimento}</InputDate>
                    </ContainerInputDate>
                </ContainerDate>
            </Container>
        )
    } else {
        return null
    }
}

export default memo(CadastrarPagamento)