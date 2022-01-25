import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { Header, ContainerSettings, Settings, Logo, Title, Button, TextButton } from './style'

type Iprops = NativeStackScreenProps<Inavigation, 'Alunos'>

export default function Home({ navigation }: Iprops) {
  const { data: turmas } = get('/turmas')
  
  return (
    <ContainerPd>
      <LoadingData loading={turmas}>
        <Header>
          <ContainerSettings onPress={() => navigation.navigate('Settings')}>
            <Settings name="settings" size={35}/>
          </ContainerSettings>
          <Logo/>
        </Header>
        <Title>Selecione uma opção</Title>
        <Button onPress={() => navigation.navigate('Turmas')}>
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