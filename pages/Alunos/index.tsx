import React from 'react'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { FlatList, View } from 'react-native'
import HeaderBack from '../../components/HeaderBack'
import { Title } from './style'
import Aluno from '../../components/Aluno'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'

type Iprops = NativeStackScreenProps<Inavigation, 'Alunos'>

export default function Alunos({ route, navigation }: Iprops) {
  const { url, next } = route.params
  const { data: alunos } = get(url)
  
  return (
    <ContainerPd>
      <LoadingData loading={alunos}> 
        <FlatList 
          data={alunos}
          ListHeaderComponent={() => (
            <View>
              <HeaderBack onClick={() => navigation.goBack()}/>
              <Title>Escolha um aluno</Title>
            </View>
          )} 
          renderItem={({ item: aluno }) => (
            <Aluno
              aluno={aluno}
              onClick={aluno => {
                if (next === 'camera:aluno') {
                  navigation.navigate('Camera', { aluno: aluno.id })
                } else if (next === 'pagamentos:aluno') {
                  navigation.navigate('Pagamentos', { aluno })
                }
              }}
              onClickFoto={foto => navigation.navigate('Foto', { foto })}
            />
          )} 
          keyExtractor={item => item._id}
        />
      </LoadingData>
    </ContainerPd>
  )
}