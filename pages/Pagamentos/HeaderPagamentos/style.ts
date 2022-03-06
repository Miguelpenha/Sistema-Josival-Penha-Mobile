import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    margin-top: 16%;
    padding-bottom: 2%;
    border-bottom-width: 2px;
    border-bottom-color: ${props => props.theme.secondaryColor};
`

export const ContainerTitles = styled.View`
    width: 85%;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
`

export const Mês = styled.Text`
    margin-left: -2%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.secondaryColor};
`

export const Status = styled.Text`
    margin-left: 5%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.secondaryColor};
`

export const Vencimento = styled.Text`
    margin-right: 7%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.secondaryColor};
`