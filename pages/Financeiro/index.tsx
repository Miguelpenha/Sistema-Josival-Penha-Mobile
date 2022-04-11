import React, { FC, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { get } from '../../api'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { DateTime } from 'luxon'
import { ContainerPd, HeaderBack, Container, ContainerSelect, ContainerIconSelectLeft, IconSelect, ValueSelect, ContainerIconSelectRight } from './style'
import LoadingData from '../../components/loadingData'
import meses from '../../utils/meses'
import mesesNumber from '../../utils/mesesNumber'

interface Iprops {
    navigation: NativeStackScreenProps<Inavigation, 'Financeiro'>['navigation']
}

const Financeiro: FC<Iprops> = ({ navigation }) => {
    const { data: turmas } = get('/turmas')
    const [month, setMonth] = useState(DateTime.now().toLocaleString().split('/')[1])
    
    return (
        <ContainerPd>
            <LoadingData loading={turmas}>
                <HeaderBack
                    title="Financeiro"
                    onClick={() => navigation.goBack()}
                />
                <Container>
                    <ContainerSelect>
                        <ContainerIconSelectLeft onPress={() => month != '01' && setMonth(mesesNumber[Number(month)-2])}>
                            <IconSelect name="chevron-left" size={30} max={month === '01' ? true : false}/>
                        </ContainerIconSelectLeft>
                        <ValueSelect>{meses[Number(month)-1]}</ValueSelect>
                        <ContainerIconSelectRight onPress={() => month != '12' && setMonth(mesesNumber[Number(month)])}>
                            <IconSelect name="chevron-right" size={30} max={month === '12' ? true : false}/>
                        </ContainerIconSelectRight>
                    </ContainerSelect>
                </Container>
            </LoadingData>
        </ContainerPd>
    )
}

export default Financeiro