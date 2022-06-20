import React, { FC, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Iturma } from '../../types'
import { KeyedMutator } from 'swr'
import { get } from '../../api'
import { useTheme } from 'styled-components'
import { ListRenderItemInfo, View, FlatList, RefreshControl } from 'react-native'
import Turma from '../../components/Turma'
import { HeaderBack, Title } from './style'
import Check from './Check'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'

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

  function renderItem({ item }: ListRenderItemInfo<Iturma>) {
    if (item.alunos >= 1) {
      return (
        <Turma
          turma={item}
          onClick={turmaId => (
            navigation.navigate('Alunos', {
              url: `/turmas/alunos/${turmaId}`,
              next: 'camera:aluno'
            })
          )}
        />
      )
    } else {
      return null
    }
  }

  function Header() {
    return (
      <View>
        <HeaderBack onClick={() => navigation.goBack()}/>
        <Check success={success}/>
        <Title>Escolha uma turma</Title>
      </View>
    )
  }
  
  return (
    <ContainerPd>
      <LoadingData loading={turmas} onClick={() => navigation.goBack()}>
        <FlatList
          data={turmas}
          renderItem={renderItem}
          ListHeaderComponent={Header}
          keyExtractor={item => item._id}
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              colors={[theme.primary]}
              onRefresh={onRefreshAction}
              progressBackgroundColor={theme.secondary}
            />
          )}
        />
      </LoadingData>
    </ContainerPd>
  )
}

export default Turmas