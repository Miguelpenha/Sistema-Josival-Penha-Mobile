import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { ListPagamentos, ContainerPagamentos } from './style'
import HeaderBack from '../../components/HeaderBack'
import AlunoPagamento from './AlunoPagamento'
import HeaderPagamentos from './HeaderPagamentos'
import mesesNumber from '../../utils/mesesNumber'
import Pagamento from './Pagamento'
import meses from '../../utils/meses'

type Iprops = NativeStackScreenProps<Inavigation, 'Pagamentos'>

const Pagamentos: FC<Iprops> = ({ route, navigation }) => {
    const { data: turmas } = get('/turmas')
    const { aluno } = route.params
    
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
                            <Pagamento
                                mês={mês}
                                key={index}
                                index={index}
                                aluno={aluno}
                                onPress={() => (
                                    navigation.navigate('AddPagamento', {
                                        aluno: aluno,
                                        mês: mês,
                                        mêsName: meses[index]
                                    })
                                )}
                            />
                        ))} 
                    </ContainerPagamentos>
                </ListPagamentos>
            </LoadingData>
        </ContainerPd>
    )
}

export default Pagamentos