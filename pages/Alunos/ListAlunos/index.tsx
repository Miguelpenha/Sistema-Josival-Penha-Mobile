import React, { FC, memo } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Ialuno, Inavigation } from '../../../types'
import { FlatList } from 'react-native'
import Header from './Header'
import Aluno from '../../../components/Aluno'
import { veriPago2 } from '../../../utils/veriPago'

interface Iprops {
    alunos: Ialuno[]
    title: string | undefined
    filter: string
    setFilter: React.Dispatch<React.SetStateAction<string>>
    atrasados: boolean
    setAtrasados: React.Dispatch<React.SetStateAction<boolean>>
    navigation: NativeStackScreenProps<Inavigation, 'Alunos'>['navigation']
    financeiro: boolean | undefined
    next: Inavigation['Alunos']['next']
}

const ListAlunos: FC<Iprops> = ({ alunos, title, filter, setFilter, atrasados, navigation, setAtrasados, financeiro, next }) => {
    const renderItem = ({ item: aluno }: { item: Ialuno }) => (
        <Aluno
          aluno={aluno}
          financeiro={financeiro}
          filter={aluno => {
            if (aluno.nome.toUpperCase().includes(filter.toUpperCase())) {
              if (atrasados) {
                if (veriPago2(aluno.pagamentos) === 'Atrasado') {
                  return true
                } else {
                  return false
                }
              } else {
                return true
              }
            } else {
              return false
            }
          }}
          onClickFoto={foto => navigation.navigate('Foto', { foto })}
          onClick={aluno => {
            if (next === 'camera:aluno') {
              navigation.navigate('Camera', { aluno: aluno.id })
            } else if (next === 'pagamentos:aluno') {
              navigation.navigate('Pagamentos', { aluno })
            }
          }}
        />
    )

    return (
        <FlatList
            data={alunos}
            ListHeaderComponent={(
                <Header
                  financeiro={financeiro}
                  title={title}
                  alunos={alunos}
                  filter={filter}
                  setFilter={setFilter}
                  atrasados={!atrasados}
                  navigation={navigation}
                  setAtrasados={setAtrasados}
                />
            )}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

export default memo(ListAlunos)