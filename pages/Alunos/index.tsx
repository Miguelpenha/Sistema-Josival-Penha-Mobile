import React, { FC, useState, memo } from 'react'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { FlatList } from 'react-native'
import Aluno from '../../components/Aluno'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Ialuno } from '../../types'
import Header from './Header'
import veriPago from '../../utils/veriPago'

type NativeStackScreenPropsNavigationRoute = NativeStackScreenProps<Inavigation, 'Alunos'>

interface Iprops {
  navigation: NativeStackScreenPropsNavigationRoute['navigation']
  route: NativeStackScreenPropsNavigationRoute['route']
}

const Alunos: FC<Iprops> = ({ route, navigation }) => {
  const { url, next, title, financeiro } = route.params
  const { data: alunos }: { data: Ialuno[] } = get(url)
  const [filter, setFilter] = useState('')
  const [atrasados, setAtrasados] = useState(false)

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
              atrasados={!atrasados}
              navigation={navigation}
              setAtrasados={setAtrasados}
            />
          )}
          renderItem={({ item: aluno }) => (
            <Aluno
              aluno={aluno}
              financeiro={financeiro}
              filter={aluno => {
                if (aluno.nome.toUpperCase().includes(filter.toUpperCase())) {
                  if (atrasados) {
                    if (veriPago(aluno.pagamentos) === 'Atrasado') {
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
          )}
          keyExtractor={aluno => aluno.id}
        />
      </LoadingData>
    </ContainerPd>
  )
}

export default memo(Alunos)