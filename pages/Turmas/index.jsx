import React from 'react'
import { View, Image, FlatList } from 'react-native'
import { Check, TextCheck, Title } from './style'
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
        <FlatList data={turmas} ListHeaderComponent={() => {
          return (
            <View style={{flexDirection: 'column', alignItems: 'center', marginTop: '10%'}}>
              <Image style={{aspectRatio: 2.6186961870, width: '75%', height: 'auto'}} source={require('../../assets/logo-josival-penha.png')}/>
              {success && (
                <>
                  <Check source={require('../../animations/check.json')} autoPlay loop={false}/>
                  <TextCheck>Foto adicionada com sucesso</TextCheck>
                </>
              )}
              <Title>Escolha uma turma</Title>
            </View>
          )
        }} renderItem={({ item }) => {
          if (item.alunos >= 1) {
            return (
              <Turma id={item._id} nome={item.nome} onClick={turma => navigation.navigate('Alunos', {
                turma
              })}/>
            )
          } else {
            return null
          }
        }} keyExtractor={item => item._id}/>
      </LoadingData>
    </ContainerPd>
  )
}