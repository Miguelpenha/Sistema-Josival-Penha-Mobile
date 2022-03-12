import React, { FC, useState } from 'react'
import { Ialuno } from '../../../types'
import { Container, ContainerPagamento, Month, ContainerStatus, Status, Vencimento, IconBack } from './style'
import meses from '../../../utils/meses'
import veriPago from '../../../utils/veriPago'
import CadastrarPagamento from './CadastrarPagamento'

interface IsetDate {
    (date: string): void
}

interface IopenModalDate {
    (date: string, setDate: IsetDate): void
}

interface Iprops {
    mês: string
    index: number
    aluno: Ialuno
    openModalDate: IopenModalDate
    onSubmit: Function
}

const Pagamento: FC<Iprops> = ({ aluno, mês, index, openModalDate, onSubmit }) => {
    const [open, setOpen] = useState(false)
    
    if (aluno) {
        return (
            <>
                {aluno && aluno.pagamentos && (
                    <Container open={open}>
                        <ContainerPagamento onPress={() => setOpen(!open)} activeOpacity={0.5}>
                            <Month>{meses[index]}</Month>
                            <ContainerStatus pago={veriPago(aluno.pagamentos, mês)}>
                                <Status>{veriPago(aluno.pagamentos, mês) === 'Em dia' ? 'Pago' : veriPago(aluno.pagamentos, mês)}</Status>
                            </ContainerStatus>
                            <Vencimento>{aluno.pagamentos[mês].vencimento}</Vencimento>
                            <IconBack name={open ? 'expand-less' : 'expand-more'} size={25}/>
                        </ContainerPagamento>
                        <CadastrarPagamento open={open} setOpen={setOpen} pagamento={aluno.pagamentos[mês]} openModalDate={openModalDate} idAluno={aluno.id} mês={mês} onSubmit={onSubmit}/>
                    </Container>
                )}
            </>
        )
    } else {
        return null
    }
}

export default Pagamento