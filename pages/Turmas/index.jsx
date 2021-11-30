import React from 'react'
import { Check, TextCheck, Title, Turmas as TurmasFlatList } from './style'
import LoadingData from '../../components/loadingData'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import Turma from '../../components/Turma'

export default function Turmas({ route, navigation }) {
  const { success } = route.params
  const { data: turmas } = get('/turmas')
  
  return (
    <ContainerPd>
      <LoadingData loading={turmas}>
        <TurmasFlatList data={turmas} ListHeaderComponent={() => {
          return (
            <>
              {success && (
                <>
                  <Check source={require('../../animations/check.json')} autoPlay loop={false}/>
                  <TextCheck>Foto adicionada com sucesso</TextCheck>
                </>
              )}
              <Title>Escolha uma turma</Title>
            </>
          )
        }} renderItem={({ item }) => <Turma id={item._id} nome={item.nome} onClick={turma => navigation.navigate('Alunos', {
          turma
        })}/>} keyExtractor={item => item._id}/>
      </LoadingData>
    </ContainerPd>
  )
}