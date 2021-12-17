import React from 'react'
import { FlatList } from 'react-native'
import { Title } from './style'
import LoadingData from '../../components/loadingData'
import { get } from '../../api'
import Aluno from '../../components/Aluno'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'

export default function Alunos({ route, navigation }) {
  const { turma } = route.params
  const { data: alunos } = get(`/turmas/alunos/${turma}`)
  
  return (
    <ContainerPd>
      <LoadingData loading={alunos}> 
        <FlatList data={alunos} ListHeaderComponent={() => {
          return (
            <>
              <HeaderBack onClick={() => navigation.goBack()}/>
              <Title>Escolha um aluno para adicionar uma foto</Title>
            </>
          )
        }} renderItem={({ item }) => <Aluno foto={item.foto} id={item._id} nome={item.nome} onClick={aluno => navigation.navigate('Camera', {
          aluno
        })} onClickFoto={foto => navigation.navigate('Foto', {
          foto
        })}/>} keyExtractor={item => item._id}/>
      </LoadingData>
    </ContainerPd>
  )
}