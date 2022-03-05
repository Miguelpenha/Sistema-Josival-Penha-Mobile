import React, { FC } from 'react'
import { Ialuno } from '../../../types'
import { Container, Month, ContainerStatus, Status, Vencimento, IconBack } from './style'
import meses from '../../../utils/meses'
import veriPago from '../../../utils/veriPago'

interface IonPress {
    (): void
}

interface Iprops {
    mês: string
    index: number
    aluno: Ialuno
    onPress: IonPress
}

const Pagamento: FC<Iprops> = ({ aluno, mês, index, onPress }) => {
    return (
        <Container onPress={onPress}>
            <Month>{meses[index]}</Month>
            <ContainerStatus pago={veriPago(aluno.pagamentos, mês)}>
                <Status>{veriPago(aluno.pagamentos, mês)}</Status>
            </ContainerStatus>
            <Vencimento>{aluno.pagamentos[mês].vencimento}</Vencimento>
            <IconBack name="arrow-forward-ios" size={20}/>
        </Container>
    )
}

export default Pagamento