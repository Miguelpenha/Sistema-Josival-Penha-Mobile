import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { View, Text } from 'react-native'
import HeaderBack from '../../components/HeaderBack'

type Iprops = NativeStackScreenProps<Inavigation, 'Pagamentos'>

export default function Pagamentos({ route, navigation }: Iprops) {
    const { data: turmas } = get('/turmas')
    const { aluno } = route.params
    
    return (
        <ContainerPd>
            <LoadingData loading={turmas}>
                <View>
                    <HeaderBack onClick={() => navigation.goBack()}/>
                </View>
                <Text style={{color: '#ffffff', fontSize: 50, marginTop: '20%', alignSelf: 'center'}}>Pagamentos</Text>
                <Text style={{color: '#ffffff', fontSize: 20, alignSelf: 'center', marginTop: '5%'}}>{aluno.nome}</Text>
            </LoadingData>
        </ContainerPd>
    )
}