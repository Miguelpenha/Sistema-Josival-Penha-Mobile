import React from 'react'
import { Title } from './style'
import LoadingData from '../../components/loadingData'
import { get } from '../../api'
import { FlatList } from 'react-native'
import Aluno from '../../components/Aluno'

export default function Alunos({ turma, onSelectAluno }) {
  const { data: alunos } = get(`/turmas/alunos/${turma}`)
  
  return (
    <LoadingData loading={alunos}>
        <Title>Escolha um aluno para adicionar uma foto</Title>
        <FlatList data={alunos} renderItem={({ item }) => <Aluno id={item._id} nome={item.nome} onClick={id => onSelectAluno(id)}/>} keyExtractor={item => item._id}/>
    </LoadingData>
  )
}