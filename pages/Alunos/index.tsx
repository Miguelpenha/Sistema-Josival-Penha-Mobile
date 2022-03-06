import React, { FC, useState, memo } from 'react'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Ialuno } from '../../types'
import ListAlunos from './ListAlunos'

type NativeStackScreenPropsNavigationRoute = NativeStackScreenProps<Inavigation, 'Alunos'>

interface Iprops {
  navigation: NativeStackScreenPropsNavigationRoute['navigation']
  route: NativeStackScreenPropsNavigationRoute['route']
}

const Alunos: FC<Iprops> = ({ route, navigation }) => {
  const { url, next, title, financeiro } = route.params
  const { data: alunos }: { data: Ialuno[] } = get(url)
  const [filter, setFilter] = useState('')
  const [atrasados, setAtrasados] = useState(false)
  
  return (
    <ContainerPd>
      <LoadingData loading={alunos}>
        <ListAlunos alunos={alunos} atrasados={atrasados} filter={filter} financeiro={financeiro} navigation={navigation} next={next} setAtrasados={setAtrasados} setFilter={setFilter} title={title}/>
      </LoadingData>
    </ContainerPd>
  )
}

export default memo(Alunos)