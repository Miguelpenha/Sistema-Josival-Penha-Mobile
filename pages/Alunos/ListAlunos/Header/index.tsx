import React, { FC, memo } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Ialuno } from '../../../../types'
import { useTheme } from 'styled-components'
import { View } from 'react-native'
import HeaderBack from '../../../../components/HeaderBack'
import { Find, ContainerAlertNotFound, AlertNotFound, ContainerButtonAtrasadosOrNo, ButtonAtrasadosOrNo, TextButtonAtrasadosOrNo } from './style'

interface Iprops {
    navigation: NativeStackScreenProps<Inavigation, 'Alunos'>['navigation']
    alunos: Ialuno[]
    filter: string
    setFilter: React.Dispatch<React.SetStateAction<string>>
    title?: string
    atrasados: boolean
    setAtrasados: React.Dispatch<React.SetStateAction<boolean>>
    financeiro?: boolean
}

const Header: FC<Iprops> = ({ navigation, alunos, filter, setFilter, title, atrasados, setAtrasados, financeiro }) => {
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
                financeiro={financeiro}
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
            {financeiro && existsAluno && (
                <ContainerButtonAtrasadosOrNo>
                    <ButtonAtrasadosOrNo
                        primary
                        atrasados={!atrasados}
                        onPress={() => setAtrasados(false)}
                    >
                        <TextButtonAtrasadosOrNo atrasados={!atrasados}>
                            Todos
                        </TextButtonAtrasadosOrNo>
                    </ButtonAtrasadosOrNo>
                    <ButtonAtrasadosOrNo 
                        atrasados={atrasados}
                        onPress={() => setAtrasados(true)}
                    >
                        <TextButtonAtrasadosOrNo atrasados={atrasados}>
                            Atrasados
                        </TextButtonAtrasadosOrNo>
                    </ButtonAtrasadosOrNo>
                </ContainerButtonAtrasadosOrNo>
            )}
        </View>
    )
}

export default memo(Header)