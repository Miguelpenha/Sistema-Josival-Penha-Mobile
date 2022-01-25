import React from 'react'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { FlatList, View } from 'react-native'
import HeaderBack from '../../components/HeaderBack'
import { Title } from './style'
import Aluno from '../../components/Aluno'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'

type Iprops = NativeStackScreenProps<Inavigation, 'Pagamentos'>

export default function Alunos({ route, navigation }: Iprops) {
  const { turma } = route.params
  const { data: alunos } = get(`/turmas/alunos/${turma}`)
  
  return (
    <ContainerPd>
      <LoadingData loading={alunos}> 
        <FlatList 
          data={alunos} 
          ListHeaderComponent={() => (
            <View>
              <HeaderBack onClick={() => navigation.goBack()}/>
              <Title>Escolha um aluno</Title>
            </View>
          )} 
          renderItem={({ item: aluno }) => (
            <Aluno 
              foto={aluno.foto}
              id={aluno._id}
              nome={aluno.nome}
              onClick={aluno => navigation.navigate('Camera', { aluno })}
              onClickFoto={foto => navigation.navigate('Foto', { foto })}
            />
          )} 
          keyExtractor={item => item._id}
        />
      </LoadingData>
    </ContainerPd>
  )
}