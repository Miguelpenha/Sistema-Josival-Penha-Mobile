import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { View } from 'react-native'
import HeaderBack from '../../components/HeaderBack'
import { Picker } from './style'

type RootStackParamList = {
    Pagamentos: undefined
    Profile: { userId: string }
    Feed: { sort: 'latest' | 'top' } | undefined
}
  
type Iprops = NativeStackScreenProps<RootStackParamList, 'Pagamentos'>

export default function Pagamentos({ navigation }: Iprops) {
    const { data: turmas } = get('/turmas')
    const [selectedLanguage, setSelectedLanguage] = useState('')

    return (
        <ContainerPd>
            <LoadingData loading={turmas}>
                <View>
                    <HeaderBack onClick={() => navigation.goBack()}/>
                </View>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(String(itemValue))
                    }
                >
                    <Picker.Item label="JavaScript" value="js"/>
                    <Picker.Item label="Java" value="java"/>
                </Picker>
            </LoadingData>
        </ContainerPd>
    )
}