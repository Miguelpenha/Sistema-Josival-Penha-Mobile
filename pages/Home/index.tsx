import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { Header, Logo, ContainerSettings, Settings, Title, Button, TextButton } from './style'

type iveriGeral = {
  (): Promise<void>
}

interface Iprops {
  navigation: NativeStackScreenProps<Inavigation, 'Alunos'>['navigation']
  veriGeral: iveriGeral
  find: boolean
}

export default function Home({ navigation, veriGeral, find }: Iprops) {
  const { data: turmas } = get('/turmas')

  veriGeral().then()
  
  return (
    <ContainerPd>
      <LoadingData loading={turmas}>
        <Header>
          <ContainerSettings onPress={() => navigation.navigate('Settings')}>
            <Settings name="settings" size={40}/>
          </ContainerSettings>
          <Logo/>
        </Header>
        <Title>Selecione uma opção</Title>
        <Button 
          onPress={() => find ? navigation.navigate('Alunos', {
            next: 'camera:aluno',
            url: '/alunos'
          }) : navigation.navigate('Turmas', {
            success: false
          })}
        >
          <TextButton>Adicionar foto a um aluno</TextButton>
        </Button>
        <Button onPress={() => navigation.navigate('Alunos', {
          next: 'pagamentos:aluno',
          url: '/alunos'
        })}>
          <TextButton>Adicionar pagamento</TextButton>
        </Button>
      </LoadingData>
    </ContainerPd>
  )
}