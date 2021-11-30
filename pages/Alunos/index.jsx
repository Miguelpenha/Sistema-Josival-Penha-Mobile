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
        <AlunosFlatList data={alunos} ListHeaderComponent={() => {
          return (
            <>
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