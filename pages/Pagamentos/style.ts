import { RFPercentage } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const ListPagamentos = styled.ScrollView`
    
`

export const ContainerPagamentos = styled.View`
    padding-top: 2.5%;
    padding-bottom: 2.5%;
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