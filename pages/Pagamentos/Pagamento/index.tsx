import React, { FC, useState } from 'react'
import { Ialuno } from '../../../types'
import { Container, ContainerPagamento, Month, ContainerStatus, Status, Vencimento, IconBack } from './style'
import meses from '../../../utils/meses'
import veriPago from '../../../utils/veriPago'
import CadastrarPagamento from './CadastrarPagamento'

interface Iprops {
    mês: string
    index: number
    aluno: Ialuno
}

const Pagamento: FC<Iprops> = ({ aluno, mês, index }) => {
    const [open, setOpen] = useState(false)

    return (
        <Container open={open}>
            <ContainerPagamento onPress={() => setOpen(!open)}>
                <Month>{meses[index]}</Month>
                <ContainerStatus pago={veriPago(aluno.pagamentos, mês)}>
                    <Status>{veriPago(aluno.pagamentos, mês)}</Status>
                </ContainerStatus>
                <Vencimento>{aluno.pagamentos[mês].vencimento}</Vencimento>
                <IconBack name={open ? 'expand-less' : 'expand-more'} size={25}/>
            </ContainerPagamento>
            <CadastrarPagamento open={open} setOpen={setOpen}/>
        </Container>
    )
}

export default Pagamento