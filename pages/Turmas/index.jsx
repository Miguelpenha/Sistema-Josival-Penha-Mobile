import React from 'react'
import { Title, Turmas as TurmasFlatList } from './style'
import LoadingData from '../../components/loadingData'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import Turma from '../../components/Turma'

export default function Turmas({ onSelectTurma, recent }) {
  const { data: turmas } = get('/turmas')
  
  return (
    <ContainerPd>
      <LoadingData loading={turmas}>
        <Title>Escolha uma turma</Title>
        <TurmasFlatList data={turmas} renderItem={({ item }) => <Turma id={item._id} nome={item.nome} onClick={id => onSelectTurma(id)}/>} keyExtractor={item => item._id}/>
      </LoadingData>
    </ContainerPd>
  )
}