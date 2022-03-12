import React, { FC, useState, useRef } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Ialuno, Inavigation } from '../../types'
import { get } from '../../api'
import { useTheme } from 'styled-components'
import { Modalize } from 'react-native-modalize'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { ListPagamentos, ContainerPagamentos, ButtonCalendar, TextButtonCalendar } from './style'
import HeaderBack from '../../components/HeaderBack'
import AlunoPagamento from './AlunoPagamento'
import HeaderPagamentos from './HeaderPagamentos'
import mesesNumber from '../../utils/mesesNumber'
import Pagamento from './Pagamento'
import Calendar from './Calendar'

type Iprops = NativeStackScreenProps<Inavigation, 'Pagamentos'>

interface IsetDate {
    (date: string): void
}

interface imodalDate {
    date: string
    setDate: IsetDate
}

const Pagamentos: FC<Iprops> = ({ route, navigation }) => {
    const { aluno: alunoParams } = route.params
    const { data: aluno, mutate } = get(`/alunos/${alunoParams.id}`)
    const theme = useTheme()
    const [modalDate, setModalDate] = useState<imodalDate>(null)
    const modalDateRef = useRef<Modalize>(null)
    const openModalDate = (date: string, setDate: IsetDate) => {
        modalDateRef.current.open()
        setModalDate({
            date,
            setDate
        })
    }
    const closeModalDate = () => modalDateRef.current.close()
    
    return (
        <ContainerPd>
            <LoadingData loading={aluno}>
                <HeaderBack
                    title="Escolher pagamento"
                    onClick={() => navigation.goBack()}
                />
                <AlunoPagamento
                    aluno={aluno}
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
                    <Calendar date={modalDate?.date} setDate={modalDate?.setDate}/> 
                    <ButtonCalendar onPress={closeModalDate}>
                        <TextButtonCalendar>Confirmar</TextButtonCalendar>
                    </ButtonCalendar>
                </Modalize>
            </LoadingData>
        </ContainerPd>
    )
}

export default Pagamentos