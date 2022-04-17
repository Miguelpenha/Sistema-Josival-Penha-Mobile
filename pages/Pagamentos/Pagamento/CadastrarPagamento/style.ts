import styled, { css } from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    width: 98%;
    padding: 2%;
    padding-top: 4%;
    padding-bottom: 8%;
    align-self: center;
    flex-direction: column;
    border-radius: ${RFPercentage(2.7)}px;
    background-color: ${props => props.theme.primary};
`

export const Row1 = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`

export const Campo = styled.View`
    width: 40%;
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

export const ContainerSwitch = styled.View`
    margin-top: 3%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export const TextSwitchPago = styled.Text`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.color};
`

export const SwitchPago = styled.Switch`
    margin-left: 5%;
`

export const Button = styled.TouchableOpacity`
    width: 35%;
    padding: 2%;
    margin-top: 4%;
    align-self: center;
    align-items: center;
    border-radius: ${RFPercentage(2.9)}px;
    background-color: ${props => props.theme.receita};
`

export const TextButton = styled.Text`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.color};
`