import React, { FC, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Iturma } from '../../types'
import { KeyedMutator } from 'swr'
import { get } from '../../api'
import { useTheme } from 'styled-components'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { FlatList, RefreshControl, View } from 'react-native'
import HeaderBack from '../../components/HeaderBack'
import { Title } from './style'
import Check from './Check'
import Turma from '../../components/Turma'

type Iprops = NativeStackScreenProps<Inavigation, 'Turmas'>

const Turmas: FC<Iprops> = ({ route, navigation }) => {
  const { success } = route.params
  const { data: turmas, mutate: mutateTurmas }: { data: Iturma[], mutate: KeyedMutator<Iturma[]> } = get('/turmas')
  const [refreshing, setRefreshing] = useState(false)
  const theme = useTheme()

  async function onRefreshAction() {
    setRefreshing(true)

    mutateTurmas().then(() => (
      setRefreshing(false)
    ))
  }
  
  return (
    <ContainerPd>
      <LoadingData loading={turmas} onClick={() => navigation.goBack()}>
        <FlatList
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              colors={[theme.primary]}
              onRefresh={onRefreshAction}
              progressBackgroundColor={theme.secondary}
            />
          )}
          data={turmas}
          ListHeaderComponent={() => (
            <View>
              <HeaderBack onClick={() => navigation.goBack()}/>
              <Check success={success}/>
              <Title>Escolha uma turma</Title>
            </View>
          )}
          renderItem={({ item }) => {
            if (item.alunos >= 1) {
              return (
                <Turma
                  id={item._id}
                  nome={item.nome}
                  onClick={turma => (
                    navigation.navigate('Alunos', {
                      url: `/turmas/alunos/${turma}`,
                      next: 'camera:aluno'
                    })
                  )}
                />
              )
            } else {
              return null
            }
          }}
          keyExtractor={item => item._id}
        />
      </LoadingData>
    </ContainerPd>
  )
}

export default Turmas