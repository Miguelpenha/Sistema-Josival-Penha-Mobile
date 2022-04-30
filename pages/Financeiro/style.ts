import styled, { css } from 'styled-components/native'
import ContainerPdNotStyled from '../../components/ContainerPd'
import HeaderBackNotStyled from '../../components/HeaderBack'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const ContainerPd = styled(ContainerPdNotStyled)`
    background-color: ${props => props.theme.secondary};
`

export const HeaderBack = styled(HeaderBackNotStyled)`
    margin-bottom: 0%;
    background-color: ${props => props.theme.backgroundColor};
`

export const ContainerSelect = styled.View`
    padding-top: 5%;
    padding-bottom: 8%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: ${RFPercentage(2.7)}px;
    border-bottom-right-radius: ${RFPercentage(2.7)}px;
    background-color: ${props => props.theme.backgroundColor};
`

interface IContainerIconSelect {
    rightOrLeft?: boolean
}

export const ContainerIconSelect = styled.TouchableOpacity<IContainerIconSelect>`
    border-radius: ${RFPercentage(8.9)}px;

    ${props => props.rightOrLeft ? css`
        margin-left: 1%;
    ` : css`
        margin-right: 1%;
    `}
    ${props => props.disabled && css`
        opacity: 0.3;
    `}
`

export const IconSelect = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const ValueSelect = styled.Text`
    width: 35%;
    text-align: center;
    font-size: ${RFPercentage(3.2)}px;
    border-radius: ${RFPercentage(2.7)}px;
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.primary};
`

export const ContainerBalance = styled.View`
    height: 26%;
    margin-top: 12%;
`

export const Balance = styled.View`
    padding-top: 5%;
    border-radius: ${RFPercentage(2.7)}px;
    background-color: ${props => props.theme.backgroundColor};
`

export const HeaderBalance = styled.View`
    flex-direction: row;
`

export const TitleBalance = styled.Text`
    margin-left: 13%;
    margin-bottom: 4%;
    font-size: ${RFPercentage(2.7)}px;
    color: ${props => props.theme.secondaryColor};
`

export const ContainerPercentageBalance = styled.View`
    margin-left: auto;
    padding-right: 8%;
    margin-bottom: 4%;
    flex-direction: row;
`

interface IIconPercentageBalance {
    receita?: boolean
}

export const IconPercentageBalance = styled(MaterialIcons)<IIconPercentageBalance>`
    color: ${props => props.receita ? props.theme.receita : props.theme.despesa};
`

interface IPercentageBalance {
    receita?: boolean
}

export const PercentageBalance = styled.Text<IPercentageBalance>`
    font-weight: bold;
    font-size: ${RFPercentage(2.3)}px;
    color: ${props => props.receita ? props.theme.receita : props.theme.despesa};
`

export const BalanceText = styled.Text`
    margin-left: 13%;
    font-weight: bold;
    font-size: ${RFPercentage(5.4)}px;
    color: ${props => props.theme.primary};
`

export const ContainerReceitaOrDespesaGeral = styled.View`
    margin-top: 5%;
    flex-direction: row;
    justify-content: space-evenly;
`

export const ContainerReceitaOrDespesa = styled.View`
    width: 40.5%;
    flex-direction: row;
`

export const Row2ReceitaOrDespesa = styled.View`
    align-self: center;
`

interface IContainerIcon {
    receita?: boolean
}

export const ContainerIconReceitaOrDespesa = styled.View<IContainerIcon>`
    width: 21%;
    height: 58%;
    margin-right: 5%;
    align-self: center;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.receita ? props.theme.receita : props.theme.despesa};
`

interface IIconReceitaOrDespesa {
    receita?: boolean
}

export const IconReceitaOrDespesa = styled(MaterialIcons)<IIconReceitaOrDespesa>`
    padding: 1.2%;
    color: ${props => props.receita ? props.theme.receita : props.theme.despesa};
`

export const TitleReceitaOrDespesa = styled.Text`
    font-size: ${RFPercentage(2.1)}px;
    color: ${props => props.theme.secondaryColor};
`

interface IValueReceitaOrDespesa {
    receita?: boolean
}

export const ValueReceitaOrDespesa = styled.Text<IValueReceitaOrDespesa>`
    font-weight: bold;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.receita ? props.theme.receita : props.theme.despesa};
`