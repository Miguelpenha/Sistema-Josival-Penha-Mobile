import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import meses from '../../utils/meses'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { Months, Button, TextButton } from './style'
import HeaderBack from '../../components/HeaderBack'

type Iprops = NativeStackScreenProps<Inavigation, 'SelectMonth'>

const SelectMonth: FC<Iprops> = ({ route, navigation }) => {
    const { data: turmas } = get('/turmas')
    const { aluno } = route.params
    
    return (
        <ContainerPd>
            <LoadingData loading={turmas}>
                <HeaderBack
                    title="Escolha o mês"
                    onClick={() => navigation.goBack()}
                />
                <Months
                    numColumns={2}
                    renderItem={({ item }) => (
                        <Button onPress={() => console.log(item)}>
                            <TextButton>{String(item)}</TextButton>
                        </Button>
                    )}
                    data={meses}
                    keyExtractor={(mês, index) => String(index)}
                />
            </LoadingData>
        </ContainerPd>
    )
}

export default SelectMonth