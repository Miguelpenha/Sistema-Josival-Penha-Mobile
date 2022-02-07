import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import ContainerPd from '../../components/ContainerPd'
import LoadingData from '../../components/loadingData'
import { View, Text, ScrollView } from 'react-native'
import HeaderBack from '../../components/HeaderBack'
import { Button, TextButton } from './style'

type Iprops = NativeStackScreenProps<Inavigation, 'Pagamentos'>

export default function Pagamentos({ route, navigation }: Iprops) {
    const { data: turmas } = get('/turmas')
    const { aluno } = route.params
    
    return (
        <ContainerPd>
            <LoadingData loading={turmas}>
                <ScrollView>
                    <View>
                        <HeaderBack onClick={() => navigation.goBack()}/>
                    </View>
                    <Text style={{color: '#ffffff', fontSize: 50, marginTop: '20%', alignSelf: 'center'}}>Pagamentos</Text>
                    <Text style={{color: '#ffffff', fontSize: 25, alignSelf: 'center', marginTop: '5%', marginBottom: '5%'}}>{aluno.nome}</Text>
                    <Button>
                        <TextButton>Selecionar mês</TextButton>
                    </Button>
                    <Button>
                        <TextButton>Janeiro</TextButton>
                    </Button>
                    <Button>
                        <TextButton>Fevereiro</TextButton>
                    </Button>
                    <Button>
                        <TextButton>Março</TextButton>
                    </Button>
                    <Button>
                        <TextButton>Abril</TextButton>
                    </Button>
                    <Button>
                        <TextButton>Maio</TextButton>
                    </Button>
                    <Button>
                        <TextButton>Junho</TextButton>
                    </Button>
                    <Button>
                        <TextButton>Julho</TextButton>
                    </Button>
                    <Button>
                        <TextButton>Agosto</TextButton>
                    </Button>
                    <Button>
                        <TextButton>Setembro</TextButton>
                    </Button>
                    <Button>
                        <TextButton>Outubro</TextButton>
                    </Button>
                    <Button>
                        <TextButton>Novembro</TextButton>
                    </Button>
                    <Button>
                        <TextButton>Dezembro</TextButton>
                    </Button>
                </ScrollView>
            </LoadingData>
        </ContainerPd>
    )
}