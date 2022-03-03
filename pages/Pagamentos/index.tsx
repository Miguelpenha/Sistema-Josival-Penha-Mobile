import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import HeaderBack from '../../components/HeaderBack'
import meses from '../../utils/meses'

type Iprops = NativeStackScreenProps<Inavigation, 'Pagamentos'>

const Pagamentos: FC<Iprops> = ({ route, navigation }) => {
    const { data: turmas } = get('/turmas')
    const { aluno } = route.params
    
    return (
        <ContainerPd>
            <LoadingData loading={turmas}>
                <HeaderBack
                    title="Pagamentos"
                    onClick={() => navigation.goBack()}
                />
            </LoadingData>
        </ContainerPd>
    )
}

export default Pagamentos