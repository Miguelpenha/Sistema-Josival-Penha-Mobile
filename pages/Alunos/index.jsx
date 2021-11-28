import React from 'react'
import { Title, Alunos as AlunosFlatList } from './style'
import LoadingData from '../../components/loadingData'
import { get } from '../../api'
import Aluno from '../../components/Aluno'
import ContainerPd from '../../components/ContainerPd'

export default function Alunos({ route, navigation }) {
  const { turma } = route.params
  const { data: alunos } = get(`/turmas/alunos/${turma}`)
  
  return (
    <ContainerPd>
      <LoadingData loading={alunos}>
        <Title>Escolha um aluno para adicionar uma foto</Title>
        <AlunosFlatList data={alunos} renderItem={({ item }) => <Aluno foto={item.foto.url} id={item._id} nome={item.nome} onClick={aluno => navigation.navigate('Camera', {
          aluno
        })}/>} keyExtractor={item => item._id}/>
      </LoadingData>
    </ContainerPd>
  )
}