import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Load = styled.ActivityIndicator`
    margin-top: 25%;
    align-self: center;
`

export const Texto = styled.Text`
    margin-top: 5%;
    align-self: center;
    font-size: ${RFPercentage(4.5)}px;
    color: ${props => props.theme.primary};
`