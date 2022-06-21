import React, { useState, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { Header, Logo, ContainerSettings, Settings, NameUser, Message, Options } from './style'
import Option from './Option'
import { Ioption } from './type'
import { ListRenderItemInfo } from 'react-native'
import options from './options'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { DateTime, HourNumbers } from 'luxon'

type IveriGeral = {
  (): Promise<void>
}

interface Iprops {
  navigation: NativeStackScreenProps<Inavigation, 'Alunos'>['navigation']
  veriGeral: IveriGeral
  find: boolean
}

export default function Home({ navigation, veriGeral, find }: Iprops) {
  const { data: turmas } = get('/turma')
  const [hour, setHour] = useState(DateTime.now().hour)

  useEffect(() => {
    setInterval(() => hour != DateTime.now().hour && setHour(DateTime.now().hour), 500)
    veriGeral().then()
  })

  function veriHour(hour: HourNumbers) {
    if (hour >= 5 && hour < 12) {
      return 'Bom dia'
    } else if (hour >= 12 && hour < 18) {
      return 'Boa tarde'
    } else {
      return 'Boa noite'
    }
  }

  return (
    <ContainerPd>
      <LoadingData loading={turmas} buttonBack={false}>
        <Header>
          <ContainerSettings onPress={() => navigation.navigate('Settings')}>
            <Settings name="settings" size={40}/>
          </ContainerSettings>
          <Logo/>
        </Header>
        <NameUser>Olá, {process.env.NAME_USER.split(' ')[0].trim()+' '}&#x1F44B;</NameUser>
        <Message>{veriHour(hour)+' '}&#x1F604;</Message>
        <Options
          horizontal
          data={options(navigation, find)}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }: ListRenderItemInfo<Ioption>) => (
            <Option title={item.title} icon={item.icon} onClick={item.onClick}/>
          )}
        />
      </LoadingData>
    </ContainerPd>
  )
}