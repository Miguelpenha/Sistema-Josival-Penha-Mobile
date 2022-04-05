import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { FlatList, View } from 'react-native'
import HeaderBack from '../../components/HeaderBack'
import { Title } from './style'
import Check from './Check'
import Turma from '../../components/Turma'

type Iprops = NativeStackScreenProps<Inavigation, 'Turmas'>

const Turmas: FC<Iprops> = ({ route, navigation }) => {
  const { success } = route.params
  const { data: turmas } = get('/turmas')
  
  return (
    <ContainerPd>
      <LoadingData loading={turmas}>
        <FlatList data={turmas} ListHeaderComponent={() => (
          <View>
            <HeaderBack onClick={() => navigation.goBack()}/>
            <Check success={success}/>
            <Title>Escolha uma turma</Title>
          </View>
        )} renderItem={({ item }) => {
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
        }} keyExtractor={item => item._id}/>
      </LoadingData>
    </ContainerPd>
  )
}

export default Turmas