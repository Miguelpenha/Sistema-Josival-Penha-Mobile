import React, { FC, useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Isaldo } from '../../types'
import { get } from '../../api'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { DateTime } from 'luxon'
import { useTheme } from 'styled-components'
import api from '../../base'
import {
    ContainerPd,
    HeaderBack,
    ContainerSelect,
    ContainerIconSelect,
    IconSelect,
    ValueSelect,
    ContainerBalance,
    Balance,
    HeaderBalance,
    TitleBalance,
    ContainerPercentageBalance,
    IconPercentageBalance,
    PercentageBalance,
    BalanceText,
    ContainerReceitaOrDespesaGeral,
    Row2ReceitaOrDespesa,
    ContainerReceitaOrDespesa,
    ContainerIconReceitaOrDespesa,
    IconReceitaOrDespesa,
    TitleReceitaOrDespesa,
    ValueReceitaOrDespesa
} from './style'
import LoadingData from '../../components/loadingData'
import { ScrollView } from 'react-native'
import mesesNumber from '../../utils/mesesNumber'
import meses from '../../utils/meses'
import SkeletonContent from 'react-native-skeleton-content'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { VictoryPie, VictoryTheme } from 'victory-native'

interface Iprops {
    navigation: NativeStackScreenProps<Inavigation, 'Financeiro'>['navigation']
}

const Financeiro: FC<Iprops> = ({ navigation }) => {
    const [month, setMonth] = useState(DateTime.now().toLocaleString().split('/')[1])
    const { data: saldo, mutate: mutateSaldo } = get<Isaldo>('/financeiro/saldo', {
        params: {
            month: month
        }
    })
    const [saldoOld, setSaldoOld] = useState<Isaldo>(undefined)
    const theme = useTheme()

    useEffect(() => {
        async function getSaldoOld() {
            if (mesesNumber[Number(month)-2]) {
                const { data } = await api.get<Isaldo>('/financeiro/saldo', {
                    params: {
                        month: mesesNumber[Number(month)-2]
                    }
                })
                
                setSaldoOld(data)
            } else {
                setSaldoOld(null)
            }
        }
        
        getSaldoOld().then()
        mutateSaldo().then()
    }, [month])

    function veriPercentage(): boolean {
        if (saldo && saldoOld) {
            if (saldo.saldoBruto >= saldoOld.saldoBruto) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    }

    function veriPercentageNumber(): number {
        if (saldo && saldoOld) {
            return (saldo.saldoBruto-saldoOld.saldoBruto)/10000
        } else {
            return 0
        }
    }

    return (
        <ContainerPd>
            <LoadingData loading={saldo} onClick={() => navigation.goBack()}>
                <ScrollView>
                    <HeaderBack
                        title="Financeiro"
                        onClick={() => navigation.goBack()}
                    />
                    <ContainerSelect>
                        <ContainerIconSelect
                            rightOrLeft
                            disabled={month != '01' ? false : true}
                            onPress={() => month != '01' && setMonth(mesesNumber[Number(month)-2])}
                        >
                            <IconSelect name="chevron-left" size={30}/>
                        </ContainerIconSelect>
                        <ValueSelect>{meses[Number(month)-1]}</ValueSelect>
                        <ContainerIconSelect
                            disabled={month != '12' ? false : true}
                            onPress={() => month != '12' && setMonth(mesesNumber[Number(month)])}
                        >
                            <IconSelect name="chevron-right" size={30}/>
                        </ContainerIconSelect>
                    </ContainerSelect>
                    <ContainerBalance>
                        <Balance>
                            <HeaderBalance>
                                <TitleBalance>Balan??o</TitleBalance>
                                <SkeletonContent
                                    isLoading={typeof saldoOld !== 'undefined' ? false : true}
                                    layout={[
                                        { key: 'saldo', width: '40%' , height: RFPercentage(4), alignSelf: 'flex-end', marginRight: '6%' }
                                    ]}
                                    boneColor={theme.secondary}
                                    highlightColor={theme.backgroundColor}
                                    animationDirection="diagonalTopRight"
                                    animationType="pulse"
                                >
                                    <ContainerPercentageBalance>
                                        <IconPercentageBalance
                                            size={20}
                                            receita={typeof saldoOld !== 'undefined' && veriPercentage()}
                                            name={`arrow-${typeof saldoOld !== 'undefined' && veriPercentage() ? 'upward' : 'downward'}`}
                                        />
                                        <PercentageBalance receita={typeof saldoOld !== 'undefined' && veriPercentage()}>{typeof saldoOld !== 'undefined' && veriPercentageNumber()}%</PercentageBalance>
                                    </ContainerPercentageBalance>
                                </SkeletonContent>
                            </HeaderBalance>
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
                                    <ContainerIconReceitaOrDespesa receita>
                                        <IconReceitaOrDespesa receita name="arrow-upward" size={20}/>
                                    </ContainerIconReceitaOrDespesa>
                                    <Row2ReceitaOrDespesa>
                                        <TitleReceitaOrDespesa>Receita</TitleReceitaOrDespesa>
                                        <SkeletonContent
                                            isLoading={month && saldo ? false : true}
                                            containerStyle={{}}
                                            layout={[
                                                { key: 'saldo', width: '220%' , height: RFPercentage(3.6), marginBottom: '20%' }
                                            ]}
                                            boneColor={theme.secondary}
                                            highlightColor={theme.backgroundColor}
                                            animationDirection="diagonalTopRight"
                                            animationType="pulse"
                                        >
                                            <ValueReceitaOrDespesa receita>{saldo && saldo.receitas}</ValueReceitaOrDespesa>
                                        </SkeletonContent>
                                    </Row2ReceitaOrDespesa>
                                </ContainerReceitaOrDespesa>
                                <ContainerReceitaOrDespesa>
                                    <ContainerIconReceitaOrDespesa>
                                        <IconReceitaOrDespesa name="arrow-downward" size={20}/>
                                    </ContainerIconReceitaOrDespesa>
                                    <Row2ReceitaOrDespesa>
                                        <TitleReceitaOrDespesa>Despesa</TitleReceitaOrDespesa>
                                        <SkeletonContent
                                            isLoading={month && saldo ? false : true}
                                            containerStyle={{}}
                                            layout={[
                                                { key: 'saldo', width: '190%' , height: RFPercentage(3.4), marginBottom: '20%' }
                                            ]}
                                            boneColor={theme.secondary}
                                            highlightColor={theme.backgroundColor}
                                            animationDirection="diagonalTopRight"
                                            animationType="pulse"
                                        >
                                            <ValueReceitaOrDespesa>{saldo && saldo.despesas}</ValueReceitaOrDespesa>
                                        </SkeletonContent> 
                                    </Row2ReceitaOrDespesa>
                                </ContainerReceitaOrDespesa>
                            </ContainerReceitaOrDespesaGeral>
                        </Balance>
                    </ContainerBalance>
                    <SkeletonContent
                        isLoading={month && saldo ? false : true}
                        containerStyle={{}}
                        layout={[{
                            key: 'saldo',
                            width: '68%',
                            height: RFPercentage(35),
                            marginTop: '16%',
                            borderRadius: RFPercentage(25),
                            marginRight: 'auto',
                            marginLeft: 'auto'
                        }]}
                        boneColor={theme.backgroundColor}
                        highlightColor={theme.secondary}
                        animationDirection="diagonalTopRight"
                        animationType="pulse"
                    >
                        {saldo && (
                            <VictoryPie
                                innerRadius={RFPercentage(9)}
                                theme={VictoryTheme.material}
                                padding={{right: 65, left: 65, top: -60}}
                                animate={{
                                    onLoad: { duration: 1500 },
                                    duration: 1500,
                                    easing: 'circle'
                                }}
                                data={[
                                    { x: 'Receitas', y: saldo.receitasBrutas, color: theme.receita },
                                    { x: 'Despesas', y: saldo.despesasBrutas, color: theme.despesa }
                                ]}
                                style={{
                                    data: {
                                        fill: ({ datum }) => datum.color,
                                        stroke: theme.secondary,
                                        strokeWidth: 4
                                    },
                                    labels: {
                                        fill: ({ datum }) => datum.color,
                                        padding: RFPercentage(1.6),
                                        fontSize: RFPercentage(2.5)
                                    }
                                }}
                            />
                        )}
                    </SkeletonContent>
                </ScrollView>
            </LoadingData>
        </ContainerPd>
    )
}

export default Financeiro