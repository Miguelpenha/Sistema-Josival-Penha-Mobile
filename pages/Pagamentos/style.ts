import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const ListPagamentos = styled.ScrollView`
    
`

export const ContainerPagamentos = styled.View`
    padding-top: 2.5%;
    padding-bottom: 38%;
`

export const ContainerDate = styled.View`
    padding-bottom: 40%;
`

export const ButtonCalendar = styled.TouchableOpacity`
    width: 40%;
    padding: 4%;
    margin-top: 5%;
    align-self: center;
    border-radius: ${RFPercentage(4)}px;
    background-color: ${props => props.theme.primary};
`

export const TextButtonCalendar = styled.Text`
    text-align: center;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.color};
`

export const ContainerMensalidade = styled.View`
    padding-bottom: 100%;
`

export const TitleMensalidade = styled.Text`
    margin-top: 10%;
    font-weight: bold;
    text-align: center;
    font-size: ${RFPercentage(3.6)}px;
    color: ${props => props.theme.color};
`

export const InputMensalidade = styled.TextInput`
    width: 50%;
    margin-top: 10%;
    align-self: center;
    padding: 2% 2% 2% 2%;
    font-size: ${RFPercentage(3.6)}px;
    color: ${props => props.theme.color};
    border-radius: ${RFPercentage(1.8)}px;
    background-color: ${props => props.theme.primary};
`

export const ButtonSubmitMensalidade = styled.TouchableOpacity`
    width: 35%;
    padding: 2%;
    margin-top: 8%;
    align-self: center;
    align-items: center;
    border-radius: ${RFPercentage(2.9)}px;
    background-color: ${props => props.theme.check};
`

export const TextButtonSubmitMensalidade = styled.Text`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.color};
`