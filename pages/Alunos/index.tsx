import React, { useState } from 'react'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { FlatList } from 'react-native'
import Aluno from '../../components/Aluno'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Ialuno } from '../../types'
import Header from './Header'

type NativeStackScreenPropsNavigationRoute = NativeStackScreenProps<Inavigation, 'Alunos'>

interface Iprops {
  navigation: NativeStackScreenPropsNavigationRoute['navigation']
  route: NativeStackScreenPropsNavigationRoute['route']
}

export default function Alunos({ route, navigation }: Iprops) {
  const [filter, setFilter] = useState('')
  const { url, next, title } = route.params
  const { data: alunos }: { data: Ialuno[] } = get(url)
  
  return (
    <ContainerPd>
      <LoadingData loading={alunos}>
        <FlatList
          data={alunos}
          ListHeaderComponent={(
            <Header
              title={title}
              alunos={alunos}
              filter={filter}
              setFilter={setFilter}
              navigation={navigation}
            />
          )}
          renderItem={({ item: aluno }) => (
            <Aluno
              aluno={aluno}
              filter={aluno => (
                aluno.nome.toUpperCase().includes(filter.toUpperCase())
              )}
              onClickFoto={foto => navigation.navigate('Foto', { foto })}
              onClick={aluno => {
                if (next === 'camera:aluno') {
                  navigation.navigate('Camera', { aluno: aluno.id })
                } else if (next === 'pagamentos:aluno') {
                  navigation.navigate('Pagamentos', { aluno })
                }
              }}
            />
          )}
          keyExtractor={aluno => aluno.id}
        />
      </LoadingData>
    </ContainerPd>
  )
}