import React from 'react'
import { View, Image, TouchableOpacity, FlatList } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import { Title } from './style'
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
        <FlatList data={alunos} ListHeaderComponent={() => {
          return (
            <>
              <View style={{flexDirection: 'row', marginTop: '13%'}}>
                <TouchableOpacity style={{marginLeft: '2%', alignSelf: 'flex-start', marginTop: '6%'}} onPress={() => navigation.goBack()}>
                  <Svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#00AFEF">
                    <Path d="M0 0h24v24H0V0z" fill="none"/>
                    <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                  </Svg>
                </TouchableOpacity>
                <View style={{flex: 1, alignItems: 'center', marginRight: '5%'}}>
                  <Image style={{aspectRatio: 2.6186961870, width: '90%', height: 'auto'}} source={require('../../assets/logo-josival-penha.png')}/>
                </View>
              </View>
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