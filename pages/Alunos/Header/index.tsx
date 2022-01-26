import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Ialuno } from '../../../types'
import { View } from 'react-native'
import HeaderBack from '../../../components/HeaderBack'
import { Find, Title, ContainerAlertNotFound, AlertNotFound } from './style'

interface Iprops {
    navigation: NativeStackScreenProps<Inavigation, 'Alunos'>['navigation']
    alunos: Ialuno[]
    filter: string
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

const Header: FC<Iprops> = ({ navigation, alunos, filter, setFilter }) => {
    let existsAluno = false
    
    alunos.map(aluno => {
        if (aluno.nome.toUpperCase().includes(filter.toUpperCase())) {
            existsAluno = true
        }
    })
    
    return (
        <View>
            <HeaderBack onClick={() => navigation.goBack()}/>
            <Find
                value={filter}
                onChangeText={setFilter}
                placeholder="Pesquisar um aluno"
            />
            {!existsAluno && <Title>Escolha um aluno</Title>}
            {!existsAluno && (
                <ContainerAlertNotFound>
                    <AlertNotFound>
                        {'Não encontramos nenhum aluno com esse nome '}&#x1F615;
                    </AlertNotFound>
                </ContainerAlertNotFound>
            )}
        </View>
    )
}

export default Header