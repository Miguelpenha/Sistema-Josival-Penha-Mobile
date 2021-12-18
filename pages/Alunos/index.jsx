import React from 'react'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { FlatList, View } from 'react-native'
import HeaderBack from '../../components/HeaderBack'
import { Title } from './style'
import Aluno from '../../components/Aluno'

export default function Alunos({ route, navigation }) {
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
              <Title>Escolha um aluno para adicionar uma foto</Title>
            </View>
          )} 
          renderItem={({ item }) => (
            <Aluno 
              foto={item.foto} 
              id={item._id} 
              nome={item.nome} 
              onClick={aluno => navigation.navigate('Camera', {aluno})} 
              onClickFoto={foto => navigation.navigate('Foto', {foto})}
            />
          )} 
          keyExtractor={item => item._id}
        />
      </LoadingData>
    </ContainerPd>
  )
}