import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import HeaderBack from '../../components/HeaderBack'

interface Iprops {
    navigation: NativeStackScreenProps<Inavigation, 'AddPagamento'>['navigation']
}

const AddPagamento: FC<Iprops> = ({ navigation }) => {
    const { data: turmas } = get('/turmas')
    
    return (
        <ContainerPd>
            <LoadingData loading={turmas}>
                <HeaderBack
                    title="Cadastrar Pagamento"
                    onClick={() => navigation.goBack()}
                />
            </LoadingData>
        </ContainerPd>
    )
}

export default AddPagamento