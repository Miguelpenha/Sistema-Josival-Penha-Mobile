import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { View, Text } from 'react-native'
import HeaderBack from '../../components/HeaderBack'

type RootStackParamList = {
    Pagamentos: undefined
    Profile: { userId: string }
    Feed: { sort: 'latest' | 'top' } | undefined
}
  
type Iprops = NativeStackScreenProps<RootStackParamList, 'Pagamentos'>

export default function Pagamentos({ navigation }: Iprops) {
    const { data: turmas } = get('/turmas')
    
    return (
        <ContainerPd>
            <LoadingData loading={turmas}>
                <View>
                    <HeaderBack onClick={() => navigation.goBack()}/>
                </View>
                <Text style={{color: '#ffffff', fontSize: 50, marginTop: '20%', alignSelf: 'center'}}>Pagamentos</Text>
            </LoadingData>
        </ContainerPd>
    )
}