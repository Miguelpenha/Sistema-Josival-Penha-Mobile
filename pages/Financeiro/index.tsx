import React, { FC, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Isaldo } from '../../types'
import { get } from '../../api'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { DateTime } from 'luxon'
import { useTheme } from 'styled-components'
import { ContainerPd, HeaderBack, ContainerSelect, ContainerIconSelectLeft, IconSelect, ValueSelect, ContainerIconSelectRight, ContainerBalance, TitleBalance, Balance, BalanceText, ContainerReceitaOrDespesaGeral, Row2ReceitaOrDespesa, ContainerReceitaOrDespesa, ContainerIconReceita, IconReceita, ContainerIconDespesa, IconDespesa, TitleReceitaOrDespesa, ValueReceita, ValueDespesa } from './style'
import LoadingData from '../../components/loadingData'
import { View } from 'react-native'
import mesesNumber from '../../utils/mesesNumber'
import meses from '../../utils/meses'
import SkeletonContent from 'react-native-skeleton-content'
import { RFPercentage } from 'react-native-responsive-fontsize'

interface Iprops {
    navigation: NativeStackScreenProps<Inavigation, 'Financeiro'>['navigation']
}

const Financeiro: FC<Iprops> = ({ navigation }) => {
    const { data: turmas } = get('/turmas')
    const [month, setMonth] = useState(DateTime.now().toLocaleString().split('/')[1])
    const { data: saldo, mutate: mutateSaldo } = get<Isaldo>('/financeiro/saldo', {
        params: {
            month: month
        }
    })
    const theme = useTheme()

    useEffect(() => {
        mutateSaldo().then()
    }, [month])

    return (
        <ContainerPd>
            <LoadingData loading={turmas}>
                <HeaderBack
                    title="Financeiro"
                    onClick={() => navigation.goBack()}
                />
                <View>
                    <ContainerSelect>
                        <ContainerIconSelectLeft
                            disabled={month != '01' ? false : true}
                            onPress={() => month != '01' && setMonth(mesesNumber[Number(month)-2])}
                        >
                            <IconSelect name="chevron-left" size={30}/>
                        </ContainerIconSelectLeft>
                        <ValueSelect>{meses[Number(month)-1]}</ValueSelect>
                        <ContainerIconSelectRight
                            disabled={month != '12' ? false : true}
                            onPress={() => month != '12' && setMonth(mesesNumber[Number(month)])}
                        >
                            <IconSelect name="chevron-right" size={30}/>
                        </ContainerIconSelectRight>
                    </ContainerSelect>
                    <ContainerBalance>
                        <TitleBalance>Balanço</TitleBalance>
                        <Balance>
                            <SkeletonContent
                                isLoading={month && saldo ? false : true}
                                containerStyle={{}}
                                layout={[
                                    { key: 'saldo', width: '80%' , height: RFPercentage(7.25), alignSelf: 'center' }
                                ]}
                                boneColor={theme.secondary}
                                highlightColor={theme.backgroundColor}
                                animationDirection="diagonalTopRight"
                                animationType="pulse"
                            >
                                <BalanceText>{saldo && saldo.saldo}</BalanceText>
                            </SkeletonContent>
                            <ContainerReceitaOrDespesaGeral>
                                <ContainerReceitaOrDespesa>
                                    <ContainerIconReceita>
                                        <IconReceita name="arrow-upward" size={20}/>
                                    </ContainerIconReceita>
                                    <Row2ReceitaOrDespesa>
                                        <TitleReceitaOrDespesa>Receita</TitleReceitaOrDespesa>
                                        <SkeletonContent
                                            isLoading={month && saldo ? false : true}
                                            containerStyle={{}}
                                            layout={[
                                                { key: 'saldo', width: '220%' , height: RFPercentage(3.4) }
                                            ]}
                                            boneColor={theme.secondary}
                                            highlightColor={theme.backgroundColor}
                                            animationDirection="diagonalTopRight"
                                            animationType="pulse"
                                        >
                                            <ValueReceita>{saldo && saldo.receitas}</ValueReceita>
                                        </SkeletonContent>
                                    </Row2ReceitaOrDespesa>
                                </ContainerReceitaOrDespesa>
                                <ContainerReceitaOrDespesa>
                                    <ContainerIconDespesa>
                                        <IconDespesa name="arrow-downward" size={20}/>
                                    </ContainerIconDespesa>
                                    <Row2ReceitaOrDespesa>
                                        <TitleReceitaOrDespesa>Despesa</TitleReceitaOrDespesa>
                                        <SkeletonContent
                                            isLoading={month && saldo ? false : true}
                                            containerStyle={{}}
                                            layout={[
                                                { key: 'saldo', width: '190%' , height: RFPercentage(3.4) }
                                            ]}
                                            boneColor={theme.secondary}
                                            highlightColor={theme.backgroundColor}
                                            animationDirection="diagonalTopRight"
                                            animationType="pulse"
                                        >
                                            <ValueDespesa>{saldo && saldo.despesas}</ValueDespesa>
                                        </SkeletonContent> 
                                    </Row2ReceitaOrDespesa>
                                </ContainerReceitaOrDespesa>
                            </ContainerReceitaOrDespesaGeral>
                        </Balance>
                    </ContainerBalance>
                </View>
            </LoadingData>
        </ContainerPd>
    )
}

export default Financeiro