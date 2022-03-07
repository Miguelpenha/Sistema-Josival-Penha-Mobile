import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    width: 98%;
    padding: 2%;
    padding-top: 4%;
    padding-bottom: 8%;
    align-self: center;
    flex-direction: row;
    justify-content: space-evenly;
    border-radius: ${RFPercentage(2.7)}px;
    background-color: ${props => props.theme.primary};
`

export const Campo = styled.View`
    width: 35%;
`

export const Label = styled.Text`
    margin-bottom: 0.5%;
    font-size: ${RFPercentage(2.1)}px;
    color: ${props => props.theme.color};
`

const styleContainerInput = css`
    border-radius: ${RFPercentage(0.9)}px;
    border: ${RFPercentage(0.2)}px solid ${props => props.theme.color};
`

export const ContainerInputDate = styled.TouchableOpacity`
    ${styleContainerInput}
`

const styleInput = css`
    align-self: center;
    font-size: ${RFPercentage(2.9)}px;
    color: ${props => props.theme.color};
`

export const InputDate = styled.Text`
    padding: 3.2%;

    ${styleInput}
`

export const ContainerInputValor = styled.View`
    ${styleContainerInput}
`

export const InputValor = styled.TextInput`
    ${styleInput}
`

export const Button = styled.TouchableOpacity`
    width: 25%;
    height: 65%;
    padding: 2%;
    margin-top: 5%;
    align-self: center;
    align-items: center;
    border-radius: ${RFPercentage(2.5)}px;
    background-color: ${props => props.theme.check};
`

export const TextButton = styled.Text`
    color: ${props => props.theme.color};
`