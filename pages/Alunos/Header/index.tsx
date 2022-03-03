import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Ialuno } from '../../../types'
import { useTheme } from 'styled-components'
import { View } from 'react-native'
import HeaderBack from '../../../components/HeaderBack'
import { Find, Title, ContainerAlertNotFound, AlertNotFound } from './style'

interface Iprops {
    navigation: NativeStackScreenProps<Inavigation, 'Alunos'>['navigation']
    alunos: Ialuno[]
    filter: string
    setFilter: React.Dispatch<React.SetStateAction<string>>
    title?: string
}

const Header: FC<Iprops> = ({ navigation, alunos, filter, setFilter, title }) => {
    const theme = useTheme()
    let existsAluno = false
    
    alunos.map(aluno => {
        if (aluno.nome.toUpperCase().includes(filter.toUpperCase())) {
            existsAluno = true
        }
    })
    
    return (
        <View>
            <HeaderBack title={title} onClick={() => navigation.goBack()}/>
            <Find
                value={filter}
                onChangeText={setFilter}
                placeholder="Pesquisar um aluno"
                placeholderTextColor={theme.color}
                selectionColor={theme.secondaryColor}
            />
            {!existsAluno && (
                <ContainerAlertNotFound>
                    <AlertNotFound>
                        Não encontramos nenhum aluno com esse nome &#x1F615;
                    </AlertNotFound>
                </ContainerAlertNotFound>
            )}
        </View>
    )
}

export default Header