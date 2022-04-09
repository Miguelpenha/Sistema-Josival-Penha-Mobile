import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const ContainerSwitch = styled.View`
    margin-top: 5%;
    flex-direction: row;
    align-content: center;
    justify-content: center;
`

export const TextSwitch = styled.Text`
    font-size: 30px;
    color: ${props => props.theme.primary};
`

export const Switch = styled.Switch`
    margin-left: 2%;
`

export const Version = styled.Text`
    margin-top: auto;
    align-self: center;
    margin-bottom: 10%;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.secondaryColor};
`