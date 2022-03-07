import React, { FC, useState, useRef } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import { Modalize } from 'react-native-modalize'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { ListPagamentos, ContainerPagamentos } from './style'
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
    const { data: turmas } = get('/turmas')
    const { aluno } = route.params
    const [modalDate, setModalDate] = useState<imodalDate>(null)
    const modalDateRef = useRef<Modalize>(null)
    const openModalDate = (date: string, setDate: IsetDate) => {
        modalDateRef.current.open()
        setModalDate({
            date,
            setDate
        })
    }
    
    return (
        <ContainerPd>
            <LoadingData loading={turmas}>
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
                            <Pagamento mês={mês} key={index} index={index} aluno={aluno} openModalDate={openModalDate}/>
                        ))}
                    </ContainerPagamentos>
                </ListPagamentos>
                <Modalize ref={modalDateRef}>
                    <Calendar date={modalDate?.date} setDate={modalDate?.setDate}/>
                </Modalize>
            </LoadingData>
        </ContainerPd>
    )
}

export default Pagamentos