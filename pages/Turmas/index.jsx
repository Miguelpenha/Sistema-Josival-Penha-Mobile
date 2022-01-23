import React, { useContext } from 'react'
import { get } from '../../api'
import { View, FlatList } from 'react-native'
import { Check, TextCheck, Header, Title } from './style'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import Turma from '../../components/Turma'
import { ThemeContext } from 'styled-components'
import AlunosFind from './AlunosFind/AlunosFind'
import HeaderBack from '../../components/HeaderBack'

export default function Turmas({ route, navigation, modeViewFind }) {
  const theme = useContext(ThemeContext)

  if (!modeViewFind) {
    const { success } = route.params
    const { data: turmas } = get('/turmas')
    
    function CheckVeri() {
      if (success) {
        return (
          <View>
            <Check colorFilters={[
                  {
                    keypath: 'Shape Layer 5',
                    color: theme.check
                  },
                  {
                    keypath: 'Shape Layer 2',
                    color: theme.color
                  },
                  {
                    keypath: 'Shape Layer 1',
                    color: theme.check
                  },
                  {
                    keypath: 'Comp 2',
                    color: theme.check
                  }
              ]} source={require('../../animations/check.json')} autoPlay loop={false}/>
            <TextCheck>Foto adicionada com sucesso</TextCheck>
          </View>
        )
      } else {
        return null
      }
    }

    return (
      <ContainerPd>
        <LoadingData loading={turmas}>
          <FlatList data={turmas} ListHeaderComponent={() => (
            <View>
              <HeaderBack onClick={() => navigation.goBack()}/>
              <CheckVeri/>
              <Title>Escolha uma turma</Title>
            </View>
          )} renderItem={({ item }) => {
            if (item.alunos >= 1) {
              return (
                <Turma 
                  id={item._id} 
                  nome={item.nome} 
                  onClick={turma => navigation.navigate('Alunos', {turma})}
                />
              )
            }
          }} keyExtractor={item => item._id}/>
        </LoadingData>
      </ContainerPd>
    )
  } else {
    return <AlunosFind navigation={navigation}/>
  }
}