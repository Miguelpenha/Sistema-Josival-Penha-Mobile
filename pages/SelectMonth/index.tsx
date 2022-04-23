import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import HeaderBack from '../../components/HeaderBack'
import { Months, Button, TextButton } from './style'
import meses from '../../utils/meses'

interface Iprops {
    navigation: NativeStackScreenProps<Inavigation, 'SelectMonth'>['navigation']
}

const SelectMonth: FC<Iprops> = ({ navigation }) => {
    const { data: turmas } = get('/turmas')
    
    return (
        <ContainerPd>
            <LoadingData loading={turmas} onClick={() => navigation.goBack()}>
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