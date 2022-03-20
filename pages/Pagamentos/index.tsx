import React, { FC, useState, useRef } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Ialuno, Inavigation } from '../../types'
import { get } from '../../api'
import { useTheme } from 'styled-components'
import { Modalize } from 'react-native-modalize'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { ListPagamentos, ContainerPagamentos, ContainerDate, ButtonCalendar, TextButtonCalendar, InputMensalidade, ContainerMensalidade, TitleMensalidade, ButtonSubmitMensalidade, TextButtonSubmitMensalidade } from './style'
import HeaderBack from '../../components/HeaderBack'
import AlunoPagamento from './AlunoPagamento'
import HeaderPagamentos from './HeaderPagamentos'
import mesesNumber from '../../utils/mesesNumber'
import Pagamento from './Pagamento'
import Calendar from './Calendar'
import api from '../../base'

type Iprops = NativeStackScreenProps<Inavigation, 'Pagamentos'>

interface IsetDate {
    (date: string): void
}

interface IsetMensalidade {
    (IsetMensalidade: string): void
}

interface imodalDate {
    date: string
    setDate: IsetDate
}

interface imodalMensalidade {
    mensalidade: string
    setMensalidade: IsetMensalidade
}

const Pagamentos: FC<Iprops> = ({ route, navigation }) => {
    const { aluno: alunoParams } = route.params
    const { data: aluno, mutate }: { data: Ialuno, mutate: Function } = get(`/alunos/${alunoParams.id}`)
    const theme = useTheme()
    const [modalDate, setModalDate] = useState<imodalDate>(null)
    const [modalMensalidade, setModalMensalidade] = useState<imodalMensalidade>(null)
    const modalDateRef = useRef<Modalize>(null)
    const modalMensalidadeRef = useRef<Modalize>(null)
    const openModalDate = (date: string, setDate: IsetDate) => {
        modalDateRef.current.open()
        setModalDate({
            date,
            setDate
        })
    }
    const openModalMensalidade = (mensalidade: string, setMensalidade: IsetMensalidade) => {
        modalMensalidadeRef.current.open()
        setModalMensalidade({
            mensalidade,
            setMensalidade
        })
    }
    const closeModalDate = () => modalDateRef.current.close()
    const closeModalMensalidade = () => modalMensalidadeRef.current.close()
    const [mensalidade, setMensalidade] = useState(modalMensalidade?.mensalidade)
    return (
        <ContainerPd>
            <LoadingData loading={aluno}>
                <HeaderBack
                    title="Escolher pagamento"
                    onClick={() => navigation.goBack()}
                />
                <AlunoPagamento
                    aluno={aluno}
                    openModalMensalidade={openModalMensalidade}
                    onPress={() => (
                        navigation.navigate('Foto', {
                            foto: aluno.foto
                        })
                    )}
                />
                <HeaderPagamentos/>
                <ListPagamentos>
                    <ContainerPagamentos>
                        {mesesNumber.map((mês, index) => (
                            <Pagamento mês={mês} key={index} index={index} aluno={aluno} openModalDate={openModalDate} onSubmit={() => mutate().then(() => mutate().then())}/>
                        ))}
                    </ContainerPagamentos>
                </ListPagamentos>
                <Modalize ref={modalDateRef} modalStyle={{backgroundColor: theme.backgroundColor}}>
                    <ContainerDate>
                        <Calendar date={modalDate?.date} setDate={modalDate?.setDate}/> 
                        <ButtonCalendar onPress={closeModalDate}>
                            <TextButtonCalendar>Confirmar</TextButtonCalendar>
                        </ButtonCalendar>
                    </ContainerDate>
                </Modalize>
                <Modalize ref={modalMensalidadeRef} modalStyle={{backgroundColor: theme.backgroundColor}} onClose={() => {}}>
                    <ContainerMensalidade>
                        <TitleMensalidade>Modificar valor de todas as mensalidades</TitleMensalidade>
                        <InputMensalidade keyboardType="decimal-pad" defaultValue={modalMensalidade?.mensalidade} onChangeText={setMensalidade}/>
                        <ButtonSubmitMensalidade onPress={() => {
                            closeModalMensalidade()

                            Object.keys(aluno.pagamentos).map(async mês => 
                                await api.post('/pagamentos', {
                                    id: aluno.id,
                                    mês,
                                    value: mensalidade,
                                    pago: aluno.pagamentos[mês].pago,
                                    vencimento: aluno.pagamentos[mês].vencimento,
                                    forma: aluno.pagamentos[mês].forma
                                })
                            )

                            mutate().then(() => modalMensalidade?.setMensalidade(mensalidade))
                        }}>
                            <TextButtonSubmitMensalidade>
                                Salvar
                            </TextButtonSubmitMensalidade>
                        </ButtonSubmitMensalidade>
                    </ContainerMensalidade>
                </Modalize>
            </LoadingData>
        </ContainerPd>
    )
}

export default Pagamentos