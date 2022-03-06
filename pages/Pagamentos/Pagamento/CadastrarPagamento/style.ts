import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    width: 98%;
    padding: 2%;
    align-self: center;
    border-radius: ${RFPercentage(2.7)}px;
    background-color: ${props => props.theme.primary};
`

export const Title = styled.Text`
    margin-top: 4%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(2.9)}px;
    color: ${props => props.theme.color};
    margin-bottom: 50%;
` 