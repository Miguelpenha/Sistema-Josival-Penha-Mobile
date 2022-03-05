import React, { FC, memo } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Ialuno } from '../../../../types'
import { useTheme } from 'styled-components'
import { View, TouchableOpacity } from 'react-native'
import HeaderBack from '../../../../components/HeaderBack'
import { Find, ContainerAlertNotFound, AlertNotFound, ContainerButtonAtrasadosOrNo, ButtonAtrasadosOrNo, TextButtonAtrasadosOrNo } from './style'
import { useAnimationState } from 'moti'

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
    const buttonTodosAnimated = useAnimationState({
        todos: {
            backgroundColor: theme.primary
        },
        atrasados: {
            backgroundColor: theme.backgroundColor
        }
    })
    const textButtonTodosAnimated = useAnimationState({
        todos: {
            color: theme.color
        },
        atrasados: {
            color: theme.primary
        }
    })
    const buttonAtrasadosAnimated = useAnimationState({
        todos: {
            backgroundColor: theme.backgroundColor
        },
        atrasados: {
            backgroundColor: theme.primary
        }
    })
    const textButtonAtrasadosAnimated = useAnimationState({
        todos: {
            color: theme.primary
        },
        atrasados: {
            color: theme.color
        }
    })
    
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
                    <TouchableOpacity 
                        onPress={() => {
                            setAtrasados(false)
                            buttonAtrasadosAnimated.transitionTo('todos')
                            textButtonAtrasadosAnimated.transitionTo('todos')
                            buttonTodosAnimated.transitionTo('todos')
                            textButtonTodosAnimated.transitionTo('todos')
                        }}
                    >
                        <ButtonAtrasadosOrNo primary state={buttonTodosAnimated}>
                            <TextButtonAtrasadosOrNo primary state={textButtonTodosAnimated}>
                                Todos
                            </TextButtonAtrasadosOrNo>
                        </ButtonAtrasadosOrNo>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setAtrasados(true)
                            buttonTodosAnimated.transitionTo('atrasados')
                            textButtonTodosAnimated.transitionTo('atrasados')
                            buttonAtrasadosAnimated.transitionTo('atrasados')
                            textButtonAtrasadosAnimated.transitionTo('atrasados')
                        }}
                    >
                        <ButtonAtrasadosOrNo state={buttonAtrasadosAnimated}>
                            <TextButtonAtrasadosOrNo state={textButtonAtrasadosAnimated}>
                                Atrasados
                            </TextButtonAtrasadosOrNo>
                        </ButtonAtrasadosOrNo>
                    </TouchableOpacity>
                </ContainerButtonAtrasadosOrNo>
            )}
        </View>
    )
}

export default memo(Header)