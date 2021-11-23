import React from 'react'
import { Title } from './style'
import LoadingData from '../../components/loadingData'
import { get } from '../../api'
import { FlatList} from 'react-native'
import Turma from '../../components/Turma'

export default function Home({ onSelectTurma }) {
  const { data: turmas } = get('/turmas')
  
  return (
    <LoadingData loading={turmas}>
        <Title>Escolha uma turma</Title>
        <FlatList data={turmas} renderItem={({ item }) => <Turma id={item._id} nome={item.nome} onClick={onSelectTurma}/>} keyExtractor={item => item._id}/>
    </LoadingData>
  )
}