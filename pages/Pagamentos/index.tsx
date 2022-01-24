import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { View, Text } from 'react-native'
import HeaderBack from '../../components/HeaderBack'
import DropDown from './DropDown'

type RootStackParamList = {
    Pagamentos: undefined
    Profile: { userId: string }
    Feed: { sort: 'latest' | 'top' } | undefined
}
  
type Iprops = NativeStackScreenProps<RootStackParamList, 'Pagamentos'>

interface Ialuno {
    nome: string
    id: string
}

export default function Pagamentos({ navigation }: Iprops) {
    const alunos: Ialuno[] = get('/alunos').data
    const [aluno, setAluno] = useState(alunos && alunos[0])
    
    return (
        <ContainerPd>
            <LoadingData loading={alunos}>
                <View>
                    <HeaderBack onClick={() => navigation.goBack()}/>
                </View>
                <DropDown values={alunos} onChange={(aluno: Ialuno) => setAluno(aluno)}/>
                <Text style={{color: '#ffffff', fontSize: 40, marginTop: '20%', alignSelf: 'center'}}>nome: {aluno.nome}</Text>
            </LoadingData>
        </ContainerPd>
    )
}