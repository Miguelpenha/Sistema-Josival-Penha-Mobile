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

export const ContainerIconSelectLeft = styled.TouchableOpacity`
    margin-right: 1%;
    border-radius: ${RFPercentage(8.9)}px;

    ${props => props.disabled && css`
        opacity: 0.3;
    `}
`

export const ContainerIconSelectRight = styled.TouchableOpacity`
    margin-left: 1%;
    border-radius: ${RFPercentage(8.9)}px;

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
    margin-top: 15%;
`

export const TitleBalance = styled.Text`
    margin-left: 4%;
    margin-bottom: 1.5%;
    font-size: ${RFPercentage(2.7)}px;
    color: ${props => props.theme.secondaryColor};
`

export const Balance = styled.View`
    padding-top: 7%;
    padding-bottom: 2%;
    border-radius: ${RFPercentage(2.7)}px;
    background-color: ${props => props.theme.backgroundColor};
`

export const BalanceText = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(6.4)}px;
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

export const ContainerIconReceita = styled.View`
    width: 21%;
    height: 60%;
    margin-right: 5%;
    align-self: center;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.theme.receita};
`

export const IconReceita = styled(MaterialIcons)`
    padding: 1.2%;
    color: ${props => props.theme.receita};
`

export const ContainerIconDespesa = styled.View`
    width: 21%;
    height: 60%;
    margin-right: 5%;
    align-self: center;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    border: 2px solid ${props => props.theme.despesa};
`

export const IconDespesa = styled(MaterialIcons)`
    padding: 1%;
    color: ${props => props.theme.despesa};
`

export const TitleReceitaOrDespesa = styled.Text`
    font-size: ${RFPercentage(2.1)}px;
    color: ${props => props.theme.secondaryColor};
`

export const ValueReceita = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.receita};
`

export const ValueDespesa = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.despesa};
`